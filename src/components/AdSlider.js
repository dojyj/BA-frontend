import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import main_info from "../lib/main_info.png";
import team from "../lib/team.png";

const OutLine = styled.div`
  height: fit-content;
  width: fit-content;
  background: lightgray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -50px;
  object-fit: cover;

  .Ads-pic {
    max-height: 300px;
    max-width: 800px;
    padding-left: 2rem;
    padding-right: 2rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      appendDots: (dots) => (
        <div
          style={{
            padding: "1px",
          }}
        >
          <ul style={{ margin: "-8%" }}> {dots} </ul>
        </div>
      ),
    };
    return (
      <OutLine>
        <div className="Ads-pic">
          <Slider {...settings}>
            <img className="Ads-pic" src={main_info} alt="index1" />
            <img className="Ads-pic" src={team} alt="index2" />
            <img className="Ads-pic" src={main_info} alt="index2" />
          </Slider>
        </div>
      </OutLine>
    );
  }
}
