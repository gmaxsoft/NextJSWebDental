import dynamic from 'next/dynamic';
import BootstrapCarousel from '@/components/BootstrapCarousel';
import TopInfo from '@/components/TopInfo';
import Services from '@/components/Services';
import ParallaxImgTop from '@/components/ParallaxImgTop';
import Info from '@/components/Info';
import ParallaxImg from '@/components/ParallaxImg';

const ContactMap = dynamic(() => import('@/components/ContactMap'), { ssr: true });

// ISR: Revalidate co 1 godzinę (3600 sekund)
export const revalidate = 3600;

export default function Home() {

  return (
    <>
      <BootstrapCarousel />
      <TopInfo />
      <Services />
      <ParallaxImgTop />
      <Info />
      <ParallaxImg />
      <ContactMap />
    </>
  )
}
