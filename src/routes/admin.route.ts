import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Cart route');
});

export default router;