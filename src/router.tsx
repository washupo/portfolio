import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { MainPage } from "./components/MainPage";

export const router = createBrowserRouter([
    {
      path : '/',
      element : <App />,
      errorElement : <h1>404</h1>,
      children : [
        { path: "/", element: <MainPage /> }
      ]
    }
  ]);