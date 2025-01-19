import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c: any) => {
    return c.json("Hello from Honofadsf!");
});

app.get("/message", (c) => {
    return c.body("Hello from ");
});

export default app;
