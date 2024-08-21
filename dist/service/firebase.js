"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const key_json_1 = __importDefault(require("./key.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(key_json_1.default),
});
const firestore = firebase_admin_1.default.firestore();
exports.default = firestore;
