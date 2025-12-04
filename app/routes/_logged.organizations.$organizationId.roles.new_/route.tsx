import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useNavigate, useParams } from '@remix-run/react'
import { Button, Card, Form, Input, message, Typography } from 'antd'

const { Title, Text } = Typography

export default function CreateRolePage() {
  const { organizationId } = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const { mutateAsync: createRole, isLoading } =
    Api.organizationRole.create.useMutation()

  const handleCreate = async (values: { name: string }) => {
    try {
      const newRole = await createRole({
        data: {
          name: values.name,
          organizationId,
        },
      })
      message.success('Rôle créé avec succès !')
      navigate(`/organizations/${organizationId}/workflows`) // ou -1
    } catch (error) {
      console.error(error)
      message.error("Erreur lors de la création du rôle")
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
        <Card>
          <Title level={3}>Créer un nouveau rôle</Title>
          <Text type="secondary">
            Entrez les informations de base pour créer un nouveau rôle dans cette organisation.
          </Text>

          <Form
            layout="vertical"
            form={form}
            onFinish={handleCreate}
            style={{ marginTop: 24 }}
          >
            <Form.Item
              name="name"
              label="Nom du rôle"
              rules={[{ required: true, message: 'Veuillez entrer un nom' }]}
            >
              <Input placeholder="Ex: Administrateur" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                Créer le rôle
              </Button>
              <Button
                type="text"
                onClick={() => navigate(-1)}
                style={{ marginLeft: 8 }}
              >
                Annuler
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageLayout>
  )
}
