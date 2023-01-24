import { StorageStack } from "./storageStack";
import { App } from "@serverless-stack/resources";
import { ApiStack } from "./apiStack";
import { AuthStack } from "./AuthStack";
/**
 * @param {App} app
 */
export default function main(app) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app.stack(StorageStack).stack(ApiStack).stack(AuthStack);
}
