import Footer from "@/components/Footer";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import AboutUs from "@/components/aboutUs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <AboutUs />
      <Product />
      <History />
      <Footer />
    </>
  );
};

export default layout;
