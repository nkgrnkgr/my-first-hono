import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { play } from "./playground.js";

const app = new Hono();

app.get("/", (c) => {
  const result = play();
  return c.json({
    result,
  });
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
