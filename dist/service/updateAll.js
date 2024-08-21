"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("./firebase"));
const products_json_1 = __importDefault(require("./products.json"));
const detailRef = firebase_1.default.collection("products");
products_json_1.default.forEach((item) => {
    detailRef
        .doc(item.id)
        .set(item)
        .then(() => console.count("item - "))
        .catch((error) => {
        console.log({
            item,
            msg: error.message,
        });
    });
});
