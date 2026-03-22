import './App.css'

export default function O7LandingPage() {
  const packages = [
    {
      name: 'Core',
      price: '$99',
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
      price: '$249',
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
      name: 'Scale',
      price: 'Custom',
      subtitle: '/plan',
      description:
        'For companies that need multi-team visibility, deeper configuration, and a premium implementation path without legacy CRM sprawl.',
      features: [
        'Advanced permissions',
        'Multi-team workspaces',
        'Custom reporting structure',
        'Automation design support',
        'Data migration assistance',
        'Dedicated success support',
      ],
      cta: 'Talk to Sales',
      badge: 'Tailored',
      recommended: false,
    },
  ]

  const features = [
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
  ]

  const metrics = [
    { label: 'CRM scope', value: 'End-to-end' },
    { label: 'Team model', value: 'B2B + B2C' },
    { label: 'Operating layer', value: '1 workspace' },
    { label: 'Adoption pace', value: 'Weeks' },
  ]

  const journey = [
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
  ]

  const sources = [
    { label: 'Inbound forms', value: '82%' },
    { label: 'Outbound outreach', value: '67%' },
    { label: 'Referrals', value: '74%' },
  ]

  const audiences = [
    'B2B sales teams',
    'B2C operators',
    'Service businesses',
    'Growth-focused companies',
  ]

  const sellingPoints = [
    'Full CRM coverage without enterprise clutter',
    'A product teams can adopt quickly and use daily',
    'One system for B2B and B2C customer workflows',
    'Premium experience with a lighter pricing model',
  ]

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
            <small>Complete B2B/B2C CRM</small>
          </span>
        </a>

        <nav className="header-nav" aria-label="Primary navigation">
          <a href="#features">Platform</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Demo</a>
        </nav>

        <a className="button button-ghost header-cta" href="#contact">
          Book a demo
        </a>
      </header>

      <main className="landing-page" id="top">
        <section className="hero panel">
          <div className="hero-copy fade-up">
            <span className="eyebrow">
              Premium minimal CRM for B2B and B2C teams
            </span>

            <h1>
              The complete CRM without
              <span> enterprise bloat.</span>
            </h1>

            <p className="hero-text">
              O7 gives growing teams one premium workspace to manage leads,
              clients, pipelines, follow-up, automation, and reporting without
              the clutter of legacy CRM platforms.
            </p>

            <div className="hero-actions">
              <a className="button button-solid" href="#contact">
                Book a demo
              </a>
              <a className="button button-ghost" href="#features">
                See the platform
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
                  <p className="dashboard-label">Live workspace</p>
                  <h2>Revenue and relationship view</h2>
                </div>
                <span className="status-pill">Execution ready</span>
              </div>

              <div className="dashboard-stack">
                <article className="dashboard-card dashboard-card-primary">
                  <div>
                    <p>Open opportunities</p>
                    <strong>128</strong>
                  </div>
                  <div className="dashboard-aside">
                    <span>This week</span>
                    <strong>+16 qualified</strong>
                  </div>
                </article>

                <div className="dashboard-grid">
                  <article className="dashboard-card">
                    <p>Tasks due today</p>
                    <strong>23</strong>
                    <span>5 need immediate follow-up</span>
                  </article>

                  <article className="dashboard-card">
                    <p>Won this month</p>
                    <strong>41</strong>
                    <span>Conversion pace improving</span>
                  </article>
                </div>

                <article className="dashboard-card dashboard-card-sources">
                  <div className="sources-heading">
                    <div>
                      <p>Channel mix</p>
                      <strong>Inbound, outbound, referrals</strong>
                    </div>
                    <span>Live performance</span>
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
            <h2>A premium CRM for teams that want clarity, not complexity.</h2>
            <p>
              O7 is positioned between bloated enterprise stacks and lightweight
              tools that stop short. It gives teams a complete CRM they can run
              seriously, without inheriting the friction, clutter, and admin
              overhead of older platforms.
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
              Everything you expect from a complete CRM, delivered in a cleaner
              system.
            </h2>
            <p>
              O7 covers customer management, sales execution, follow-up rhythm,
              workflow structure, and visibility across the team, while keeping
              the product lighter, clearer, and easier to run.
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
              <h2>Built for execution, not admin drag.</h2>
              <p>
                Most CRM platforms accumulate complexity over time. O7 is built
                to keep teams moving from capture to follow-up to conversion in
                a way that still feels controlled when volume increases.
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
                <span className="eyebrow">Why O7 feels different</span>
                <h3>A complete CRM your team can actually live in every day.</h3>
                <p>
                  O7 is designed for teams that need a serious operating layer
                  for sales and customer follow-up, but do not want to drag
                  around the complexity, training load, or pricing logic of a
                  traditional enterprise CRM.
                </p>

                <ul className="signature-list">
                  <li>Less admin overhead across daily workflow</li>
                  <li>Cleaner handoff between sales, marketing, and account teams</li>
                  <li>Better management visibility without reporting sprawl</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading fade-up">
            <span className="eyebrow">Pricing</span>
            <h2>Accessible pricing, premium positioning.</h2>
            <p>
              O7 is meant to feel lighter than enterprise CRM contracts while
              still giving teams a complete system they can grow into with
              confidence.
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
            Optional add-ons: onboarding, CRM structure design, data migration,
            custom automations, reporting setup, integrations, and premium
            support.
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta-panel panel fade-up">
            <div>
              <span className="eyebrow">Launch O7 CRM</span>
              <h2>Give your team a complete CRM they will actually use.</h2>
              <p>
                Position O7 as the premium CRM for companies that want full
                customer visibility, faster execution, and a cleaner operating
                system than the traditional market leaders.
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
