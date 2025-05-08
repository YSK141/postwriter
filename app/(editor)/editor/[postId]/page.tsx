import Editor from "@/components/editor";
import { notFound, redirect } from "next/navigation";
import { db } from "@/lib/db";
import { Post, User } from "../../../../generated/prisma";
import { getCurrentUser } from "@/lib/session";
interface EditorProps {
  params: {
    postId: string;
  };
}

async function getPostForUser(postId: Post["id"], userId: User["id"]) {
  const post = await db.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
  });
  return post;
}

export default async function EditorPage({ params }: EditorProps) {
  const user = await getCurrentUser();
  console.log("user", user);
  if (!user) {
    redirect("/login");
  }
  const userId = user?.id;
  const postId = params.postId;
  const post = await getPostForUser(postId, userId);

  console.log("parames", params);
  if (!post) {
    notFound();
  }

  return (
    <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
  );
}
