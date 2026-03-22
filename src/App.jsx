import { useEffect, useState } from 'react'
import './App.css'

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
]

const CONTENT = {
  en: {
    locale: 'en',
    metaTitle: 'O7 CRM | The Complete CRM Without Enterprise Bloat',
    metaDescription:
      'O7 CRM is the complete B2B and B2C CRM for teams that want clarity, execution, and a premium experience without enterprise complexity.',
    brandTagline: 'Complete B2B/B2C CRM',
    navAriaLabel: 'Primary navigation',
    languageLabel: 'Change language',
    nav: {
      platform: 'Platform',
      pricing: 'Pricing',
      demo: 'Demo',
    },
    headerCta: 'Book a demo',
    hero: {
      eyebrow: 'Premium minimal CRM for B2B and B2C teams',
      titleLead: 'The complete CRM without',
      titleAccent: ' enterprise bloat.',
      text:
        'O7 gives growing teams one premium workspace to manage leads, clients, pipelines, follow-up, automation, and reporting without the clutter of legacy CRM platforms.',
      primaryCta: 'Book a demo',
      secondaryCta: 'See the platform',
      audiencesLabel: 'Target audiences',
      audiences: [
        'B2B sales teams',
        'B2C operators',
        'Service businesses',
        'Growth-focused companies',
      ],
      metrics: [
        { label: 'CRM scope', value: 'End-to-end' },
        { label: 'Team model', value: 'B2B + B2C' },
        { label: 'Operating layer', value: '1 workspace' },
        { label: 'Adoption pace', value: 'Weeks' },
      ],
    },
    dashboard: {
      label: 'Live workspace',
      title: 'Revenue and relationship view',
      status: 'Execution ready',
      primaryCard: {
        label: 'Open opportunities',
        value: '128',
        asideLabel: 'This week',
        asideValue: '+16 qualified',
      },
      secondaryCards: [
        {
          label: 'Tasks due today',
          value: '23',
          text: '5 need immediate follow-up',
        },
        {
          label: 'Won this month',
          value: '41',
          text: 'Conversion pace improving',
        },
      ],
      sources: {
        label: 'Channel mix',
        title: 'Inbound, outbound, referrals',
        tag: 'Live performance',
        items: [
          { label: 'Inbound forms', value: '82%' },
          { label: 'Outbound outreach', value: '67%' },
          { label: 'Referrals', value: '74%' },
        ],
      },
    },
    positioning: {
      eyebrow: 'Positioning',
      title: 'A premium CRM for teams that want clarity, not complexity.',
      text:
        'O7 sits between bloated enterprise stacks and lightweight tools that stop short. It gives teams a complete CRM they can run seriously, without inheriting the friction, clutter, and admin overhead of older platforms.',
      points: [
        'Full CRM coverage without enterprise clutter',
        'A product teams can adopt quickly and use daily',
        'One system for B2B and B2C customer workflows',
        'Premium experience with a lighter pricing model',
      ],
    },
    platform: {
      eyebrow: 'Platform value',
      title:
        'Everything you expect from a complete CRM, delivered in a cleaner system.',
      text:
        'O7 covers customer management, sales execution, follow-up rhythm, workflow structure, and team visibility while keeping the product lighter, clearer, and easier to run.',
      features: [
        {
          title: 'Complete CRM foundation',
          text: 'Manage leads, contacts, companies, deals, follow-up, and history inside one clear structure that stays usable as the team grows.',
        },
        {
          title: 'One workflow for B2B and B2C',
          text: 'Run pipeline and relationship management across different sales models without splitting your team between disconnected tools.',
        },
        {
          title: 'Anti-complexity by design',
          text: 'O7 removes the clutter, module overload, and admin drag that make legacy CRM platforms expensive to maintain and hard to adopt.',
        },
        {
          title: 'Automation that supports execution',
          text: 'Keep follow-up moving with reminders, status logic, and workflow automations that help teams act faster without creating extra noise.',
        },
        {
          title: 'Reporting with decision-level clarity',
          text: 'See pipeline movement, team activity, source quality, and conversion trends in dashboards built for action, not spreadsheet clean-up.',
        },
        {
          title: 'Premium product feel',
          text: 'The experience is designed to feel sharp, modern, and controlled so your CRM becomes a system people actually want to use every day.',
        },
      ],
    },
    workflow: {
      eyebrow: 'How it works',
      title: 'Built for execution, not admin drag.',
      text:
        'Most CRM platforms accumulate complexity over time. O7 is built to keep teams moving from capture to follow-up to conversion in a way that still feels controlled when volume increases.',
      journey: [
        {
          step: '01',
          title: 'Capture and qualify in one clean flow',
          text: 'Bring inbound leads, outbound conversations, referrals, and existing contacts into one system with a structure that stays readable.',
        },
        {
          step: '02',
          title: 'Run follow-up without losing momentum',
          text: 'Assign next actions, automate routine movement, and keep team accountability visible before opportunities go stale.',
        },
        {
          step: '03',
          title: 'Review performance with clarity',
          text: 'Give managers and founders a direct view of pipeline, activity, conversion, and workload without the reporting overhead of bigger CRM stacks.',
        },
      ],
      aside: {
        eyebrow: 'Why O7 feels different',
        title: 'A complete CRM your team can actually live in every day.',
        text:
          'O7 is designed for teams that need a serious operating layer for sales and customer follow-up, but do not want to drag around the complexity, training load, or pricing logic of a traditional enterprise CRM.',
        bullets: [
          'Less admin overhead across daily workflow',
          'Cleaner handoff between sales, marketing, and account teams',
          'Better management visibility without reporting sprawl',
        ],
      },
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Accessible pricing, premium positioning.',
      text:
        'O7 is meant to feel lighter than enterprise CRM contracts while still giving teams a complete system they can grow into with confidence.',
      featuredLabel: 'Most popular',
      plans: [
        {
          name: 'Core',
          price: '$29',
          subtitle: '/month',
          description:
            'For small teams that need a real CRM foundation without paying for enterprise overhead from day one.',
          features: [
            'Up to 3 users',
            'Contacts and companies',
            'Lead and opportunity pipeline',
            'Tasks, reminders, and activity timeline',
            'Core automations',
            'Essential reporting',
          ],
          cta: 'Start with Core',
          badge: 'Lean start',
          recommended: false,
        },
        {
          name: 'Growth',
          price: '$79',
          subtitle: '/month',
          description:
            'For B2B and B2C teams that want complete CRM coverage, faster execution, and a cleaner operating system for growth.',
          features: [
            'Up to 10 users',
            'Custom pipelines and stages',
            'Automations and workflows',
            'Shared team visibility',
            'Performance dashboards',
            'Priority onboarding',
          ],
          cta: 'Choose Growth',
          badge: 'Best fit',
          recommended: true,
        },
        {
          name: 'Enterprise',
          price: 'Custom',
          subtitle: '/plan',
          description:
            'For companies that need enterprise-grade visibility, deeper configuration, and a premium implementation path without legacy CRM sprawl.',
          features: [
            'Advanced permissions',
            'Multi-team workspaces',
            'Custom reporting structure',
            'Automation design support',
            'Data migration assistance',
            'Dedicated success support',
          ],
          cta: 'Talk to Sales',
          badge: 'Enterprise',
          recommended: false,
        },
      ],
      addOns:
        'Optional add-ons: onboarding, CRM structure design, data migration, custom automations, reporting setup, integrations, and premium support.',
    },
    cta: {
      eyebrow: 'Launch O7 CRM',
      title: 'Give your team a complete CRM they will actually use.',
      text:
        'Position O7 as the premium CRM for companies that want full customer visibility, faster execution, and a cleaner operating system than the traditional market leaders.',
      primary: 'See plans',
      secondary: 'Request a demo',
    },
  },
  fr: {
    locale: 'fr',
    metaTitle: 'O7 CRM | Le CRM complet sans la lourdeur enterprise',
    metaDescription:
      'O7 CRM est le CRM complet B2B et B2C pour les équipes qui veulent de la clarté, de l’exécution et une expérience premium sans complexité enterprise.',
    brandTagline: 'CRM B2B/B2C complet',
    navAriaLabel: 'Navigation principale',
    languageLabel: 'Changer de langue',
    nav: {
      platform: 'Plateforme',
      pricing: 'Tarifs',
      demo: 'Démo',
    },
    headerCta: 'Réserver une démo',
    hero: {
      eyebrow: 'CRM premium et minimaliste pour équipes B2B et B2C',
      titleLead: 'Le CRM complet sans',
      titleAccent: ' la lourdeur enterprise.',
      text:
        'O7 donne aux équipes en croissance un espace premium unique pour gérer leads, clients, pipeline, relances, automatisations et reporting sans l’encombrement des CRM historiques.',
      primaryCta: 'Réserver une démo',
      secondaryCta: 'Voir la plateforme',
      audiencesLabel: 'Publics visés',
      audiences: [
        'Équipes commerciales B2B',
        'Opérateurs B2C',
        'Entreprises de services',
        'Sociétés orientées croissance',
      ],
      metrics: [
        { label: 'Périmètre CRM', value: 'De bout en bout' },
        { label: 'Modèle équipe', value: 'B2B + B2C' },
        { label: 'Couche d’exploitation', value: '1 espace' },
        { label: 'Adoption', value: 'En semaines' },
      ],
    },
    dashboard: {
      label: 'Espace en direct',
      title: 'Vue revenus et relation client',
      status: 'Prêt pour l’exécution',
      primaryCard: {
        label: 'Opportunités ouvertes',
        value: '128',
        asideLabel: 'Cette semaine',
        asideValue: '+16 qualifiées',
      },
      secondaryCards: [
        {
          label: 'Tâches à faire aujourd’hui',
          value: '23',
          text: '5 demandent un suivi immédiat',
        },
        {
          label: 'Gagnées ce mois-ci',
          value: '41',
          text: 'Le rythme de conversion progresse',
        },
      ],
      sources: {
        label: 'Mix de canaux',
        title: 'Entrant, sortant, recommandations',
        tag: 'Performance en direct',
        items: [
          { label: 'Formulaires entrants', value: '82%' },
          { label: 'Prospection sortante', value: '67%' },
          { label: 'Recommandations', value: '74%' },
        ],
      },
    },
    positioning: {
      eyebrow: 'Positionnement',
      title: 'Un CRM premium pour les équipes qui veulent de la clarté, pas de la complexité.',
      text:
        'O7 se situe entre les suites enterprise trop lourdes et les outils légers qui s’arrêtent trop tôt. Il donne aux équipes un CRM complet qu’elles peuvent exploiter sérieusement, sans subir la friction, le désordre et la charge administrative des anciennes plateformes.',
      points: [
        'Toute la couverture CRM sans la surcharge enterprise',
        'Un produit que les équipes adoptent vite et utilisent vraiment',
        'Un seul système pour les workflows clients B2B et B2C',
        'Une expérience premium avec un pricing plus léger',
      ],
    },
    platform: {
      eyebrow: 'Valeur plateforme',
      title:
        'Tout ce que l’on attend d’un CRM complet, dans un système plus clair.',
      text:
        'O7 couvre la gestion client, l’exécution commerciale, le rythme de suivi, la structure des workflows et la visibilité équipe, tout en restant plus léger, plus lisible et plus simple à faire tourner.',
      features: [
        {
          title: 'Base CRM complète',
          text: 'Gérez leads, contacts, sociétés, opportunités, relances et historique dans une structure claire qui reste exploitable à mesure que l’équipe grandit.',
        },
        {
          title: 'Un workflow pour le B2B et le B2C',
          text: 'Pilotez pipeline et relation client sur plusieurs modèles de vente sans éclater l’équipe entre des outils déconnectés.',
        },
        {
          title: 'Pensé contre la complexité',
          text: 'O7 retire le désordre, la surcharge de modules et la friction admin qui rendent les CRM historiques coûteux à maintenir et difficiles à adopter.',
        },
        {
          title: 'Des automatisations au service de l’exécution',
          text: 'Gardez le suivi en mouvement avec des rappels, de la logique de statuts et des workflows qui aident l’équipe à agir plus vite sans créer de bruit supplémentaire.',
        },
        {
          title: 'Un reporting utile pour décider',
          text: 'Suivez mouvement du pipeline, activité équipe, qualité des sources et tendances de conversion dans des dashboards faits pour agir, pas pour nettoyer des feuilles Excel.',
        },
        {
          title: 'Une expérience produit premium',
          text: 'L’interface est conçue pour être nette, moderne et maîtrisée, afin que votre CRM devienne un système que l’on a réellement envie d’utiliser au quotidien.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Fonctionnement',
      title: 'Conçu pour exécuter, pas pour alourdir.',
      text:
        'La plupart des CRM accumulent de la complexité avec le temps. O7 est conçu pour garder les équipes en mouvement, de la capture à la relance puis à la conversion, tout en restant maîtrisé quand le volume augmente.',
      journey: [
        {
          step: '01',
          title: 'Capturer et qualifier dans un flux net',
          text: 'Rassemblez les leads entrants, la prospection, les recommandations et les contacts existants dans un seul système avec une structure qui reste lisible.',
        },
        {
          step: '02',
          title: 'Piloter le suivi sans perdre d’élan',
          text: 'Assignez les prochaines actions, automatisez les mouvements répétitifs et gardez la responsabilité visible avant que les opportunités ne refroidissent.',
        },
        {
          step: '03',
          title: 'Lire la performance avec clarté',
          text: 'Donnez aux managers et fondateurs une vue directe sur le pipeline, l’activité, la conversion et la charge sans la lourdeur de reporting des plus grosses stacks CRM.',
        },
      ],
      aside: {
        eyebrow: 'Pourquoi O7 paraît différent',
        title: 'Un CRM complet dans lequel votre équipe peut vraiment vivre chaque jour.',
        text:
          'O7 est conçu pour les équipes qui ont besoin d’une vraie couche opérationnelle pour la vente et le suivi client, sans traîner la complexité, la charge de formation ou la logique tarifaire d’un CRM enterprise traditionnel.',
        bullets: [
          'Moins de charge administrative dans le workflow quotidien',
          'Un relais plus net entre ventes, marketing et gestion des comptes',
          'Une meilleure visibilité managériale sans dispersion du reporting',
        ],
      },
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Tarification accessible, positionnement premium.',
      text:
        'O7 est pensé pour sembler plus léger qu’un contrat CRM enterprise tout en donnant aux équipes un système complet dans lequel elles peuvent grandir avec confiance.',
      featuredLabel: 'Le plus choisi',
      plans: [
        {
          name: 'Core',
          price: '$29',
          subtitle: '/mois',
          description:
            'Pour les petites équipes qui ont besoin d’une vraie base CRM sans payer une lourdeur enterprise dès le départ.',
          features: [
            'Jusqu’à 3 utilisateurs',
            'Contacts et sociétés',
            'Pipeline leads et opportunités',
            'Tâches, rappels et timeline d’activité',
            'Automatisations essentielles',
            'Reporting de base',
          ],
          cta: 'Commencer avec Core',
          badge: 'Démarrage léger',
          recommended: false,
        },
        {
          name: 'Growth',
          price: '$79',
          subtitle: '/mois',
          description:
            'Pour les équipes B2B et B2C qui veulent une vraie couverture CRM, une meilleure exécution et un système de croissance plus propre.',
          features: [
            'Jusqu’à 10 utilisateurs',
            'Pipelines et étapes personnalisés',
            'Automatisations et workflows',
            'Visibilité partagée de l’équipe',
            'Dashboards de performance',
            'Onboarding prioritaire',
          ],
          cta: 'Choisir Growth',
          badge: 'Meilleur choix',
          recommended: true,
        },
        {
          name: 'Enterprise',
          price: 'Sur devis',
          subtitle: '/offre',
          description:
            'Pour les entreprises qui ont besoin d’une visibilité enterprise, d’une configuration plus profonde et d’un déploiement premium sans la dispersion d’un CRM legacy.',
          features: [
            'Permissions avancées',
            'Espaces multi-équipes',
            'Structure de reporting personnalisée',
            'Support de design des automatisations',
            'Aide à la migration des données',
            'Support success dédié',
          ],
          cta: 'Parler à l’équipe',
          badge: 'Enterprise',
          recommended: false,
        },
      ],
      addOns:
        'Options: onboarding, design de structure CRM, migration de données, automatisations sur mesure, configuration des reportings, intégrations et support premium.',
    },
    cta: {
      eyebrow: 'Déployer O7 CRM',
      title: 'Donnez à votre équipe un CRM complet qu’elle utilisera vraiment.',
      text:
        'Positionnez O7 comme le CRM premium pour les entreprises qui veulent une visibilité client complète, une exécution plus rapide et un système plus clair que les leaders traditionnels du marché.',
      primary: 'Voir les offres',
      secondary: 'Demander une démo',
    },
  },
  es: {
    locale: 'es',
    metaTitle: 'O7 CRM | El CRM completo sin el peso enterprise',
    metaDescription:
      'O7 CRM es el CRM completo para equipos B2B y B2C que buscan claridad, ejecución y una experiencia premium sin complejidad enterprise.',
    brandTagline: 'CRM completo B2B/B2C',
    navAriaLabel: 'Navegación principal',
    languageLabel: 'Cambiar idioma',
    nav: {
      platform: 'Plataforma',
      pricing: 'Precios',
      demo: 'Demo',
    },
    headerCta: 'Reservar demo',
    hero: {
      eyebrow: 'CRM premium y minimalista para equipos B2B y B2C',
      titleLead: 'El CRM completo sin',
      titleAccent: ' el peso enterprise.',
      text:
        'O7 da a los equipos en crecimiento un espacio premium para gestionar leads, clientes, pipeline, seguimiento, automatizaciones y reporting sin el desorden de los CRM heredados.',
      primaryCta: 'Reservar demo',
      secondaryCta: 'Ver la plataforma',
      audiencesLabel: 'Audiencias objetivo',
      audiences: [
        'Equipos comerciales B2B',
        'Operaciones B2C',
        'Empresas de servicios',
        'Compañías enfocadas en crecimiento',
      ],
      metrics: [
        { label: 'Cobertura CRM', value: 'De punta a punta' },
        { label: 'Modelo de equipo', value: 'B2B + B2C' },
        { label: 'Capa operativa', value: '1 espacio' },
        { label: 'Adopción', value: 'En semanas' },
      ],
    },
    dashboard: {
      label: 'Espacio en vivo',
      title: 'Vista de ingresos y relaciones',
      status: 'Listo para ejecutar',
      primaryCard: {
        label: 'Oportunidades abiertas',
        value: '128',
        asideLabel: 'Esta semana',
        asideValue: '+16 calificadas',
      },
      secondaryCards: [
        {
          label: 'Tareas para hoy',
          value: '23',
          text: '5 requieren seguimiento inmediato',
        },
        {
          label: 'Ganadas este mes',
          value: '41',
          text: 'La conversión va mejorando',
        },
      ],
      sources: {
        label: 'Mix de canales',
        title: 'Inbound, outbound y referidos',
        tag: 'Rendimiento en vivo',
        items: [
          { label: 'Formularios inbound', value: '82%' },
          { label: 'Prospección outbound', value: '67%' },
          { label: 'Referidos', value: '74%' },
        ],
      },
    },
    positioning: {
      eyebrow: 'Posicionamiento',
      title: 'Un CRM premium para equipos que quieren claridad, no complejidad.',
      text:
        'O7 se sitúa entre los stacks enterprise inflados y las herramientas ligeras que se quedan cortas. Da a los equipos un CRM completo que pueden operar en serio, sin heredar la fricción, el desorden ni la carga administrativa de las plataformas antiguas.',
      points: [
        'Cobertura CRM completa sin sobrecarga enterprise',
        'Un producto que los equipos adoptan rápido y usan todos los días',
        'Un solo sistema para flujos de clientes B2B y B2C',
        'Experiencia premium con un modelo de precio más ligero',
      ],
    },
    platform: {
      eyebrow: 'Valor de la plataforma',
      title:
        'Todo lo que esperas de un CRM completo, entregado en un sistema más limpio.',
      text:
        'O7 cubre gestión de clientes, ejecución comercial, ritmo de seguimiento, estructura de workflows y visibilidad del equipo, manteniendo el producto más ligero, claro y fácil de operar.',
      features: [
        {
          title: 'Base CRM completa',
          text: 'Gestiona leads, contactos, empresas, oportunidades, seguimiento e historial dentro de una estructura clara que sigue siendo útil cuando el equipo crece.',
        },
        {
          title: 'Un flujo para B2B y B2C',
          text: 'Gestiona pipeline y relación con clientes en distintos modelos de venta sin dividir al equipo entre herramientas desconectadas.',
        },
        {
          title: 'Diseñado contra la complejidad',
          text: 'O7 elimina el ruido, la sobrecarga de módulos y la fricción administrativa que hacen que los CRM heredados sean caros de mantener y difíciles de adoptar.',
        },
        {
          title: 'Automatización al servicio de la ejecución',
          text: 'Mantén el seguimiento en movimiento con recordatorios, lógica de estados y workflows que ayudan a actuar más rápido sin crear ruido adicional.',
        },
        {
          title: 'Reporting con claridad para decidir',
          text: 'Ve movimiento del pipeline, actividad del equipo, calidad de fuentes y tendencias de conversión en dashboards pensados para actuar, no para limpiar hojas de cálculo.',
        },
        {
          title: 'Sensación de producto premium',
          text: 'La experiencia está diseñada para sentirse nítida, moderna y controlada, de modo que tu CRM se convierta en un sistema que la gente realmente quiera usar cada día.',
        },
      ],
    },
    workflow: {
      eyebrow: 'Cómo funciona',
      title: 'Hecho para ejecutar, no para arrastrar administración.',
      text:
        'La mayoría de los CRM acumulan complejidad con el tiempo. O7 está diseñado para mantener a los equipos avanzando desde la captura hasta el seguimiento y la conversión, incluso cuando el volumen crece.',
      journey: [
        {
          step: '01',
          title: 'Captura y califica en un flujo limpio',
          text: 'Reúne leads inbound, prospección outbound, referidos y contactos existentes en un solo sistema con una estructura que sigue siendo legible.',
        },
        {
          step: '02',
          title: 'Ejecuta seguimiento sin perder impulso',
          text: 'Asigna próximos pasos, automatiza movimientos repetitivos y mantén la responsabilidad del equipo visible antes de que las oportunidades se enfríen.',
        },
        {
          step: '03',
          title: 'Lee el rendimiento con claridad',
          text: 'Da a managers y founders una vista directa del pipeline, la actividad, la conversión y la carga de trabajo sin el peso de reporting de los stacks CRM más grandes.',
        },
      ],
      aside: {
        eyebrow: 'Por qué O7 se siente distinto',
        title: 'Un CRM completo en el que tu equipo realmente puede vivir todos los días.',
        text:
          'O7 está diseñado para equipos que necesitan una capa operativa seria para ventas y seguimiento de clientes, pero no quieren cargar con la complejidad, la fricción de formación ni la lógica de precios de un CRM enterprise tradicional.',
        bullets: [
          'Menos carga administrativa en el trabajo diario',
          'Mejor transición entre ventas, marketing y gestión de cuentas',
          'Más visibilidad para management sin dispersión de reporting',
        ],
      },
    },
    pricing: {
      eyebrow: 'Precios',
      title: 'Precio accesible, posicionamiento premium.',
      text:
        'O7 está pensado para sentirse más ligero que los contratos enterprise, pero dando al mismo tiempo un sistema completo en el que los equipos pueden crecer con confianza.',
      featuredLabel: 'Más elegido',
      plans: [
        {
          name: 'Core',
          price: '$29',
          subtitle: '/mes',
          description:
            'Para equipos pequeños que necesitan una base CRM real sin pagar sobrecarga enterprise desde el primer día.',
          features: [
            'Hasta 3 usuarios',
            'Contactos y empresas',
            'Pipeline de leads y oportunidades',
            'Tareas, recordatorios y timeline de actividad',
            'Automatizaciones esenciales',
            'Reporting básico',
          ],
          cta: 'Empezar con Core',
          badge: 'Inicio ligero',
          recommended: false,
        },
        {
          name: 'Growth',
          price: '$79',
          subtitle: '/mes',
          description:
            'Para equipos B2B y B2C que quieren cobertura CRM completa, mejor ejecución y un sistema de crecimiento más limpio.',
          features: [
            'Hasta 10 usuarios',
            'Pipelines y etapas personalizados',
            'Automatizaciones y workflows',
            'Visibilidad compartida del equipo',
            'Dashboards de rendimiento',
            'Onboarding prioritario',
          ],
          cta: 'Elegir Growth',
          badge: 'Mejor opción',
          recommended: true,
        },
        {
          name: 'Enterprise',
          price: 'A medida',
          subtitle: '/plan',
          description:
            'Para empresas que necesitan visibilidad enterprise, una configuración más profunda y una implementación premium sin el caos de un CRM legacy.',
          features: [
            'Permisos avanzados',
            'Espacios multi-equipo',
            'Estructura de reporting personalizada',
            'Soporte para diseño de automatizaciones',
            'Ayuda con migración de datos',
            'Soporte dedicado',
          ],
          cta: 'Hablar con ventas',
          badge: 'Enterprise',
          recommended: false,
        },
      ],
      addOns:
        'Add-ons opcionales: onboarding, diseño de estructura CRM, migración de datos, automatizaciones personalizadas, configuración de reporting, integraciones y soporte premium.',
    },
    cta: {
      eyebrow: 'Lanzar O7 CRM',
      title: 'Dale a tu equipo un CRM completo que realmente usará.',
      text:
        'Posiciona O7 como el CRM premium para empresas que quieren visibilidad total del cliente, ejecución más rápida y un sistema operativo más limpio que los líderes tradicionales del mercado.',
      primary: 'Ver planes',
      secondary: 'Solicitar demo',
    },
  },
}

function getInitialLanguage() {
  if (typeof window === 'undefined') {
    return 'en'
  }

  const savedLanguage = window.localStorage.getItem('o7-language')

  if (savedLanguage === 'en' || savedLanguage === 'fr' || savedLanguage === 'es') {
    return savedLanguage
  }

  const browserLanguage = window.navigator.language.toLowerCase()

  if (browserLanguage.startsWith('fr')) {
    return 'fr'
  }

  if (browserLanguage.startsWith('es')) {
    return 'es'
  }

  return 'en'
}

export default function O7LandingPage() {
  const [language, setLanguage] = useState(getInitialLanguage)
  const content = CONTENT[language]

  useEffect(() => {
    document.documentElement.lang = content.locale
    document.title = content.metaTitle

    const descriptionTag = document.querySelector('meta[name="description"]')

    if (descriptionTag) {
      descriptionTag.setAttribute('content', content.metaDescription)
    }

    window.localStorage.setItem('o7-language', language)
  }, [content, language])

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="O7 CRM">
          <span className="brand-mark">O7</span>
          <span className="brand-copy">
            <strong>O7 CRM</strong>
            <small>{content.brandTagline}</small>
          </span>
        </a>

        <nav className="header-nav" aria-label={content.navAriaLabel}>
          <a href="#features">{content.nav.platform}</a>
          <a href="#pricing">{content.nav.pricing}</a>
          <a href="#contact">{content.nav.demo}</a>
        </nav>

        <div className="header-actions">
          <div
            className="language-switcher"
            role="group"
            aria-label={content.languageLabel}
          >
            {LANGUAGES.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`language-button ${
                  language === option.code ? 'is-active' : ''
                }`}
                onClick={() => setLanguage(option.code)}
                aria-pressed={language === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>

          <a className="button button-ghost header-cta" href="#contact">
            {content.headerCta}
          </a>
        </div>
      </header>

      <main className="landing-page" id="top">
        <section className="hero panel">
          <div className="hero-copy fade-up">
            <span className="eyebrow">{content.hero.eyebrow}</span>

            <h1>
              {content.hero.titleLead}
              <span>{content.hero.titleAccent}</span>
            </h1>

            <p className="hero-text">{content.hero.text}</p>

            <div className="hero-actions">
              <a className="button button-solid" href="#contact">
                {content.hero.primaryCta}
              </a>
              <a className="button button-ghost" href="#features">
                {content.hero.secondaryCta}
              </a>
            </div>

            <div
              className="audience-strip"
              aria-label={content.hero.audiencesLabel}
            >
              {content.hero.audiences.map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>

            <div className="metric-grid">
              {content.hero.metrics.map((item, index) => (
                <article
                  key={item.label}
                  className="metric-card fade-up"
                  style={{ '--delay': `${index * 120}ms` }}
                >
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual fade-up" style={{ '--delay': '160ms' }}>
            <div className="dashboard-frame">
              <div className="dashboard-topbar">
                <div>
                  <p className="dashboard-label">{content.dashboard.label}</p>
                  <h2>{content.dashboard.title}</h2>
                </div>
                <span className="status-pill">{content.dashboard.status}</span>
              </div>

              <div className="dashboard-stack">
                <article className="dashboard-card dashboard-card-primary">
                  <div>
                    <p>{content.dashboard.primaryCard.label}</p>
                    <strong>{content.dashboard.primaryCard.value}</strong>
                  </div>
                  <div className="dashboard-aside">
                    <span>{content.dashboard.primaryCard.asideLabel}</span>
                    <strong>{content.dashboard.primaryCard.asideValue}</strong>
                  </div>
                </article>

                <div className="dashboard-grid">
                  {content.dashboard.secondaryCards.map((card) => (
                    <article className="dashboard-card" key={card.label}>
                      <p>{card.label}</p>
                      <strong>{card.value}</strong>
                      <span>{card.text}</span>
                    </article>
                  ))}
                </div>

                <article className="dashboard-card dashboard-card-sources">
                  <div className="sources-heading">
                    <div>
                      <p>{content.dashboard.sources.label}</p>
                      <strong>{content.dashboard.sources.title}</strong>
                    </div>
                    <span>{content.dashboard.sources.tag}</span>
                  </div>

                  <div className="sources-list">
                    {content.dashboard.sources.items.map((source) => (
                      <div className="source-item" key={source.label}>
                        <div className="source-meta">
                          <span>{source.label}</span>
                          <span>{source.value}</span>
                        </div>
                        <div className="source-bar">
                          <span style={{ width: source.value }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section intro-grid">
          <div className="section-heading fade-up">
            <span className="eyebrow">{content.positioning.eyebrow}</span>
            <h2>{content.positioning.title}</h2>
            <p>{content.positioning.text}</p>
          </div>

          <div className="selling-points">
            {content.positioning.points.map((item, index) => (
              <article
                key={item}
                className="selling-card fade-up"
                style={{ '--delay': `${index * 100}ms` }}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading fade-up">
            <span className="eyebrow">{content.platform.eyebrow}</span>
            <h2>{content.platform.title}</h2>
            <p>{content.platform.text}</p>
          </div>

          <div className="feature-grid">
            {content.platform.features.map((feature, index) => (
              <article
                key={feature.title}
                className="feature-card fade-up"
                style={{ '--delay': `${index * 90}ms` }}
              >
                <span className="feature-orb" aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="experience-panel panel">
            <div className="section-heading narrow fade-up">
              <span className="eyebrow">{content.workflow.eyebrow}</span>
              <h2>{content.workflow.title}</h2>
              <p>{content.workflow.text}</p>
            </div>

            <div className="experience-grid">
              <div className="journey-list">
                {content.workflow.journey.map((item, index) => (
                  <article
                    key={item.step}
                    className="journey-card fade-up"
                    style={{ '--delay': `${index * 120}ms` }}
                  >
                    <span>{item.step}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <aside
                className="signature-card fade-up"
                style={{ '--delay': '220ms' }}
              >
                <span className="eyebrow">{content.workflow.aside.eyebrow}</span>
                <h3>{content.workflow.aside.title}</h3>
                <p>{content.workflow.aside.text}</p>

                <ul className="signature-list">
                  {content.workflow.aside.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading fade-up">
            <span className="eyebrow">{content.pricing.eyebrow}</span>
            <h2>{content.pricing.title}</h2>
            <p>{content.pricing.text}</p>
          </div>

          <div className="pricing-grid">
            {content.pricing.plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`pricing-card fade-up ${
                  plan.recommended ? 'is-featured' : ''
                }`}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <div className="pricing-card-header">
                  <span className="pricing-badge">{plan.badge}</span>
                  {plan.recommended ? (
                    <span className="pricing-pill">
                      {content.pricing.featuredLabel}
                    </span>
                  ) : null}
                </div>

                <div className="pricing-identity">
                  <h3>{plan.name}</h3>
                  <div className="pricing-amount">
                    <strong>{plan.price}</strong>
                    <span>{plan.subtitle}</span>
                  </div>
                  <p>{plan.description}</p>
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className="button button-pricing" href="#contact">
                  {plan.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="upsell-note fade-up" style={{ '--delay': '240ms' }}>
            {content.pricing.addOns}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-panel panel fade-up">
            <div>
              <span className="eyebrow">{content.cta.eyebrow}</span>
              <h2>{content.cta.title}</h2>
              <p>{content.cta.text}</p>
            </div>

            <div className="cta-actions">
              <a className="button button-solid" href="#pricing">
                {content.cta.primary}
              </a>
              <a className="button button-ghost" href="mailto:sales@o7digital.com">
                {content.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
