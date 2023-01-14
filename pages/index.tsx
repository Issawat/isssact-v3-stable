import { NextPage } from "next";
import { DefaultLayout } from "../layouts/Default";
import { Text, Title } from "@mantine/core";
import Link from "next/link";

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Title variant="text" color="gray">
        มีอะไรใหม่ 🧐
      </Title>
      <Link href={`/articles`}></Link>
      <Title variant="text" color="gray">
        แนะนำให้อ่าน 🙂
      </Title>
    </DefaultLayout>
  );
};
export default HomePage;
