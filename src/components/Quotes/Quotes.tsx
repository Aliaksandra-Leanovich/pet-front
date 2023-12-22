import { useEffect, useState } from "react";
import {
  BlockSC,
  ContainerSC,
  QuotsSC,
  TextSC,
  TitleSC,
  WrapperSC,
} from "./styles";
import KittenImage from "../KittenImage/KittenImage";

export const Quotes = () => {
  const [catFacts, setCatFacts] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://meowfacts.herokuapp.com/?count=3";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result) {
          setCatFacts(result.data);
          console.log(catFacts);
        }
      } catch (error) {
        console.error("Error fetching  facts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <WrapperSC>
      <ContainerSC>
        <BlockSC>
          <TitleSC>Cat Facts</TitleSC>
          <KittenImage />
          <QuotsSC>
            {catFacts?.map((fact, index) => (
              <TextSC key={index}>{fact}</TextSC>
            ))}
          </QuotsSC>
        </BlockSC>
      </ContainerSC>
    </WrapperSC>
  );
};
