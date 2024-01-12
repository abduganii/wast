'use client'
import Image from "next/image";
import cls from "./blog.module.scss";
import { DateIcons } from "../../icon";
import { useEffect, useState } from "react";
export default function BlogsCard({
  img,
  className,
  title,
  text,
  date,
  onClick,
  ...other
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div
      className={`${cls.BlogsCard} ${className && className} w-full`}
      onClick={onClick}
      {...other}
    >
      <Image
        className={`${cls.BlogsCard__img} `}
        width={266}
        height={177}
        alt="img"
        src={img}
      />
      <h3 className={`${cls.BlogsCard__title} line-clamp-2`}>{title}</h3>
      {isClient ? <p className={`${cls.BlogsCard__text} line-clamp-2`} dangerouslySetInnerHTML={{ __html: text }} /> : null}
      <p className={cls.BlogsCard__date}>
        <DateIcons /> {date}
      </p>
    </div>
  );
}
