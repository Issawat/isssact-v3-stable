import { NextPage } from "next";
import { useRouter } from "next/router";

const ContentPage: NextPage = () => {
  const slugId = useRouter()?.query?.slugId as string;
  return <>test slug {slugId} </>;
};

export default ContentPage;
