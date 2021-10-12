import express from "express";
import myDebug from "../myDebug";

import wol from "wake_on_lan";
import axios from "axios";

const router = express.Router();

/* GET users listing. */
router.get("/on_pc", function(req, res, next) {
    myDebug("try to start pc");

    wol.wake("d8:bb:c1:06:84:04", function(error) {
        if (error) {
            res.status(500).json({ error: "fuck its not working"});
            myDebug(error);
        } else {
            res.status(200).json({ok: true});    // done sending packets
            myDebug("try to start pc");
        }
    });
    //	d8:bb:c1:06:84:04
});
router.get("/off_pc", async function(req, res, next) {
    myDebug("try to shutdown pc");
    const tryResult = await axios.get("192.168.1.100/off_pc");
    myDebug(tryResult);
    res.send(tryResult);
    //	d8:bb:c1:06:84:04
});

export default router;
