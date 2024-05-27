"use server";

import { z } from "zod";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { FormSchema } from "../types";
import { cookies } from "next/headers";

export async function actionLoginUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const response = await supabase.auth.signInWithPassword({
      email,
      password,
    });
console.log(response,"response-login")
    if(response?.data?.user){
      return JSON.stringify(response)
    }
    return JSON.stringify({ error: { message: "Invalid credentials." } })
  } catch (e) {
    console.error(e);
    return JSON.stringify({ error: { messsage: "Failed to Login.Please try again later." } })
  }
}

export async function actionSignUpUser({
  email,
  password,
}: z.infer<typeof FormSchema>) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);
    if (data?.length){
      return JSON.stringify({
        error: { message: "User already exists", data },
      });
    }
    const response = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
      },
    });
    if(response?.data?.user){
      return JSON.stringify(response);
    }
    throw new Error("Failed to Signup")
    
  } catch (e) {
    console.error(e);
    return JSON.stringify({
      error: { message: "Failed to Signup.Please try again later." },
    });
  }
}
