import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import { useParams } from "react-router-dom";

import { getNews } from "../service/getNews";

import { NewsType } from "../Types/dataNews.type";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Corousel: React.FC<NewsType> = () => {
  const [article, setArticle] = useState<Array<NewsType>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const { id } = useParams<{ id?: string }>();

  const DEFAULT_SEARCH_QUERY = "tesla";

  useEffect(() => {
    const fetchTechNews = async () => {
      setLoading(true);
      const res = await getNews({
        searchQuery: id || DEFAULT_SEARCH_QUERY,
      });

      console.log("resCorousel: ", res);
      if (!res) {
        setLoading(false);
        setError(true);
        return;
      }
      setLoading(false);
      setArticle(res.articles);
    };

    fetchTechNews();
  }, [id]);

  return (
    <>
      {error && <h1>erro</h1>}
      {loading && <h2>loading....</h2>}
      {article.length > 0 &&
        article.map((data, index) => {
          <Carousel autoplay dotPosition="bottom" key={index}>
            <div>
              <h3 style={contentStyle}> {data.title}</h3>
              <img src={data.urlToImage} alt={data.title} />
            </div>
          </Carousel>;
        })}
    </>
  );
};

export default Corousel;
