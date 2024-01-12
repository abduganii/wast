'use client'
import Image from "next/image"
import GreenBtn from "../../../../UI/buttun/gren-btn"
import cls from "./here.module.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import initTranslations from "@/app/i18n";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export default function Hero() {

    const { t } = useTranslation(['home']);
    const router = useRouter()
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(".hero__img", { x: 200, y: 200, opacity: 0, },
            {
                duration: 1.5, delay: 0.1, y: 0, x: 0, opacity: 1, ease: "bounce", scrollTrigger: {
                    trigger: '.hero__img',
                    toggleActions: "restart none none reset"
                }
            })

        gsap.fromTo('.text__content', { opacity: 0, x: -200, }, {
            opacity: 1, duration: 1, delay: 0, x: 0, stagger: 0.3, scrollTrigger: {
                trigger: '.home',
                toggleActions: "restart none none reset",
            }
        })
        gsap.fromTo('.animation', { opacity: 0 }, {
            opacity: 1, scrollTrigger: {
                trigger: '.home',
                toggleActions: "restart none none reset",
            }
        })

        gsap.fromTo('.btn__content', { opacity: 0, scale: 0.3, }, {
            opacity: 1, duration: 1, delay: .8, scale: 1, scrollTrigger: {
                trigger: '.home',
                toggleActions: "restart none none reset",
            }
        })
    }, [])


    return (
        <div className={`${cls.Hero} home`}>

            <div className={cls.Hero__content}>
                <h1 className={`${cls.Hero__title} text__content opacity-0`}>{t('heroTitle')}</h1>
                <p className={`${cls.Hero__text} text__content opacity-0`}>{t('heroText')}</p>
                <GreenBtn onClick={() => router.push('/#Contact')} className={'btn__content opacity-0'}>{t('heroBtn')}</GreenBtn>
            </div>
            <div className={`${cls.Hero__animation} animation opacity-0`}>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__line}></div>
                <div className={cls.Hero__animation__round}></div>
                <div className={cls.Hero__animation__img}>
                    <Image
                        className={`${cls.Hero__animation__img1} hero__img opacity-0`}
                        width={480}
                        height={480}
                        src={'/image/botton.png'}
                        alt={"image"}

                    />
                </div>
            </div>
        </div>
    )
}
