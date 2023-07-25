import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ProductsCarousel(props) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselCustomize] = useState({
    ...props.carouselCustom,
    responsive: responsive,
  });

  const handleIsCarousel = () => {
    setIsCarousel(props.isCarousel);
  };

  useEffect(() => {
    handleIsCarousel();
  }, [props.isCarousel]);

  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const product = [];
  for (let i = 0; i < list.length; i += 5) {
    const row = (
      <Row xs={2} md={4} lg={5} key={i}>
        {list.slice(i, i + 5).map((item) => (
          <Col key={item}>
            <div style={{ display: "flex" }}>
              <ProductCard bgColor={"red"} color={"black"} />
            </div>
          </Col>
        ))}
      </Row>
    );
    product.push(row);
  }

  const productCarousel = list.map((item) => {
    return <ProductCard bgColor={"red"} color={"black"} />;
  });

  return (
    <div>
      {isCarousel ? (
        <Carousel {...carouselCustomize}>{productCarousel}</Carousel>
      ) : (
        product
      )}
    </div>
  );
}
