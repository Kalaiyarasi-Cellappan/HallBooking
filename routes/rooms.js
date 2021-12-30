var express = require("express");
var router = express.Router();
var roomModule = require('../module/roomModule');

router.get("/get", roomModule.getRooms);
router.post("/booking",roomModule.BookingRoom );
router.get("/BookedRooms", roomModule.BookedRooms);
router.get("/BookedCustomerDetails", roomModule.BookedCustomer);

module.exports = router;



