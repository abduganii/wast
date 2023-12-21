'use client'
import CardInfo from '@/components/UI/card/info-card'
import ServiceCard from '@/components/UI/card/service-card'
import Title from '@/components/UI/title'
import React, { useEffect } from 'react'
import { ServiceArray } from '../data'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useTranslation } from 'react-i18next'
export default function HowWork() {
    const { t } = useTranslation(['home']);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo('.title1', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.title1',
                toggleActions: "restart none none reset",

            }
        })

        gsap.fromTo('.workCard', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: .5, y: 0, opacity: 1, stagger: 0.3, ease: "power2.out", scrollTrigger: {
                trigger: '.workCard',
                toggleActions: "restart none none reset",

            }
        })
    }, [])
    return (
        <>
            <Title id='work' classT={"title1"} className={"mb-[40px] max-[870px]:mb-[30px] max-[500px]:mb-[20px]"}>{t("HowWork")}</Title>
            <div className='flex flex-wrap justify-center gap-[32px] mb-[128px] workHome'>
                {
                    ServiceArray && ServiceArray?.map(e => (
                        <ServiceCard className={'workCard'} key={e?.id} number={e?.number} title={e?.text} />
                    ))
                }
            </div>
        </>
    )
}
