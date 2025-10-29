import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { baseUrl } from "@/lib/constants";
import Loader from "./Loader";
import { getHomepage } from "@/lib/queries";

type Props = {
  children: ReactNode;
};

const AppLayout = async (props: Props) => {
  const homePageData = await getHomepage();
  const resumeUrlFallback =
    baseUrl + "/Famojuro Olamide Henryi_3D-Aritst_CV.pdf";
  const resumeUrl = homePageData.resume?.asset.url || resumeUrlFallback;
  const Links = homePageData.links;
  const logo = homePageData.logo?.asset.url;
  //   const resumeUrl = await fetchResume();
  return (
    <>
      <Loader />
      {/* <Loader /> */}
      <Header resumeUrl={resumeUrl} links={Links || []} logo={logo} />
      {props.children}
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  );
};

export default AppLayout;
