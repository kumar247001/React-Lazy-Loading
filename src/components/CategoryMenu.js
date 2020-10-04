import React from "react";
import styled from "styled-components";

const menu_item = [
  {
    title: "Bundle $15",
    link: "bundle-15"
  },
  {
    title: "Family Bundle",
    link: "family-bundle"
  }
];

const TopMenu = styled.div`
  padding: 10px;
  width: 900px;
  text-align: center;
  margin: 30px auto;
  max-width: 100%;
  ul {
    padding: 0;
    margin: 0;
    li {
      margin: 0 20px;
      display: inline-block;
      list-style: none;
      a {
        color: #0099ff;
        text-decoration: none;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
`;

const CategoryMenu = () => {
  return (
    <TopMenu>
      <ul>
        {menu_item.map((menu, index) => (
          <li key={index}>
            <a href={`#${menu.link}`}>{menu.title}</a>
          </li>
        ))}
      </ul>
    </TopMenu>
  );
};

export default CategoryMenu;
