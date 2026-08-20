"use client"

import Content from "@/public/json/Info.json";

type InfoProps = {
  /** true = główna treść strony (h1); false = sekcja na stronie z innym h1 */
  primary?: boolean;
};

export default function Info({ primary = true }: InfoProps) {
  const TitleTag = primary ? 'h1' : 'h2';
  const ItemTag = primary ? 'h2' : 'h3';

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
              <span className="subheading">{Content.title}</span>
              <TitleTag className="mb-4 tworem">{Content.subtitle}</TitleTag>
              <p>{Content.minititle}</p>
            </div>
          </div>
          <div className="row">
            
            <div className="accordion" id="accordion">
              {Content.items.map((item, key) => (
                <div key={item.name} className="accordion-item border-0 py-3">
                  <ItemTag className="accordion-header"> 
                    <button className={`accordion-button fs-4 text-dark bg-transparent focus-transparent shadow-none ${ key === 0 ? '' : 'collapsed' }`} type="button" data-bs-toggle="collapse" aria-expanded={key === 0 ? 'true' : 'false'} data-bs-target={`#collapse_${key}`} aria-controls={`collapse_${key}`}>
                      {item.name}
                    </button>
                  </ItemTag>                                 
                  <div id={`collapse_${key}`} className={`accordion-collapse border-0 collapse ${ key === 0 ? 'show' : '' }`} data-bs-parent="#accordion">
                    <div className="accordion-body">
                      <div dangerouslySetInnerHTML={{ __html: item.text }} className='justify'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
