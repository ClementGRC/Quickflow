import { HTMLAttributes, useState } from 'react'

interface QuestionAnswer {
  question: string
  answer: string
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  questionAnswers: QuestionAnswer[]
}

export const LandingFAQ = ({
  title,
  subtitle,
  questionAnswers,
  className,
  ...props
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={`py-24 bg-white ${className}`} {...props}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
          )}
        </div>

        <div className="space-y-4">
          {questionAnswers.map((qa, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-900 text-lg">
                  {qa.question}
                </span>
                <i
                  className={`las la-chevron-down text-xl transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                ></i>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 bg-white border-t border-slate-100">
                  <p className="text-slate-600 leading-relaxed">{qa.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
