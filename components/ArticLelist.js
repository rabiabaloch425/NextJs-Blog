import ArticleItem  from "./ArticleItem";

import articleStyles from "../styles/article.module.css";
const ArticleList = ({articles}) =>{
    return(
        <div className={articleStyles.grid}>
      {articles.map(article => (
        //   <h1>{article.title}</h1>
      <ArticleItem article={article} />
     ))}
        </div>
    )
}

export default ArticleList;