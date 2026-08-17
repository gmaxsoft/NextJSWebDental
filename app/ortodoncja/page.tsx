import Divider from '@/components/Divider';
import OrtodoncjaTag from '@/components/Ortodoncja';
import ParallaxImg from '@/components/ParallaxImg';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ortodoncja - Nakładki PRO SMILE Zielona Góra, Dentysta Anna Miśków',
  description: 'Gabinet Stomatologiczny ArtDent Anna Miśków - Ortodoncja Zielona Góra, nakładki prostujące PRO SMILE, przezroczyste aparaty ortodontyczne, skan 3D',
  keywords: 'ortodoncja zielona góra, nakładki prostujące, PRO SMILE, dentysta zielona góra, stomatolog zielona góra, aparat ortodontyczny, nakładki ortodontyczne',
  creator: 'Maxsoft',
  publisher: 'Stomatolog - Dentysta',
  openGraph: {
    title: 'Ortodoncja - Nakładki PRO SMILE Zielona Góra, Dentysta Anna Miśków',
    description: 'Gabinet Stomatologiczny ArtDent - Nakładki prostujące PRO SMILE w Zielonej Górze. Nowoczesny system prostowania uśmiechu.',
    url: 'https://www.stomatolog-dentysta.pl/ortodoncja/',
    siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ortodoncja - Nakładki PRO SMILE Zielona Góra, Dentysta Anna Miśków',
    description: 'Gabinet Stomatologiczny ArtDent - Nakładki prostujące PRO SMILE w Zielonej Górze.',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/ortodoncja/",
  }
}

// ISR: Revalidate co 1 godzinę (3600 sekund)
export const revalidate = 3600;

export default function Ortodoncja() {
  return (
    <>
      <Divider />
      <OrtodoncjaTag />
      <ParallaxImg />
    </>
  )
}
