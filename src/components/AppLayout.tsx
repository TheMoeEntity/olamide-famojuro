import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { baseUrl } from "@/lib/constants";
import Loader from "./Loader";
// import Loader from "../shared/Loader";
// import ScrollToTop from "../shared/ScrollToTop";
// import { fetchResume } from "@/lib/queries";

type Props = {
  children: ReactNode;
};

const AppLayout = async (props: Props) => {
  const resumeUrl = baseUrl + "/Famojuro Olamide Henryi_3D-Aritst_CV.pdf";
  //   const resumeUrl = await fetchResume();
  return (
    <>
      <Loader />
      {/* <Loader /> */}
      <Header resumeUrl={resumeUrl} />
      {props.children}
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
