import BootstrapCarousel from '@/components/BootstrapCarousel';
import TopInfo from '@/components/TopInfo';
import Services from '@/components/Services';
import ParallaxImgTop from '@/components/ParallaxImgTop';
import Info from '@/components/Info';
import ParallaxImg from '@/components/ParallaxImg';
import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('@/components/ContactMap'), {
  ssr: false,
  loading: () => (
    <section className="ftco-section" aria-hidden>
      <div style={{ minHeight: 650 }} />
    </section>
  ),
});

// ISR: Revalidate co 1 godzinę (3600 sekund)
export const revalidate = 3600;

export default function Home() {

  return (
    <>
      <BootstrapCarousel />
      <TopInfo />
      <Services primary={false} />
      <ParallaxImgTop />
      <Info primary={false} />
      <ParallaxImg />
      <ContactMap />
    </>
  )
}
