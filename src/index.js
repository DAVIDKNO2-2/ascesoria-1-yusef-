

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const cors = require('cors');



const routineRoutes = require("./routes/rutina");

dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ms: "Pagina de HÉCTOR " });
});

app.use("/api/rutina", routineRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






