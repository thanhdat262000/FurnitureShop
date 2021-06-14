import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CategoryContent from "../../containers/CategoryContent/CategoryContent";
import OpeningModal from "../../containers/OpeningModal/OpeningModal";
import { GET_ALL_PROJECT_BY_CATEGORY } from "../../redux/action";
import { loadingSelector, projectsSelector } from "../../redux/selector";

function CategoryPage(props) {
  const { category } = useParams();
  console.log(category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_ALL_PROJECT_BY_CATEGORY, payload: { category } });
  }, [dispatch, category]);
  const projects = useSelector(projectsSelector);
  const loading = useSelector(loadingSelector);
  const arrCategoryType = category.split("-");
  return (
    <div>
      <OpeningModal
        topTitle={arrCategoryType[0]}
        mainTitle={`${arrCategoryType[0]} ${arrCategoryType[1]}`}
        content="We are proud to present our work. These projects are built using latest technologies and best talents. The benefits of our methods guarantee quality for many years to come."
      />
      <CategoryContent
        serviceType={arrCategoryType[1]}
        categoryType={arrCategoryType[0]}
        projectList={projects}
        loading={loading}
      />
    </div>
  );
}

export default CategoryPage;
