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
    const black = theme.colors.dark[8];
    const white = theme.colors.gray[0];
    return {
      main: {
        color: colorScheme === "dark" ? white : black,
        backgroundColor: colorScheme === "dark" ? black : white,
      },
    };
  };

export const DefaultLayout = ({ children }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="lg">
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <Image
              src="./logo.svg"
              alt="isssact-logo"
              width={100}
              height={20}
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
