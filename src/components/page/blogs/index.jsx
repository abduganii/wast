'use client'
import BlogsCard from '@/components/UI/card/blog-card'
import Container from '@/components/UI/container'
import { BlogsArray } from '@/data'
import Image from 'next/image'
import React from 'react'
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

export default function BlogsPage({ lang, id }) {

    const oneBlog = BlogsArray.find(e => e?.id == id)
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
    }, []);
    return (
        <Container className='flex gap-[32px] '>
            <div className='w-full max-w-[862px] mt-[32px]'>
                <Image className='rounded-[16px] object-cover title222 opacity-0' src={oneBlog?.image} width={862} height={567} alt="img" />
                <h3 className='title222 text-3xl mt-[20px] mb-[20px] font-medium opacity-0'>{oneBlog?.title}</h3>
                <p className='title222 text-lg  font-normal text-[#475467] opacity-0'>{oneBlog?.text}</p>
            </div>
            <div className='w-full max-w-[266px] bloghome mt-[32px]  h-full' >
                <h3 className='title222 text-lg mb-[20px] font-semibold opacity-0'>More</h3>
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