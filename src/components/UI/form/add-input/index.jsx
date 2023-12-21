import cls from "./addinput.module.scss"

export default function AddInput({ label, type, placeholder, onChange, className, ...other }) {
    return (
        <label className={`${cls.AddInput} ${className && className}`} {...other}>
            <p className={cls.AddInput__label}>{label}</p>
            <input className={cls.AddInput__input} type={type} placeholder={placeholder} onChange={onChange} />

        </label>
    )
}
