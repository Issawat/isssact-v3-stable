import { NextPage } from "next";
import { DefaultLayout } from "../layouts/Default";
import { SimpleGrid, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { CMSPost } from "../types/CMSTypes";
import { getAllPost } from "../services/cms";
import { PostCard } from "../components/PostCard";

const HomePage: NextPage = () => {
  const [posts, setPosts] = useState<CMSPost[]>([]);

  useEffect(() => {
    (async () => {
      const postsData = await getAllPost();
      setPosts(postsData);
    })();
  }, []);

  const firstPost = useMemo(() => posts[0], [posts]);
  const otherPosts = useMemo(() => [...posts].slice(1), [posts]);

  return (
    <DefaultLayout>
      <Title variant="text" color="gray">
        มีอะไรใหม่ 🧐
      </Title>
      <PostCard post={firstPost} expanded />
      <Title variant="text" color="gray">
        แนะนำให้อ่าน 🙂
      </Title>
      <SimpleGrid cols={3}>
        {otherPosts?.map((post) => (
          <PostCard key={post.url} post={post} />
        ))}
      </SimpleGrid>
    </DefaultLayout>
  );
};
export default HomePage;
