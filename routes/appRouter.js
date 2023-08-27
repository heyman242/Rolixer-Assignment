import { Router } from "express";
const router = Router();

import {getPopulate} from '../controllers/appController.js'
import { getAllData } from "../controllers/searchController.js";

router.get("/populate", getPopulate)
router.get("/", getAllData)

export default router;