'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowIcon, InstagramIcon, MenuIcon, PhoneIcon, WhatsappIcon } from './Icons';
import { links, site } from '@/data/site';

const navItems = [
  { href: '#frentes', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#registros', label: 'Trabalho em campo' },
  { href: '#como-funciona', label: 'Como funciona' },
];

export function Header() {
  const drawerRef = useRef<HTMLDetailsElement>(null);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.open = false;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDetailsElement>) => {
    if (e.key === 'Escape' && drawerRef.current?.open) {
      drawerRef.current.open = false;
      drawerRef.current.querySelector('summary')?.focus();
    }
  };

  return (
    <>
      <div className="utility">
        <div className="container utility__inner">
          <span className="utility__region">{site.regionLong}</span>
          <div className="utility__links">
            <a href={site.phoneTel}>
              <PhoneIcon width={13} height={13} />
              {site.phoneDisplay}
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer">
              <InstagramIcon width={14} height={14} />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <header className="header">
        <div className="container header__inner">
          <a className="header__brand" href="#inicio" aria-label={`${site.shortName} — início`}>
            <Image
              src="/images/logo-xandetec-alpha.webp"
              alt={`${site.shortName} — logotipo`}
              width={1560}
              height={392}
              priority
            />
          </a>

          <nav className="header__nav" aria-label="Navegação principal">
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="btn btn--wa btn--sm header__cta" href={links.geral} target="_blank" rel="noreferrer">
            <WhatsappIcon className="btn__icon" width={17} height={17} />
            Orçamento no WhatsApp
          </a>

          <details className="navdrawer" ref={drawerRef} onKeyDown={handleKeyDown}>
            <summary aria-haspopup="true">
              <MenuIcon />
              Menu
            </summary>
            <div className="navdrawer__panel">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} onClick={closeDrawer}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <a className="btn btn--wa btn--block" href={links.geral} target="_blank" rel="noreferrer" onClick={closeDrawer}>
                <WhatsappIcon width={17} height={17} />
                Orçamento no WhatsApp
              </a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
