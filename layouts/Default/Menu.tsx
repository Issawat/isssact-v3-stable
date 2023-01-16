import {
  Button,
  Flex,
  ButtonProps,
  MediaQuery,
  Drawer,
  useMantineTheme,
  useMantineColorScheme,
  ChevronIcon,
  Box,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { ABOUT_SLUG } from "../../services/cms";
import { ColorModeToggle } from "./ColorModeToggle";
import Image from "next/image";

export const Menu = () => {
  const { pathname } = useRouter();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const isDarkMode = colorScheme === "dark";
  const getMenuVariant = useCallback(
    (path: string) => {
      return pathname === path
        ? "gradient"
        : ("subtle" as ButtonProps["variant"]);
    },
    [pathname]
  );

  return (
    <>
      <MediaQuery smallerThan="md" styles={{ display: "none" }}>
        <Flex direction="row" gap={5} align="center" mr="sm">
          <Link href="/">
            <Button variant={getMenuVariant("/")} radius="md" size="md">
              🏠 Home
            </Button>
          </Link>
          <Link href="/articles">
            <Button variant={getMenuVariant("/articles")} radius="md" size="md">
              📚 Articles
            </Button>
          </Link>
          <Link href={`/articles/${ABOUT_SLUG}`}>
            <Button
              variant={getMenuVariant(`/articles/${ABOUT_SLUG}`)}
              radius="md"
              size="md"
            >
              🙍🏻‍♂️ About Me
            </Button>
          </Link>
          <ColorModeToggle />
        </Flex>
      </MediaQuery>

      <MediaQuery largerThan="md" styles={{ display: "none" }}>
        <div>
          <Button
            variant="gradient"
            radius="md"
            size="md"
            onClick={() => setOpened(true)}
          >
            <ChevronIcon width="25px" height="25px" />
          </Button>
          <Drawer
            size="md"
            overlayColor={
              isDarkMode ? theme.colors.dark[9] : theme.colors.gray[0]
            }
            position="top"
            overlayOpacity={0.4}
            overlayBlur={5}
            opened={opened}
            onClose={() => setOpened(false)}
            withCloseButton={false}
          >
            <Flex
              h="350px"
              direction="column"
              gap={6}
              align="center"
              justify="center"
              pt={5}
              sx={{
                backgroundColor: isDarkMode ? "black" : undefined,
              }}
            >
              <Image
                src="./logo.svg"
                alt="isssact-logo"
                width={150}
                height={30}
                style={{
                  filter: isDarkMode ? "invert(100%)" : undefined,
                  marginBottom: "20px",
                }}
              />
              <Link href="/">
                <Button variant={getMenuVariant("/")} radius="md" size="md">
                  🏠 Home
                </Button>
              </Link>
              <Link href="/articles">
                <Button
                  variant={getMenuVariant("/articles")}
                  radius="md"
                  size="md"
                >
                  📚 Articles
                </Button>
              </Link>
              <Link href={`/articles/${ABOUT_SLUG}`}>
                <Button
                  variant={getMenuVariant(`/articles/${ABOUT_SLUG}`)}
                  radius="md"
                  size="md"
                >
                  🙍🏻‍♂️ About Me
                </Button>
              </Link>
              <ColorModeToggle />
              <Box
                mt="md"
                onClick={() => setOpened(false)}
                sx={{ cursor: "pointer" }}
              >
                <ChevronIcon
                  width="25px"
                  height="25px"
                  color="silver"
                  transform="rotate(180, 0, 0)"
                />
              </Box>
            </Flex>
          </Drawer>
        </div>
      </MediaQuery>
    </>
  );
};
