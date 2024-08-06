import React, { useState } from "react";

const Carousel = ({ slides, scrollToElement }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-bg"
        style={{ backgroundImage: `url(${slides[currentSlide].bgImage})` }}
      ></div>
      <div className="carousel-content">
        <button className="carousel-btn prev" onClick={prevSlide}>
          ‹
        </button>
        <div className="carousel-slide">
          <div className="carousel-slide-content prev">
            {
              slides[currentSlide === 0 ? slides.length - 1 : currentSlide - 1]
                .content
            }
          </div>
          <div className="carousel-slide-content current">
            <div
              style={{
                fontSize: "11px",
                marginTop: "-34px",
                paddingBottom: "14px",
              }}
            >
              ALMARWAN REAL ESTATE
            </div>
            <div className="font-size-84">{slides[currentSlide].content}</div>
            <div
              style={{
                paddingTop: "170px",
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "-210px",
              }}
            >
              <div
                onClick={() => scrollToElement(slides[currentSlide].elementName)}
                style={{
                  width: "106px",
                  border: "1px solid #EDE8E1",
                  padding: "13px 0px",
                  fontSize: "11px",
                  cursor: 'pointer'
                }}
              >
                More
              </div>
            </div>
          </div>
          <div className="carousel-slide-content next">
            {
              slides[currentSlide === slides.length - 1 ? 0 : currentSlide + 1]
                .content
            }
          </div>
        </div>
        <button className="carousel-btn next" onClick={nextSlide}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Carousel;
