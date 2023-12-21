'use client'
import GreenBtn from '@/components/UI/buttun/gren-btn'
import AddInput from '@/components/UI/form/add-input'
import TextAreaInput from '@/components/UI/form/textarea-input'
import { Scaner } from '@/components/UI/icon'
import Title from '@/components/UI/title'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useTranslation } from 'react-i18next'

export default function ContactUs() {
    gsap.registerPlugin(ScrollTrigger);
    const { t } = useTranslation(['home']);
    const imgRef = useRef()
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".CantactHome",
                start: 'center bottom',
                toggleActions: "restart none none reset"
            }
        })
        gsap.fromTo('.title6', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.CantactHome',
                toggleActions: "restart none none reset",

            }
        })
        gsap.fromTo('.inputCantact', {
            x: -100,
            stagger: 0.4,
            opacity: 0,
        }, {
            duration: 1, delay: 0.3, y: 0, x: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.CantactHome',
                toggleActions: "restart none none reset",

            }
        })
        tl.to(".abaut__image6", {
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
        <div className='flex gap-[32px] mb-[128px] max-[950px]:flex-wrap max-[950px]:justify-center CantactHome'>
            <div className='w-full max-[950px]:py-[20px]'>
                <Title className='mb-[48px]' classT={'title6 opacity-0'}>{t('Contact')}</Title>
                <form className='flex flex-wrap gap-[32px]'>
                    <AddInput className={'inputCantact opacity-0'} type={'text'} label={t('Contactname')} placeholder={t('Contactname')} />
                    <AddInput className={'inputCantact opacity-0'} type={'text'} label={t('ContactCompany')} placeholder={t('ContactCompany')} />
                    <AddInput className={'inputCantact opacity-0'} type={'email'} label={t('ContactEmail')} placeholder={t('ContactEmail')} />
                    <AddInput className={'inputCantact opacity-0'} type={'text'} label={t('Contactnumber')} placeholder={t('Contactnumber')} />
                    <TextAreaInput className={'inputCantact opacity-0'} type={'textarea'} label={t('ContactMessage')} placeholder={t('ContactMessage')} />
                    <GreenBtn className={'w-full inputCantact opacity-0'}>{t('ContactBtn')}</GreenBtn>
                </form>
            </div>
            <div className='w-full bg-[#E8FFEF] flex items-center abaut__image6  justify-center max-[950px]:w-[500px] '>
                <div ref={imgRef} className='mx-[90px] '>

                    <div className='flex items-center  justify-center'>
                        <Image
                            className='my-auto'
                            src={'/image/QRCode.png'}
                            width={256}
                            height={256}
                        />
                    </div>

                    <p className={'text-lg font-medium text-center'}>
                        {t('Qr')}
                    </p>
                </div>
            </div>
        </div>
    )
}
