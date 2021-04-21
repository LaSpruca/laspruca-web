import sirv from "sirv";
import polka from "polka";
import compression, { CompressionOptions } from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
  .use(
    // @ts-ignore
    compression({
      threshold: 0,
    }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, () => {
    console.log(`Running on https://0.0.0.0:${PORT}`);
  });
