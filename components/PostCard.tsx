import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Title,
  Sx,
  Stack,
  MediaQuery,
} from "@mantine/core";
import { CMSPost } from "../types/CMSTypes";
import dayjs from "dayjs";

const CardSX: Sx = {
  borderWidth: "0.7px",
  borderStyle: "solid",
  borderColor: "rgba(125,125,125,0.35)",
  borderRadius: "15px",
};

type PostCardOptions = {
  post: CMSPost;
  expanded?: boolean;
};

const ExpandedPostCard = ({ post }: Omit<PostCardOptions, "expanded">) => (
  <SimpleGrid m="lg" p="lg" sx={CardSX} cols={2}>
    <Image src={post?.featured_image as string} alt="post-img" radius="lg" />
    <Stack spacing="md">
      <Title color="cyan" sx={{ fontWeight: "normal", fontStyle: "italic" }}>
        {post?.title}
      </Title>
      <Text color="silver">
        Created At: {dayjs(post?.created).format("DD MMMM YYYY")} , Category:{" "}
        {post?.categories?.[0]?.name}
      </Text>
      <Text weight="lighter" size="xl">
        {post?.summary}
      </Text>
    </Stack>
  </SimpleGrid>
);

const NormalPostCard = ({ post }: Omit<PostCardOptions, "expanded">) => (
  <Box m="md" p="lg" sx={CardSX}>
    <Image src={post?.featured_image as string} alt="post-img" radius="lg" />
    <Stack spacing="md" mt="md">
      <Title
        size="25px"
        color="cyan"
        sx={{ fontWeight: "normal", fontStyle: "italic" }}
      >
        {post?.title}
      </Title>
      <Text color="silver">
        Created At: {dayjs(post?.created).format("DD MMMM YYYY")} , Category:{" "}
        {post?.categories?.[0]?.name}
      </Text>
      <Text weight="lighter" size="xl">
        {post?.summary}
      </Text>
    </Stack>
  </Box>
);

export const PostCard = ({ post, expanded = false }: PostCardOptions) => {
  if (expanded)
    return (
      <>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <ExpandedPostCard post={post} />
        </MediaQuery>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <NormalPostCard post={post} />
        </MediaQuery>
      </>
    );

  return <NormalPostCard post={post} />;
};
