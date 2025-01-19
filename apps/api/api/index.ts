import { handle } from "@hono/node-server/vercel";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
    return c.body("Hello from Honofadsf!");
});


app.get("/message", (c) => {
  return c.body("Hello from ");
});

app.post("/", async (c) => {
    const input = await c.req.json();
    return c.json(input);
});

export default handle(app);
