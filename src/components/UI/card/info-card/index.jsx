import Image from "next/image"
import cls from "./cardInfo.module.scss"

export default function CardInfo({ icon, className, title, ...other }) {
    return (
        <div className={`${cls.CardInfo} ${className && className}`} {...other}>
            <div className={cls.CardInfo__icons}>
                {icon}
            </div>
            <p className={cls.CardInfo__text}>{title}</p>
        </div>
    )
}
