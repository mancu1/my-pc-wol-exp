import express from "express";
import myDebug from "../myDebug";

const router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
    myDebug("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    res.send("respond with a resource");
});

export default router;
