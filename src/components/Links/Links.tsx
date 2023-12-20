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
      ).map(({ name, link }: ILink) => (
        <LinkSC key={name} to={link}>
          {name}
        </LinkSC>
      ))}
    </LinksContainerSC>
  );
};
