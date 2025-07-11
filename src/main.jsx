// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { RouterProvider } from "react-router";
// import { router } from "./Router/Router.jsx";
// import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router}></RouterProvider>
      
//     </AuthProvider>
    
//   </StrictMode>
// );





import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";
import { Toaster } from "react-hot-toast"; // ✅ Only this

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ toast will work */}
    </AuthProvider>
  </StrictMode>
);
