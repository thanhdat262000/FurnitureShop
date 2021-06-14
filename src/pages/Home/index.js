import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../../components/Slider/SliderContent/Slider";
import SloganBanner from "../../components/SloganBanner/SloganBanner";
import IntroModal from "../../containers/IntroModal/IntroModal";
import ListProject from "../../containers/ListProjects/ListProject";
import ListServiceDetails from "../../containers/ListServiceDetails/ListServiceDetails";
import ListServices from "../../containers/ListServices/ListServices";
import ListStep from "../../containers/ListStep/ListStep";
import { GET_ALL_PROJECT_BY_SERVICE } from "../../redux/action";
import { loadingSelector, projectsSelector } from "../../redux/selector";
import useStyles from "./styles";

function HomePage(props) {
  const classes = useStyles();
  const categoryList = [
    { name: "Thiết kế nội thất", id: "design" },
    { name: "Thi công nội thất", id: "construction" },
    { name: "Xây nhà trọn gói", id: "all" },
  ];
  const [curCategory, setCurCategory] = useState("design");
  const onChangeCategory = (id) => {
    setCurCategory(id);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_ALL_PROJECT_BY_SERVICE,
      payload: { service: curCategory },
    });
  }, [dispatch, curCategory]);
  const projects = useSelector(projectsSelector);
  const loading = useSelector(loadingSelector);
  return (
    <div className={classes.root}>
      <Slider />
      <ListServices />
      <ListServiceDetails />
      <SloganBanner />
      <IntroModal />
      <ListProject
        title="Our projects so far"
        multipleTypes={true}
        type={curCategory}
        onChangeCategory={onChangeCategory}
        projectList={projects}
        categoryList={categoryList}
        loading={loading}
      />
      <ListStep />
    </div>
  );
}

export default HomePage;
