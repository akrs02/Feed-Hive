
import RSSParser from "rss-parser";
import express from "express";
import cors from "cors";

const feedUrl="https://gamerant.com/feed";
let parser=new RSSParser();
let article=[];

const parse=async url=>{
    const feed=await parser.parseURL(url);

    feed.items.forEach(item => {
        article.push({item});
    });
}
parse(feedUrl);
let app=express();
app.use(cors());

app.get('/',(req,res)=>{
    res.send(article);
})

const server=app.listen("4000",()=>{
    console.log("App is running on port 4000");
})
