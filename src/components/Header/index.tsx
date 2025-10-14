"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloudDownload } from "lucide-react";
import { usePathname } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import fameLogo from "../../../public/olamide_logo_white.png";
import store from "../../../public/shopping-bag.png";
import insta from "../../../public/instagram_logo.png";
import artstation from "../../../public/logo_artstation.png";
import linkedIn from "../../../public/logo_linkedin-line.png";
import mail from "../../../public/mail_icon.png";
import youTube from "../../../public/logo_youtube-line.png";
import { Links } from "@/lib/constants";

type MenuItem = {
  title: string;
  path: string;
  external?: boolean;
};
type SideMenuItem = {
  title: string;
  path: string;
  external?: boolean;
  icon: StaticImageData;
};

const Header: React.FC<{ resumeUrl: string | null }> = ({ resumeUrl }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Centralized menu configuration
  const sidebarItems: MenuItem[] = [
    { title: "About", path: "#about" },
    { title: "Profile", path: Links.LINKEDIN },
    { title: "Shop", path: Links.GUMROAD },
    { title: "Learning Center", path: Links.YOUTUBE },
    { title: "Contact Me", path: "mailto:olamidefamojuro@gmail.com" },
  ];

  const menuItems_two: SideMenuItem[] = [
    { title: "Home", path: "/", external: false, icon: fameLogo },
    {
      title: "Store",
      path: Links.GUMROAD,
      external: true,
      icon: store,
    },
    {
      title: "Instagram",
      path: Links.INSTAGRAM,
      external: true,
      icon: insta,
    },
    {
      title: "Art Station",
      path: Links.ARTSTATION,
      external: true,
      icon: artstation,
    },
    {
      title: "LinkedIn",
      path: Links.LINKEDIN,
      external: true,
      icon: linkedIn,
    },
    {
      title: "Contact",
      path: "/contact",
      external: false,
      icon: mail,
    },
    {
      title: "YouTube Channel",
      path: Links.YOUTUBE,
      external: true,
      icon: youTube,
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    console.log(isModalOpen);
    setIsModalOpen(!isModalOpen);
  };

  // Check if a link is active
  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  const dimensions = (index: number) => {
    switch (index) {
      case 0:
        return "w-[34px] h-[34px] block";
      case 2:
        return "w-[14px] h-[14px] block ml-[10px]";
      case 3:
        return "w-[18px] h-[18px] block ml-[7px]";
      case 4:
        return "w-[20px] h-[20px] block ml-[7px]";
      case 6:
        return "w-[18px] h-[18px] block ml-[7px] -mt-1";
      default:
        return "w-[18px] h-[18px] block ml-2";
    }
  };

  return (
    <header className="text-white body-font top-0 fixed w-full z-[999] bg-[#121212] md:bg-transparent">
      {/* Mobile Header */}
      <div className="flex justify-between md:hidden md:justify-end w-full gap-5 items-center px-5 py-4">
        <Link href="/" className="w-fit font-medium opacity-70 text-sm flex-1 md:hidden">
          Olamide Famojuro
        </Link>
        <div className="flex  opacity-70 items-center flex-1 md:hidden">
          <Link href="/" className="flex items-center">
            <Image
              src={fameLogo}
              alt="Olamide Famojuro Logo"
              className="w-8 h-8"
            />
          </Link>
        </div>

        <button
          title="Side bar menu button"
          className="text-white md:hidden cursor-pointer z-[51]"
          type="button"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          <motion.div
            animate={isSidebarOpen ? "open" : "closed"}
            className="opacity-70"
            variants={{
              open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex container w-fit flex-col py-8 gap-3 left-5 md:left-10 fixed">
        {menuItems_two.map((x, i) =>
          x.external ? (
            <a
              href={x.path}
              key={x.path}
              title={x.title}
              className={`flex items-center justify-center ${dimensions(i)}`}
            >
              <Image
                src={x.icon}
                alt={`Menu Item - ${x.title}`}
                className="w-full h-full object-cover"
              />
            </a>
          ) : (
            <Link
              href={x.path}
              key={x.title}
              title={x.title}
              className={`flex items-center justify-center ${dimensions(i)}`}
            >
              <Image
                src={x.icon}
                alt={`Menu Item - ${x.title}`}
                className="w-full h-full object-cover"
              />
            </Link>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => toggleModal()}
        title="View Olamide's Resume"
        className="font-medium z-[999999] cursor-pointer fixed right-5 md:right-10 hidden md:block top-5 rounded-full  border border-1 px-5 py-2"
      >
        View Resume
      </button>

      {/* Right Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-50"
              onClick={toggleSidebar}
            />

            {/* Sidebar Content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[60%] md:w-[300px] max-w-sm bg-[#121212] shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="h-full flex flex-col p-6">
                <button
                  type="button"
                  title="Close side bar menu"
                  className="self-end mb-8"
                  onClick={toggleSidebar}
                  aria-label="Close menu"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                <motion.nav className="flex-1">
                  <ul className="space-y-1">
                    {sidebarItems.map((item, index) => (
                      <motion.li
                        key={item.path}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <Link
                          href={item.path}
                          className={`text-2xl block py-3 ${
                            isActive(item.path)
                              ? "text-[#14AFF1]"
                              : "text-white hover:text-[#14AFF1]"
                          }`}
                          onClick={toggleSidebar}
                        >
                          {item.title}
                        </Link>
                      </motion.li>
                    ))}
                    {resumeUrl && (
                      <motion.li
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * sidebarItems.length }}
                      >
                        <button
                          type="button"
                          title="Close Resume"
                          className="text-2xl block py-3 text-white hover:text-[#14AFF1] w-full text-left"
                          onClick={() => {
                            toggleSidebar();
                            toggleModal();
                          }}
                        >
                          View Resume
                        </button>
                      </motion.li>
                    )}
                  </ul>
                </motion.nav>

                <motion.div
                  className="mt-auto pt-6 border-t border-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-gray-400 mb-4">Connect with me</p>
                  <div className="flex space-x-4">
                    {menuItems_two
                      .filter((item) => item.external)
                      .slice(0, 4) // Show first 4 social links
                      .map((item) => (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-[#14AFF1]"
                        >
                          <Image
                            src={item.icon}
                            alt={item.title}
                            width={24}
                            height={24}
                          />
                        </a>
                      ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume Modal */}
      {resumeUrl && (
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              className="fixed inset-0 left-0 bg-black bg-opacity-70 z-[999999] flex flex-col justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-[#121212] rounded-lg py-6 px-2 w-full max-w-3xl max-h-[100vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="flex px-5 justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">3D-Artist CV</h2>
                  <button
                    type="button"
                    title="Toggle Resume"
                    className="text-white hover:text-[#14AFF1]"
                    onClick={toggleModal}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <div className="h-[70vh] overflow-y-auto">
                  <iframe
                    src={resumeUrl}
                    className="w-full h-full"
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="mt-2 flex justify-end">
                  <a
                    href={resumeUrl}
                    download="Olamide_Famojuro_CV.pdf"
                    className="px-4 py-2"
                  >
                    <CloudDownload color="#14AFF1" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </header>
  );
};

export default Header;
