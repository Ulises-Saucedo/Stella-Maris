import multer from "multer";

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
];

export const uploadFile = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
  fileFilter: function (req, file, cb) {
    if (!ACCEPTED_TYPES.includes(file.mimetype)) {
      return cb(new Error("Formato no soportado"));
    }

    cb(null, true);
  },
}).single("file0");
