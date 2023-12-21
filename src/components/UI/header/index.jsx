
import initTranslations from '@/app/i18n'
import Link from 'next/link'
import React from 'react'
import Container from '../container'
import { Instagram, LogoIcon, Telegram, TelIcon, TikTok } from '../icon'
import Lang from '../lang'
import NavBar from '../nav-bar'
import cls from "./header.module.scss"


export default function Header({ lang }) {

    return (
        <header className={cls.Header}>
            <Container>
                <div className={`${cls.Header__top} min-[900px]:flex hidden`}>
                    <div className={cls.Header__icons}>
                        <a><Telegram /></a>
                        <a><Instagram /></a>
                        <a><TikTok /></a>
                    </div>

                    <div className={cls.Header__set}>
                        <Lang />
                        <a className={cls.Header__tel}><TelIcon /> +998 50 505 14 33</a>
                    </div>
                </div>

                <div className={cls.Header__bottom}>
                    <Link href={'/'} className={cls.Header__bottom__logo}>
                        <LogoIcon />
                    </Link>
                    <NavBar lang={lang} className={'min-[900px]:flex hidden'} />
                    <div className='flex gap-[20px] hidden max-[900px]:flex'>
                        <Lang />
                        <div className={cls.Header__icons}>
                            <a><Telegram /></a>
                            <a><Instagram /></a>
                            <a><TikTok /></a>
                        </div>
                    </div>

                </div>
            </Container>
        </header>
    )
}
