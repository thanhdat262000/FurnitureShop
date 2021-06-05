import React from "react";
import { useParams } from "react-router";
import CategoryContent from "../../containers/CategoryContent/CategoryContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";

function CategoryPage(props) {
  const { category } = useParams();
  const arrCategoryType = category.split("-");
  return (
    <div>
      <OpeningModal
        topTitle="apartment"
        mainTitle="Apartment design"
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <CategoryContent
        serviceType={arrCategoryType[1]}
        categoryType={arrCategoryType[0]}
      />
    </div>
  );
}

export default CategoryPage;
