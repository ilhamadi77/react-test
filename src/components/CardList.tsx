import React from "react";
import CardNews from "./CardNews";

import { DataNews } from "../Types/dataNews.type";

const CardList: React.FC<DataNews> = ({ data }) => {
  return (
    <>
      {data.map((article, index) => {
        if (!article.urlToImage || !article.author) {
          return null;
        }
        return (
          <CardNews
            key={index}
            author={article.author}
            title={article.title}
            publishedAt={article.publishedAt}
            description={article.description}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </>
  );
};

export default CardList;
