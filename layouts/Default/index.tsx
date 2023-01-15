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
      padding="xl"
      header={
        <Header height={80} pr="md" pt="md">
          <Group position="apart">
            <Image
              src="./logo.svg"
              alt="isssact-logo"
              width={150}
              height={30}
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
