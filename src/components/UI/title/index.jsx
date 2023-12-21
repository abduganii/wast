import cls from "./tilte.module.scss"

export default function Title({ children, className, classT, ...other }) {


    return (
        <h3 className={`${cls.Title} ${className && className}`} {...other}>
            {children.split('').map(e => (
                <span className={classT && classT}>{e}</span>
            ))}
        </h3>
    )
}
