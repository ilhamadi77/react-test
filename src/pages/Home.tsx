import { Layout, Row } from "antd";

import React, { useEffect, useState } from "react";

import CardList from "../components/CardList";
import { getNews } from "../service/getNews";
import { useParams } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import LoadingSpin from "../components/LoadingSpin";
const { Header, Content, Footer } = Layout;

interface Article {
  urlToImage?: string;
  title?: string;
  publishedAt?: string;
  author?: string;
  sourceName?: string;
  description?: string;
  url?: string;
}
interface ArrArticle {
  arti?: Article[];
}

const Home: React.FC<ArrArticle> = () => {
  const [articles, setArticles] = useState<Array<string>>([]);
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

      console.log("res: ", res);
      if (!res) {
        setLoading(false);
        setError(true);
        return;
      }
      setLoading(false);
      setArticles(res.articles);
    };

    fetchTechNews();
  }, [id]);

  return (
    <Layout className="layout">
      <Header
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <Navbar />
      </Header>
      <Content
        style={{
          width: "100%",
          padding: "20px",
        }}
      >
        <Row justify="space-between">
          {error && <h1>Error Bos cek lagii</h1>}
          {loading && <LoadingSpin />}
          {!loading && articles.length > 0 && <CardList data={articles} />}
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;
