"use client"

import Content from "@/public/json/Ortodoncja.json";
import Image from 'next/image';
import Link from 'next/link';
import { Armchair, Shield, Gem, CheckCheck, Check, type LucideIcon } from 'lucide-react';

const benefitIcons: Record<string, LucideIcon> = {
  Armchair,
  Shield,
  Gem,
  CheckCheck,
};

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
              <h2 className="mb-4 text-left">{Content.what_are}</h2>
              <p className="justify">{Content.what_are_desc}</p>

              <div className="ortodoncja-image text-center my-4">
                <Image
                  src="/images/nakladki_Pro_Smile.webp"
                  alt="Nakładki prostujące PRO SMILE"
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
                  style={{ width: '100%', height: 'auto', maxWidth: '960px' }}
                />
              </div>
              
              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-center">{Content.benefits_title}</h2>
              <div className="row mb-5 pb-2 ortodoncja-benefits">
                {Content.benefits.map((item) => {
                  const Icon = benefitIcons[item.icon] ?? Check;
                  return (
                  <div key={item.name} className="col-md-6 col-lg-3 d-flex services align-self-stretch p-4 animate__animated animate__fadeIn">
                    <div className="media block-6 d-block text-center">
                      <div className="icon d-flex justify-content-center align-items-center">
                        <Icon aria-hidden size={44} strokeWidth={1.75} color="#853665" />
                      </div>
                      <div className="media-body p-2 mt-3">
                        <h3 className="heading">{item.name}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                  );
                })}
              </div>
              <h2 className="mb-4 text-center">{Content.features_title}</h2>
              <ul className="list-unstyled">
                {Content.features.map((item, key) => (
                  <li key={key} className="mb-2 d-flex align-items-start gap-2">
                    <Check aria-hidden size={18} strokeWidth={2.5} color="#853665" className="mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-center">{Content.malocclusion_title}</h2>
              <ul className="list-unstyled">
                {Content.malocclusion.map((item, key) => (
                  <li key={key} className="mb-2 d-flex align-items-start gap-2">
                    <Check aria-hidden size={18} strokeWidth={2.5} color="#853665" className="mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="justify">{Content.malocclusion_desc}</p>

              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-center">{Content.scan_title}</h2>
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

              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-5 text-center">{Content.timeline_title}</h2>
              <div className="ortodoncja-timeline">
                {Content.timeline.map((step, index) => (
                  <div key={step.title} className="ortodoncja-timeline__item">
                    <div className="ortodoncja-timeline__marker">{index + 1}</div>
                    <div className="ortodoncja-timeline__content">
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                      {step.items.length > 0 && (
                        <ul className="list-unstyled mb-0">
                          {step.items.map((item) => (
                            <li key={item} className="mb-1 d-flex align-items-start gap-2">
                              <Check aria-hidden size={16} strokeWidth={2.5} color="#853665" className="mt-1 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="justify mt-4">{Content.timeline_desc}</p>
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
