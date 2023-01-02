import { ReactNode } from "react";
import {
  AppShell,
  Group,
  Header,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import Image from "next/image";

type Props = {
  children: ReactNode;
};
export const DefaultLayout = ({ children }: Props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="lg">
          <Group sx={{ height: "100%" }} px={20} position="apart">
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === "dark" ? "🌞" : "🌑"}
            </ActionIcon>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
