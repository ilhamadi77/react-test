import { Card, Image } from "antd";
import { Typography } from "antd";
const { Title, Paragraph } = Typography;

const { Meta } = Card;

import { News } from "../Types/dataNews.type";

const CardNews: React.FC<News> = ({
  author,
  description,
  publishedAt,
  title,
  urlToImage,
}) => (
  <Card
    hoverable
    style={{ width: 350 }}
    cover={<Image height={150} alt={author} src={urlToImage} />}
  >
    <Typography>
      <Title level={4}>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Typography>
    <Meta title={author} description={publishedAt} />
  </Card>
);

export default CardNews;
