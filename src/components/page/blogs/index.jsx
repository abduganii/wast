'use client'
import BlogsCard from '@/components/UI/card/blog-card'
import Container from '@/components/UI/container'
import { BlogsArray } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/navigation'


export default function BlogsPage({ lang, id }) {
    const { t } = useTranslation(['home']);
    const [isClient, setIsClient] = useState(false);


    const oneBlog = BlogsArray.find(e => e?.id == id)
    const router = useRouter()
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(
            ".title222",
            {
                y: 100,
                stagger: 0.2,
                opacity: 0,
            },
            {
                duration: 1,
                delay: 0,
                y: 0,
                opacity: 1,
                stagger: 0.07,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".bloghome",
                    toggleActions: "restart none none reset",
                },
            }
        );
        gsap.fromTo(
            ".blog",
            {
                y: 100,
                stagger: 0.2,
                opacity: 0,
            },
            {
                duration: 1,
                delay: 0.4,
                y: 0,
                opacity: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".bloghome",
                    toggleActions: "restart none none reset",
                },
            }
        );
        setIsClient(true);
    }, []);
    return (
        <Container className='flex gap-[32px] flex-wrap sm:flex-nowrap  bloghome'>
            <div className=' w-full max-w-[862px] mt-[32px] mb-[100px]'>
                <Image className='rounded-[16px] object-cover title222 opacity-0' src={oneBlog?.image} width={862} height={567} alt="img" />
                <h3 className='title222 text-3xl mt-[20px] mb-[20px] font-medium opacity-0'>{oneBlog?.title}</h3>
                <div className='title222 opacity-0'>
                    {isClient ? <p className='textblog text-lg  font-normal text-[#475467]' dangerouslySetInnerHTML={{ __html: oneBlog?.text }} /> : null}
                </div>

            </div>
            <div className=' w-full max-w-[266px]  mt-[32px]  h-full mb-[100px]' >
                <h3 className='title222 text-lg mb-[20px] font-semibold opacity-0'>{t('more')}</h3>
                {BlogsArray &&
                    BlogsArray?.slice(0, 4)?.map((e) => (
                        <BlogsCard
                            className={"blog mb-[32px] opacity-0"}
                            img={e?.image}
                            key={e?.id}
                            title={e?.title}
                            text={e?.text}
                            onClick={() => router.push(`/blogs/${e?.id}`)}
                            date={"13.03.2023"}
                        />
                    ))}
            </div>
        </Container>
    )
}
