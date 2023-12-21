'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { ChangeEvent, useState } from 'react';


import cls from "./lang.module.scss"
import i18nConfig from '../../../../i18nConfig';
import { LangIcon } from '../icon';



export default function Lang() {
    const { i18n } = useTranslation();
    const { t } = useTranslation(['home'])
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();

    const handleChange = (e) => {
        const newLocale = e.target.getAttribute("value");

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (
            currentLocale == i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(
                currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
            );
        }

        router.refresh();
    };
    return (
        <div className={cls.Lang}>
            <div className={cls.Lang__wrap}>
                <LangIcon />
                <p className={cls.Lang__text}>{t('langHed')}</p>
            </div>
            <ul className={cls.Lang__box} onClick={handleChange}>
                <li value={'uz'} >o'zbek</li>
                <li value={'ru'}>русский</li>
                <li value={'en'}>english</li>
            </ul>
        </div >
    )
}
