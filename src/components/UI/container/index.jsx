import cls from "./container.module.scss"

export default function Container({ className, children, ...other }) {
    return (
        <div className={`${cls.Container} ${className && className}`} {...other}>
            {children}
        </div>
    )
}
