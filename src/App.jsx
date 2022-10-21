import './App.css';
import './style.modul.css';
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Homepages";
import { Giphy } from "./Pages/Giphypages";
import { Currency } from "./Pages/Currencypages";
import { News } from "./Pages/Newspages";
import { Form } from "./Pages/Formpages";

import { Notfoundpages } from "./Pages/Notfoundpages";
import { Layout } from "./Components/Layout";


function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={ <Layout /> }>
               <Route index element={ <Home /> } />
               <Route path="giphypages" element={ <Giphy /> } />
               <Route path="currency" element={ <Currency /> } />
               <Route path="news" element={ <News /> } />
               <Route path="form" element={ <Form /> } />
               <Route path="*" element={ <Notfoundpages /> } />
            </Route>
         </Routes>
      </>
   );
}

export default App;
