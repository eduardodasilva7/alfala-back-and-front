import { getFavoritos, postFavorito, deletaFavorito } from '../controller/favortiosController.js';

import {Router} from 'express'
const router = Router(); 

router.get('/', getFavoritos)
router.get('/:id', postFavorito)
router.delete('/:id', deletaFavorito)

export default router;
