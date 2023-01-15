import {
  ActionIcon,
  Text,
  Button,
  Flex,
  Switch,
  useMantineColorScheme,
  ButtonProps,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { ABOUT_SLUG } from "../../services/cms";

export const Menu = () => {
  const { pathname } = useRouter();
  const getMenuVariant = useCallback(
    (path: string) => {
      return pathname === path
        ? "gradient"
        : ("subtle" as ButtonProps["variant"]);
    },
    [pathname]
  );
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Flex direction="row" gap={5} align="center" mr="sm">
      <Link href="/">
        <Button variant={getMenuVariant("/")} radius="md" size="md">
          🏠 Home
        </Button>
      </Link>
      <Link href="/articles"></Link>
      <Button variant={getMenuVariant("/articles")} radius="md" size="md">
        📚 Articles
      </Button>
      <Link href={`/articles/${ABOUT_SLUG}`}></Link>
      <Button
        variant={getMenuVariant(`/articles/${ABOUT_SLUG}`)}
        radius="md"
        size="md"
      >
        🙍🏻‍♂️ About Me
      </Button>
      <Flex align="center" ml="xl">
        <Text size="xl">🌞</Text>
        <Switch
          mx="sm"
          mt={5}
          onClick={() => toggleColorScheme()}
          checked={colorScheme === "dark"}
        />
        <Text size="xl">🌚</Text>
      </Flex>
    </Flex>
  );
};
