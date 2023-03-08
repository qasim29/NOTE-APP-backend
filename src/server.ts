import express from "express";

const app = express();
const port = process.env.PORT || 3000;
// const port = undefined;

app.get('/', (req, res) => {
    res.send("hello world!");
});
app.listen(port!,() => {
    console.log("serever is running " +port );
});