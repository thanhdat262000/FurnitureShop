import React from "react";
import DesignContent from "../../containers/DesignContent/DesignContent";
import ListProject from "../../containers/ListProjects/ListProject";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";

function DesignPage(props) {
  return (
    <div>
      <OpeningModal
        topTitle="design"
        mainTitle="Welcome to our services"
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <DesignContent />
      <ListProject title="Một số dự án thiết kế nội thất" type="design" />
    </div>
  );
}

export default DesignPage;
