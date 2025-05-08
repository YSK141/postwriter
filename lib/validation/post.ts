import { z } from "zod";

export const postPatchSchema = z.object({
  title: z
    .string()
    .min(3)
    .max(128, { message: "記事のタイトルは128文字以内で入力して下さい。" }),
  content: z.any().optional(),
});

export type postPatchSchemaType = z.infer<typeof postPatchSchema>;
