"use client";
import { Input } from "./ui/input";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Icon } from "./icon";
import { signIn } from "next-auth/react";
import { useState } from "react";
export function UserAuthForm() {
  const [isGitHubLoading, setIsGitHubLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <button
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            メールアドレスでログイン
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-muted-foreground px-2 bg-background">
            または
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            setIsGitHubLoading(true);
            signIn("github");
          }}
        >
          {isGitHubLoading ? (
            <Icon.spinner className="mr-2 animate-spin" />
          ) : (
            <Icon.github className="mr-2" />
          )}
          GitHub
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            setIsGoogleLoading(true);
            signIn("google");
          }}
        >
          {isGoogleLoading ? (
            <Icon.spinner className="mr-2 animate-spin" />
          ) : (
            <Icon.google className="mr-2" />
          )}
          Google
        </Button>
      </div>
    </div>
  );
}
