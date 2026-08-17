import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Divider from '@/components/Divider';
import Content from "@/public/json/Dictionary.json";

// === 1. Zdefiniuj swoje dane ofertowe ===
// To są Twoje dane, które określają, jakie podstrony istnieją.
const offerDetails: { [key: string]: { title: string; description: string; slug: string } } = {
  profilaktyka: {
    title: 'Profilaktyka Stomatologiczna Zielona Góra',
    description: 'Kompleksowe usługi profilaktyczne, które pomogą Ci utrzymać zdrowy i piękny uśmiech na długie lata. Regularne wizyty, scaling, piaskowanie, fluoryzacja i instruktaż higieny jamy ustnej.',
    slug: 'profilaktyka',
  },
  'chirurgia-stomatologiczna': {
    title: 'Chirurgia Stomatologiczna Zielona Góra',
    description: 'Specjalistyczne zabiegi chirurgiczne w jamie ustnej, w tym ekstrakcje zębów (również zatrzymanych ósemek), resekcje wierzchołka korzenia, usuwanie torbieli i przygotowanie jamy ustnej do leczenia protetycznego.',
    slug: 'chirurgia-stomatologiczna',
  },
  'stomatologia-estetyczna': {
    title: 'Stomatologia Estetyczna Zielona Góra',
    description: 'Poprawiamy wygląd Twojego uśmiechu. Oferujemy licówki, korony, bonding, korektę kształtu zębów i inne zabiegi mające na celu osiągnięcie harmonijnego i estetycznego wyglądu.',
    slug: 'stomatologia-estetyczna',
  },
  'wybielanie-zebow': {
    title: 'Wybielanie Zębów Zielona Góra',
    description: 'Skuteczne i bezpieczne metody wybielania zębów, które przywrócą im naturalną biel i blask. Wybielanie nakładkowe oraz wybielanie w gabinecie pod kontrolą specjalisty.',
    slug: 'wybielanie-zebow',
  },
  'stomatologia-zachowawcza': {
    title: 'Stomatologia Zachowawcza Zielona Góra',
    description: 'Leczenie próchnicy i odbudowa zębów z użyciem nowoczesnych materiałów kompozytowych. Skupiamy się na minimalnie inwazyjnych metodach, aby zachować jak najwięcej naturalnej tkanki zęba.',
    slug: 'stomatologia-zachowawcza',
  },
  periodontologia: {
    title: 'Periodontologia (Leczenie Chorób Dziąseł) Zielona Góra',
    description: 'Diagnostyka i leczenie chorób przyzębia i dziąseł, takich jak zapalenie dziąseł czy paradontoza. Skaling poddziąsłowy, kiretaż, regeneracja tkanek przyzębia.',
    slug: 'periodontologia',
  },
  'protetyka-stomatologiczna': {
    title: 'Protetyka Stomatologiczna Zielona Góra',
    description: 'Odbudowa brakujących zębów i poprawa funkcji żucia oraz estetyki uśmiechu. Oferujemy korony, mosty, protezy, a także prace na implantach.',
    slug: 'protetyka-stomatologiczna',
  },
  'leczenie-endodontyczne-kanalowe': {
    title: 'Leczenie Endodontyczne (Kanałowe) Zielona Góra',
    description: 'Precyzyjne leczenie kanałowe zębów, wykonywane pod mikroskopem, aby uratować ząb przed ekstrakcją. Usuwanie zainfekowanej miazgi i szczelne wypełnienie kanałów.',
    slug: 'leczenie-endodontyczne-kanalowe',
  },
};

// ISR: Revalidate co 1 godzinę (3600 sekund)
export const revalidate = 3600;

//2. Funkcja generateStaticParams() - klucz do 'output: export'
export async function generateStaticParams() {
  // W pętli po kluczach obiektu offerDetails (czyli po slugach)
  // i zwracamy tablicę obiektów w formacie { slug: 'nazwa-slug' }
  return Object.keys(offerDetails).map((slug) => ({
    slug: slug,
  }));
}

//3. Funkcja generująca dynamiczne metadane
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const detail = offerDetails[slug];

  if (!detail) {
    // notFound();
    return {};
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.stomatolog-dentysta.pl/';
  const canonicalUrl = `${baseUrl}oferta/${detail.slug}/`;

  return {
    title: detail.title,
    description: detail.description,
    keywords: 'stomatolog zielona góra, dentysta zielona góra. Protetyka, Protezy acronowe, Anna Miśków, korony cyrkonowe',
    creator: 'Maxsoft',
    publisher: 'Stomatolog - Dentysta',
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title: detail.title,
      description: detail.description,
      url: canonicalUrl,
      siteName: 'ArtDent Dentysta Zielona Góra Stomatolog i protetyka Zielona Góra',
      locale: 'pl_PL',
      images: '/opengraph-image.jpg',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: detail.title,
      description: detail.description,
      images: '/twitter-image.jpg'
    },
  };
}

// 4. Komponent strony ===
export default function OfferDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const detail = offerDetails[slug];

  if (!detail) {
    notFound(); //404 Not Found
  }

  // Szukamy obiektu w tablicy `Content.items`, który pasuje do aktualnego `slug`
  // Dictionary.json ma URL z trailing slash: /oferta/profilaktyka/
  const pageContent = Content.items.find(item => item.url === `/oferta/${slug}/`);

  if (!pageContent) {
    notFound();
  }

  return (
    <>
      <Divider />
      <section className="ftco-section ftco-services">
        <div className="container">
          
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
              <span className="subheading">{pageContent.title}</span>
              <h1 className="mb-4 tworem">{pageContent.subtitle}</h1>
              <p>{pageContent.minititle}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center heading-section animate__animated animate__fadeIn">
              <h2 className="mb-4 tworem">{pageContent.content_a}</h2>
            </div>
            <div className="col-md-12 text-justify animate__animated animate__fadeIn">
              <p>{pageContent.content_b}</p>
              <p>{pageContent.content_c}</p>
              <p>&nbsp;</p>
              <p><b>Słowa kluczowe:</b></p>
              <p>{pageContent.content_d}</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}