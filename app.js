import { Application } from "https://deno.land/x/oak@v10.1.0/mod.ts";
import router from "./routes/routes.js";

const app = new Application();

app.use(router.routes());

export default app;
