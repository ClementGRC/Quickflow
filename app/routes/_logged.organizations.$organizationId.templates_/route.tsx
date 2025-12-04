import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate, useParams } from '@remix-run/react'
import {
  Button,
  Card,
  Col,
  Input,
  Modal,
  Row,
  Tag,
  Typography,
  message,
} from 'antd'
import { useState } from 'react'
const { Title, Text } = Typography

export default function TemplatesPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isCustomizeModalVisible, setIsCustomizeModalVisible] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null)

  // Fetch templates with their categories
  const { data: templates, isLoading } = Api.workflow.findMany.useQuery({
    where: {
      organizationId,
      isTemplate: true,
      name: searchTerm
        ? { contains: searchTerm, mode: 'insensitive' }
        : undefined,
      category: selectedCategory ? { equals: selectedCategory } : undefined,
    },
  })

  // Create new template mutation
  const { mutateAsync: createTemplate } = Api.workflow.create.useMutation()

  // Categories (you might want to fetch these from the backend in a real application)
  const categories = ['HR', 'Finance', 'Operations', 'Marketing', 'IT']

  const handleCustomizeTemplate = (template: any) => {
    setSelectedTemplate(template)
    setIsCustomizeModalVisible(true)
  }

  const handleSaveCustomTemplate = async () => {
    try {
      if (selectedTemplate) {
        await createTemplate({
          data: {
            name: `${selectedTemplate.name} (Custom)`,
            description: selectedTemplate.description,
            category: selectedTemplate.category,
            isTemplate: true,
            organizationId: organizationId!,
            userId: user?.id!,
          },
        })
        message.success('Template customized and saved successfully!')
        setIsCustomizeModalVisible(false)
      }
    } catch (error) {
      message.error('Failed to save custom template')
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-layer-group" style={{ marginRight: 8 }}></i>
            Workflow Templates
          </Title>
          <Text>
            Parcourez et personnalisez les modèles de workflows prédéfinis pour
            votre organisation
          </Text>
        </div>

        <div style={{ marginBottom: 24 }}>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Input
                prefix={<i className="las la-search"></i>}
                placeholder="Templates..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={12}>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {categories.map(category => (
                  <Tag
                    key={category}
                    color={selectedCategory === category ? 'blue' : 'default'}
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category,
                      )
                    }
                  >
                    {category}
                  </Tag>
                ))}
              </div>
            </Col>
          </Row>
        </div>

        {isLoading ? (
          <div>Loading templates...</div>
        ) : (
          <Row gutter={[16, 16]}>
            {templates?.map(template => (
              <Col xs={24} sm={12} lg={8} key={template.id}>
                <Card
                  title={
                    <span>
                      <i
                        className="las la-file-alt"
                        style={{ marginRight: 8 }}
                      ></i>
                      {template.name}
                    </span>
                  }
                  extra={<Tag color="blue">{template.category}</Tag>}
                  actions={[
                    <Button
                      key="customize"
                      type="link"
                      onClick={() => handleCustomizeTemplate(template)}
                    >
                      <i className="las la-edit"></i> Customize
                    </Button>,
                    <Button
                      key="share"
                      type="link"
                      onClick={() =>
                        message.info('Sharing functionality coming soon!')
                      }
                    >
                      <i className="las la-share"></i> Share
                    </Button>,
                  ]}
                >
                  <Text>{template.description}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        <Modal
          title="Customize Template"
          open={isCustomizeModalVisible}
          onOk={handleSaveCustomTemplate}
          onCancel={() => setIsCustomizeModalVisible(false)}
        >
          <p>Customize this template to fit your organization's needs.</p>
          {/* Add customization fields here */}
        </Modal>
      </div>
    </PageLayout>
  )
}
