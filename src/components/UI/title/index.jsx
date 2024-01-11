import cls from "./tilte.module.scss"

export default function Title({ children, id, className, classT, ...other }) {


    return (
        <h3 id={id} className={`${cls.Title} ${className && className}`} {...other}>
            {children.split('').map((e, i) => (
                <span key={i} className={classT && classT}>{e}</span>
            ))}
        </h3>
    )
}
