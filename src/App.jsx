import './App.css'

export default function O7SuitesLandingPage() {
  const packages = [
    {
      name: 'Starter',
      price: '$149',
      subtitle: '/month',
      description:
        'Ideal for small boutique hotels, villas, and independent hospitality operators starting to centralize leads and guest follow-up.',
      features: [
        '1 property',
        'Up to 3 users',
        'Lead capture dashboard',
        'Basic guest pipeline',
        'WhatsApp-ready contact records',
        'Email inquiry tracking',
        'Monthly reporting overview',
      ],
      cta: 'Start with Starter',
      badge: 'Lean launch',
      recommended: false,
    },
    {
      name: 'Professional',
      price: '$349',
      subtitle: '/month',
      description:
        'Built for growing hospitality brands that need a premium booking pipeline, staff visibility, and multi-channel guest management.',
      features: [
        'Up to 5 properties',
        'Up to 10 users',
        'Advanced sales pipeline',
        'Reservation follow-up workflows',
        'Task management by team',
        'Revenue and conversion dashboard',
        'Centralized contact timeline',
        'Priority onboarding support',
      ],
      cta: 'Choose Professional',
      badge: 'Best seller',
      recommended: true,
    },
    {
      name: 'Executive',
      price: '$799',
      subtitle: '/month',
      description:
        'For luxury hotel groups and multi-property operators wanting a polished operating layer with automation, analytics, and high-end support.',
      features: [
        'Unlimited properties',
        'Unlimited users',
        'Multi-property command center',
        'Custom pipelines and statuses',
        'Executive performance dashboards',
        'Automation rules',
        'VIP support and consulting',
        'White-glove implementation',
      ],
      cta: 'Talk to Sales',
      badge: 'White-glove',
      recommended: false,
    },
  ]

  const features = [
    {
      title: 'Luxury hospitality pipeline',
      text: 'Track every inquiry from first contact to reservation, deposit, stay, follow-up, and repeat guest opportunity in one elegant flow.',
    },
    {
      title: 'Multi-property visibility',
      text: 'See villas, suites, hotel clusters, and sales teams from one premium dashboard without losing local operational detail.',
    },
    {
      title: 'Revenue-focused CRM',
      text: 'O7 Suites CRM is designed to increase direct bookings, improve conversion, and reduce missed follow-up, not just store contacts.',
    },
    {
      title: 'WhatsApp + email workflow ready',
      text: 'Organize guest communications, assign next actions, and maintain a cleaner sales rhythm across reservations and concierge teams.',
    },
    {
      title: 'Executive reporting',
      text: 'Give owners and directors a clean command view of lead sources, team activity, pipeline health, and booking performance.',
    },
    {
      title: 'Tailored for premium brands',
      text: 'Designed for boutique hotels, luxury villas, and hospitality groups that need a refined image as much as operational control.',
    },
  ]

  const metrics = [
    { label: 'Guest visibility', value: '360°' },
    { label: 'Response standard', value: 'Same-day' },
    { label: 'Portfolio control', value: '1 hub' },
    { label: 'Sales posture', value: 'Revenue-led' },
  ]

  const journey = [
    {
      step: '01',
      title: 'Capture every inquiry cleanly',
      text: 'Website forms, WhatsApp conversations, referral partners, and direct emails all land inside the same commercial intake layer.',
    },
    {
      step: '02',
      title: 'Guide teams toward the next action',
      text: 'Reservations and sales staff always know what is waiting, who owns it, and what should happen before a lead goes cold.',
    },
    {
      step: '03',
      title: 'Report with executive clarity',
      text: 'Directors get pipeline health, source quality, workload, and booking visibility without chasing spreadsheets across properties.',
    },
  ]

  const sources = [
    { label: 'Website direct', value: '82%' },
    { label: 'WhatsApp inquiries', value: '67%' },
    { label: 'Partner referrals', value: '74%' },
  ]

  const audiences = [
    'Boutique hotels',
    'Luxury villas',
    'Branded residences',
    'Hospitality groups',
  ]

  const sellingPoints = [
    'Reduce lost leads caused by delayed responses',
    'Create a more polished and accountable commercial process',
    'Centralize reservation, sales, and owner visibility',
    'Support growth without losing local operational control',
  ]

  return (
    <div className="page-shell">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="ambient ambient-c" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="O7 Suites CRM">
          <span className="brand-mark">O7</span>
          <span className="brand-copy">
            <strong>O7 Suites CRM</strong>
            <small>Hospitality sales platform</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#features">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Demo</a>
        </nav>

        <a className="button button-ghost header-cta" href="#contact">
          Request a demo
        </a>
      </header>

      <main className="landing-page" id="top">
        <section className="hero panel">
          <div className="hero-copy fade-up">
            <span className="eyebrow">
              Premium CRM for villas, suites, and boutique hospitality
            </span>

            <h1>
              The premium CRM for
              <span> luxury hospitality brands</span>
              that want sharper follow-up and stronger direct bookings.
            </h1>

            <p className="hero-text">
              O7 Suites CRM centralizes inquiries, reservations, guest
              communications, team follow-up, and commercial performance in one
              elegant operating layer built for premium hospitality.
            </p>

            <div className="hero-actions">
              <a className="button button-solid" href="#pricing">
                View packages
              </a>
              <a className="button button-ghost" href="#features">
                Explore platform
              </a>
            </div>

            <div className="audience-strip" aria-label="Target audiences">
              {audiences.map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>

            <div className="metric-grid">
              {metrics.map((item, index) => (
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
                  <p className="dashboard-label">Executive overview</p>
                  <h2>Commercial command center</h2>
                </div>
                <span className="status-pill">Live pipeline</span>
              </div>

              <div className="dashboard-stack">
                <article className="dashboard-card dashboard-card-primary">
                  <div>
                    <p>Active inquiries</p>
                    <strong>128</strong>
                  </div>
                  <div className="dashboard-aside">
                    <span>This week</span>
                    <strong>+16 new leads</strong>
                  </div>
                </article>

                <div className="dashboard-grid">
                  <article className="dashboard-card">
                    <p>Pending follow-up</p>
                    <strong>23</strong>
                    <span>5 require same-day action</span>
                  </article>

                  <article className="dashboard-card">
                    <p>Confirmed stays</p>
                    <strong>41</strong>
                    <span>Pipeline moving well</span>
                  </article>
                </div>

                <article className="dashboard-card dashboard-card-sources">
                  <div className="sources-heading">
                    <div>
                      <p>Top sources</p>
                      <strong>
                        WhatsApp, direct website, referral partners
                      </strong>
                    </div>
                    <span>Conversion view</span>
                  </div>

                  <div className="sources-list">
                    {sources.map((source) => (
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
            <span className="eyebrow">Positioning</span>
            <h2>
              A polished commercial layer built for hospitality teams that sell
              trust, speed, and consistency.
            </h2>
            <p>
              O7 Suites CRM sits between luxury brand image and operational
              discipline. It helps directors, reservation agents, and owners
              keep control over commercial activity without scattered
              spreadsheets or fragmented messages.
            </p>
          </div>

          <div className="selling-points">
            {sellingPoints.map((item, index) => (
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
            <span className="eyebrow">Platform value</span>
            <h2>
              More than a CRM. A premium booking and relationship engine for
              high-touch hospitality.
            </h2>
            <p>
              The platform is designed to help teams look more serious, follow
              up faster, convert more cleanly, and build a stronger direct-sales
              operation over time.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
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
              <span className="eyebrow">How it works</span>
              <h2>
                Sell a cleaner commercial operation, not just another software
                subscription.
              </h2>
              <p>
                The strongest angle for O7 Suites CRM is operational maturity:
                every inquiry is tracked, every follow-up is assigned, and every
                property can be reviewed from a single command layer.
              </p>
            </div>

            <div className="experience-grid">
              <div className="journey-list">
                {journey.map((item, index) => (
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
                <span className="eyebrow">Operational edge</span>
                <h3>Made for brands that need polish on the outside and rigor on the inside.</h3>
                <p>
                  Position O7 Suites CRM as the premium commercial backbone for
                  villas, boutique hotels, and multi-property groups that want
                  to increase direct bookings and professionalize guest
                  follow-up.
                </p>

                <ul className="signature-list">
                  <li>Clean handoff between sales, reservations, and guest service</li>
                  <li>Better accountability across multi-property teams</li>
                  <li>Stronger owner reporting without manual chasing</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading fade-up">
            <span className="eyebrow">Pricing</span>
            <h2>Packages designed to sell O7 Suites CRM clearly.</h2>
            <p>
              Start with a clean SaaS offer, then upsell implementation,
              migration, data setup, automations, or support retainers depending
              on the client profile.
            </p>
          </div>

          <div className="pricing-grid">
            {packages.map((pkg, index) => (
              <article
                key={pkg.name}
                className={`pricing-card fade-up ${
                  pkg.recommended ? 'is-featured' : ''
                }`}
                style={{ '--delay': `${index * 120}ms` }}
              >
                <div className="pricing-card-header">
                  <span className="pricing-badge">{pkg.badge}</span>
                  {pkg.recommended ? (
                    <span className="pricing-pill">Most popular</span>
                  ) : null}
                </div>

                <div className="pricing-identity">
                  <h3>{pkg.name}</h3>
                  <div className="pricing-amount">
                    <strong>{pkg.price}</strong>
                    <span>{pkg.subtitle}</span>
                  </div>
                  <p>{pkg.description}</p>
                </div>

                <ul className="pricing-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a className="button button-pricing" href="#contact">
                  {pkg.cta}
                </a>
              </article>
            ))}
          </div>

          <div className="upsell-note fade-up" style={{ '--delay': '240ms' }}>
            Optional upsells: onboarding fee, CRM setup, property import, staff
            training, automation design, dashboard customization, WhatsApp
            integration, branded domain, and premium support.
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-panel panel fade-up">
            <div>
              <span className="eyebrow">Launch O7 Suites CRM</span>
              <h2>Give premium hospitality teams a sharper commercial backbone.</h2>
              <p>
                Position the product as the command center for direct inquiries,
                follow-up discipline, and multi-property visibility, then close
                with a premium implementation experience.
              </p>
            </div>

            <div className="cta-actions">
              <a className="button button-solid" href="#pricing">
                See plans
              </a>
              <a className="button button-ghost" href="mailto:sales@o7digital.com">
                Request a demo
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
