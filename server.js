const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");
dotenv.config();

const dbString = process.env.DATABASE_LOCAL;

mongoose
  .connect(dbString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    //console.log(con.connections);
    console.log("DB connection successful");
  });

const port = parseInt(process.env.PORT) || 3500;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
