import { Router } from "express";
const router = Router();

import {getPopulate} from '../controllers/appController.js'
import { getAllData } from "../controllers/searchController.js";
import { getStats } from "../controllers/statsController.js";


router.get("/populate", getPopulate)
router.get("/", getAllData)
router.get("/stats", getStats)

export default router;