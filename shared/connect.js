const {MongoClient} = require("mongodb");

module.exports = {
    db: {},
    async connect() {
        try{
            const client = await MongoClient.connect("mongodb://localhost:27017");
            this.db = client.db("hallapp");
            console.log(this.db)
        } catch(err) {
            console.log(err)
        }
    }
}