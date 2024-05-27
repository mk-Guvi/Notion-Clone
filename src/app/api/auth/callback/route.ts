"use server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const token = requestUrl.searchParams.get("token");
  const refresh_token = requestUrl.searchParams.get("refresh_token");
  if (token && refresh_token) {
    try {
      const supabase = await createClient();

      const response = await supabase.auth.setSession({
        access_token: token,
        refresh_token,
      });
      console.log(response, "==response==");
      return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
    } catch (e) {
      console.log(e);
      return NextResponse.redirect(`${requestUrl.origin}/login`);
    }
  } else if (code) {
    try {
      const supabase = await createClient();

      const response = await supabase.auth.exchangeCodeForSession(code);
      console.log(response, "==response==");
      return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
    } catch (e) {
      console.log(e);
      return NextResponse.redirect(`${requestUrl.origin}/login`);
    }
  } else {
    return NextResponse.redirect(`${requestUrl.origin}/login`);
  }
}
