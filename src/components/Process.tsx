import { steps } from '@/data/site';

export function Process() {
  return (
    <section className="section process" id="como-funciona" aria-labelledby="processo-title">
      <div className="container">
        <header className="section-header">
          <h2 id="processo-title">Como funciona o atendimento da XandeTEC</h2>
          <p className="lead">
            Fluxo direto e sem complicação. Do diagnóstico técnico à execução com orientação e suporte.
          </p>
        </header>

        <div className="process__track">
          {steps.map((item) => (
            <div className="process-step" key={item.step}>
              <div className="process-step__indicator">
                <span className="process-step__num">{item.step}</span>
                <span className="process-step__bar" aria-hidden="true" />
              </div>
              <div className="process-step__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
