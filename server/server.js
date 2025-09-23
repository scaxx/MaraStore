import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//Obtener todos los productos:
app.get("/api/products", async (req, res) => {
    try {
        const response = await fetch("https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error al obtener productos;", error);
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

//Obtener un producto por ID:
app.get("api/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error al obtener producto:", error);
        res.status(500).json({ error: "Error al obtener el producto" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});