import { faqs } from '@/data/site';

export function Faq() {
  return (
    <section className="section faq" id="duvidas" aria-labelledby="faq-title">
      <div className="container">
        <header className="section-header">
          <h2 id="faq-title">Perguntas frequentes sobre os serviços</h2>
          <p className="lead">
            Dúvidas comuns sobre instalação, manutenção preventiva, contratos corporativos de PMOC
            e área de cobertura regional.
          </p>
        </header>

        <div className="faq__list">
          {faqs.map(([question, answer]) => (
            <details className="faq-item" key={question}>
              <summary className="faq-item__question">{question}</summary>
              <div className="faq-item__answer">
                <p>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
