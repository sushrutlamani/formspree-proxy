export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const body = await req.text();

  const zohoUrl = "https://www.zohoapis.ca/crm/v7/functions/cn_formhandler/actions/execute?auth_type=apikey&zapikey=1003.00431a6979bf1c4b073fb83d0fdbfd94.0143a22fdd83749de36843fb346fce5a";

  fetch(zohoUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  return new Response(JSON.stringify({ status: "ok" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}