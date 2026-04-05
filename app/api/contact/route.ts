import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, category, message } = body;

  const { error } = await supabase.from("contacts").insert([
    { name, email, category, message },
  ]);

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}