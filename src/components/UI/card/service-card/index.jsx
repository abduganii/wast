import cls from "./service.module.scss"
export default function ServiceCard({ number, title, className, ...other }) {
    return (
        <div className={`${cls.ServiceCard} ${className && className}`} {...other}>
            <div className={cls.ServiceCard__animation}>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__line}></div>
                <div className={cls.ServiceCard__animation__round}>
                    <h3>{number}</h3>
                </div>

            </div>

            <p className={cls.ServiceCard__text}>{title}</p>
        </div>
    )
}
