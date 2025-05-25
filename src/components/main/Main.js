import React from "react";
import ReportiorInfo from "../reportior/ReporiorInfo";
import Card from "../shared/Card";
import main from "../../data/main.json";
import MainArticleCard from "./MainArticleCard";

const Main = () => {
  return (
    <div className="container">
      <div className="flex justify-center flex-wrap gap-4 ">
        <MainArticleCard {...main[0]}  />

        <ReportiorInfo />
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {main.slice(1).map((info) => (
          <MainArticleCard {...info} key={info.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
