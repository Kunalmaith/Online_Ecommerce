import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "@/layout/Layout";
import SignUp from "@/pages/auth/SignUp";
import About from "@/pages/main/About";
import Contact from "@/pages/main/Contact";
import Home from "@/pages/main/Home";
import NotFound from "@/pages/main/NotFound";
import Login from "@/pages/auth/Login";
import ProductPage from "../pages/main/ProductPage";
import ProtectedRoute from "./protectedRoute";
import Account from "@/pages/main/Account";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<About />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/contact_us"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path="account"
        element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        }
      />
      <Route path="/products/:productId" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
