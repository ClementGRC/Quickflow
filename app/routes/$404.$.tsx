import { Link } from '@remix-run/react'
import { Button, Result } from 'antd'
import { PageLayout } from '~/designSystem'

export default function NotFound() {
  return (
    <>
      <PageLayout isCentered>
        <Result
          status="404"
          title="404"
          subTitle={"Hop hop hop, ça n'existe pas..."}
          extra={
            <Button type="primary">
              <Link to="/">Retour à l'accueil</Link>
            </Button>
          }
        />
      </PageLayout>
    </>
  )
}
