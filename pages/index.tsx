import { NextPage } from "next";
import { DefaultLayout } from "../layouts/Default";
import { Text } from "@mantine/core";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Text variant="text" size={10}>
        มีอะไรใหม่ 🧐
      </Text>
      <Link href={`/articles`}></Link>
      <Text variant="text" size={10}>
        แนะนำให้อ่าน 🙂
      </Text>
    </DefaultLayout>
  );
};
export default HomePage;
