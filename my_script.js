conn = new Mongo();
db = connect("localhost:27017/some_db");


//insert a user into the db
print("Inserting one record into collection");
db.users.insertOne({
    username: "emalinga",
    password:"emalinga",
    role: "admin"
});

db.users.find({username:"emalinga"});


























// //drop databases and reset if they exist
// var collections = ["users", "products"];
// async.each(collections, function (c, done) {
//     db.collection(c).drop(done);
// });

// //now insert into database
// var users = db.collection(users);
// var total = 0;
// async.whilst(function () {
//     return total < 100;
// },
// function (done) {
//     users.insert({name: getNameString(), product: getProductString()}, done);
//     }
// );

// //generate random names
// var names = [
//     "Arnold Meeker",
//     "Eldora Holleran",
//     "Latashia Siu",
//     "Jordan Fluker",
//     "Lekisha Wrinkle" ,
//     "Lisandra Sartwell"  ,
//     "Cary Divito",
//     "Myrle Dimond",
//     "Hollis Baur",
//     "Damon Downey",
//     "Fiona Suits",
//     "Chanda Gutierres",
//     "Sharla Goforth",
//     "Mitch Bibeau",
//     "Lou Stroman",
//     "Drusilla Jackson",
//     "Shayla Salters",
//     "Monika Stowers",
//     "Kayce Pires",
//     "Evia Glassford"  ,
//     "Moriah Gist",
//     "Kortney Poteete",
//     "Keren Wrenn",
//     "Sueann Klahn",
//     "Inez Watrous",
//     "Carlene Branum" ,
//     "Kiana Mertes",
//     "Booker Trombly" ,
//     "Oralee Paschall" ,
//     "Laurel Almaguer",
// ];

// function getNameString() {
//     var len = len(names);
//     var name = Math.floor(Math.random() * len);
//     return name;
// }

// function getProductNumber() {
//     var prodNum = Math.floor(Math.random() * 30);
//     return prodNum;
// }

   






