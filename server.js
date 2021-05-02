const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is connected at port ${port}`);
});