import { ArrowIcon, WhatsappIcon } from './Icons';
import { companionServices, primaryService, site } from '@/data/site';

export function Services() {
  return (
    <section className="section services" id="frentes" aria-labelledby="frentes-title">
      <div className="container">
        <header className="section-header">
          <h2 id="frentes-title">Serviços</h2>
          <p className="lead">
            Soluções completas em climatização, segurança eletrônica, instalações elétricas e documentação técnica em Jaraguá do Sul e região.
          </p>
        </header>

        {/* Bloco de Destaque: Climatização */}
        <article className="service-featured" aria-labelledby="climatizacao-title">
          <div className="service-featured__content">
            <span className="service-featured__scope">{primaryService.scope}</span>
            <h3 id="climatizacao-title">{primaryService.title} Residencial e Comercial</h3>
            <p className="service-featured__description">{primaryService.text}</p>

            <ul className="service-featured__deliverables">
              {primaryService.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="service-featured__action">
              <a className="btn btn--wa" href={primaryService.link} target="_blank" rel="noreferrer">
                <WhatsappIcon width={17} height={17} />
                <span>Orçamento para climatização</span>
                <ArrowIcon width={13} height={13} />
              </a>
            </div>
          </div>
        </article>

        {/* Frentes Complementares */}
        <div className="services__companion-header">
          <h3>Outras frentes técnicas</h3>
          <p>Segurança eletrônica, elétrica dedicada, automação e conformidade legal.</p>
        </div>

        <div className="services__companion-grid">
          {companionServices.map((service) => (
            <article className="service-compact" key={service.id}>
              <div className="service-compact__head">
                <span className="service-compact__scope">{service.scope}</span>
                <h4>{service.title}</h4>
              </div>
              <p className="service-compact__text">{service.text}</p>
              <div className="service-compact__foot">
                <a className="service-compact__cta" href={service.link} target="_blank" rel="noreferrer">
                  <WhatsappIcon width={15} height={15} />
                  <span>Consultar {service.title}</span>
                  <ArrowIcon width={12} height={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="services__notice">
          <p>
            <strong>Atendimento regional:</strong> Cobertura em {site.regionLong}. Consulte sua demanda pelo WhatsApp.
          </p>
        </aside>
      </div>
    </section>
  );
}
