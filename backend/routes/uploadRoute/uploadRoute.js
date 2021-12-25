const router = require("express").Router();
const uploadCTRL = require("../../controller/fileUpload/uploadCTRL");
const auth = require("../../middleware/auth");

router.post("/upload", auth, uploadCTRL.uploadFile);
router.post("/destroy", auth, uploadCTRL.deleteFile);

module.exports = router;
