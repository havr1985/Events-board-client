import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";
import { Loader } from "./Loader";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};
