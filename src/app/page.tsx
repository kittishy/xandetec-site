import { About } from '@/components/About';
import { Brands } from '@/components/Brands';
import { CallToAction } from '@/components/CallToAction';
import { Faq } from '@/components/Faq';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Process } from '@/components/Process';
import { Services } from '@/components/Services';
import { SiteFooter } from '@/components/SiteFooter';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#frentes">
        Ir para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Brands />
        <Process />
        <Faq />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
