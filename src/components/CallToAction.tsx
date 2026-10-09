import Image from 'next/image';
import { ArrowIcon, WhatsappIcon } from './Icons';
import { links, site } from '@/data/site';

export function CallToAction() {
  return (
    <section className="cta" id="contato" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div className="cta__copy">
          <span className="cta__region">{site.regionLong}</span>
          <h2 id="cta-title">
            Pronto para resolver sua climatização, segurança ou elétrica?
          </h2>
          <p className="lead lead--light">
            Entre em contato pelo WhatsApp. Envie fotos do local ou descreva o que você precisa: nossa equipe orienta a solução ideal e encaminha o orçamento sem compromisso.
          </p>

          <div className="cta__actions">
            <a className="btn btn--wa" href={links.geral} target="_blank" rel="noreferrer">
              <WhatsappIcon width={20} height={20} />
              <span>Iniciar conversa no WhatsApp</span>
              <ArrowIcon width={16} height={16} />
            </a>
            <a className="cta__phone-link" href={site.phoneTel}>
              <span>Ou ligue diretamente:</span>
              <strong>{site.phoneDisplay}</strong>
            </a>
          </div>
        </div>

        <aside className="cta__card">
          <div className="cta__brand-box">
            <Image
              src="/images/logo-xandetec.webp"
              alt={`${site.shortName} — logotipo oficial`}
              width={785}
              height={210}
              sizes="(max-width: 899px) 60vw, 240px"
            />
          </div>
          <div className="cta__card-body">
            <p className="cta__card-motto">«{site.tagline}»</p>
            <p className="cta__card-sub">Atendimento técnico em Jaraguá do Sul e região desde {site.since}.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
