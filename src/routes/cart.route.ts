import { Router } from 'express';
import firestore from '../service/firebase';

const router = Router();

router.get('/', (req, res) => {
  // get user's cart from firebase
});

export default router;