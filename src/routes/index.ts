import { Router } from "express";
import cartRoute from "./cart.route";
import userRoute from "./user.route";
import adminRoute from "./admin.route";
import orderRoute from "./order.route";
import productRoute from "./product.route";

const router = Router();

router.use('/cart', cartRoute);
router.use('/user', userRoute);
router.use('/admin', adminRoute);
router.use('/order', orderRoute);
router.use('/product', productRoute);

export default router;