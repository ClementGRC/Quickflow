
export function LandingHero() {
  return (
    <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/40 via-white to-white dark:from-primary-900/20 dark:via-gray-950 dark:to-gray-950 -z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 dark:via-primary-800 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-600 dark:text-primary-400 text-sm font-medium mb-8 animate-pulse">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Nouveau : Intégration Slack & Notion
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
            Automatisez vos workflows <br />
            <span className="text-gradient">sans écrire de code</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connectez vos outils préférés, automatisez les tâches répétitives et gagnez un temps précieux. 
            Rejoignez plus de 10,000 équipes qui utilisent QuickFlow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#signup" className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1">
              Commencer gratuitement
            </a>
            <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2 group">
              <svg className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Voir la démo
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              Pas de carte requise
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              14 jours d'essai
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto max-w-6xl" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-2xl blur opacity-30 animate-pulse"></div>
          <div className="relative bg-gray-900 rounded-2xl border border-gray-800 shadow-2xl overflow-hidden aspect-[16/9] group">
            {/* Sidebar */}
            <div className="absolute left-0 top-0 bottom-0 w-64 bg-gray-800/50 backdrop-blur-xl border-r border-gray-700/50 p-6 hidden md:block">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
                <div className="h-4 w-24 bg-gray-700 rounded"></div>
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <div className="w-5 h-5 bg-gray-700 rounded"></div>
                    <div className="h-3 w-20 bg-gray-700 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="absolute inset-0 md:left-64 p-8 bg-grid">
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="h-6 w-32 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-48 bg-gray-800 rounded"></div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                  <div className="w-10 h-10 bg-primary-600 rounded-full"></div>
                </div>
              </div>

              {/* Workflow Nodes */}
              <div className="relative h-full">
                {/* Node 1 */}
                <div className="absolute top-10 left-10 w-64 glass p-4 rounded-xl border border-gray-700/50 shadow-lg transform transition-transform hover:scale-105 cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Nouvel Email</div>
                      <div className="text-xs text-gray-400">Gmail • Trigger</div>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-green-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>

                {/* Connection Line 1 */}
                <svg className="absolute top-28 left-40 w-24 h-24 text-gray-600" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 2 }}>
                  <path d="M0 0 C 0 50, 100 50, 100 100" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]"></path>
                </svg>

                {/* Node 2 */}
                <div className="absolute top-48 left-48 w-64 glass p-4 rounded-xl border border-gray-700/50 shadow-lg transform transition-transform hover:scale-105 cursor-pointer delay-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Parser Contenu</div>
                      <div className="text-xs text-gray-400">OpenAI • Action</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded bg-gray-700/50 text-xs text-gray-300">Model: GPT-4</div>
                    <div className="px-2 py-1 rounded bg-green-500/20 text-xs text-green-400">Active</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce duration-[3000ms]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium">Tâche complétée</span>
                  </div>
                </div>

                <div className="absolute bottom-20 right-40 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 animate-bounce duration-[4000ms]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div>
                      <div className="text-sm font-bold">2.4s</div>
                      <div className="text-xs text-gray-500">Temps d'exécution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
