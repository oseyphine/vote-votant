class CFDTDB {
	constructor(MongoClient){
		this.MongoClient = MongoClient;
	}

    getAllVotant(callback){
        this.MongoClient.connect("mongodb://localhost:27017/cfdt", (err, db) => {
            db.collection("votant").find().toArray(callback)
        });
    };

    getAllVote(callback){
        this.MongoClient.connect("mongodb://localhost:27017/cfdt", (err, db) => {
            db.collection("vote").find().toArray(callback)
        });
    };
}

    // MongoClient.connect("mongodb://localhost:27017/blog", (err, db) => {
    //     db.collection("articles").find().toArray((err, articles) => { 
    //         console.log(articles);
    //         res.render("index.ejs", {listeArticles: articles});
    //     });
    // });

let MongoClient = require("mongodb").MongoClient;
let CfdtDB = new CFDTDB(MongoClient);
module.exports = CfdtDB;