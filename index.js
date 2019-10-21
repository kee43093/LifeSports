
////////////////////////////////
////     Road to Hire      ////
///     LifeSports App     ///
/////////////////////////////
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const ObjectId = require('mongodb').ObjectId;
let uri = ""
const app = express();
// import User from './models/user.model';


// note with heroku deployment you must source port from env
const port = process.env.PORT || 5000;

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  uri = process.env.ATLAS_URI;   // connection string for Atlas here  
} else {
  uri = process.env.ATLAS_URI;  // connection string for localhost mongo here  
}


// connection to database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection is live");
})

// register api catalogue
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// Creating live connection to reactjs app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Creating live connection to reactjs app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });


// app.post("/add", (req, res) => { 
//   const collection = db.collection('Users')
//   collection.insertOne(req.body, (error, data) => {   
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data.ops[0]);
//     }
//   });
// });

// app.get("/users", (req, res) => {
//   const collection = db.collection('Users')
//   collection.find({}).toArray((error, data) => {    
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(data);
//     }
//   })
// })

// app.post("/exercises/add", (req, res) => { 
//   const collection = db.collection('Exercise')
//   collection.insertOne(req.body, (error, data) => {   
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(data.ops[0]);
//     }
//   });
// });


// app.get("/exercises", (req, res) => {
//   const collection = db.collection('Exercise')
//   collection.find({}).toArray((error, data) => {    
//     if (error) {
//       res.send(error);
//     } else {
//       res.json(data);
//     }
//   })
// })

// app.post("/exercises/update/:id", (req, res) => {
//   const collection = db.collection('Exercise')
//   collection.updateOne(
//     {
//       _id: ObjectId(req.params.id)
//     },
//     {
//       $set: {
//         description: req.body.description,
//         duration: req.body.duration,
//         modified: Date.now()
//       }
//   },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });


// app.delete("/exercises/:id", (req, res) => {
//   const collection = db.collection('Exercise')
//   collection.deleteOne(
//     {
//       _id: ObjectId(req.params.id)
//     },
//     (error, data) => {
//       if (error) {
//         res.send(error);
//       } else {
//         res.send(data);
//       }
//     }
//   );
// });




app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
