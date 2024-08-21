import { Router } from "express";
import firestore from "../service/firebase";

const router = Router();

router.get("/all", async (req, res) => {
  const { limit = 10, page = 1 } = req.query;
  const data = await firestore
    .collection("products")
    .limit(parseInt(limit as string))
    .offset(parseInt(page as string) * parseInt(limit as string))
    .get();
  const products = data.docs.map((doc) => doc.data());
  res.json({ total_data: products.length, data: products, query: req.query });
});

router.post("/add", async (req, res) => {
  const { title, description, price, image } = req.body;
  try {
    if (!title || !price || !description || !image)
      throw new Error("Invalid data");
    const data = await firestore.collection("products").add({
      title,
      description,
      price,
      image,
    });
    res.json({ id: data.id });
  } catch (error) {}
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const data = await firestore.collection("products").doc(id).get();
  res.json(data.data());
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, price, image } = req.body;
  try {
    if (!title || !price || !description || !image)
      throw new Error("Invalid data");
    await firestore.collection("products").doc(id).set({
      title,
      description,
      price,
      image,
    });
    res.json({ id });
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await firestore.collection("products").doc(id).delete();
  res.json({ id });
});

export default router;
