import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { CartView } from "./components/Cart/CartView";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer";
import { ProductSuccess } from "./components/adminComponents/ProductSuccess";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/admin" element={<ProductFormContainer />} />
          <Route path="/success/:id" element={<ProductSuccess />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
