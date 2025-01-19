import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});

app.get("/api/hello", (c) => {
    return c.json({ message: "Hello Hono!" });
});

export default handle(app);
