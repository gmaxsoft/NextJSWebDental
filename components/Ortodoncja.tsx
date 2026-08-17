"use client"

import Content from "@/public/json/Ortodoncja.json";
import Link from 'next/link';

const Ortodoncja = () => {
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
              <h4 className="mb-4 text-left">{Content.what_are}</h4>
              <p className="justify">{Content.what_are_desc}</p>
              <p className="mb-4">&nbsp;</p>
              <h3 className="mb-4 text-center">{Content.benefits_title}</h3>
              <div className="row mb-5 pb-2">
                {Content.benefits.map((item, key) => (
                  <div key={item.name} className="col-md-6 col-lg-3 d-flex services align-self-stretch p-4 animate__animated animate__fadeIn">
                    <div className="media block-6 d-block text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <span className={item.icon}></span>
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h2 className="heading">{item.name}</h2>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h3 className="mb-4 text-center">{Content.features_title}</h3>
              <ul className="list-unstyled">
                {Content.features.map((item, key) => (
                  <li key={key} className="mb-2">
                    <span className="fa-solid fa-check text-primary me-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mb-4">&nbsp;</p>
              <h3 className="mb-4 text-center">{Content.scan_title}</h3>
              <p className="justify">{Content.scan_desc}</p>
              <p className="text-center mt-4">
                <Link
                  href={Content.prosmile_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary py-3 px-4"
                  title={Content.prosmile_text}
                >
                  {Content.prosmile_text}
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

export default Ortodoncja
