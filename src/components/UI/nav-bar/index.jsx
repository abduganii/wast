import Link from 'next/link'
import { Routes } from './data'
import cls from "./navBar.module.scss"

export default function NavBar({ lang, className }) {

    return (
        <div className={`${cls.NavBar} ${className && className}`}>
            {
                Routes?.map((e) => (
                    <Link className={cls.NavBar__text} key={e?.id} href={e.idText}  >
                        {e?.text?.[lang]}
                    </Link>
                ))
            }
        </div>
    )
}
