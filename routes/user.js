import { Router } from 'express';

// Contollers of rest requests
import { userGet, userPost, userPut, userDelete, userPatch } from '../controllers/user.js'

const router = Router();

router.get('/', userGet);
router.post('/', userPost);
router.put('/:id', userPut);
router.delete('/', userDelete);
router.patch('/', userPatch);

export { router }
