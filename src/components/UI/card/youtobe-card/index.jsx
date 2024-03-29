import Image from "next/image";
import cls from "./blog.module.scss";
export default function YouTobeCard({
  img,
  className,
  title,
  text,
  date,
  ...other
}) {
  return (
    <div
      className={`${cls.BlogsCard} ${className && className} w-full`}
      {...other}
    >

      <iframe width="266"
        height="177" src={img}></iframe>
      <h3 className={cls.BlogsCard__title}>{title}</h3>
      {/* <p className={cls.BlogsCard__text}>{text}</p> */}
    </div >
  );
}
