import Image from 'next/image';
import { ArrowIcon, InstagramIcon } from './Icons';
import { evidence, site } from '@/data/site';

export function Gallery() {
  return (
    <section className="section gallery" id="registros" aria-labelledby="registros-title">
      <div className="container">
        <header className="gallery__header">
          <h2 id="registros-title">Nosso trabalho em campo</h2>
          <p className="lead lead--light">
            Registros de atendimentos técnicos, higienizações e equipamentos aplicados nos projetos em Jaraguá do Sul e região.
          </p>
        </header>

        <div className="gallery__grid">
          {evidence.map((item) => (
            <figure className={`gitem ${item.className}`} key={item.src}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 899px) 92vw, 44vw" />
              <figcaption>
                <span className="gitem__meta">{item.meta}</span>
                <span className="gitem__text">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <footer className="gallery__foot">
          <p>Confira mais instalações e rotina de atendimento no perfil oficial:</p>
          <a className="btn btn--ghost btn--sm" href={site.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon width={16} height={16} />
            <span>{site.instagramHandle}</span>
            <ArrowIcon width={13} height={13} />
          </a>
        </footer>
      </div>
    </section>
  );
}
