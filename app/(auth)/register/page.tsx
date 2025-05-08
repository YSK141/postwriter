import Link from "next/link";
import { UserAuthForm } from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
export default function Register() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 w-screen items-center justify-center lg:max-w-none lg:px-0">
      <Link
        href={"/login"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute left-4 md:left-8 top-8"
        )}
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden" />
      <div className="flex flex-col justify-center h-screen items-center w-screen">
        <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              アカウントの作成
            </h1>
            <p className="text-sm text-muted-foreground">
              メールアドレスを入力してアカウント作成してください。
            </p>
          </div>
          <UserAuthForm />
          <p className="text-muted-foreground px-8 text-center text-sm">
            続けてクリックすれば私たちの
            <Link href="/terms" className="underline underline-offset-4">
              利用規約
            </Link>
            と
            <Link href="/privacy" className="underline underline-offset-4">
              プライバシーポリシー
            </Link>
            に同意したことになります。
          </p>
        </div>
      </div>
    </div>
  );
}
