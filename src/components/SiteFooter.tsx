import Image from 'next/image';
import { ArrowIcon, InstagramIcon, WhatsappIcon } from './Icons';
import { links, site } from '@/data/site';

const footerNav = [
  { href: '#frentes', label: 'Frentes de atendimento' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#registros', label: 'Registros de campo' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#duvidas', label: 'Dúvidas frequentes' },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <a className="footer__brand" href="#inicio" aria-label={`${site.shortName} — voltar ao início`}>
            <Image src="/images/logo-xandetec-alpha.webp" alt={`${site.shortName} — logotipo`} width={1560} height={392} />
          </a>
          <p className="footer__tag">
            {site.name}. Climatização, sistemas de segurança, elétrica, portão eletrônico, PMOC, laudos
            técnicos, TRT e treinamentos em {site.regionLong}.
          </p>
        </div>

        <nav className="footer__col" aria-label="Navegação do rodapé">
          <h3>Navegação</h3>
          <ul>
            {footerNav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h3>Contato</h3>
          <ul>
            <li>
              <a href={links.geral} target="_blank" rel="noreferrer">
                <WhatsappIcon width={16} height={16} />
                <span>WhatsApp {site.whatsappNumber}</span>
              </a>
            </li>
            <li>
              <a href={site.phoneTel}>
                <span>Telefone {site.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer">
                <InstagramIcon width={16} height={16} />
                <span>Instagram {site.instagramHandle}</span>
              </a>
            </li>
            <li>
              <a href="#contato">Solicitar orçamento</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {site.since}–2026 {site.name}
        </span>
        <span>{site.regionLong}</span>
        <span>Atendimento residencial, comercial e predial</span>
      </div>
    </footer>
  );
}
