

const express = require("express");
const { PrismaClient } = require("@prisma/client");
const dotenv = require("dotenv");
const cors = require('cors');


const userRoutes = require("./routes/user");
const profileRoutes = require("./routes/profile");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const orderItemRoutes = require("./routes/orderItem");
const routineRoutes = require("./routes/rutina");

dotenv.config();
const app = express();
const prisma = new PrismaClient();
app.use(cors());


app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ms: "Pagina de HÉCTOR " });
});

app.use("/api/users", userRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items", orderItemRoutes);
app.use("/api/rutina", routineRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});






