import db from "../config/db.js";

const formatDate = (value) => {
  if (!value) return "";

  return new Date(value).toLocaleDateString("vi-VN");
};

const mapActivity = (row) => ({
  id: row.id,

  title: row.title,
  type: row.type,
  location: row.location,
  slug: row.slug,

  excerpt: row.excerpt,
  image: row.image,

  date: formatDate(row.event_date),
  eventDate: row.event_date,

  status: row.status,

  featured: Boolean(
    row.featured
  ),

  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export const getAdminActivities = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM activities
        ORDER BY
          event_date DESC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapActivity)
    );
  } catch (error) {
    console.error(
      "GET ADMIN ACTIVITIES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải danh sách hoạt động",
    });
  }
};

export const getPublicActivities = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM activities
        WHERE status = 'published'
        ORDER BY
          featured DESC,
          event_date DESC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapActivity)
    );
  } catch (error) {
    console.error(
      "GET PUBLIC ACTIVITIES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải hoạt động",
    });
  }
};

export const getActivityById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM activities
        WHERE id = ?
        LIMIT 1
      `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy hoạt động",
      });
    }

    return res.json(
      mapActivity(rows[0])
    );
  } catch (error) {
    console.error(
      "GET ACTIVITY ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải hoạt động",
    });
  }
};

export const getActivityBySlug = async (
  req,
  res
) => {
  try {
    const { slug } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM activities
        WHERE slug = ?
        AND status = 'published'
        LIMIT 1
      `,
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy hoạt động",
      });
    }

    return res.json(
      mapActivity(rows[0])
    );
  } catch (error) {
    console.error(
      "GET ACTIVITY BY SLUG ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải hoạt động",
    });
  }
};

export const createActivity = async (
  req,
  res
) => {
  try {
    const {
      title,
      type,

      location = "",

      slug,

      excerpt = "",
      image = "",

      eventDate = null,

      status = "draft",

      featured = false,
    } = req.body;

    if (
      !title ||
      !type ||
      !slug
    ) {
      return res.status(400).json({
        message:
          "Thiếu thông tin bắt buộc",
      });
    }

    const [result] =
      await db.query(
        `
          INSERT INTO activities
          (
            title,
            type,
            location,
            slug,
            excerpt,
            image,
            event_date,
            status,
            featured
          )
          VALUES (
            ?, ?, ?, ?, ?,
            ?, ?, ?, ?
          )
        `,
        [
          title,
          type,
          location,
          slug,
          excerpt,
          image,

          eventDate || null,

          status,

          featured ? 1 : 0,
        ]
      );

    return res.status(201).json({
      success: true,

      id: result.insertId,

      message:
        "Thêm hoạt động thành công",
    });
  } catch (error) {
    console.error(
      "CREATE ACTIVITY ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug hoạt động đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể thêm hoạt động",
    });
  }
};

export const updateActivity = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const {
      title,
      type,

      location = "",

      slug,

      excerpt = "",
      image = "",

      eventDate = null,

      status = "draft",

      featured = false,
    } = req.body;

    const [result] =
      await db.query(
        `
          UPDATE activities
          SET
            title = ?,
            type = ?,
            location = ?,
            slug = ?,
            excerpt = ?,
            image = ?,
            event_date = ?,
            status = ?,
            featured = ?
          WHERE id = ?
        `,
        [
          title,
          type,
          location,
          slug,
          excerpt,
          image,

          eventDate || null,

          status,

          featured ? 1 : 0,

          id,
        ]
      );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy hoạt động",
      });
    }

    return res.json({
      success: true,

      message:
        "Cập nhật hoạt động thành công",
    });
  } catch (error) {
    console.error(
      "UPDATE ACTIVITY ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug hoạt động đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể cập nhật hoạt động",
    });
  }
};

export const deleteActivity = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [result] =
      await db.query(
        `
          DELETE FROM activities
          WHERE id = ?
        `,
        [id]
      );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy hoạt động",
      });
    }

    return res.json({
      success: true,

      message:
        "Xóa hoạt động thành công",
    });
  } catch (error) {
    console.error(
      "DELETE ACTIVITY ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể xóa hoạt động",
    });
  }
};