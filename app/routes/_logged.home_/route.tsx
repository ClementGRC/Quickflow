import { Typography, Card, Space, Row, Col } from 'antd'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <Title level={1}>
            <i className="las la-rocket" style={{ marginRight: '12px' }}></i>Bienvenue sur votre tableau de bord</Title>
          <Paragraph style={{"fontSize":"18px"}}>
            Votre solution tout-en-un pour la gestion des procédures, workflows et de la collaboration en équipe
                                </Paragraph>
        </div>

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-project-diagram"
                  style={{ fontSize: '48px', color: '#1890ff' }}
                ></i>
                <Title level={3}>Workflows</Title>
                <Paragraph>
                  Créez et gérez des workflows personnalisés pour votre équipe.<div> Automatisez les processus et suivez les progrès en temps réel.
                                                  </div></Paragraph>
              </Space>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-tasks"
                  style={{ fontSize: '48px', color: '#52c41a' }}
                ></i>
                <Title level={3}>Tâches</Title>
                <Paragraph>
                  Organiser et hiérarchiser efficacement les tâches. Attribuer des responsabilités et suivre l'état d'avancement des travaux.
                                                  </Paragraph>
              </Space>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-robot"
                  style={{ fontSize: '48px', color: '#722ed1' }}
                ></i>
                <Title level={3}>Assistant IA</Title>
                <Paragraph>
                  Obtenez des suggestions intelligentes et automatisez les tâches courantes grâce à notre assistant alimenté par l'IA.
                                                                                    </Paragraph>
              </Space>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-chart-bar"
                  style={{ fontSize: '48px', color: '#fa8c16' }}
                ></i>
                <Title level={3}>Analytics</Title>
                <Paragraph>
                  Obtenez des informations sur les performances de votre équipe grâce à des analyses et des rapports détaillés.
                                                  </Paragraph>
              </Space>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-copy"
                  style={{ fontSize: '48px', color: '#eb2f96' }}
                ></i>
                <Title level={3}>Templates</Title>
                <Paragraph>
                  Gagnez du temps grâce à des modèles prédéfinis pour les workflows et les processus courants.
                                                  </Paragraph>
              </Space>
            </Card>
          </Col>

          <Col xs={24} sm={12} lg={8}>
            <Card>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%', textAlign: 'center' }}
              >
                <i
                  className="las la-users"
                  style={{ fontSize: '48px', color: '#13c2c2' }}
                ></i>
                <Title level={3}>Collaboration d'équipe</Title>
                <Paragraph>
                  Travaillez ensemble en toute transparence grâce aux outils de collaboration intégrés et aux mises à jour en temps réel.
                                                  </Paragraph>
              </Space>
            </Card>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Title level={2}>
            <i className="las la-flag" style={{ marginRight: '12px' }}></i>Commencer
                                </Title>
          <Paragraph style={{"fontSize":"16px"}}>
            Sélectionnez une organisation dans la barre latérale pour commencer à explorer ces fonctionnalités et optimiser votre workflow dès aujourd'hui !
                                </Paragraph>
        </div>
      </div>
    </PageLayout>
  )
}
