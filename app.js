const express = require("express");
const app = express();
const morgan = require("morgan");

const monitoringRouter = require("./routes/monitoringRoutes");
const userRouter = require("./routes/userRoutes");
const cameraRouter = require("./routes/cameraRoutes");
const captureRouter = require("./routes/captureRoutes");
const cityRouter = require("./routes/cityRoutes");
const countryRouter = require("./routes/countryRoutes");
const historyRouter = require("./routes/historyRoutes");
const imageCaptureRouter = require("./routes/imageCaptureRoutes");
const localizationRouter = require("./routes/localizationRoutes");
const stateRouter = require("./routes/stateRoutes");
const sendingsEndpointRouter=require('./routes/sendingsEndpointRouter');
// Middleware
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
app.use("/api/v1/monitoramentos", monitoringRouter);
app.use("/api/v1/usuarios", userRouter);
app.use("/api/v1/sendings_endpoint",sendingsEndpointRouter);
app.use("/api/v1/cameras", cameraRouter);
app.use("/api/v1/capturas", captureRouter);
app.use("/api/v1/cidades", cityRouter);
app.use("/api/v1/paises", countryRouter);
app.use("/api/v1/historicos", historyRouter);
app.use("/api/v1/capturas_de_imagens", imageCaptureRouter);
app.use("/api/v1/localizacoes", localizationRouter);
app.use("/api/v1/estados", stateRouter);

module.exports = app;
