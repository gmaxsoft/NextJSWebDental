import dynamic from 'next/dynamic';
import BootstrapCarousel from '@/components/BootstrapCarousel';
import TopInfo from '@/components/TopInfo';

const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="ftco-section" aria-hidden />,
});
const ParallaxImgTop = dynamic(() => import('@/components/ParallaxImgTop'), {
  loading: () => <div className="ftco-section" aria-hidden />,
});
const Info = dynamic(() => import('@/components/Info'), {
  loading: () => <div className="ftco-section" aria-hidden />,
});
const ParallaxImg = dynamic(() => import('@/components/ParallaxImg'), {
  loading: () => <div className="ftco-section" aria-hidden />,
});
const ContactMap = dynamic(() => import('@/components/ContactMap'), {
  ssr: false,
  loading: () => <div className="ftco-section" aria-hidden />,
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
