"use client"
import Content from "@/public/json/ContactInfo.json";
import Divider from '@/components/Divider';

const ContactInfo = () => {
    return (
        <>
            <Divider />
            <section className="ftco-section ftco-services">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-2">
                        <div className="col-md-8 text-center heading-section ">
                            <span className="subheading">{Content.title}</span>
                            <h1 className="mb-4 tworem">{Content.subtitle}</h1>
                            <p>{Content.minititle}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2 className="column-title">{Content.subtitle_01}</h2>
                            <p>{Content.txt_01}</p>
                            <p><strong>{Content.minitxt_01} <a href={Content.minitxt_07} title="Telefon do Gabinetu">{Content.minitxt_06}</a></strong><br /></p>
                            <p><b>{Content.minitxt_02}</b><br />{Content.minitxt_03}<br />{Content.minitxt_04}<br />{Content.minitxt_05}</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h2 className="column-title">{Content.subtitle_02}</h2>
                            <table className="schedule" width="100%">
                                <tbody>
                                    {Content.items.map((item, key) => (
                                        <tr key={key} className="d-flex justify-content-between border-bottom py-2">
                                            <td>{item.name} </td>
                                            <td className="text-primary">{item.text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h2 className="column-title">{Content.subtitle_03}</h2>
                            <p>{Content.txt_02}</p>
                            <p>{Content.txt_03}</p>
                            <p>{Content.txt_04}</p>
                        </div>
                    </div>
                    <p>&nbsp;</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <h2 className="column-title">{Content.subtitle_04}</h2>
                            <p>{Content.txt_05}</p>
                            <p>{Content.txt_06}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo