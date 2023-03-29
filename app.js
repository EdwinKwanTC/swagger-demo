const express = require("express");
const swaggerUi = require("swagger-ui-express");
const router = require("./src/routes");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = 3000;

app.use(router(app));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
