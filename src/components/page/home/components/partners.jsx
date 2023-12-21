'use client'
import BlogsCard from "@/components/UI/card/blog-card";
import Title from "@/components/UI/title";
import Image from "next/image";

import { useEffect, useRef } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import { useTranslation } from "react-i18next";
export default function Partners() {

    const { t } = useTranslation(['home']);
    gsap.registerPlugin(ScrollTrigger)
    const imgRef = useRef()
    const wrappRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrappRef.current,
                start: 'center bottom',
                toggleActions: "restart none none reset"
            }
        })
        gsap.fromTo('.title5', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.title5',
                toggleActions: "restart none none reset",

            }
        })
        tl.to(".abaut__image3", {
            ease: "power1.out",
            duration: 2,
            delay: 0.5,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })
        tl.to(imgRef.current, {
            duration: 2,
            scale: 1
        }, "<")

    }, [])
    return (
        <>
            <Title className={"mb-[40px]"} classT={'title5 opacity-0'}>{t('Partners')}</Title>
            <div className='flex flex-wrap gap-[32px] mb-[128px]' ref={wrappRef}>

                <div className="abaut__image3 w-full">
                    <Image
                        ref={imgRef}
                        className="w-full"
                        src={'/image/partnors.png'}
                        width={1000}
                        height={"279"}
                    />
                </div>
            </div>
        </>
    )
}
