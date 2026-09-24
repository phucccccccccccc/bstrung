import db from "../config/db.js";

const mapArticle = (row) => ({
  id: row.id,

  title: row.title,
  slug: row.slug,

  categoryKey: row.category_key,
  category: row.category_label,
  categoryLabel: row.category_label,

  excerpt: row.excerpt,
  description: row.excerpt,

  thumbnail: row.thumbnail,
  image: row.thumbnail,

  content: row.content,

  readTime: row.read_time,

  date: row.published_at
    ? new Date(
        row.published_at
      ).toLocaleDateString("vi-VN")
    : "",

  status: row.status,

  featured: Boolean(
    row.featured
  ),

  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export const getAdminArticles = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM knowledge_articles
        ORDER BY
          featured DESC,
          published_at DESC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapArticle)
    );
  } catch (error) {
    console.error(
      "GET ADMIN ARTICLES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải danh sách bài viết",
    });
  }
};

export const getPublicArticles = async (
  req,
  res
) => {
  try {
    const [rows] = await db.query(
      `
        SELECT *
        FROM knowledge_articles
        WHERE status = 'published'
        ORDER BY
          featured DESC,
          published_at DESC,
          id DESC
      `
    );

    return res.json(
      rows.map(mapArticle)
    );
  } catch (error) {
    console.error(
      "GET PUBLIC ARTICLES ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải bài viết",
    });
  }
};

export const getArticleById = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM knowledge_articles
        WHERE id = ?
        LIMIT 1
      `,
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy bài viết",
      });
    }

    return res.json(
      mapArticle(rows[0])
    );
  } catch (error) {
    console.error(
      "GET ARTICLE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải bài viết",
    });
  }
};

export const getArticleBySlug = async (
  req,
  res
) => {
  try {
    const { slug } = req.params;

    const [rows] = await db.query(
      `
        SELECT *
        FROM knowledge_articles
        WHERE slug = ?
        AND status = 'published'
        LIMIT 1
      `,
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy bài viết",
      });
    }

    return res.json(
      mapArticle(rows[0])
    );
  } catch (error) {
    console.error(
      "GET ARTICLE BY SLUG ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải bài viết",
    });
  }
};

export const createArticle = async (
  req,
  res
) => {
  try {
    const {
      title,
      slug,

      categoryKey,
      categoryLabel,

      excerpt = "",
      thumbnail = "",
      content = "",

      readTime = "",

      status = "draft",
      featured = false,

      publishedAt = null,
    } = req.body;

    if (
      !title ||
      !slug ||
      !categoryKey ||
      !categoryLabel
    ) {
      return res.status(400).json({
        message:
          "Thiếu thông tin bắt buộc",
      });
    }

    const publishDate =
      publishedAt ||
      (status === "published"
        ? new Date()
        : null);

    const [result] = await db.query(
      `
        INSERT INTO knowledge_articles
        (
          title,
          slug,

          category_key,
          category_label,

          excerpt,
          thumbnail,
          content,

          read_time,

          status,
          featured,

          published_at
        )
        VALUES (
          ?, ?, ?, ?, ?, ?,
          ?, ?, ?, ?, ?
        )
      `,
      [
        title,
        slug,

        categoryKey,
        categoryLabel,

        excerpt,
        thumbnail,
        content,

        readTime,

        status,
        featured ? 1 : 0,

        publishDate,
      ]
    );

    return res.status(201).json({
      success: true,

      id: result.insertId,

      message:
        "Thêm bài viết thành công",
    });
  } catch (error) {
    console.error(
      "CREATE ARTICLE ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug bài viết đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể thêm bài viết",
    });
  }
};

export const updateArticle = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const {
      title,
      slug,

      categoryKey,
      categoryLabel,

      excerpt = "",
      thumbnail = "",
      content = "",

      readTime = "",

      status = "draft",
      featured = false,

      publishedAt = null,
    } = req.body;

    const publishDate =
      publishedAt ||
      (status === "published"
        ? new Date()
        : null);

    const [result] = await db.query(
      `
        UPDATE knowledge_articles
        SET
          title = ?,
          slug = ?,

          category_key = ?,
          category_label = ?,

          excerpt = ?,
          thumbnail = ?,
          content = ?,

          read_time = ?,

          status = ?,
          featured = ?,

          published_at = ?

        WHERE id = ?
      `,
      [
        title,
        slug,

        categoryKey,
        categoryLabel,

        excerpt,
        thumbnail,
        content,

        readTime,

        status,
        featured ? 1 : 0,

        publishDate,

        id,
      ]
    );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy bài viết",
      });
    }

    return res.json({
      success: true,

      message:
        "Cập nhật bài viết thành công",
    });
  } catch (error) {
    console.error(
      "UPDATE ARTICLE ERROR:",
      error
    );

    if (
      error.code ===
      "ER_DUP_ENTRY"
    ) {
      return res.status(409).json({
        message:
          "Slug bài viết đã tồn tại",
      });
    }

    return res.status(500).json({
      message:
        "Không thể cập nhật bài viết",
    });
  }
};

export const deleteArticle = async (
  req,
  res
) => {
  try {
    const { id } = req.params;

    const [result] = await db.query(
      `
        DELETE FROM knowledge_articles
        WHERE id = ?
      `,
      [id]
    );

    if (
      result.affectedRows === 0
    ) {
      return res.status(404).json({
        message:
          "Không tìm thấy bài viết",
      });
    }

    return res.json({
      success: true,

      message:
        "Xóa bài viết thành công",
    });
  } catch (error) {
    console.error(
      "DELETE ARTICLE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể xóa bài viết",
    });
  }
};