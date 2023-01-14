import { ActionIcon, Button, Flex, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { ABOUT_SLUG } from "../../services/cms";

export const Menu = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
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
  );
};
