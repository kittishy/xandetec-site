import { brands } from '@/data/site';

export function Brands() {
  return (
    <section className="brands" aria-labelledby="marcas-title">
      <div className="container brands__inner">
        <header className="brands__head">
          <h2 className="brands__label" id="marcas-title">
            Fabricantes e Equipamentos Atendidos
          </h2>
          <p className="brands__subtitle">
            Instalação e manutenção técnica seguindo os manuais e diretrizes dos principais fabricantes
          </p>
        </header>

        <ul className="brands__grid">
          {brands.map((brand) => (
            <li className="brand-item" key={brand.name}>
              <strong className="brand-item__name">{brand.name}</strong>
              <span className="brand-item__role">{brand.role}</span>
            </li>
          ))}
        </ul>

        <footer className="brands__foot">
          <p>
            Relação de marcas e tecnologias atendidas conforme divulgação oficial da XandeTEC Soluções e Treinamentos.
          </p>
        </footer>
      </div>
    </section>
  );
}
