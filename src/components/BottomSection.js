import React from "react";
import styled from "styled-components";

const BottomSectionWrapper = styled.div`
  padding: 100px 0;
  text-align: center;
  .thumbnail_images {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 60px;
    img {
      width: 180px;
    }
  }
  p {
    font-size: 18px;
    padding: 0 10%;
  }
`;

const bottom_images = [
  {
    id: 200
  },
  {
    id: 201
  },
  {
    id: 202
  },
  {
    id: 203
  },
  {
    id: 204
  }
];

const BottomSection = () => {
  return (
    <BottomSectionWrapper>
      <div className="thumbnail_images">
        {bottom_images.map((image, index) => (
          <img
            key={index}
            src={`https://picsum.photos/id/${image.id}/180/180`}
            alt="..."
          />
        ))}
      </div>
      <h1>Thank You Sponsors!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In diam urna,
        congue molestie ipsum sed, sollicitudin blandit lacus. Pellentesque sit
        amet elit tincidunt, consectetur metus eu, sodales purus. Proin
        efficitur in neque a ultricies. Pellentesque pharetra at lorem non
        suscipit. Donec et lectus lectus. Praesent ac dolor libero. Morbi velit
        sapien, aliquet ut vehicula et, condimentum ac lorem. Duis finibus
        porttitor urna quis vulputate.
      </p>
    </BottomSectionWrapper>
  );
};

export default BottomSection;
