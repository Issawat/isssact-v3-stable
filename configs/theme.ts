import { MantineProviderProps } from "@mantine/core";
import { Kanit } from "@next/font/google";

const KANIT_FONT = Kanit({
  weight: ["200", "300", "400"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const THEME_CONFIG: MantineProviderProps["theme"] = {
  fontFamily: KANIT_FONT.style.fontFamily,
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: KANIT_FONT.style.fontFamily },
};
