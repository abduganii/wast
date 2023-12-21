'use client'
import BlogsCard from "@/components/UI/card/blog-card";
import Title from "@/components/UI/title";
import { BlogsArray } from "../data";
import { useEffect } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function Blog() {
    gsap.registerPlugin(ScrollTrigger)

    const { t } = useTranslation(['home']);
    useEffect(() => {
        gsap.fromTo('.title2', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.bloghome',
                toggleActions: "restart none none reset",

            }
        })
        gsap.fromTo('.blog', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: .4, y: 0, opacity: 1, stagger: 0.3, ease: "power2.out", scrollTrigger: {
                trigger: '.bloghome',
                toggleActions: "restart none none reset",

            }
        })
    }, [])
    return (
        <>
            <Title className={"mb-[40px] "} classT={'title2 opacity-0'}>{t('Eco')}</Title>
            <div className='flex gap-[32px] mb-[128px] max-[870px]:mb-[50px]  w-full overflow-x-scroll bloghome'>
                {
                    BlogsArray && BlogsArray?.map(e => (
                        <BlogsCard
                            className={'blog opacity-0'}
                            img={e?.image}
                            key={e?.id}
                            title={e?.title}
                            text={e?.text}
                        />

                    ))
                }
            </div>
        </>
    )
}
