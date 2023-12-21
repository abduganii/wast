import cls from "./green.module.scss"
export default function GreenBtn({ children, className, onClick, ...other }) {
    return (
        <button type={"submit"} onClick={onClick} className={`${cls.GreenBtn} ${className && className}`} {...other}>
            {children}
        </button>
    )
}
