import db from "../config/db.js";

const frontendKeyMap = {
  featured_case: "featuredCase",
  final_cta: "finalCta",
};

const databaseKeyMap = {
  featuredCase: "featured_case",
  finalCta: "final_cta",
};

const parseContent = (content) => {
  if (typeof content !== "string") {
    return content;
  }

  try {
    return JSON.parse(content);
  } catch {
    return null;
  }
};

const toFrontendKey = (key) => {
  return frontendKeyMap[key] || key;
};

const toDatabaseKey = (key) => {
  return databaseKeyMap[key] || key;
};

export const getPage = async (req, res) => {
  try {
    const { pageSlug } = req.params;

    const [rows] = await db.query(
      `
        SELECT
          section_key,
          content,
          is_visible
        FROM page_sections
        WHERE page_slug = ?
        ORDER BY sort_order ASC
      `,
      [pageSlug]
    );

    const sections = {};
    const visibility = {};

    rows.forEach((row) => {
      const key = toFrontendKey(
        row.section_key
      );

      sections[key] = parseContent(
        row.content
      );

      visibility[key] = Boolean(
        row.is_visible
      );
    });

    return res.json({
      sections,
      visibility,
    });
  } catch (error) {
    console.error(
      "GET PAGE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải dữ liệu trang",
    });
  }
};

export const getPublicPage = async (
  req,
  res
) => {
  try {
    const { pageSlug } = req.params;

    const [rows] = await db.query(
      `
        SELECT
          section_key,
          content
        FROM page_sections
        WHERE page_slug = ?
        AND is_visible = 1
        ORDER BY sort_order ASC
      `,
      [pageSlug]
    );

    const data = {};

    rows.forEach((row) => {
      const key = toFrontendKey(
        row.section_key
      );

      data[key] = parseContent(
        row.content
      );
    });

    return res.json(data);
  } catch (error) {
    console.error(
      "GET PUBLIC PAGE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể tải dữ liệu trang",
    });
  }
};

export const updatePageSection = async (
  req,
  res
) => {
  try {
    const {
      pageSlug,
      sectionKey,
    } = req.params;

    const { content } = req.body;

    if (content === undefined) {
      return res.status(400).json({
        message:
          "Thiếu dữ liệu content",
      });
    }

    const dbKey =
      toDatabaseKey(sectionKey);

    const [result] = await db.query(
      `
        UPDATE page_sections
        SET content = ?
        WHERE page_slug = ?
        AND section_key = ?
      `,
      [
        JSON.stringify(content),
        pageSlug,
        dbKey,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message:
          "Không tìm thấy section",
      });
    }

    return res.json({
      success: true,
      message:
        "Cập nhật thành công",
    });
  } catch (error) {
    console.error(
      "UPDATE PAGE ERROR:",
      error
    );

    return res.status(500).json({
      message:
        "Không thể cập nhật section",
    });
  }
};

export const updateSectionVisibility =
  async (req, res) => {
    try {
      const {
        pageSlug,
        sectionKey,
      } = req.params;

      const { isVisible } = req.body;

      const dbKey =
        toDatabaseKey(sectionKey);

      const [result] = await db.query(
        `
          UPDATE page_sections
          SET is_visible = ?
          WHERE page_slug = ?
          AND section_key = ?
        `,
        [
          isVisible ? 1 : 0,
          pageSlug,
          dbKey,
        ]
      );

      if (
        result.affectedRows === 0
      ) {
        return res.status(404).json({
          message:
            "Không tìm thấy section",
        });
      }

      return res.json({
        success: true,
        isVisible: Boolean(
          isVisible
        ),
      });
    } catch (error) {
      console.error(
        "VISIBILITY ERROR:",
        error
      );

      return res
        .status(500)
        .json({
          message:
            "Không thể thay đổi trạng thái hiển thị",
        });
    }
  };