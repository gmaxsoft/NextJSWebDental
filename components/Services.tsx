"use client"
import Content from "@/public/json/Services.json";
import Divider from '@/components/Divider';
import Link from 'next/link';

type ServicesProps = {
  /** true = główna treść strony (h1); false = sekcja na stronie z innym h1 */
  primary?: boolean;
};

const Services = ({ primary = true }: ServicesProps) => {
  const TitleTag = primary ? 'h1' : 'h2';
  const CardTag = primary ? 'h2' : 'h3';

  return (
    <>
      <Divider />
      <section className="ftco-section ftco-services">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
              <span className="subheading">{Content.title}</span>
              <TitleTag className="mb-4 tworem">{Content.subtitle}</TitleTag>
              <p>{Content.minititle}</p>
            </div>
          </div>

          <div className="row justify-content-center mb-5 pb-2">
            <p>{Content.introa}</p>
            <p>{Content.introb}</p>
          </div>

          <div className="row mb-5 pb-2">
            {Content.items.map((item) => (
              <div key={item.name} className="col-md-3 d-flex services align-self-stretch p-4 animate__animated animate__shakeY">
                <div className="media block-6 d-block text-center">
                  <div className="icon d-flex justify-content-center align-items-center">
                    <span className={item.icon}></span>
                  </div>
                  <div className="media-body p-2 mt-3">
                    <CardTag className="heading">
                      <Link href={item.url}>{item.name}</Link>
                    </CardTag>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-md-12 text-center heading-section animate__animated animate__fadeIn">
              <h2 className="mb-4 tworem">Usługi</h2>
              <p className="mb-5">
                <b>Stomatologia zachowawcza</b><br />
                odbudowa zniszczonych próchnicą zębów, <br />
                odbudowa zęba po leczeniu kanałowym.
              </p>
              <p className="mb-5"><b>Chirurgia</b></p>
              <p className="mb-5"><b>Protetyka</b><br />
                protezy całkowite,<br />
                protezy częściowe,<br />
                protezy szkieletowe,<br />
                korony porcelanowe na podbudowie z metalu,<br />
                korony porcelanowe na podbudowie z tlenku cyrkonu (zapewniają bardzo dobrą estetykę iwytrzymałość).
              </p>
              <p className="mb-5">
                <b>Stomatologia estetyczna</b><br />
                wybielanie zębów,<br />
                licówki kompozytowe,<br />
                uzupełnienia protetyczne.
              </p>
              <p className="mb-5">
                <b>Profilaktyka</b><br /><br />
                lakierowanie - ma działanie przeciwpróchnicowe. Podczas tego zabiegu używane są
                bezbarwne lakiery fluorkowe, które utrzymują się na powierzchni szkliwa do kilku dni.
                Zapewnia to lepsze wchłanianie jonów fluorkowych do szkliwa. Zaleca się wykonywanie
                tego zabiegu u dzieci i dorosłych 2 - 4 razy w roku.<br /><br />

                lakowanie - zapobiega próchnicy szczelin, powierzchni żujących zębów trzonowych u dzieci.
                Zabieg powinien być wykonywany między 6 a 8 rokiem życia. Najlepiej do 4 miesiąca po
                wyrżnięciu się pierwszych zębów trzonowych.<br /><br />

                skaling - usuwanie kamienia naddziąsłowego, zapobiega wystąpieniu zapaleń dziąseł i
                przyzębia. Zalecany 1 - 2 razy w roku.
              </p>
              <p className="mb-5">
                <b>Leczenie endodontyczne (kanałowe)</b><br />
                specjalność wymagająca wielu precyzyjnych narzędzi i aparatury. Radiowizjografia cyfrowa,
                która jest dostępna w gabinecie pozwala na leczenie kanałowe zęba z bardzo dużą
                dokładnością.
              </p>
            </div>
          </div>
         
        </div>
      </section>
    </>
  )
}

export default Services
