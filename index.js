import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app= express();
const port=3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let newItems=[]

app.get("/", (req,res)=>{
    res.render("index.ejs", {
        newlistitem: newItems,
    });
});
app.get("/personal",(req,res)=>{
    res.render("personal.ejs",
    {
        newlistitem: newItems,
    });
});
app.get("/work",(req,res)=>{
    res.render("work.ejs", {
        newlistitem: newItems,
    });
});


app.post("/", (req,res)=>{
   let newItem= req.body.newitem;
   newItems.push(newItem);
    res.redirect("/");
   
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });



