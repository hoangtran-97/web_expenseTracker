const express = require("express")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const transaction = require("./routes/transactions")
//config path
dotenv.config({ path: "./config/config.env" })
const PORT = process.env.PORT || 5000
const app = express()
app.use("/api/v1/transactions", transaction)
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)