'use client'
import GreenBtn from "@/components/UI/buttun/gren-btn";
import Container from "@/components/UI/container";
import Text from "@/components/UI/text";
import Title from "@/components/UI/title";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Recycle() {
    gsap.registerPlugin(ScrollTrigger);
    const imgRef = useRef()
    const wrappRef = useRef()
    const { t } = useTranslation(['home']);

    useEffect(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrappRef.current,
                start: 'center bottom',
                toggleActions: "restart none none reset"
            }
        })
        gsap.fromTo('.text__recy', { opacity: 0, x: -200, }, {
            opacity: 1, duration: 1, delay: 0, x: 0, stagger: 0.3, scrollTrigger: {
                trigger: wrappRef.current,
                toggleActions: "restart none none reset",
            }
        })

        gsap.fromTo('.btn__recy', { opacity: 0, scale: 0.3, }, {
            opacity: 1, duration: 1, delay: .7, scale: 1, scrollTrigger: {
                trigger: wrappRef.current,
                toggleActions: "restart none none reset",
            }
        })

        tl.to(".abaut__image", {
            ease: "power2",
            duration: 2,
            delay: 0.9,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })
        // the "<" sign means that this animation of the timeline will play 
        // as soon the animation get triggered
        tl.to(imgRef.current, {
            duration: 2,
            scale: 1
        }, "<")
    }, [])
    return (
        <div className={'mb-[128px] bg-[#00922F] py-[64px]'} ref={wrappRef}>
            <Container className={'flex items-center w-full  gap-[32px] mb-[128px] max-[800px]:flex-wrap'}>
                <div className='w-full'>
                    <Title className='mb-[10px] text__recy opacity-0' style={{ color: "#FFF" }}>{t('Recycle')}</Title>
                    <Text className={'mb-[30px] text__recy opacity-0'} style={{ color: "#B0FFC9" }}>{t('RecycleText')}</Text>
                    <GreenBtn className={'btn__recy opacity-0'} style={{ color: "#00922F", background: "#FFF" }}>{t('RecycleBtn')}</GreenBtn>
                </div>
                <div className="abaut__image w-full max-w-[564px] aspect-video max-[800px]:w-full">
                    <Image
                        ref={imgRef}
                        className={'w-full max-w-[564px] aspect-video max-[800px]:w-full'}
                        src={'/image/vidoe.png'}
                        width={564}
                        height={366}
                        // layout="fill"
                        objectFit='cover'
                        alt="Picture"
                    />
                </div>
            </Container>
        </div>
    )
}
