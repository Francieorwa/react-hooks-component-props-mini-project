import React from "react";
import blogData from "../data/blog";
import About from "./About";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "../components/ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!

      <Header  image = {blogData.image}/>
      <About  img = {blogData.img}  about = {blogData.about} />
      <Article />
      <ArticleList />
    </div>
  );
}

export default App;
