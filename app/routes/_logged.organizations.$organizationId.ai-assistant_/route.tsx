import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'
import { Button, Card, Col, Input, message, Modal, Row, Space, Typography } from 'antd'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const { Title, Paragraph } = Typography
const { TextArea } = Input

export default function AIAssistantPage() {
  const [workflowPrompt, setWorkflowPrompt] = useState('')
  const [processPrompt, setProcessPrompt] = useState('')
  const [documentationPrompt, setDocumentationPrompt] = useState('')
  const [designPrompt, setDesignPrompt] = useState('')

  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)

  const generateText = Api.ai.generateText.useMutation()

  const showResponse = (title: string, content: string) => {
    setModalTitle(title)
    setModalContent(content)
    setIsModalVisible(true)
  }

  const handleAsk = async (label: string, prompt: string, updatePrompt: (v: string) => void, formatPrompt: (p: string) => string) => {
    if (!prompt) {
      message.error('Veuillez entrer une description.')
      return
    }

    try {
      const response = await generateText.mutateAsync({
        prompt: formatPrompt(prompt),
      })

      message.success(`${label} généré avec succès`)
      showResponse(label, response.answer)
    } catch (error) {
      message.error(`Échec de la génération de ${label.toLowerCase()}`)
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <i className="las la-robot" style={{ marginRight: 8 }}></i>
          Assistant IA Workflow
        </Title>
        <Paragraph>
          Bénéficiez d'une assistance alimentée par l'IA pour optimiser vos workflows, améliorer vos processus, générer de la documentation et mettre en œuvre les meilleures pratiques.
        </Paragraph>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card
              title={<Space><i className="las la-magic"></i>Optimisation de workflows</Space>}
            >
              <TextArea
                rows={4}
                value={workflowPrompt}
                onChange={e => setWorkflowPrompt(e.target.value)}
                placeholder="Décrivez votre workflow..."
              />
              <Button
                type="primary"
                onClick={() =>
                  handleAsk(
                    'Suggestions de workflow',
                    workflowPrompt,
                    setWorkflowPrompt,
                    p => `Suggest optimization for this workflow: ${p}`
                  )
                }
                loading={generateText.isLoading}
                style={{ marginTop: 16 }}
              >
                Obtenir des suggestions
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={<Space><i className="las la-chart-line"></i>Amélioration des processus</Space>}
            >
              <TextArea
                rows={4}
                value={processPrompt}
                onChange={e => setProcessPrompt(e.target.value)}
                placeholder="Décrivez votre processus..."
              />
              <Button
                type="primary"
                onClick={() =>
                  handleAsk(
                    'Recommandations de processus',
                    processPrompt,
                    setProcessPrompt,
                    p => `Recommend improvements for this process: ${p}`
                  )
                }
                loading={generateText.isLoading}
                style={{ marginTop: 16 }}
              >
                Obtenir des recommandations
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={<Space><i className="las la-file-alt"></i>Génération de documentation</Space>}
            >
              <TextArea
                rows={4}
                value={documentationPrompt}
                onChange={e => setDocumentationPrompt(e.target.value)}
                placeholder="Entrez les détails de votre workflow..."
              />
              <Button
                type="primary"
                onClick={() =>
                  handleAsk(
                    'Documentation générée',
                    documentationPrompt,
                    setDocumentationPrompt,
                    p => `Generate documentation for this workflow: ${p}`
                  )
                }
                loading={generateText.isLoading}
                style={{ marginTop: 16 }}
              >
                Générer la documentation
              </Button>
            </Card>
          </Col>

          <Col xs={24} md={12}>
            <Card
              title={<Space><i className="las la-lightbulb"></i>Design & meilleures pratiques</Space>}
            >
              <TextArea
                rows={4}
                value={designPrompt}
                onChange={e => setDesignPrompt(e.target.value)}
                placeholder="Demandez des informations sur la conception de workflows..."
              />
              <Button
                type="primary"
                onClick={() =>
                  handleAsk(
                    'Conseils de design',
                    designPrompt,
                    setDesignPrompt,
                    p => `Provide workflow design guidance for: ${p}`
                  )
                }
                loading={generateText.isLoading}
                style={{ marginTop: 16 }}
              >
                Obtenir de l'aide
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Modal pour afficher la réponse formatée */}
        <Modal
          title={modalTitle}
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
          width={800}
        >
          <ReactMarkdown>{modalContent}</ReactMarkdown>
        </Modal>
      </div>
    </PageLayout>
  )
}
