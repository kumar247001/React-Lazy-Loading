import React from "react";
import data from "./data";
import data2 from "./data2";
import LazyLoad from "react-lazyload";
import TopSection from "./components/TopSection";
import styled from "styled-components";
import BottomSection from "./components/BottomSection";
import CategoryMenu from "./components/CategoryMenu";
import Promocard from "./components/Promocard";
import myfonts from "./assets/myfonts2.png";

const SectionTitle = styled.div`
  h1 {
    max-width: 900px;
    margin: 50px auto;
    height: 60px;
    line-height: 60px;
    color: #fff;
    position: relative;
    background-color: #68c305;
    text-align: center;
    font-size: 36px;
    &:after {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 0;
      border: 30px solid transparent;
      border-left-color: #fff;
    }
    &:before {
      content: "";
      width: 0;
      height: 0;
      position: absolute;
      right: 0;
      top: 0;
      border: 30px solid transparent;
      border-right-color: #fff;
    }
  }
`;

const Spinner = () => (
  <div className="post loading">
    <img src={myfonts} alt="myfonts" />
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#0099ff"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
        transform="rotate(275.845 50 50)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="linear"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          dur="1s"
          begin="0s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const App = () => (
  <div className="App">
    <TopSection />
    <CategoryMenu />
    <div className="post-container">
      <SectionTitle id="bundle-15">
        <h1>Bundle $15</h1>
      </SectionTitle>
      <div className="post-wrapper col-2">
        {data.map((post) => (
          <LazyLoad
            key={post.id}
            height={200}
            offset={[-200, 200]}
            debounce={200}
            placeholder={<Spinner />}
          >
            <Promocard key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
    <div className="post-container">
      <SectionTitle id="family-bundle">
        <h1>Family Bundle</h1>
      </SectionTitle>
      <div className="post-wrapper col-3">
        {data2.map((post) => (
          <LazyLoad
            key={post.id}
            height={200}
            offset={[-200, 200]}
            debounce={200}
            placeholder={<Spinner />}
          >
            <Promocard key={post.id} {...post} />
          </LazyLoad>
        ))}
      </div>
    </div>
    <BottomSection />
  </div>
);

export default App;
