import React, { useEffect, useState } from "react";
import { WrapperSC } from "./style";

const KittenImage: React.FC = () => {
  const [kittenUrl, setKittenUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchKitten = async () => {
      try {
        const response = await fetch("http://placekitten.com/200/140");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        setKittenUrl(response.url);
      } catch (error) {
        console.error("Error fetching kitten image:", error);
      }
    };

    fetchKitten();
  }, []);

  return (
    <WrapperSC>{kittenUrl && <img src={kittenUrl} alt="Kitten" />}</WrapperSC>
  );
};

export default KittenImage;
