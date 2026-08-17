import Divider from '@/components/Divider';
import MediratyTag from '@/components/Mediraty';
import ParallaxImg from '@/components/ParallaxImg';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MediRaty - Finansowanie leczenia stomatologicznego Zielona Góra',
  description: 'Gabinet ArtDent - skorzystaj z MediRaty i MediPay. Leczenie stomatologiczne na raty w Zielonej Górze. Płatność od 12 do 36 miesięcy.',
  keywords: 'mediraty, medipay, leczenie na raty, stomatologia na raty, dentysta zielona góra, finansowanie leczenia',
  creator: 'Maxsoft',
  publisher: 'Stomatolog - Dentysta',
  openGraph: {
    title: 'MediRaty - Finansowanie leczenia stomatologicznego Zielona Góra',
    description: 'Leczenie od razu, płatność na raty. Skorzystaj z MediRaty w gabinecie ArtDent w Zielonej Górze.',
    url: 'https://www.stomatolog-dentysta.pl/mediraty/',
    siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
    locale: 'pl_PL',
    images: '/opengraph-image.jpg',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediRaty - Finansowanie leczenia stomatologicznego Zielona Góra',
    description: 'Leczenie od razu, płatność na raty w gabinecie ArtDent.',
    images: '/twitter-image.jpg'
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/mediraty/",
  }
}

// ISR: Revalidate co 1 godzinę (3600 sekund)
export const revalidate = 3600;

export default function Mediraty() {
  return (
    <>
      <Divider />
      <MediratyTag />
      <ParallaxImg />
    </>
  )
}
