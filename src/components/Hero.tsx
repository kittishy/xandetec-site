import Image from 'next/image';
import { ArrowIcon, CheckIcon, WhatsappIcon } from './Icons';
import { links, site } from '@/data/site';

const highlights = [
  'Atendimento residencial, comercial e predial',
  'Frota própria e equipe uniformizada',
];

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__meta">
            <span className="hero__since">Desde {site.since} · Jaraguá do Sul e região</span>
          </div>

          <h1>
            Climatização, segurança e elétrica em Jaraguá do Sul.
          </h1>

          <p className="lead lead--light">
            Instalação, manutenção e infraestrutura técnica para residências e empresas com equipe uniformizada e ferramental de campo.
          </p>

          <div className="hero__actions">
            <a className="btn btn--wa" href={links.geral} target="_blank" rel="noreferrer">
              <WhatsappIcon width={19} height={19} />
              Solicitar orçamento no WhatsApp
            </a>
            <a className="btn btn--ghost" href="#frentes">
              Conhecer os serviços
              <ArrowIcon width={15} height={15} />
            </a>
          </div>

          <ul className="hero__facts">
            {highlights.map((item) => (
              <li key={item}>
                <CheckIcon width={15} height={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__media">
          <div className="hero__frame">
            <Image
              src="/images/display/equipe-em-servico.jpg"
              alt="Técnicos da XandeTEC executando manutenção técnica em condensadora"
              fill
              priority
              sizes="(max-width: 899px) 92vw, 48vw"
            />
            <div className="hero__frame-caption">
              <p>Instalação e manutenção técnica com ferramental especializado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
