/* Marketing site — app shell + interactive contact modal */
const DSA = window.CoreModernSolutionsDesignSystem_3e7ab2;
const { Button: BtnA, Input: InputA, Select: SelectA, Callout: CalloutA } = DSA;
const { useState } = React;

function ContactModal({ open, onClose }) {
  const [sent, setSent] = useState(false);
  if (!open) return null;
  return (
    <div className="mk-modal" onClick={onClose}>
      <div className="mk-modal__card" onClick={(e)=>e.stopPropagation()}>
        <button className="mk-modal__x" onClick={onClose} aria-label="Cerrar">✕</button>
        {!sent ? (
          <React.Fragment>
            <div className="mk-eyebrow mk-eyebrow--blue" style={{marginBottom:10}}>Diagnóstico gratuito</div>
            <h3 className="mk-modal__title">Contanos de tu negocio</h3>
            <p className="mk-modal__sub">Respondemos en menos de 24 horas. Sin compromiso.</p>
            <div className="mk-form">
              <InputA label="Nombre" placeholder="Tu nombre"/>
              <InputA label="Empresa" placeholder="Nombre comercial"/>
              <InputA label="Correo" type="email" placeholder="vos@empresa.com"/>
              <SelectA label="Industria" placeholder="Elegí una" options={['Retail','Alimentación','Servicios profesionales','Construcción','Manufactura','Salud','Educación','Logística']}/>
            </div>
            <div style={{marginTop:18}}>
              <BtnA variant="primary" block onClick={()=>setSent(true)}>Enviar solicitud</BtnA>
            </div>
          </React.Fragment>
        ) : (
          <div style={{padding:'8px 0'}}>
            <h3 className="mk-modal__title">¡Gracias!</h3>
            <CalloutA tone="success" title="Solicitud recibida">Te contactamos en menos de 24 horas para agendar tu diagnóstico.</CalloutA>
            <div style={{marginTop:16}}><BtnA variant="ghost" onClick={onClose}>Cerrar</BtnA></div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [open, setOpen] = useState(false);
  const contact = () => setOpen(true);
  return (
    <div className="core-dark mk-root">
      <SiteNav onContact={contact}/>
      <Hero onContact={contact}/>
      <hr className="mk-divider"/>
      <Services/>
      <hr className="mk-divider"/>
      <Values/>
      <hr className="mk-divider"/>
      <Process/>
      <CTA onContact={contact}/>
      <SiteFooter/>
      <ContactModal open={open} onClose={()=>setOpen(false)}/>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
