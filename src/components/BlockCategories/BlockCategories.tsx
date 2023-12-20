import React from "react";
import { useTranslation } from "react-i18next";
import { IItem } from "../Footer/types";
import { BlockSecondSC, CategorySC, ContainerSC, TermsSC } from "./style";

export const BlockCategories = () => {
  const { t } = useTranslation();

  return (
    <ContainerSC>
      <BlockSecondSC>
        {(
          t("nav", {
            returnObjects: true,
            defaultValue: [],
          }) as []
        ).map(({ name }: IItem) => (
          <CategorySC to="/" key={name}>
            {name}
          </CategorySC>
        ))}
      </BlockSecondSC>

      <TermsSC>© 2021 Shelly. Terms of use and privacy policy.</TermsSC>
    </ContainerSC>
  );
};
