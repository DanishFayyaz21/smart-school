import React from "react";
import { useTranslation } from "react-i18next";

const index = () => {
  const {t} = useTranslation();
  return (
    <div>
      <div className="my-1">
        <h1  className="my-1">{t("Operational Overview")}</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          aperiam similique, quas, temporibus earum ex vitae quod quidem esse
          maxime optio obcaecati facere doloribus nihil id quasi. Distinctio
          facere neque recusandae.
        </span>
      </div>
    </div>
  );
};

export default index;
