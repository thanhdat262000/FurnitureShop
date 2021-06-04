import React from "react";
import CategoryContent from "../../containers/CategoryContent/CategoryContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";

function CategoryPage(props) {
  return (
    <div>
      <OpeningModal
        topTitle="apartment"
        mainTitle="Apartment design"
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <CategoryContent />
    </div>
  );
}

export default CategoryPage;
