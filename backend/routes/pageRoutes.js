import express from "express";

import {
  getPage,
  getPublicPage,
  updatePageSection,
  updateSectionVisibility,
} from "../controllers/pageController.js";

const router = express.Router();

router.get(
  "/:pageSlug/public",
  getPublicPage
);

router.get(
  "/:pageSlug",
  getPage
);

router.put(
  "/:pageSlug/:sectionKey/visibility",
  updateSectionVisibility
);

router.put(
  "/:pageSlug/:sectionKey",
  updatePageSection
);

export default router;