const mongo = require('../shared/connect');


module.exports.getRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("Room").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.BookingRoom = async (req,res,next) => {
   try{
       var sam = await mongo.db.collection("Room").findOne({Room_id: req.body.RoomID});
       console.log(sam);

       if(sam.length !=0)
       {
           try{
               let data = await mongo.db.collection("status").insertOne(req.body);
               console.log(data);
               res.send(data);
               await mongo.db.collection("Room").updateOne(
                   {room_no: req.body.room_no},
                   {$set :{status:"booked"}})
               
           }
           catch(err){
                console.log(err);
                res.status(500).send(err);
           }
       }
       else
       {
           res.status(500).send("Invalid Room no")
       }
   }
   catch(err){
       console.log(err);
       res.status(500).send(err);
   }
}

module.exports.BookedRooms = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("status").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}

module.exports.BookedCustomer = async (req,res,next) => {
    try {
        var data = await mongo.db.collection("status").find().toArray();
        res.send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send(err);
    }
}