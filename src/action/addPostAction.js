"use server";

import { sendPost } from "@/postdb/postdb";
import { revalidatePath } from "next/cache";

export const handleAddPost = async (formData) => {
  const newPost = Object.fromEntries(formData.entries());

  const res = await sendPost(newPost);

  if (res.ok) {
    revalidatePath("/posts");
  }

  return res;
};
