import { Hono } from "hono";
import { handle } from "hono/vercel";

// export const config = {
//     runtime: "edge",
// };

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});

app.get("/api/hello", (c) => {
    return c.json({ message: "Hello Hono!" });
});

// export default handle(app);

export const GET = handle(app);
