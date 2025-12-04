import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {}

export const LandingStats = ({ className, ...props }: Props) => {
  return (
    <section className={`py-24 relative overflow-hidden ${className}`} {...props}>
      <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900/50"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Pourquoi vos équipes perdent du temps ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            La documentation est souvent dispersée, obsolète et difficile à maintenir.
            <span className="text-primary-600 dark:text-primary-400 font-medium"> QuickFlow change la donne.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">3.9h</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Perdues par semaine</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Le temps moyen passé par employé à chercher une information qui devrait être accessible instantanément.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">5+</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Outils dispersés</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Drive, Notion, Slack, Emails... L'information est fragmentée et impossible à maintenir à jour partout.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:-translate-y-1 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">91%</h3>
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">D'insatisfaction</p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Des employés se sentent frustrés par le manque de clarté et de processus définis dans leur entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
