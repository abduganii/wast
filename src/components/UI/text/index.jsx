import cls from "./text.module.scss"

export default function Text({ children, className, ...other }) {
    return (
        <p className={`${cls.Text} ${className && className}`} {...other}>
            {children}
        </p>
    )
}
