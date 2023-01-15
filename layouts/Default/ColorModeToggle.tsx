import { Flex, Switch, Text, useMantineColorScheme } from "@mantine/core";

export const ColorModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Switch
      mx="sm"
      size="lg"
      mt={5}
      onLabel={<Text size="lg">🌙</Text>}
      offLabel={<Text size="lg">☀️</Text>}
      onClick={() => toggleColorScheme()}
      checked={colorScheme === "dark"}
    />
  );
};
