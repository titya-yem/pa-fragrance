import Footer from "@/components/Footer";
import History from "@/app/(root)/(components)/History";
import Navbar from "@/components/Navbar";
import Product from "@/app/(root)/(components)/Product";
import AboutUs from "@/app/(root)/(components)/aboutUs";

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
