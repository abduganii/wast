import cls from "./textareaInput.module.scss"

export default function TextAreaInput({ label, placeholder, onChange, className, ...other }) {
    return (
        <label className={`${cls.TextAreaInput} ${className && className}`} {...other}>
            <p className={cls.TextAreaInput__label}>{label}</p>
            <textarea className={cls.TextAreaInput__textarea} placeholder={placeholder} cols="30" rows="5"></textarea>
        </label>
    )
}
