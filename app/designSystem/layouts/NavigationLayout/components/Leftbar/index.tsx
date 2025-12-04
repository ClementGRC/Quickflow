import { Flex, Menu } from 'antd'
import { useDesignSystem } from '~/designSystem/provider'
import { Theme } from '~/designSystem/theme/theme'
import { NavigationItem } from '../../types'

interface Props {
  keySelected?: string
  items: NavigationItem[]
  itemsBottom?: NavigationItem[]
}

export const Leftbar: React.FC<Props> = ({
  keySelected,
  items,
  itemsBottom,
}) => {
  const { isMobile } = useDesignSystem()

  if (isMobile || items.length === 0) {
    return <></>
  }

  return (
    <Flex
      vertical
      justify="space-between"
      className="py-4"
      style={{
        width: '250px',
        backgroundColor: Theme.components?.Layout?.siderBg,
        borderRight: Theme.components?.Layout?.siderBorderRight,
      }}
    >
      <Menu
        mode="inline"
        inlineIndent={16}
        items={items}
        selectedKeys={[keySelected]}
        style={{
          width: '100%',
          '--menu-item-height': '40px',
          '--menu-item-margin': '8px 0',
        }}
        className="[&_.ant-menu-item]:my-2 [&_.ant-menu-item]:transition-all [&_.ant-menu-item]:duration-200 [&_.ant-menu-item]:ease-in-out [&_.ant-menu-item]:rounded-lg hover:[&_.ant-menu-item]:opacity-80 hover:[&_.ant-menu-item]:bg-gray-50 [&_.ant-menu-item]:shadow-sm [&_.ant-menu-item-selected]:bg-gradient-to-r [&_.ant-menu-item-selected]:from-gray-100 [&_.ant-menu-item-selected]:to-gray-50"
      />
      <Menu
        mode="inline"
        inlineIndent={16}
        items={itemsBottom}
        selectedKeys={[keySelected]}
        style={{
          width: '100%',
          '--menu-item-height': '40px',
          '--menu-item-margin': '8px 0',
        }}
        className="[&_.ant-menu-item]:my-2 [&_.ant-menu-item]:transition-all [&_.ant-menu-item]:duration-200 [&_.ant-menu-item]:ease-in-out [&_.ant-menu-item]:rounded-lg hover:[&_.ant-menu-item]:opacity-80 hover:[&_.ant-menu-item]:bg-gray-50 [&_.ant-menu-item]:shadow-sm [&_.ant-menu-item-selected]:bg-gradient-to-r [&_.ant-menu-item-selected]:from-gray-100 [&_.ant-menu-item-selected]:to-gray-50"
      />
    </Flex>
  )
}
