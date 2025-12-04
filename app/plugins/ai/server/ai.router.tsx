import { DateHelper } from '@/core/helpers/date'
import { FileHelper } from '@/core/helpers/file'
import { TRPCError } from '@trpc/server'
import axios from 'axios'
import { z } from 'zod'
import { Trpc } from '~/core/trpc/base'
import { UploadServer } from '~/plugins/upload/server'
import { AiService } from './ai.service'

const check = () => {
  const key = process.env.SERVER_OPENAI_API_KEY

  console.log('🔍 SERVER_OPENAI_API_KEY =', key ? '[OK - Clé chargée]' : '[❌ Manquante ou vide]')

  if (!AiService.isActive()) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Set SERVER_OPENAI_API_KEY in your .env to activate OpenAI',
    })
  }
}

export const AiRouter = Trpc.createRouter({
  generateText: Trpc.procedure
    .input(
      z.object({
        prompt: z.string(),
        attachmentUrls: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ input }) => {
      const { prompt, attachmentUrls } = input
      check()

      try {
        console.log('🧠 Appel OpenAI avec prompt :', prompt)

        const answer = await AiService.generateText({
          prompt,
          attachmentUrls,
        })

        console.log('✅ Réponse reçue de OpenAI.')
        return { answer }
      } catch (err: any) {
        console.error('💥 Erreur dans AiService.generateText:', err)
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Erreur lors de la génération via OpenAI',
          cause: err,
        })
      }
    }),

  generateJson: Trpc.procedure
    .input(
      z.object({
        instruction: z.string(),
        content: z.string(),
        attachmentUrls: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ input }) => {
      check()

      const schema = z.object({
        results: z.array(
          z.object({
            description: z.string(),
          }),
        ),
      })

      const json = await AiService.generateJson(
        input.instruction,
        input.content,
        schema,
        input.attachmentUrls,
      )

      return json
    }),

  generateImage: Trpc.procedure
    .input(z.object({ prompt: z.string() }))
    .mutation(async ({ input }) => {
      check()

      const url = await AiService.generateImage(input.prompt)

      return { url }
    }),

  audioToText: Trpc.procedure
    .input(z.object({ url: z.string() }))
    .mutation(async ({ input }) => {
      check()

      const arrayBuffer = await axios
        .get<ArrayBuffer>(input.url, { responseType: 'arraybuffer' })
        .then(response => response.data)

      const readstream = await FileHelper.createReadStreamFromArrayBuffer(
        arrayBuffer,
        'audio.wav',
      )

      const translation = await AiService.fromAudioToText(readstream)

      return { translation }
    }),

  textToAudio: Trpc.procedure
    .input(z.object({ text: z.string() }))
    .mutation(async ({ input }) => {
      check()

      const buffer = await AiService.fromTextToAudio(input.text)

      const now = DateHelper.getNow()

      const name = `${now.getTime()}__text-to-audio.mp3`

      const file: UploadServer.FileType = {
        name,
        mimetype: 'audio/mp3',
        buffer,
      }

      const urls = await UploadServer.service.uploadPublic(file)

      const url = urls[0].url

      return { url }
    }),
})
