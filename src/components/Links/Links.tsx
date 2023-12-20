import React from "react";
import { useTranslation } from "react-i18next";
import { LinkSC, LinksContainerSC } from "./style";
import { ILink } from "./types";

export const Links = () => {
  const { t } = useTranslation();

  return (
    <LinksContainerSC>
      {(
        t("nav", {
          returnObjects: true,
          defaultValue: [],
        }) as []
      ).map(({ name }: ILink) => (
        <LinkSC key={name} to="/">
          {name}
        </LinkSC>
      ))}
    </LinksContainerSC>
  );
};
