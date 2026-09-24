import express from "express";

import {
  createActivity,
  deleteActivity,
  getActivityById,
  getActivityBySlug,
  getAdminActivities,
  getPublicActivities,
  updateActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.get(
  "/public",
  getPublicActivities
);

router.get(
  "/public/:slug",
  getActivityBySlug
);

router.get(
  "/",
  getAdminActivities
);

router.get(
  "/:id",
  getActivityById
);

router.post(
  "/",
  createActivity
);

router.put(
  "/:id",
  updateActivity
);

router.delete(
  "/:id",
  deleteActivity
);

export default router;