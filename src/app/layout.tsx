import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://xandetec-solucoes.vercel.app'),
  title: 'XandeTEC | Climatização, segurança eletrônica e elétrica em Jaraguá do Sul',
  description:
    'XandeTEC Soluções e Treinamentos: instalação e manutenção de ar-condicionado, segurança eletrônica, instalações elétricas, portão eletrônico e documentação técnica em Jaraguá do Sul e região.',
  robots: { index: false, follow: false },
  authors: [{ name: 'XandeTEC Soluções e Treinamentos' }],
  openGraph: {
    title: 'XandeTEC | Climatização, segurança e elétrica em Jaraguá do Sul',
    description:
      'Instalação e manutenção de ar-condicionado, segurança eletrônica, elétrica e documentação técnica em Jaraguá do Sul e região.',
    type: 'website',
    locale: 'pt-BR',
    images: [
      {
        url: '/images/display/equipe-em-servico.jpg',
        width: 640,
        height: 352,
        alt: 'XandeTEC Soluções — Equipe técnica em campo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XandeTEC Soluções e Treinamentos',
    description: 'Climatização, segurança eletrônica e elétrica em Jaraguá do Sul e região.',
    images: ['/images/display/equipe-em-servico.jpg'],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
