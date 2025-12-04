import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate, useParams } from '@remix-run/react'
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Select,
  Space,
  Tag,
  Typography,
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text } = Typography
const { Search } = Input

export default function WorkflowsPage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [selectedStatus, setSelectedStatus] = useState<string>('')
  const [selectedDepartment, setSelectedDepartment] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Using organization roles instead of workflows
  const { data: organization, isLoading } = Api.organization.findFirst.useQuery(
    {
      where: { id: organizationId },
      include: { roles: true },
    },
  )

  // Create role mutation instead of workflow
  const { mutateAsync: createRole } = Api.organizationRole.create.useMutation()

  const handleDuplicate = async (role: any) => {
    try {
      const newRole = await createRole({
        data: {
          name: `${role.name} (Copy)`,
          organizationId,
          userId: role.userId,
        },
      })
      navigate(`/organizations/${organizationId}/roles/${newRole.id}`)
    } catch (error) {
      console.error('Error duplicating role:', error)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>
            <i className="las la-project-diagram" /> Rôles
          </Title>
          <Text type="secondary">
            Gérez et organisez efficacement les rôles de votre organisation.
            Créez de nouveaux rôles ou dupliquez des rôles existants.
          </Text>
        </div>

        <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Search
              placeholder="Chercher des rôles..."
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%' }}
            />
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              style={{ width: '100%' }}
              placeholder="Sélectionner une catégorie"
              onChange={setSelectedCategory}
              allowClear
            >
              <Select.Option value="owner">Owner</Select.Option>
              <Select.Option value="member">Member</Select.Option>
              <Select.Option value="admin">Admin</Select.Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Select
              style={{ width: '100%' }}
              placeholder="Sélectionner un statut"
              onChange={setSelectedStatus}
              allowClear
            >
              <Select.Option value="active">Actif</Select.Option>
              <Select.Option value="inactive">Inactif</Select.Option>
            </Select>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Space>
              <Button
                type="primary"
                onClick={() =>
                  navigate(`/organizations/${organizationId}/roles/new`)
                }
              >
                <i className="las la-plus" /> Nouveau rôle
              </Button>
            </Space>
          </Col>
        </Row>

        <div style={{ marginBottom: 16 }}>
          <Space>
            <Button
              type={viewMode === 'grid' ? 'primary' : 'default'}
              onClick={() => setViewMode('grid')}
              icon={<i className="las la-th-large" />}
            />
            <Button
              type={viewMode === 'list' ? 'primary' : 'default'}
              onClick={() => setViewMode('list')}
              icon={<i className="las la-list" />}
            />
          </Space>
        </div>

        {isLoading ? (
          <div>Loading roles...</div>
        ) : (
          <Row gutter={[16, 16]}>
            {organization?.roles?.map(role => (
              <Col
                key={role.id}
                xs={24}
                sm={viewMode === 'grid' ? 12 : 24}
                md={viewMode === 'grid' ? 8 : 24}
              >
                <Card
                  hoverable
                  actions={[
                    <Button
                      key="edit"
                      type="link"
                      onClick={() =>
                        navigate(
                          `/organizations/${organizationId}/roles/${role.id}`,
                        )
                      }
                    >
                      <i className="las la-edit" /> Edit
                    </Button>,
                    <Button
                      key="duplicate"
                      type="link"
                      onClick={() => handleDuplicate(role)}
                    >
                      <i className="las la-copy" /> Duplicate
                    </Button>,
                  ]}
                >
                  <Card.Meta
                    title={role.name}
                    description={
                      <Space direction="vertical">
                        <Text type="secondary">
                          Créé le: {dayjs(role.createdAt).format('DD/MM/YYYY')}
                        </Text>
                        <Space>
                          <Tag color="blue">{role.name}</Tag>
                          <Tag color="green">Actif</Tag>
                        </Space>
                      </Space>
                    }
                  />
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </PageLayout>
  )
}
