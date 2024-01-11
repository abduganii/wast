"use client";
import initTranslations from "@/app/i18n";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../container";
import { Instagram, LogoIcon, Telegram, TelIcon, TikTok } from "../icon";
import Lang from "../lang";
import NavBar from "../nav-bar";
import cls from "./header.module.scss";

export default function Header({ lang }) {
  const { t } = useTranslation(['home']);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  const getWindowHeight = () => {
    setWindowHeight(typeof window !== "undefined" ? window.scrollY : 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", getWindowHeight);
      return () => window.removeEventListener("scroll", getWindowHeight);
    }
  }, []);
  return (
    <>
      <header className={cls.Header}>
        <Container>
          <div className={`${cls.Header__top} min-[900px]:flex hidden`}>
            <div className={cls.Header__icons}>
              <a>
                <Telegram />
              </a>
              <a>
                <Instagram />
              </a>
              <a>
                <TikTok />
              </a>
            </div>

            <div className={cls.Header__set}>
              <Lang />
              <a className={cls.Header__tel}>
                <TelIcon /> +998 50 505 14 33
              </a>
            </div>
          </div>
        </Container>
      </header>
      <div
        className={`${cls.Header__bottom} ${windowHeight > 0 && "shadow-xl z-20"
          } `}
      >
        <Container className={cls.Header__bottom__conten}>
          <Link href={"/"} className={cls.Header__bottom__logo}>
            <LogoIcon />
          </Link>
          <NavBar lang={lang} className={"min-[900px]:flex hidden"} />
          <div className="flex gap-[20px] hidden max-[900px]:flex">
            <Lang />
            <div className={cls.Header__icons}>
              <a>
                <Telegram />
              </a>
              <a>
                <Instagram />
              </a>
              <a>
                <TikTok />
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
