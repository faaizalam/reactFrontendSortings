import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./component/layout";
import { Home } from "./Pages/Home";
import Product from "./Pages/Product";



function App() {
  return(
     <BrowserRouter>
    <Layout>
   
   <Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
 </Routes>
 
    </Layout>
 
 </BrowserRouter>
)
}

export default App;
