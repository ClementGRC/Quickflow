import { useUserContext } from '@/core/context'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { useParams } from '@remix-run/react'
import {
  Button,
  Card,
  DatePicker,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  Typography
} from 'antd'
import dayjs from 'dayjs'
import { useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select

export default function TasksPage() {
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const [filterPriority, setFilterPriority] = useState<string>('all')
  const [filterConversation, setFilterConversation] = useState<string>('all')
  const [filterDueDate, setFilterDueDate] = useState<any>(null)
  const [commentModalVisible, setCommentModalVisible] = useState(false)
  const [selectedMessage, setSelectedMessage] = useState<any>(null)
  const [comment, setComment] = useState('')

  const { data: messages, refetch } = Api.chatMessage.findMany.useQuery({
    include: {
      conversation: true,
      participant: {
        include: {
          user: true,
        },
      },
    },
  })

  const { data: conversations } = Api.chatConversation.findMany.useQuery({})

  const { mutateAsync: updateMessage } = Api.chatMessage.update.useMutation()

  const { mutateAsync: addComment } =
    Api.socialNetworkComment.create.useMutation()

  const { data: users } = Api.user.findMany.useQuery({
    where: { organizationRoles: { some: { organizationId } } },
  })

  const handleStatusChange = async (messageId: string, newStatus: string) => {
    await updateMessage({
      where: { id: messageId },
      data: { content: newStatus },
    })
    refetch()
  }

  const handleAddComment = async () => {
    if (!selectedMessage || !comment.trim()) return

    await addComment({
      data: {
        content: comment,
        userId: user?.id as string,
        itemId: selectedMessage.id,
      },
    })
    setComment('')
    setCommentModalVisible(false)
    refetch()
  }

  const handleDelegateTask = async (
    messageId: string,
    newParticipantId: string,
  ) => {
    await updateMessage({
      where: { id: messageId },
      data: { participantId: newParticipantId },
    })
    refetch()
  }

  const columns = [
    {
      title: 'Task',
      dataIndex: 'content',
      key: 'content',
      render: (text: string, record: any) => (
        <Space direction="vertical" size="small">
          <Text strong>{text}</Text>
          <Tag
            color={
              record.priority === 'HIGH'
                ? 'red'
                : record.priority === 'MEDIUM'
                ? 'orange'
                : 'green'
            }
          >
            {record.priority || 'LOW'}
          </Tag>
        </Space>
      ),
    },
    {
      title: 'Workflow',
      dataIndex: ['conversation', 'id'],
      key: 'conversation',
      render: (id: string) => `Workflow ${id.slice(0, 8)}`,
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => dayjs(date).format('YYYY-MM-DD'),
    },
    {
      title: 'Status',
      dataIndex: 'content',
      key: 'status',
      render: (content: string, record: any) => (
        <Select
          value={content || 'TODO'}
          onChange={value => handleStatusChange(record.id, value)}
          style={{ width: 120 }}
        >
          <Option value="TODO">To Do</Option>
          <Option value="IN_PROGRESS">In Progress</Option>
          <Option value="DONE">Done</Option>
        </Select>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record: any) => (
        <Space>
          <Button
            type="text"
            onClick={() => {
              setSelectedMessage(record)
              setCommentModalVisible(true)
            }}
          >
            <i className="las la-comment"></i>
          </Button>
          <Select
            placeholder="Delegate"
            style={{ width: 120 }}
            onChange={value => handleDelegateTask(record.id, value)}
          >
            {users?.map(user => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Card>
        <Title level={2}>
          <i className="las la-tasks"></i> Mes tâches
        </Title>
        <Text type="secondary">
          Gérer et suivre toutes les tâches qui vous sont assignées dans différents flux de travail
        </Text>

        <Space style={{ marginTop: 24, marginBottom: 24 }} size="middle">
          <Select
            style={{ width: 120 }}
            value={filterPriority}
            onChange={setFilterPriority}
            placeholder="Priority"
          >
            <Option value="all">Toutes</Option>
            <Option value="HIGH">Hautes</Option>
            <Option value="MEDIUM">Moyennes</Option>
            <Option value="LOW">Basses</Option>
          </Select>

          <Select
            style={{ width: 160 }}
            value={filterConversation}
            onChange={setFilterConversation}
            placeholder="Workflow"
          >
            <Option value="all">Tous les workflows</Option>
            {conversations?.map(conv => (
              <Option key={conv.id} value={conv.id}>
                Workflow {conv.id.slice(0, 8)}
              </Option>
            ))}
          </Select>

          <DatePicker
            onChange={date => setFilterDueDate(date)}
            placeholder="Date limite"
          />
        </Space>

        <Table
          columns={columns}
          dataSource={messages}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />

        <Modal
          title="Add Comment"
          open={commentModalVisible}
          onOk={handleAddComment}
          onCancel={() => {
            setCommentModalVisible(false)
            setComment('')
          }}
        >
          <Input.TextArea
            value={comment}
            onChange={e => setComment(e.target.value)}
            rows={4}
            placeholder="Enter your comment..."
          />
        </Modal>
      </Card>
    </PageLayout>
  )
}
