import {
    LandingContact,
    LandingContainer,
    LandingCTA,
    LandingHero,
    LandingPricing,
    LandingSolution,
    LandingStats,
    LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const testimonials = [
    {
      name: 'Vincent Cacciatore',
      designation: 'spé CyberSecurity & Networks',
      content: "QuickFlow a transformé notre façon de gérer la documentation. C'est un gain de temps incroyable.",
      avatar: 'https://i.imgur.com/bw8JJML.jpeg',
    },
    {
      name: 'Clément Greco',
      designation: 'spé CyberSecurity & Networks',
      content: "L'IA est bluffante. Elle comprend le contexte et rédige des procédures parfaites du premier coup.",
      avatar: 'https://i.imgur.com/x5uSLlL.png',
    },
    {
      name: 'Pierre-Etienne Bernard',
      designation: 'spé Développement',
      content: "Enfin un outil qui s'intègre vraiment à notre workflow quotidien sans friction.",
      avatar: 'https://i.imgur.com/USFUck7.png',
    },
  ]

  const navItems = [
    {
      title: `Solution`,
      link: `#solution`,
    },
    {
      title: `Témoignages`,
      link: `#testimonials`,
    },
    {
      title: `Prix`,
      link: `#pricing`,
    },
    {
      title: `Contact`,
      link: `#contact`,
    },
  ]

  const packages = [
    {
      title: `Startup`,
      description: `Idéal pour les entreprises en croissance prêtes à automatiser leurs premiers workflows`,
      monthly: 49.99,
      yearly: 5000,
      features: [
        `Jusqu'à 50 procédures stockées`,
        `Limité à 100 appels API/mois`,
        `Interface simple`,
        `Support par email`,
      ],
    },
    {
      title: `Scale`,
      description: `Pour les entreprises prêtes à maximiser leur efficacité opérationnelle`,
      monthly: 99.99,
      yearly: 10000,
      features: [
        `Jusqu'à 200 procédures stockées`,
        `Limité à 500 appels API/mois`,
        `Accès avancé à  l'IA`,
        `Export PDF & Word`,
        `Support prioritaire`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Solutions personnalisées pour les grandes entreprises`,
      monthly: 249.99,
      yearly: 20000,
      features: [
        `Stockage illimité`,
        `Appels API illimités`,
        `Personnalisation avancées`,
        `Support 24/7`,
        `Intégrations avec outils tiers`,
      ],
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero />
      <LandingStats />
      <div id="solution">
        <LandingSolution />
      </div>
      <div id="testimonials">
        <LandingTestimonials
          title="Ils ont repris le contrôle"
          subtitle="Découvrez comment des équipes comme la vôtre ont transformé leur documentation."
          testimonials={testimonials}
        />
      </div>
      <LandingPricing
        id="pricing"
        title={`Investissez dans l’efficacité de votre entreprise`}
        subtitle={`Choisissez le plan idéal pour transformer vos opérations`}
        packages={packages}
      />
      <div id="contact">
        <LandingContact />
      </div>
      <LandingCTA />
    </LandingContainer>
  )
}
