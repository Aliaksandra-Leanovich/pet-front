import "@emotion/react";

import { Theme as EmotionTheme } from "./styles/theme";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
  export interface Theme {
    color: {
      [key: string]: string;
    };

    fontWeight: {
      [key: string]: string;
    };

    fontFamily: {
      [key: string]: string;
    };
  }
}
