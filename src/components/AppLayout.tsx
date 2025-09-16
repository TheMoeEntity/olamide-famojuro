import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Loader from "../shared/Loader";
// import ScrollToTop from "../shared/ScrollToTop";
// import { fetchResume } from "@/lib/queries";

type Props = {
  children: ReactNode;
};

const AppLayout = async (props: Props) => {
  //   const resumeUrl = await fetchResume();
  return (
    <>
      {/* <Loader /> */}
      <Header resumeUrl={null} />
      {props.children}
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
