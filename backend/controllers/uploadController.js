import cloudinary from "../config/cloudinary.js";

export const uploadImage = async (
  req,
  res
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "Chưa chọn ảnh",
      });
    }

    const folder =
      req.body.folder ||
      "bstrung";

    console.log("UPLOAD INFO:", {
      fileName: req.file.originalname,
      mimeType: req.file.mimetype,
      size: req.file.size,
      folder,
    });

    const result =
      await new Promise(
        (resolve, reject) => {
          const stream =
  cloudinary.uploader.upload_stream(
    {
      folder,
      resource_type: "image",

      transformation: [
        {
          quality: "auto",
          fetch_format: "auto",
        },
      ],
    },
              (error, result) => {
                if (error) {
                  reject(error);
                  return;
                }

                resolve(result);
              }
            );

          stream.end(
            req.file.buffer
          );
        }
      );

    console.log(
      "UPLOAD SUCCESS:",
      result.secure_url
    );

    return res.json({
      success: true,
      url:
        result.secure_url,
      publicId:
        result.public_id,
    });
  } catch (error) {
    console.error(
      "CLOUDINARY UPLOAD ERROR:",
      {
        message:
          error?.message,
        http_code:
          error?.http_code,
        name:
          error?.name,
        error,
      }
    );

    return res
      .status(
        error?.http_code ||
          500
      )
      .json({
        success: false,

        message:
          error?.message ||
          "Không thể upload ảnh",

        httpCode:
          error?.http_code ||
          null,
      });
  }
};