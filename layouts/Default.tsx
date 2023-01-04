import { ReactNode } from "react";
import {
  AppShell,
  Group,
  Header,
  useMantineColorScheme,
  ActionIcon,
  Flex,
  Button,
} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { ABOUT_SLUG } from "../services/cms";

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
            <Image
              src="./logo.svg"
              alt="isssact-logo"
              width={100}
              height={20}
            />
            <Flex direction="row" gap={2}>
              <Link href="/">
                <Button variant="subtle">🏠 Home</Button>
              </Link>
              <Link href="/articles"></Link>
              <Button variant="subtle">📚 Articles</Button>
              <Link href={`/articles/${ABOUT_SLUG}`}></Link>
              <Button variant="subtle">🙍🏻‍♂️ About Me</Button>
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? "🌞" : "🌚"}
              </ActionIcon>
            </Flex>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          color: colorScheme === "dark" ? theme.colors.gray[0] : theme.colors.dark[8],
          backgroundColor:
            colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
