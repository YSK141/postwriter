import { format } from "date-fns";
import type { Post } from "../generated/prisma";
import Link from "next/link";
import PostOperations from "./post-operations";

interface PostItemProps {
  post: Pick<Post, "id" | "title" | "published" | "createdAt">;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <div className="flex items-center w-full p-4">
      <div className="grid gap-1 flex-grow">
        <Link
          href={`/editor/${post.id}`}
          className="font-semibold hover:underline"
        >
          {post.title}
        </Link>
        <div>
          <p className="text-sm text-muted-foreground">
            {format(post.createdAt, "yyyy/MM/dd")}
          </p>
        </div>
      </div>
      <div className="ml-auto">
        <PostOperations post={post} />
      </div>
    </div>
  );
}
