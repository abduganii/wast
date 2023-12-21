'use client'
import BlogsCard from "@/components/UI/card/blog-card";
import Title from "@/components/UI/title";
import { BlogsArray } from "../data";
import { useEffect } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import gsap from "gsap";
import { useTranslation } from "react-i18next";
export default function News() {
    const { t } = useTranslation(['home']);
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.fromTo('.title3', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: 0, y: 0, opacity: 1, stagger: 0.07, ease: "power2.out", scrollTrigger: {
                trigger: '.newhome',
                toggleActions: "restart none none reset",

            }
        })
        gsap.fromTo('.new', {
            y: 100,
            stagger: 0.2,
            opacity: 0,
        }, {
            duration: 1, delay: .4, y: 0, opacity: 1, stagger: 0.3, ease: "power2.out", scrollTrigger: {
                trigger: '.newhome',
                toggleActions: "restart none none reset",

            }
        })
    }, [])
    return (
        <>
            <Title id={"News"} className={"mb-[40px] "} classT={'title3 opacity-0'}>{t('News')}</Title>
            <div className='flex gap-[32px] mb-[128px]  max-[870px]:mb-[50px] w-full overflow-x-scroll newhome'>
                {
                    BlogsArray && BlogsArray?.map(e => (
                        <BlogsCard
                            className={"new opacity-0"}
                            img={e?.image}
                            title={e?.title}
                            text={e?.text}
                        />
                    ))
                }
            </div>
        </>
    )
}
