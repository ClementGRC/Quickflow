import { useState } from 'react'

export const LandingSolution = () => {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      title: "Centralisez",
      description: "Connectez tous vos outils (Slack, Notion, Drive) en un seul endroit.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
      ),
      image: (
        <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 bg-grid opacity-20"></div>
          {/* Centralize Visual */}
          <div className="relative z-10 flex items-center gap-8">
             <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 animate-bounce duration-[2000ms]">
                  <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="w-full h-full" />
                </div>
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 animate-bounce duration-[2500ms]">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg" alt="Notion" className="w-full h-full" />
                </div>
             </div>
             <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center shadow-2xl shadow-primary-500/50 z-20">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
             </div>
             <div className="flex flex-col gap-4">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 animate-bounce duration-[3000ms]">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo_%282020%29.svg" alt="Drive" className="w-full h-full" />
                </div>
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center p-3 animate-bounce duration-[3500ms]">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Jira_Logo.svg" alt="Jira" className="w-full h-full" />
                </div>
             </div>
          </div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
             <line x1="30%" y1="30%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
             <line x1="30%" y1="70%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
             <line x1="70%" y1="30%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
             <line x1="70%" y1="70%" x2="50%" y2="50%" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="5,5" className="animate-[dash_2s_linear_infinite]" />
          </svg>
        </div>
      )
    },
    {
      title: "Créez",
      description: "L'IA rédige vos procédures automatiquement à partir de vos conversations.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
      ),
      image: (
        <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl p-8">
           <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                 <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                    <div className="h-20 bg-gray-100 dark:bg-gray-800 rounded p-3 text-sm text-gray-500">
                       "Hey, voici comment on traite les remises clients : d'abord vérifier le montant, puis..."
                    </div>
                 </div>
              </div>
              
              <div className="flex justify-center">
                 <div className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 animate-pulse">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                    Traitement IA en cours...
                 </div>
              </div>

              <div className="border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-900/10 rounded-xl p-4 relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 </div>
                 <div className="h-4 bg-green-200 dark:bg-green-800 rounded w-1/3 mb-3"></div>
                 <div className="space-y-2">
                    <div className="h-2 bg-green-100 dark:bg-green-800/50 rounded w-full"></div>
                    <div className="h-2 bg-green-100 dark:bg-green-800/50 rounded w-full"></div>
                    <div className="h-2 bg-green-100 dark:bg-green-800/50 rounded w-2/3"></div>
                 </div>
              </div>
           </div>
        </div>
      )
    },
    {
      title: "Maintenez",
      description: "QuickFlow vous alerte quand une procédure semble obsolète.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
      ),
      image: (
        <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl p-8 flex items-center justify-center">
           <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90">
                 <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="12" fill="none" className="text-gray-100 dark:text-gray-800" />
                 <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="12" fill="none" className="text-primary-500" strokeDasharray="753" strokeDashoffset="100" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                 <span className="text-5xl font-bold text-gray-900 dark:text-white">98%</span>
                 <span className="text-sm text-gray-500 uppercase tracking-wider mt-2">À jour</span>
              </div>
           </div>
           
           <div className="absolute bottom-8 left-8 right-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-[slide-up_1s_ease-out]">
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              </div>
              <div>
                 <div className="text-sm font-medium text-gray-900 dark:text-white">1 procédure à vérifier</div>
                 <div className="text-xs text-gray-500">Dernière mise à jour : 6 mois</div>
              </div>
              <button className="ml-auto text-primary-600 text-sm font-medium hover:underline">Voir</button>
           </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Solution</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            Tout ce dont vous avez besoin pour <br />
            <span className="text-gradient">structurer votre savoir</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Features List */}
          <div className="lg:col-span-5 space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  activeTab === index 
                    ? 'bg-white dark:bg-gray-800 shadow-xl border-primary-100 dark:border-primary-900 scale-105' 
                    : 'hover:bg-white/50 dark:hover:bg-gray-800/50 border-transparent hover:border-gray-100 dark:hover:border-gray-700'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    activeTab === index ? 'bg-primary-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      activeTab === index ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Visual */}
          <div className="lg:col-span-7 h-[500px]" data-aos="fade-left">
             <div className="relative w-full h-full">
                {features.map((feature, index) => (
                   <div 
                      key={index}
                      className={`absolute inset-0 transition-all duration-500 transform ${
                         activeTab === index 
                            ? 'opacity-100 translate-x-0 scale-100' 
                            : 'opacity-0 translate-x-8 scale-95 pointer-events-none'
                      }`}
                   >
                      {feature.image}
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
