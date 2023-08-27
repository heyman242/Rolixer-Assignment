import { Router } from "express";
const router = Router();

import { getPopulate } from "../controllers/appController.js";
import { getAllData } from "../controllers/searchController.js";
import { getStats } from "../controllers/statsController.js";
import { getBarChart } from "../controllers/barChartController.js";
import { getPieChart } from "../controllers/pieChartController.js";
import {getCombineData} from "../controllers/combineDataController.js"

router.get("/populate", getPopulate);
router.get("/", getAllData);
router.get("/stats", getStats);
router.get("/barChart", getBarChart);
router.get("/pieChart", getPieChart);
router.get("/combineData", getCombineData)

export default router;
