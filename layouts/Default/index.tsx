import { ReactNode } from "react";
import {
  AppShell,
  Group,
  Header,
  useMantineColorScheme,
  MantineTheme,
  ColorScheme,
} from "@mantine/core";
import Image from "next/image";
import { Menu } from "./Menu";

type Props = {
  children: ReactNode;
};

const getThemeColorFromColorScheme =
  (colorScheme: ColorScheme) => (theme: MantineTheme) => {
    const isDarkMode = colorScheme === "dark";
    const black = "black";
    const white = "white";
    return {
      main: {
        color: isDarkMode ? white : black,
        backgroundColor: isDarkMode ? black : white,
      },
    };
  };

export const DefaultLayout = ({ children }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <AppShell
      padding="xl"
      header={
        <Header
          height={80}
          pr="md"
          pt="md"
          sx={{
            backgroundColor: isDarkMode
              ? "rgba(0,0,0,0.8)"
              : "rgba(255,255,255,0.8)",
            backdropFilter: "blur(10px)",
            borderBottomWidth: `0.7px`,
            borderBottomColor: "rgba(125,125,125,0.35)"
          }}
        >
          <Group position="apart">
            <Image
              src="./logo.svg"
              alt="isssact-logo"
              width={150}
              height={30}
              style={{
                filter: isDarkMode ? "invert(100%)" : undefined,
              }}
            />
            <Menu />
          </Group>
        </Header>
      }
      styles={getThemeColorFromColorScheme(colorScheme)}
    >
      {children}
    </AppShell>
  );
};
