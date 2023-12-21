'use client'
import CardInfo from '@/components/UI/card/info-card'
import React, { useEffect } from 'react'
import { Info } from '../data'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"


export default function InfoSection() {

    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {

        gsap.fromTo('.info', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: .4, y: 0, opacity: 1, stagger: 0.3, ease: "power2.out", scrollTrigger: {
                trigger: '.infohome',
                toggleActions: "restart none none reset",

            }
        })
    }, [])
    return (
        <>
            <div className={'flex flex-wrap gap-[32px] mb-[124px] max-[870px]:mb-[50px] infohome'}>
                {Info && Info?.map(e => (
                    <CardInfo className={"info opacity-0"} key={e?.id} icon={e?.icon()} title={e?.text} />
                ))}
            </div>
        </>
    )
}
