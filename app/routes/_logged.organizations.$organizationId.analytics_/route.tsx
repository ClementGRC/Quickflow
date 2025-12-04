import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import {
  Card,
  Col,
  Progress,
  Row,
  Space,
  Statistic,
  Table,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
const { Title, Text } = Typography

export default function AnalyticsPage() {
  const { organizationId } = useParams()
  const { organization } = useUserContext()

  // Fetch workflows with their tasks
  const { data: workflows, isLoading } = Api.workflow.findMany.useQuery({
    where: { organizationId },
    include: {
      tasks: true,
      assignees: {
        include: {
          user: true,
        },
      },
    },
  })

  // Calculate metrics
  const totalWorkflows = workflows?.length || 0
  const completedWorkflows =
    workflows?.filter(w => w.status === 'COMPLETED').length || 0
  const completionRate = totalWorkflows
    ? ((completedWorkflows / totalWorkflows) * 100).toFixed(1)
    : 0

  const averageTasksPerWorkflow =
    workflows?.reduce((acc, curr) => acc + (curr.tasks?.length || 0), 0) || 0
  const avgTasks = totalWorkflows
    ? (averageTasksPerWorkflow / totalWorkflows).toFixed(1)
    : 0

  // Prepare data for the workflow table
  const workflowTableData = workflows?.map(workflow => ({
    key: workflow.id,
    name: workflow.name,
    status: workflow.status,
    tasks: workflow.tasks?.length || 0,
    completedTasks:
      workflow.tasks?.filter(t => t.status === 'COMPLETED').length || 0,
    progress: (
      ((workflow.tasks?.filter(t => t.status === 'COMPLETED').length || 0) /
        (workflow.tasks?.length || 1)) *
      100
    ).toFixed(0),
    assignees: workflow.assignees?.length || 0,
    createdAt: dayjs(workflow.createdAt).format('YYYY-MM-DD'),
  }))

  const columns = [
    {
      title: 'Nom du Workflow',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Text style={{ color: status === 'COMPLETED' ? '#52c41a' : '#1890ff' }}>
          <i
            className={`las ${
              status === 'COMPLETED' ? 'la-check-circle' : 'la-clock'
            }`}
          ></i>{' '}
          {status}
        </Text>
      ),
    },
    {
      title: 'Progrès',
      key: 'progress',
      render: (record: any) => (
        <Progress percent={Number(record.progress)} size="small" />
      ),
    },
    {
      title: 'Tâches',
      dataIndex: 'tasks',
      key: 'tasks',
      render: (tasks: number, record: any) => (
        <Text>
          {record.completedTasks}/{tasks}
        </Text>
      ),
    },
    {
      title: 'Membres',
      dataIndex: 'assignees',
      key: 'assignees',
      render: (assignees: number) => (
        <Space>
          <i className="las la-users"></i>
          <Text>{assignees}</Text>
        </Space>
      ),
    },
    {
      title: 'Créé',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '24px' }}>
        <Title level={2}>
          <i className="las la-chart-line"></i> Workflow Analytics
        </Title>
        <Text type="secondary">
          Suivez et analyser les indicateurs de performances des workflows de{' '}
          {organization?.name}
        </Text>

        <Row gutter={[16, 16]} style={{ marginTop: '24px' }}>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Workflows totaux"
                value={totalWorkflows}
                prefix={<i className="las la-project-diagram"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Workflows complétés"
                value={completedWorkflows}
                prefix={<i className="las la-check-circle"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Taux d'achèvement"
                value={completionRate}
                suffix="%"
                prefix={<i className="las la-percentage"></i>}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <Card>
              <Statistic
                title="Tâches moyennes par workflows"
                value={avgTasks}
                prefix={<i className="las la-tasks"></i>}
              />
            </Card>
          </Col>
        </Row>

        <Card style={{ marginTop: '24px' }}>
          <Title level={4}>
            <i className="las la-list"></i> Aperçu des performances
          </Title>
          <Table
            dataSource={workflowTableData}
            columns={columns}
            loading={isLoading}
            pagination={{ pageSize: 10 }}
          />
        </Card>
      </div>
    </PageLayout>
  )
}
