import { Router } from "https://deno.land/x/oak@v10.1.0/mod.ts";
import * as helloController from "./controllers/helloController.js";

const router = new Router();

router.get("/", helloController.hello);

export default router;
