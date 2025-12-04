import { Utility } from '@/core/helpers/utility'
import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { User } from '@prisma/client'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'

export default function RegisterPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()

  const [isLoading, setLoading] = useState(false)

  const { mutateAsync: register } = Api.authentication.register.useMutation()

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  useEffect(() => {
    const email = searchParams.get('email')?.trim()

    if (Utility.isDefined(email)) {
      form.setFieldsValue({ email })
    }
  }, [searchParams])

  const handleSubmit = async (values: Partial<User>) => {
    setLoading(true)

    try {
      const tokenInvitation = searchParams.get('tokenInvitation') ?? undefined

      await register({ ...values, tokenInvitation })

      login(values)
    } catch (error) {
      console.error(`Could not signup: ${error.message}`, {
        variant: 'error',
      })

      setLoading(false)
    }
  }

  return (
    <Flex align="center" justify="center" vertical flex={1}>
      <Flex
        vertical
        style={{
          width: '340px',
          paddingBottom: '50px',
          paddingTop: '50px',
        }}
        gap="middle"
      >
        <AppHeader description="Bienvenue !" />

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          autoComplete="off"
          requiredMark={false}
        >
          <Form.Item
            label="Mail"
            name="email"
            rules={[{ required: true, message: 'Mail requis' }]}
          >
            <Input type="email" placeholder="Votre mail" autoComplete="email" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Nom requis' }]}
            label="Nom"
          >
            <Input placeholder="Votre nom" />
          </Form.Item>

          <Form.Item
            label="Mot de passe"
            name="password"
            rules={[{ required: true, message: 'Mot de passe requis' }]}
          >
            <Input.Password
              type="password"
              placeholder="Votre mot de passe"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} block>
              S'inscrire
            </Button>
          </Form.Item>
        </Form>

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router('/login')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">Déjà un compte ?</Typography.Text>{' '}
            <Typography.Text>Se connecter</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
