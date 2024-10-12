import { Routes, Route } from "react-router-dom";
import { Home , ProductList, ProductDetail, Contacts, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={ <ProductDetail /> } />
            <Route path="list" element={ <ProductList /> } />
            <Route path="contacts" element={ <Contacts /> } />
            <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </main>
  )
}
