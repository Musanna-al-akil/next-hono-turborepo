import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});

app.get("/api/hello", (c) => {
    return c.json({ message: "Hello Hono!" });
});
