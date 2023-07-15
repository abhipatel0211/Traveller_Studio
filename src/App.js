import { Route , Routes } from "react-router-dom";
// import Layout from "./Components/layouts/Layout";
import Layout from "./Components/layouts/Layout";
import AllMeetups from "./pages/AllPlaces";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewPlaces";



function App() {
  return <div>
  <Layout>
    <Routes>
      <Route path='/' element={<AllMeetups />}></Route>
      <Route path='/new-places' element={<NewMeetUps />}></Route>
      <Route path='/favorites' element={<Favorites />}></Route>

    </Routes>
  </Layout>
  </div>;
}

export default App;
