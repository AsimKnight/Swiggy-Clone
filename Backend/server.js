import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

// 👇 important for __dirname in ES modules
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ create app
const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ test route
app.get("/", (req, res) => {
  res.send("Server is working 🚀");
});

// ✅ GET all restaurants
app.get("/api/restaurants", (req, res) => {
  try {
    const filePath = path.join(__dirname, "data", "restaurants.json");

    const raw = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    // 👇 clean data (optional)
    const restaurants =
      raw?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || raw;

    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load restaurants" });
  }
});

// ✅ GET menu by ID
app.get("/api/menu/:id", (req, res) => {
  const { id } = req.params;

  try {
    const filePath = path.join(__dirname, "data", `${id}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "Menu not found" });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load menu" });
  }
});

// ✅ start server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
