"use server";

import { checkUser } from "@/lib/checkUser";

export async function checkUserAction() {
  return await checkUser();
}