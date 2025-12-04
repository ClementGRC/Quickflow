import { Api } from '@/core/trpc'
import { AppHeader } from '@/designSystem/ui/AppHeader'
import { useNavigate, useSearchParams } from '@remix-run/react'
import { Button, Flex, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { AuthenticationClient } from '~/core/authentication/client'

export default function LoginPage() {
  const router = useNavigate()
  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()
  const [isLoading, setLoading] = useState(false)

  const { mutateAsync: login } = Api.authentication.login.useMutation({
    onSuccess: data => {
      if (data.redirect) {
        window.location.href = data.redirect
      }
    },
  })

  const errorKey = searchParams.get('error')

  const errorMessage = {
    Signin: 'Essayez de vous connecter avec un autre compte.',
    OAuthSignin: 'Essayez de vous connecter avec un autre compte.',
    OAuthCallback: 'Essayez de vous connecter avec un autre compte.',
    OAuthCreateAccount: 'Essayez de vous connecter avec un autre compte.',
    EmailCreateAccount: 'Essayez de vous connecter avec un autre compte.',
    Callback: 'Essayez de vous connecter avec un autre compte.',
    OAuthAccountNotLinked:
      'Pour confirmer votre identité, connectez-vous avec le même compte que celui utilisé initialement.',
    EmailSignin: 'Vérifiez votre adresse e-mail.',
    CredentialsSignin:
      'Échec de la connexion. Vérifiez que les informations fournies sont correctes.',
    default: 'Impossible de se connecter.',
  }[errorKey ?? 'default']

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      form.setFieldValue('email', 'test@test.com')
      form.setFieldValue('password', 'password')
    }
  }, [])

  const handleSubmit = async (values: any) => {
    setLoading(true)

    try {
      await login({ email: values.email, password: values.password })
    } catch (error) {
      console.error(`Could not login: ${error.message}`, { variant: 'error' })

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
        <AppHeader description="" />

        {errorKey && (
          <Typography.Text type="danger">{errorMessage}</Typography.Text>
        )}

        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          requiredMark={false}
        >
          <Form.Item
            label={'Mail'}
            name="email"
            rules={[{ required: true, message: 'Mail requis' }]}
          >
            <Input type="email" placeholder="Votre mail" autoComplete="email" />
          </Form.Item>

          <Form.Item
            label={'Mot de passe'}
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
            <Flex justify="end">
              <Button
                type="link"
                onClick={() => router('/reset-password')}
                style={{ padding: 0, margin: 0 }}
              >
                Mot de passe oublié ?
              </Button>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={isLoading}>
              Se connecter
            </Button>
          </Form.Item>
        </Form>

        <AuthenticationClient.SocialButtons />

        <Button
          ghost
          style={{ border: 'none' }}
          onClick={() => router('/register')}
        >
          <Flex gap={'small'} justify="center">
            <Typography.Text type="secondary">Pas de compte ?</Typography.Text>{' '}
            <Typography.Text>S'inscrire</Typography.Text>
          </Flex>
        </Button>
      </Flex>
    </Flex>
  )
}
