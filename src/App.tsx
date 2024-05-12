import Footer from "containers/Footer";
import Navbar from "containers/Navbar";
import CartPage from "pages/CartPage";
import CheckoutPage from "pages/CheckoutPage";
import ContactPage from "pages/ContactPage";
import FAQPage from "pages/FAQPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import ProductDetailsPage from "pages/ProductDetailsPage";
import ProductsPage from "pages/ProductsPage";
import WishlistPage from "pages/WishlistPage";
import SigninPage from "pages/auth/SigninPage";
import SignupPage from "pages/auth/SignupPage";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import store from "./store/store";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import AuthContext, { AuthProvider } from "context/authContext";
import ProtectedPage from "pages/ProtectedPage";
import { Helmet } from "react-helmet";
import Layout from "pages/Layout";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
function App() {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "assets/free-mode-d251b1d1.js";
  //   script.async = true;
  //   document.body.appendChild(script);

  //   const script2 = document.createElement("script");
  //   script2.src = "assets/theme-b118ffc1.js";
  //   script2.async = true;
  //   document.body.appendChild(script2);

  //   const scrip3 = document.createElement("script");
  //   scrip3.src = "assets/thumbs-a96dec08.js";
  //   scrip3.async = true;
  //   document.body.appendChild(scrip3);
  // }, []);
  return (
    <Provider store={store}>
      <AuthProvider>
        <div className="body">
          <Navbar />
          <div className="main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth">
                <Route path="signin" element={<SigninPage />} />
                <Route path="signup" element={<SignupPage />} />
              </Route>
              <Route path="/products">
                <Route index element={<ProductsPage />} />
                <Route path=":id" element={<ProductDetailsPage />} />
              </Route>
              <Route path="/wishlist" element={<WishlistPage />} />
              <Route
                path="/cart"
                element={
                  <ProtectedPage>
                    <CartPage />
                  </ProtectedPage>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedPage>
                    <CheckoutPage />
                  </ProtectedPage>
                }
              />

              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <ToastContainer />
      </AuthProvider>
    </Provider>
  );
}

export default App;
