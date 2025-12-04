import { HTMLAttributes } from 'react'

interface Testimonial {
  name: string
  designation: string
  content: string
  avatar: string
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  testimonials: Testimonial[]
}

export const LandingTestimonials = ({
  title,
  subtitle,
  testimonials,
  className,
  ...props
}: Props) => {
  return (
    <section className={`py-24 bg-slate-50 ${className}`} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="las la-star text-lg"></i>
                ))}
              </div>
              <blockquote className="flex-1 mb-8">
                <p className="text-slate-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-100"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {testimonial.designation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
