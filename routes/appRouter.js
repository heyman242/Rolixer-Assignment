import { Router } from "express";
const router = Router();

import {getPopulate} from '../controllers/appController.js'

router.get("/populate", getPopulate)

export default router;