"use client"
import Content from "@/public/json/BeforeAfter.json";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const BefroreAfter = () => {
  return (
    <>
      <section className="ftco-section0">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section animate__animated animate__fadeIn">
              <span className="subheading">{Content.title}</span>
              <h1 className="mb-4 tworem">{Content.subtitle}</h1>
              <p>{Content.minititle}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex services-before align-self-stretch p-4">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/images/before.webp" srcSet="/images/before.webp" alt="Przed" loading="lazy" />}
                itemTwo={<ReactCompareSliderImage src="/images/after.webp" srcSet="/images/after.webp" alt="Po" loading="lazy" />}
              />
            </div>
            <div className="col-md-4 d-flex services-before align-self-stretch p-4">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/images/before-1.webp" srcSet="/images/before-1.webp" alt="Przed" loading="lazy" />}
                itemTwo={<ReactCompareSliderImage src="/images/after-1.webp" srcSet="/images/after-1.webp" alt="Po" loading="lazy" />}
              />
            </div>
            <div className="col-md-4 d-flex services-before align-self-stretch p-4">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src="/images/before-3.webp" srcSet="/images/before-3.webp" alt="Przed" loading="lazy" />}
                itemTwo={<ReactCompareSliderImage src="/images/after-3.webp" srcSet="/images/after-3.webp" alt="Po" loading="lazy" />}
              />
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

export default BefroreAfter