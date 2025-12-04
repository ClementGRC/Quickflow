import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate, useParams } from '@remix-run/react'
import { Button, Card, Col, List, Row, Statistic, Typography } from 'antd'
import dayjs from 'dayjs'
const { Title, Text } = Typography

export default function HomePage() {
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { organization } = useUserContext()

  // Fetch recent workflow activities
  const { data: recentActivities } = Api.workflow.findMany.useQuery({
    where: { organizationId },
    orderBy: { updatedAt: 'desc' },
    take: 5,
    include: {
      assignee: true,
    },
  })

  // Fetch pending approvals
  const { data: pendingApprovals } = Api.workflow.findMany.useQuery({
    where: {
      organizationId,
      status: 'PENDING_APPROVAL',
    },
    include: {
      assignee: true,
    },
  })

  // Analytics data
  const { data: analyticsData } = Api.analyticsLocalMetric.findMany.useQuery({
    where: {
      key: {
        contains: 'workflow_',
      },
    },
  })

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-chart-line" style={{ marginRight: 8 }}></i>
            Tableau de bord des workflows
          </Title>
          <Text type="secondary">
            Contrôler les performances et les activités de votre organisation
          </Text>
        </div>

        {/* Analytics Overview */}
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={'Workflows totaux'}
                value={
                  analyticsData?.find(m => m.key === 'workflow_total')
                    ?.countPositive || 0
                }
                prefix={<i className="las la-project-diagram"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={'Workflows actifs'}
                value={
                  analyticsData?.find(m => m.key === 'workflow_active')
                    ?.countPositive || 0
                }
                prefix={<i className="las la-running"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={'Complété(s) ce mois'}
                value={
                  analyticsData?.find(m => m.key === 'workflow_completed_month')
                    ?.countPositive || 0
                }
                prefix={<i className="las la-check-circle"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title={'Validation(s) en attente'}
                value={pendingApprovals?.length || 0}
                prefix={<i className="las la-clock"></i>}
              />
            </Card>
          </Col>
        </Row>

        {/* Quick Actions */}
        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col span={24}>
            <Card
              title={
                <>
                  <i className="las la-bolt"></i> Actions rapides
                </>
              }
            >
              <Button
                type="primary"
                icon={<i className="las la-plus"></i>}
                onClick={() =>
                  navigate(`/organizations/${organizationId}/workflows/new`)
                }
                style={{ marginRight: 16 }}
              >
                Nouveau Workflow
              </Button>
              <Button
                icon={<i className="las la-list"></i>}
                onClick={() =>
                  navigate(`/organizations/${organizationId}/workflows`)
                }
              >
                Voir tout
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Recent Activities and Pending Approvals */}
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-history"></i> Activités récentes
                </>
              }
              style={{ height: '100%' }}
            >
              <List
                dataSource={recentActivities}
                renderItem={activity => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={<i className="las la-file-alt"></i>}
                      title={activity.name}
                      description={
                        <>
                          <Text type="secondary">
                            Updated {dayjs(activity.updatedAt).fromNow()} by{' '}
                            {activity.assignee?.name}
                          </Text>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <i className="las la-clock"></i> Validation(s) en attente
                </>
              }
              style={{ height: '100%' }}
            >
              <List
                dataSource={pendingApprovals}
                renderItem={approval => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() =>
                          navigate(
                            `/organizations/${organizationId}/workflows/${approval.id}`,
                          )
                        }
                      >
                        Review
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<i className="las la-file-signature"></i>}
                      title={approval.name}
                      description={
                        <>
                          <Text type="secondary">
                            Assigned to {approval.assignee?.name}
                          </Text>
                        </>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
