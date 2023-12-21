'use client'
import Image from 'next/image'
import React from 'react'
import cls from "./certificate.module.scss"
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from "react";
export default function CertificateCard({ title, img }) {
    gsap.registerPlugin(ScrollTrigger);
    const imgRef = useRef()
    const wrappRef2 = useRef()

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrappRef2.current,
                start: 'center bottom',
                toggleActions: "restart none none reset"
            }
        })

        tl.to(".abaut__image2", {
            ease: "power2",
            duration: 2,
            stagger: 0.3,
            delay: 0.2,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })

        // the "<" sign means that this animation of the timeline will play 
        // as soon the animation get triggered
        tl.to(imgRef.current, {
            duration: 2,
            scale: 1
        }, "<")

        gsap.fromTo('.certi_tetx', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: .2, y: 0, opacity: 1, stagger: 0.2, ease: "power2.out", scrollTrigger: {
                trigger: wrappRef2.current,
                toggleActions: "restart none none reset",

            }
        })

    }, [])
    return (
        <div className={cls.CertificateCard} ref={wrappRef2}>
            <div className="abaut__image2 w-full max-w-[266px] height-[320px]">
                <Image
                    ref={imgRef}
                    className='w-full'
                    width={266}
                    height={320}
                    src={img}
                    alt={"img"}
                />
            </div>

            <p className={`${cls.CertificateCard__text} certi_tetx opacity-0`}>{title}</p>
        </div>
    )
}
