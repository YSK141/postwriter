"use client";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { useState } from "react";
import { Icon } from "./icon";
import { ButtonProps } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
interface PostCreateButtonProps extends ButtonProps {}

export default function PostCreateButton({
  className,
  variant,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    setIsLoading(true);
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "untitled post",
      }),
    });
    setIsLoading(false);
    console.log("r", response.ok);
    if (!response.ok) {
      return toast({
        title: "問題が発生しました。",
        description: "投稿が作成されませんでした",
        variant: "destructive",
      });
    }

    const post = await response.json();
    router.refresh();
    router.push(`/editor/${post.id}`);
  };
  return (
    <Button
      className={cn(
        buttonVariants({ variant }),
        { "cursor-not-allowed opacity-60": isLoading },
        className
      )}
      onClick={onClick}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Icon.spinner className="animate-spin mr-2 h-4 w-4" />
      ) : (
        <Icon.add className="mr-2 h-4 w-4" />
      )}
      新しい投稿
    </Button>
  );
}
