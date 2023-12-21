import Image from "next/image"
import cls from "./blog.module.scss"
export default function BlogsCard({ img, className, title, text, date, ...other }) {
    return (
        <div className={`${cls.BlogsCard} ${className && className} w-full`} {...other}>
            <Image
                className={`${cls.BlogsCard__img} `}
                width={266}
                height={177}
                alt="img"
                src={img}
            />
            <h3 className={cls.BlogsCard__title}>{title}</h3>
            <p className={cls.BlogsCard__text}>{text}</p>
        </div>
    )
}
