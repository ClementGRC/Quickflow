import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {}

export const LandingCTA = ({ className, ...props }: Props) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`} {...props}>
      <div className="absolute inset-0 bg-primary-600 dark:bg-primary-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 opacity-90"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Prêt à structurer votre entreprise ?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Rejoignez les équipes qui ont choisi la clarté et l'efficacité. 
            Commencez gratuitement, sans carte bancaire.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register" className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Démarrer l'essai gratuit
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-primary-700/50 text-white border border-primary-400/30 rounded-xl font-bold text-lg hover:bg-primary-700 transition-all backdrop-blur-sm">
              Parler à un expert
            </button>
          </div>
          
          <p className="mt-8 text-sm text-blue-200 opacity-80">
            Pas de carte requise • Annulable à tout moment • Support 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
