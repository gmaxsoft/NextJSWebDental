"use client"
import Content from "@/public/json/Footer.json";
import Image from 'next/image'
import Link from 'next/link';

const footer = () => {
    return (
        <>
            <section id="subscribe" className="d-flex align-items-center ftco-bg-dark">
                <p>&nbsp;</p>
            </section>
            <footer className="ftco-footer ftco-section">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">

                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3 mt-3">
                            <div className="footer-menu">
                                <Link className="navbar-brand" href="/" title='Logo Dentysta Zielona Góra'>
                                    <Image
                                        className="pb-3"
                                        src="/images/logo.webp"
                                        alt="Logo Dentysta Zielona góra"
                                        width={273}
                                        height={50}
                                        sizes="(max-width: 768px) 100vw, 273px"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            maxWidth: '273px',
                                            minHeight: '60px'
                                        }}
                                    />
                                </Link>
                                <p className="text-justify pr2rem" dangerouslySetInnerHTML={{ __html: Content.tags }}></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3 mt-3">
                            <div className="footer-menu">
                                <h2 className="widget-title pb-2 fw-semibold">Godziny otwarcia</h2>
                                <table className="schedule" width="100%">
                                    <tbody>
                                        {Content.items.map((item, key) => (
                                            <tr key={item.name} className="d-flex justify-content-between border-bottom py-2">
                                                <td>{item.name} </td>
                                                <td className="text-primary">{item.text}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 pb-3 mt-3">
                            <div className="footer-menu">
                                <h2 className="widget-title pb-2 fw-semibold">{Content.datatitle}</h2>
                                <div className="contact-item">
                                    <p className="py-2" dangerouslySetInnerHTML={{ __html: Content.dataname }}></p>
                                    <p className="py-2">
                                        <i className="fa-solid fa-location-dot"></i>
                                        <span dangerouslySetInnerHTML={{ __html: Content.dataaddress }}></span>
                                    </p>
                                    <p>
                                        <i className="fa-solid fa-phone"></i>
                                        <span><a href={`tel:${Content.datalink}`} title="Telefon">{Content.dataphone}</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex text-center justify-content-between border-top mt-5 py-4">
                        <p>{Content.copyrights}</p>
                        <p>
                            {Content.realization} <Link href={Content.companylink} className={`fw-semibold`} title={Content.companytag}>{Content.company}</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer