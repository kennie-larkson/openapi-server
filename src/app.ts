import { Oas3AppOptions } from "oas3-tools/dist/middleware/oas3.options";
import path from "path";
import http from "http";
import * as oas3Tools from "oas3-tools";
import express from "express";

const serverPort = 8000;

const options: Oas3AppOptions = {
  routing: {
    controllers: path.join(__dirname, "./controllers"),
  },
  openApiValidator: {
    apiSpec: path.join(__dirname, "api/openapi.yaml"),
  }, // Provide apiSpec configuration
  logging: {
    format: "combined",
    errorLimit: 400,
  },
  // @ts-expect-error
  swaggerUI: {
    apiDocsPath: "/api-docs",
    swaggerUIPath: "/docs",
    swaggerUiDir: "",
    sanitize: true,
  },
};

const expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "api/openapi.yaml"),
  options
);
const app = expressAppConfig.getApp();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

http.createServer(app).listen(serverPort, () => {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  );
  console.log(
    "Swagger-ui is available on http://localhost:%d/docs",
    serverPort
  );
});
