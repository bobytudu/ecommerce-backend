"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cart_route_1 = __importDefault(require("./cart.route"));
const user_route_1 = __importDefault(require("./user.route"));
const admin_route_1 = __importDefault(require("./admin.route"));
const order_route_1 = __importDefault(require("./order.route"));
const product_route_1 = __importDefault(require("./product.route"));
const router = (0, express_1.Router)();
router.use('/cart', cart_route_1.default);
router.use('/user', user_route_1.default);
router.use('/admin', admin_route_1.default);
router.use('/order', order_route_1.default);
router.use('/product', product_route_1.default);
exports.default = router;
