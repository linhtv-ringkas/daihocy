import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from 'features/home';
import WithLayout from "./layout/withLayout";
import Male from "./features/male";
import Female from "./features/female";
import Pregnant from "./features/pregnant";
import Children from "./features/children";
import DetailLayout from "./layout/detailLayout";

const HomePage = (WithLayout(Home));
const MalePage = (WithLayout(Male, DetailLayout));
const FemalePage = (WithLayout(Female, DetailLayout));
const PregnantPage = (WithLayout(Pregnant, DetailLayout));
const ChildrenPage = (WithLayout(Children, DetailLayout));

const App: React.FC<{}>= ()=> {
  return (
    <Routes>
      <Route path="/male" element={<MalePage />} />
      <Route path="/female" element={<FemalePage />} />
      <Route path="/pregnant" element={<PregnantPage />} />
      <Route path="/children" element={<ChildrenPage />} />
      {/*Home*/}
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
