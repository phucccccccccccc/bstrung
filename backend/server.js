import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import caseRoutes from "./routes/caseRoutes.js";
import knowledgeRoutes from "./routes/knowledgeRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hoat dong",
  });
});

app.use(
  "/api/upload",
  uploadRoutes
);
app.use(
    "/api/pages",
     pageRoutes
);
app.use(
  "/api/cases",
  caseRoutes
);
app.use(
    "/api/knowledge",
     knowledgeRoutes
);
app.use(
    "/api/activities",
    activityRoutes

)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server da chay tai port ${PORT}`);
});