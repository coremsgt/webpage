/* Core Modern Solutions — Marketing site screens
   Dark premium register. Composes the DS primitives from the bundle
   (window.CoreModernSolutionsDesignSystem_3e7ab2) plus a few inline
   Lucide-style icons. All sections exported to window for app.jsx. */

const DS = window.CoreModernSolutionsDesignSystem_3e7ab2;
const { Button, Badge, Card, StatCard, Tag, Avatar } = DS;

/* ---- inline Lucide-style icons (24x24, stroke 2) ---- */
const IS = { fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24" };
const Icon = {
  ArrowRight: (p) => <svg {...IS} {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Compass:    (p) => <svg {...IS} {...p}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  Globe:      (p) => <svg {...IS} {...p}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  Cpu:        (p) => <svg {...IS} {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  Check:      (p) => <svg {...IS} {...p}><polyline points="20 6 9 17 4 12"/></svg>,
};

/* ============================= NAV ============================= */
function SiteNav({ onContact }) {
  return (
    <nav className="mk-nav">
      <div className="mk-nav__brand">
        <img src="assets/logos/Logo_brandmark_light.svg" alt="Core" className="mk-nav__mark"/>
        <span className="mk-nav__name">Core Modern Solutions</span>
      </div>
      <ul className="mk-nav__links">
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#valores">Valores</a></li>
        <li><a href="#proceso">Proceso</a></li>
      </ul>
      <Button variant="primary" size="sm" onClick={onContact} iconRight={<Icon.ArrowRight/>}>Agendar diagnóstico</Button>
    </nav>
  );
}

/* ============================= HERO ============================= */
function Hero({ onContact }) {
  return (
    <header className="mk-hero">
      <div className="mk-hero__glow"/>
      <div className="mk-hero__inner">
        <div className="mk-eyebrow" style={{color:'var(--gold-bright)'}}>Brand Strategy & Business Modernization · Guatemala</div>
        <img className="mk-hero__mark" src="assets/logos/Logo_brandmark_light.svg" alt="Core CO brandmark"/>
        <h1 className="mk-hero__title">No le vendemos diseño<br/>a empresas. Le damos<br/><strong>claridad a empresarios.</strong></h1>
        <p className="mk-hero__desc">Construimos la estructura de marca, presencia digital y sistemas que tu negocio necesita para crecer con intención — no por accidente.</p>
        <div className="mk-hero__cta">
          <Button variant="primary" size="lg" onClick={onContact} iconRight={<Icon.ArrowRight/>}>Agendar diagnóstico</Button>
          <Button variant="ghost" size="lg" as="a" href="#servicios" style={{color:'#fff'}}>Ver servicios</Button>
        </div>
        <div className="mk-hero__tags">
          <Tag>Brand Foundation</Tag><Tag>Presencia Digital</Tag><Tag>Sistemas & Automatización</Tag>
        </div>
      </div>
    </header>
  );
}

/* =========================== SERVICES =========================== */
const SERVICES = [
  { n:'PILAR 01', icon:<Icon.Compass/>, name:'Brand Foundation', tag:'Identidad', body:'La base de marca que le dice al mundo quién eres y por qué confiar en vos — antes de invertir en lo demás.', items:['Brand audit completo','Brand book / manual de marca','Sistema de identidad visual','Estrategia de posicionamiento'] },
  { n:'PILAR 02', icon:<Icon.Globe/>, name:'Presencia Digital', tag:'Visibilidad', body:'Optimizamos cada punto de contacto digital para que cuando te busquen, te encuentren y confíen al instante.', items:['Optimización de perfiles','Estrategia de contenido','Fichas y materiales de venta','Perfil de Google Business'] },
  { n:'PILAR 03', icon:<Icon.Cpu/>, name:'Sistemas & Automatización', tag:'Eficiencia', body:'Reemplazamos el caos operativo con flujos inteligentes — para que el negocio funcione sin depender del dueño.', items:['CRM y pipeline de ventas','Automatizaciones (Make / Zapier)','SOPs y documentación','Dashboards de seguimiento'] },
];
function Services() {
  return (
    <section id="servicios" className="mk-section">
      <div className="mk-shead">
        <div className="mk-eyebrow mk-eyebrow--blue">02 — Servicios</div>
        <h2 className="mk-stitle">Tres pilares.<br/><strong>Un sistema conectado.</strong></h2>
        <p className="mk-sdesc">El brand book alimenta las redes, las redes alimentan el CRM, el CRM alimenta las ventas. Cada entregable está conectado.</p>
      </div>
      <div className="mk-svc-grid">
        {SERVICES.map((s) => (
          <div className="mk-svc" key={s.n}>
            <div className="mk-svc__icon">{s.icon}</div>
            <div className="mk-svc__num">{s.n}</div>
            <h3 className="mk-svc__name">{s.name}</h3>
            <Badge tone="blue">{s.tag}</Badge>
            <p className="mk-svc__body">{s.body}</p>
            <ul className="mk-svc__list">
              {s.items.map((i)=>(<li key={i}><Icon.Check className="mk-svc__check"/>{i}</li>))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================ VALUES ============================ */
const VALUES = [
  { num:'01', name:'Autoridad', accent:'var(--blue-bright)', body:'Confianza basada en datos y experiencia. Claridad para convencer, nunca jerga para impresionar.' },
  { num:'02', name:'Confianza', accent:'var(--gold-bright)', body:'Primero la persona, después el negocio. La relación es nuestro activo de mayor conversión.' },
  { num:'03', name:'Crecimiento', accent:'var(--green-bright)', body:'Pensamos en sistemas. Cada proyecto mueve el negocio hacia adelante de forma medible.' },
  { num:'04', name:'Precisión', accent:'var(--red-bright)', body:'Claridad sobre complejidad. Cada palabra y cada pixel se gana su lugar. Sin relleno.' },
];
function Values() {
  return (
    <section id="valores" className="mk-section">
      <div className="mk-shead">
        <div className="mk-eyebrow mk-eyebrow--blue">03 — Valores</div>
        <h2 className="mk-stitle">En qué <strong>creemos.</strong></h2>
        <p className="mk-sdesc">Enraizados en los principios de Dale Carnegie. No son aspiracionales — son operativos.</p>
      </div>
      <div className="mk-val-grid">
        {VALUES.map((v)=>(
          <div className="mk-val" key={v.num}>
            <div className="mk-val__bar" style={{background:v.accent}}/>
            <div className="mk-val__num">{v.num}</div>
            <h3 className="mk-val__name">{v.name}</h3>
            <p className="mk-val__body">{v.body}</p>
          </div>
        ))}
      </div>
      <div className="mk-stats">
        <StatCard value="Q480K" label="Ventas proyectadas / año" accent="green" delta="+18%"/>
        <StatCard value="4.2 meses" label="Recuperación de inversión" accent="gold"/>
        <StatCard value="3" label="Pilares de servicio" accent="blue"/>
        <StatCard value="GT" label="Mercado principal" accent="ink"/>
      </div>
    </section>
  );
}

/* ============================ PROCESS =========================== */
const STEPS = [
  ['1. Diagnóstico','Brand audit completo del cliente'],
  ['2. Estrategia','Plan con fases, entregables y ROI'],
  ['3. Ejecución','Construcción por fases aprobadas'],
  ['4. Entrega','Activos listos para usar'],
  ['5. Seguimiento','Ajuste y expansión del sistema'],
];
function Process() {
  return (
    <section id="proceso" className="mk-section">
      <div className="mk-shead">
        <div className="mk-eyebrow mk-eyebrow--blue">04 — Proceso</div>
        <h2 className="mk-stitle">Diagnosticamos primero.<br/><strong>Entregamos después.</strong></h2>
      </div>
      <div className="mk-steps">
        {STEPS.map(([t,d],i)=>(
          <div className="mk-step" key={t}>
            <div className="mk-step__idx">{String(i+1).padStart(2,'0')}</div>
            <div className="mk-step__t">{t.replace(/^\d+\.\s/,'')}</div>
            <div className="mk-step__d">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== CTA ============================= */
function CTA({ onContact }) {
  return (
    <section className="mk-cta">
      <div className="mk-cta__inner">
        <h2 className="mk-cta__title">¿Listo para crecer<br/>por estrategia, no por accidente?</h2>
        <p className="mk-cta__desc">El empresario correcto siente que lo entendemos en los primeros 10 minutos.</p>
        <Button variant="gold" size="lg" onClick={onContact} iconRight={<Icon.ArrowRight/>}>Agendar diagnóstico gratuito</Button>
      </div>
    </section>
  );
}

/* ============================ FOOTER ============================ */
function SiteFooter() {
  return (
    <footer className="mk-footer">
      <div>
        <img className="mk-footer__mark" src="assets/logos/Logo_brandmark_light.svg" alt="Core"/>
        <img className="mk-footer__word" src="assets/logos/Logo_wordmark_light.svg" alt="CORE"/>
        <p className="mk-footer__tag">Designed with purpose. Built to convert.</p>
      </div>
      <div className="mk-footer__right">
        <a href="mailto:admin@coremsgt.com" className="mk-footer__email">admin@coremsgt.com</a>
        <div className="mk-footer__meta">Guatemala · 2026</div>
      </div>
    </footer>
  );
}

Object.assign(window, { SiteNav, Hero, Services, Values, Process, CTA, SiteFooter, MkIcon: Icon });
