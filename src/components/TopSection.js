import React from "react";
import styled from "styled-components";

const TopSectionWrapper = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
  p {
    font-size: 18px;
    padding: 0 10%;
  }
`;

const TopSection = () => {
  return (
    <TopSectionWrapper>
      <img src="https://picsum.photos/id/490/1600/400" alt="promo" />
      <h1>Promo header!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam urna,
        congue molestie ipsum sed, sollicitudin blandit lacus. Pellentesque sit
        amet elit tincidunt, consectetur metus eu, sodales purus. Proin
        efficitur in neque a ultricies. Pellentesque pharetra at lorem non
        suscipit. Donec et lectus lectus.
      </p>
    </TopSectionWrapper>
  );
};

export default TopSection;
