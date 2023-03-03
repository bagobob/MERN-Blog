const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
const PORT = process.env.PORT || 5000 ;


dotenv.config();
app.use(express.json());
//app.use("images", express.static(path.join(__dirname, "/images")));
app.use('/images', express.static(path.join(__dirname, 'images')))

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err) );

const storage = multer.diskStorage({
    destination:(req, file, callback) => {
        callback(null,"images")
    },filename:(req,file,callback) => {
        callback(null,req.body.name);
    },
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    res.status(200).json("File has been uplodaded");
})

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(PORT, () => {
    console.log(`Backend is running on port: ${PORT}`);
})