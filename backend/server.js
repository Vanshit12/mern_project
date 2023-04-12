const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require('./config/database')


// Handling Uncaught Error like undeclare variable used
process.on("uncaughtException", (err) => {
  console.log(`eroor. ${err.message}`)
  console.log("Shutting down the server due to uncaught error")

  process.exit(1);
})

// config
dotenv.config({path: "backend/config/config.env"})

// Connecting to database
connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

  // Handling Promise Rejection error like mongodb connection
  process.on("unhandledRejection", (err) => {
  console.log(`eroor. ${err.message}`)
  console.log("Shutting down the server due to unhandled promise rejection")

  server.close(() => {
    process.exit(1);
  });

})