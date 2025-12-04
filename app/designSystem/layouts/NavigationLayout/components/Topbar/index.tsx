import { MenuOutlined } from '@ant-design/icons'
import { useNavigate } from '@remix-run/react'
import { Avatar, Flex, Menu, Tag } from 'antd'
import { useUserContext } from '~/core/context'
import { Utility } from '~/core/helpers/utility'
import { useDesignSystem } from '~/designSystem/provider'
import { Theme } from '~/designSystem/theme/theme'
import { NavigationItem } from '../../types'

import { OrganizationClient } from '~/plugins/organization/client'

interface Props {
  keySelected?: string
  items: NavigationItem[]
}

export const Topbar: React.FC<Props> = ({ keySelected, items }) => {
  const router = useNavigate()

  const { user, checkRole } = useUserContext()
  const { isMobile } = useDesignSystem()

  if (isMobile) {
    return <></>
  }

  return (
    <>
      <Flex
        align="center"
        className="px-6 h-16"
        style={{
          backgroundColor: Theme.components?.Layout?.headerBg,
          borderBottom: Theme.components?.Layout?.headerBorderBottom,
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          background: 'linear-gradient(to right, #ffffff, #fafafa)'
        }}
      >
        <Flex>
          <OrganizationClient.Select />
        </Flex>

        <Flex vertical flex={1} style={{ overflowX: 'hidden' }} align="center">
          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[keySelected]}
            overflowedIndicator={<MenuOutlined />}
            style={{ flex: 1 }}
          />
        </Flex>

        <Flex align="center" gap="middle">
          {checkRole('ADMIN') && (
            <Tag color="red" bordered={false}>
              Admin
            </Tag>
          )}

          {user && (
            <Avatar
              src={user.pictureUrl}
              alt={user.name}
              size="default"
              onClick={() => router('/profile')}
              style={{ cursor: 'pointer' }}
            >
              {Utility.stringToInitials(user.name)}
            </Avatar>
          )}
        </Flex>
      </Flex>
    </>
  )
}
