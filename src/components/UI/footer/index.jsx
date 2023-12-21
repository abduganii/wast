'use client'
import Link from "next/link"
import Container from "../container"
import { LogoIcon } from "../icon"
import { Routes } from "../nav-bar/data"
import cls from "./footer.module.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function Footer({ lang }) {
    const { t } = useTranslation(['home']);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo('.footerTest', {
            y: 0,
            opacity: 0,
            scale: .4,
        }, {
            duration: 1, scale: 1, opacity: 1, ease: "power2.out", scrollTrigger: {
                trigger: '.footerTest',
                toggleActions: "restart none none reset",
            }
        })
    }, [])
    return (
        <footer className={`${cls.Footer} footerTest`}>
            <Container >
                <div className="h-[300px]  min-[800px]:hidden mb-[30px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83986977686!2d69.11455270729545!3d41.28273794683044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699902950849!5m2!1sen!2s"
                        style={{ border: "0" }}
                        loading="lazy"
                        className="h-full w-full"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className='flex justify-between'>

                    <div className={cls.Footer__left}>
                        <div>
                            <Link className={cls.Footer__left__logo} href={'/'}>
                                <LogoIcon />
                            </Link>
                            <p className={cls.Footer__text}>{t('footer')}</p>
                        </div>
                        <p className={cls.Footer__Wasteless}>© Wasteless 2023</p>
                    </div>
                    <ul className={cls.Footer__navbar}>
                        {Routes?.map(e => (
                            <Link className={cls.Footer__navbar__link} href='/'>{e?.text?.[lang]}</Link>
                        ))}
                    </ul>


                    <div className="h-[300px] w-[40%] max-[800px]:hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83986977686!2d69.11455270729545!3d41.28273794683044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1699902950849!5m2!1sen!2s"
                            style={{ border: "0" }}
                            loading="lazy"
                            className="h-full w-full"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                    </div>
                </div>
            </Container>

        </footer >
    )
}
