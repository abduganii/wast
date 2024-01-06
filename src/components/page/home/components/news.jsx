"use client";
import Text from "@/components/UI/text";
import Title from "@/components/UI/title";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation(["home"]);
  return (
    <>
      <Title id={"News"} className={"mb-[40px] "} classT={"title3 opacity-0"}>
        {t("News")}
      </Title>

      <div className="flex items-center gap-[32px] mb-[100px]">
        <div className="w-full max-w-[564px]">
          <h3 className="text-3xl font-semibold w-full mb-[15px]">
            You can follow our latest news on our Instagram page.
          </h3>
          <Text>
            And regroup six net running feature hour responsible driver's
            asserts. Invite deploy turn assassin red-flag ourselves banner
            strategy today.
          </Text>
        </div>
        <Image src={"/image/insta.png"} width={564} height={581} />
      </div>
    </>
  );
};

export default News;
