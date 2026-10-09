import Image from 'next/image';
import { ArrowIcon, InstagramIcon } from './Icons';
import { fleetPhoto, pillars, site } from '@/data/site';

export function About() {
  return (
    <section className="section about" id="sobre" aria-labelledby="sobre-title">
      <div className="container about__grid">
        <div className="about__content">
          <header className="about__header">
            <h2 id="sobre-title">Estrutura e padrão técnico de atendimento</h2>
            <p className="lead">
              A <strong>{site.name}</strong> atua desde {site.since} combinando padrão técnico rigoroso,
              clareza de escopo e atendimento próximo a clientes residenciais, comerciais e prediais.
            </p>
          </header>

          <div className="about__pillars">
            {pillars.map((pillar) => (
              <div className="pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="about__action">
            <a className="btn btn--outline" href={site.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon width={17} height={17} />
              <span>Ver dia a dia no Instagram {site.instagramHandle}</span>
              <ArrowIcon width={13} height={13} />
            </a>
          </div>
        </div>

        <aside className="about__visual">
          <div className="about__photo-container">
            <figure className="about__figure">
              <Image
                src={fleetPhoto.src}
                alt={fleetPhoto.alt}
                fill
                sizes="(max-width: 899px) 92vw, 44vw"
              />
              <figcaption className="about__caption">
                <strong>Frota Própria XandeTEC</strong>
                <span>Veículos identificados e equipados com ferramental técnico para atendimento local e regional</span>
              </figcaption>
            </figure>
          </div>
        </aside>
      </div>
    </section>
  );
}
