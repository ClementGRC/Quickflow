import { PageLayout } from '@/designSystem'
import { useNavigate, useParams } from '@remix-run/react'
import { Button, Card, Space, Typography } from 'antd'
const { Title, Text } = Typography

export default function WorkflowDetailsPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <div>
            <Title level={2}>
              <i
                                          className="las la-project-diagram"
                                          style={{ marginRight: 8 }}
                                        ></i>Détails</Title>
            <Text type="secondary">
              Gérer et surveiller les paramètres et les progrès de votre workflow</Text>
          </div>
          <Space>
            <Button
              type="primary"
              onClick={() => navigate(`/organizations/${organizationId}/home`)}
              icon={<i className="las la-arrow-left"></i>}
            >
              Retour à l'organisation</Button>
          </Space>
        </div>

        <Card>
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <Title level={3}>
              <i className="las la-tools" style={{ marginRight: 8 }}></i>Feature non disponible</Title>
            <Text>
              Ca arrive...</Text>
            <div style={{ marginTop: 24 }}>
              <Button
                type="primary"
                onClick={() => navigate(`/organizations/${organizationId}/home`)}
              >
                Retour</Button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  )
}
