'use client'
import CertificateCard from "@/components/UI/card/certificate-card";
import Title from "@/components/UI/title";
import { CertificateArray } from "../data";
import { useEffect } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function Certificate() {
    const { t } = useTranslation(['home']);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo('.title4', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.title4',
                toggleActions: "restart none none reset",

            }
        })

    }, [])
    return (
        <>
            <Title className={"mb-[40px] "} classT={'title4 opacity-0'}>{t('Certification')}</Title>
            <div className='flex  gap-[32px] mb-[128px] max-[870px]:mb-[50px] w-full overflow-x-scroll'>
                {
                    CertificateArray && CertificateArray?.map(e => (
                        <CertificateCard key={e?.id} img={e?.image} title={e?.title} />
                    ))
                }
            </div>
        </>
    )
}
