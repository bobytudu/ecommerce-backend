"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const firebase_1 = __importDefault(require("../service/firebase"));
const router = (0, express_1.Router)();
router.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit = 10, page = 1 } = req.query;
    const data = yield firebase_1.default
        .collection("products")
        .limit(parseInt(limit))
        .offset(parseInt(page) * parseInt(limit))
        .get();
    const products = data.docs.map((doc) => doc.data());
    res.json({ total_data: products.length, data: products, query: req.query });
}));
router.post("/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, price, image } = req.body;
    try {
        if (!title || !price || !description || !image)
            throw new Error("Invalid data");
        const data = yield firebase_1.default.collection("products").add({
            title,
            description,
            price,
            image,
        });
        res.json({ id: data.id });
    }
    catch (error) { }
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = yield firebase_1.default.collection("products").doc(id).get();
    res.json(data.data());
}));
router.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { title, description, price, image } = req.body;
    try {
        if (!title || !price || !description || !image)
            throw new Error("Invalid data");
        yield firebase_1.default.collection("products").doc(id).set({
            title,
            description,
            price,
            image,
        });
        res.json({ id });
    }
    catch (error) { }
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield firebase_1.default.collection("products").doc(id).delete();
    res.json({ id });
}));
exports.default = router;
