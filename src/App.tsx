import React from 'react';
import { Route, Routes } from "react-router-dom";
import WithLayout from "./layout/withLayout";
import DetailLayout from "./layout/detailLayout";
import LoadingComponent from "./layout/loading";

const HomePage = (WithLayout(React.lazy(() => import('features/home'))));
const MalePage = (WithLayout(React.lazy(() => import('features/male')), DetailLayout));
const FemalePage = (WithLayout(React.lazy(() => import('features/female')), DetailLayout));
const PregnantPage = (WithLayout(React.lazy(() => import('features/pregnant')), DetailLayout));
const ChildrenPage = (WithLayout(React.lazy(() => import('features/children')), DetailLayout));

const App: React.FC<{}> = () => {
  return (
    <React.Suspense fallback={<LoadingComponent/>}>
      <Routes>
        <Route path="/male" element={<MalePage/>}/>
        <Route path="/female" element={<FemalePage/>}/>
        <Route path="/pregnant" element={<PregnantPage/>}/>
        <Route path="/children" element={<ChildrenPage/>}/>
        {/*Home*/}
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </React.Suspense>
  );
}

export default App;
