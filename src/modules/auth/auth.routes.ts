import { Router } from 'express';
import { base } from './auth.controllers';

const router = Router();

router.get('/', base);

export default router;
