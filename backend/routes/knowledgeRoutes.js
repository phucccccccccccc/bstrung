 import express from "express";

import {
  createArticle,
  deleteArticle,
  getAdminArticles,
  getArticleById,
  getArticleBySlug,
  getPublicArticles,
  updateArticle,
} from "../controllers/knowledgeController.js";

const router = express.Router();

router.get(
  "/public",
  getPublicArticles
);

router.get(
  "/public/:slug",
  getArticleBySlug
);

router.get(
  "/",
  getAdminArticles
);

router.get(
  "/:id",
  getArticleById
);

router.post(
  "/",
  createArticle
);

router.put(
  "/:id",
  updateArticle
);

router.delete(
  "/:id",
  deleteArticle
);

export default router;