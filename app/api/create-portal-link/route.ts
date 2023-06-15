import { getUrl } from "@/libs/helper";
import { stripe } from "@/libs/stripe";
import { createOnRetrieveACustomer } from "@/libs/supabaseAdmin";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const supabase = createRouteHandlerClient({
      cookies,
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("Not User");

    const customer = await createOnRetrieveACustomer({
      uuid: user.id || "",
      email: user.email || "",
    });

    if (!customer) throw new Error("Not customer");

    const { url } = await stripe.billingPortal.sessions.create({
      customer,
      return_url: `${getUrl()}/account`,
    });

    return NextResponse.json({ url });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
