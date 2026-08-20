"use client"

import Content from "@/public/json/Protetyka.json";
import Video from '@/components/Video';

const Protetyka = () => {
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
              <p className="justify">{Content.txt_01}</p>
              <p className="justify">{Content.txt_02}</p>
              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-left">{Content.txt_03}</h2>
              <p className="justify">- {Content.txt_04}</p>
              <p className="justify">- {Content.txt_05}</p>
              <p className="justify">- {Content.txt_06}</p>
              <p className="justify">- {Content.txt_07}</p>
              <p className="mb-4">&nbsp;</p>
              <p className="justify">{Content.txt_08}</p>
              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-center">{Content.txt_10}</h2>
              <p className="mb-4">&nbsp;</p>
              <p className="justify">{Content.txt_11}</p>
              <p className="justify"><strong>{Content.txt_12}</strong></p>
              <p className="justify">{Content.txt_13}</p>
              <p className="mb-4">&nbsp;</p>
              <p className="justify">{Content.txt_14}</p>
              <p className="justify">{Content.txt_15}</p>
              <p className="justify">{Content.txt_16}</p>
            </div>
            <div className="col-md-12">
              <p className="mb-4">&nbsp;</p>
              <h2 className="mb-4 text-center">{Content.txt_17}</h2>
              <p className="mb-4">&nbsp;</p>
              <div className="mb-4 text-center"><Video /></div>
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

export default Protetyka