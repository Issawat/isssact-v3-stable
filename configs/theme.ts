import { MantineProviderProps } from "@mantine/core";
import { Kanit } from "@next/font/google";

export const KANIT_FONT = Kanit({
  weight: ["200", "300", "400"],
  subsets: ["latin", "thai"],
});

export const THEME_CONFIG: MantineProviderProps["theme"] = {
  primaryColor: "cyan",
  defaultGradient: {
    deg : 40,
    from : 'cyan',
    to: 'lime'
  },
  fontFamily: KANIT_FONT.style.fontFamily,
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: KANIT_FONT.style.fontFamily, fontWeight: 300 },
};
