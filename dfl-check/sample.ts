import { listenAndServe } from "https://deno.land/std@0.114.0/http/server.ts";

console.log("http://localhost:8000/");
listenAndServe(":8000", (_req) => new Response("Hello World\n"));
