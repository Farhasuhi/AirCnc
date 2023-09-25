import React from "react";
import Container from "../Container/Container";
import {categories} from './CategoriesData'
import CategoriesBox from "./CategoriesBox";
const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row item-center justify-between overflow-x-auto">
            {
                categories.map(category=><CategoriesBox key={category.label} label={category.label} icon={category.icon}></CategoriesBox>)
            }
      </div>
    </Container>
  );
};

export default Categories;
