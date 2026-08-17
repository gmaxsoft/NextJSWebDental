"use client"

import Content from "@/public/json/Mediraty.json";
import Link from 'next/link';

const Mediraty = () => {
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
              <span className="subheading">{Content.title}</span>
              <h1 className="mb-4 tworem">{Content.subtitle}</h1>
              <p>{Content.minititle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p className="justify">{Content.intro}</p>
              <p className="mb-4">&nbsp;</p>
              <h4 className="mb-4 text-left">{Content.what_is}</h4>
              <p className="justify">{Content.what_is_desc}</p>
              <p className="mb-4">&nbsp;</p>
              <h3 className="mb-4 text-center">{Content.benefits_title}</h3>
              <ul className="list-unstyled">
                {Content.benefits.map((item, key) => (
                  <li key={key} className="mb-2">
                    <span className="fa-solid fa-check text-primary me-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-4">&nbsp;</p>
              <h4 className="mb-4 text-left">{Content.medipay_title}</h4>
              <p className="justify">{Content.medipay_desc}</p>
              <p className="mb-4">&nbsp;</p>
              <h4 className="mb-4 text-left">{Content.contact_title}</h4>
              <p className="justify">{Content.contact_desc}</p>
              <p className="mb-4">
                <strong>Infolinia MediRaty:</strong>{' '}
                <a href={`tel:${Content.phone.replace(/\s/g, '')}`} title="Zadzwoń do MediRaty">
                  {Content.phone}
                </a>
              </p>
              <p className="text-center mt-4">
                <Link
                  href={Content.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary py-3 px-4"
                  title={Content.link_text}
                >
                  {Content.link_text}
                </Link>
              </p>
            </div>
          </div>
          <div className="row">
            <p>&nbsp;</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mediraty
