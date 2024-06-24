import { getLivros, getLivro, postLivro, patchLivro, deletaLivro } from '../controller/livroController.js';
import {Router} from 'express'
const router = Router(); 

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post("/", postLivro);
router.patch("/:id", patchLivro)
router.delete('/:id', deletaLivro)

export default router;
