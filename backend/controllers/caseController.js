import db from "../config/db.js";

const parseJson = (value, fallback = []) => {
  if (value == null) return fallback;

  if (typeof value !== "string") {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

const mapCase = (row) => ({
  id: row.id,
  slug: row.slug,

  categoryKey: row.category_key,
  category: row.category_label,
  categoryLabel: row.category_label,

  code: row.code,

  title: row.title,
  description: row.description,

  beforeImage: row.before_image,
  afterImage: row.after_image,

  before: row.before_image,
  after: row.after_image,

  initial: row.initial_state,
  result: row.result_text,

  details: parseJson(
    row.details,
    []
  ),

  status: row.status,

  featured: Boolean(
    row.featured
  ),

  sortOrder: row.sort_order,

  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export const getAdminCases = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM treatment_cases
        ORDER BY
          sort_order ASC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapCase)
    );
  } catch (error) {
    console.error(
      "GET ADMIN CASES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải danh sách ca điều trị",
    });
  }
};

export const getPublicCases = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM treatment_cases
        WHERE status = 'published'
        ORDER BY
          sort_order ASC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapCase)
    );
  } catch (error) {
    console.error(
      "GET PUBLIC CASES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải ca điều trị",
    });
  }
};

export const getCaseById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM treatment_cases
        WHERE id = ?
        LIMIT 1
      `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy ca điều trị",
      });
    }

    return res.json(
      mapCase(rows[0])
    );
  } catch (error) {
    console.error(
      "GET CASE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải ca điều trị",
    });
  }
};

export const getCaseBySlug = async (
  req,
  res
) => {
  try {
    const { slug } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM treatment_cases
        WHERE slug = ?
        AND status = 'published'
        LIMIT 1
      `,
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy ca điều trị",
      });
    }

    return res.json(
      mapCase(rows[0])
    );
  } catch (error) {
    console.error(
      "GET CASE BY SLUG ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải ca điều trị",
    });
  }
};

export const createCase = async (
  req,
  res
) => {
  try {
    const {
      slug,
      categoryKey,
      categoryLabel,
      code,
      title,

      description = "",

      beforeImage = "",
      afterImage = "",

      initial = "",
      result = "",

      details = [],

      status = "draft",

      featured = false,

      sortOrder = 0,
    } = req.body;

    if (
      !slug ||
      !categoryKey ||
      !categoryLabel ||
      !code ||
      !title
    ) {
      return res.status(400).json({
        message:
          "Thiếu thông tin bắt buộc",
      });
    }

    const [resultDb] =
      await db.query(
        `
          INSERT INTO treatment_cases
          (
            slug,
            category_key,
            category_label,
            code,
            title,
            description,
            before_image,
            after_image,
            initial_state,
            result_text,
            details,
            status,
            featured,
            sort_order
          )
          VALUES (
            ?, ?, ?, ?, ?, ?, ?,
            ?, ?, ?, ?, ?, ?, ?
          )
        `,
        [
          slug,
          categoryKey,
          categoryLabel,
          code,
          title,
          description,
          beforeImage,
          afterImage,
          initial,
          result,
          JSON.stringify(details),
          status,
          featured ? 1 : 0,
          Number(
            sortOrder || 0
          ),
        ]
      );

    return res.status(201).json({
      success: true,

      id: resultDb.insertId,

      message:
        "Thêm ca điều trị thành công",
    });
  } catch (error) {
    console.error(
      "CREATE CASE ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug hoặc mã ca điều trị đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể thêm ca điều trị",
    });
  }
};

export const updateCase = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const {
      slug,
      categoryKey,
      categoryLabel,
      code,
      title,

      description = "",

      beforeImage = "",
      afterImage = "",

      initial = "",
      result = "",

      details = [],

      status = "draft",

      featured = false,

      sortOrder = 0,
    } = req.body;

    const [resultDb] =
      await db.query(
        `
          UPDATE treatment_cases
          SET
            slug = ?,
            category_key = ?,
            category_label = ?,
            code = ?,
            title = ?,
            description = ?,
            before_image = ?,
            after_image = ?,
            initial_state = ?,
            result_text = ?,
            details = ?,
            status = ?,
            featured = ?,
            sort_order = ?
          WHERE id = ?
        `,
        [
          slug,
          categoryKey,
          categoryLabel,
          code,
          title,
          description,
          beforeImage,
          afterImage,
          initial,
          result,
          JSON.stringify(details),
          status,
          featured ? 1 : 0,
          Number(
            sortOrder || 0
          ),
          id,
        ]
      );

    if (
      resultDb.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy ca điều trị",
      });
    }

    return res.json({
      success: true,

      message:
        "Cập nhật ca điều trị thành công",
    });
  } catch (error) {
    console.error(
      "UPDATE CASE ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug hoặc mã ca điều trị đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể cập nhật ca điều trị",
    });
  }
};

export const deleteCase = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [resultDb] =
      await db.query(
        `
          DELETE FROM treatment_cases
          WHERE id = ?
        `,
        [id]
      );

    if (
      resultDb.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy ca điều trị",
      });
    }

    return res.json({
      success: true,

      message:
        "Xóa ca điều trị thành công",
    });
  } catch (error) {
    console.error(
      "DELETE CASE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể xóa ca điều trị",
    });
  }
};