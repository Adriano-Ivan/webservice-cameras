const app = require("./app");
// Running server
const port = 3500;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
