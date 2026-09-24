import express from "express";

import {
  createCase,
  deleteCase,
  getAdminCases,
  getCaseById,
  getCaseBySlug,
  getPublicCases,
  updateCase,
} from "../controllers/caseController.js";

const router = express.Router();

router.get(
  "/public",
  getPublicCases
);

router.get(
  "/public/:slug",
  getCaseBySlug
);

router.get(
  "/",
  getAdminCases
);

router.get(
  "/:id",
  getCaseById
);

router.post(
  "/",
  createCase
);

router.put(
  "/:id",
  updateCase
);

router.delete(
  "/:id",
  deleteCase
);

export default router;