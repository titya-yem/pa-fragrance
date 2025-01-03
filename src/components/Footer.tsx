import { Mails, MapPinHouse } from "lucide-react";
import { FaFacebook } from "react-icons/fa6";
import { ReactNode } from "react";
import FooterForm from "./FooterForm";

const footerInfo: { id: number; icon: ReactNode; content: ReactNode }[] = [
  {
    id: 1,
    icon: <Mails color="red" width={20} height={20} />,
    content: (
      <a className="underline" href="mailto:thitya.yem.photo@gmail.com">
        thitya.yem.photo@gmail.com
      </a>
    ),
  },
  {
    id: 2,
    icon: <MapPinHouse color="#00ff33" width={20} height={20} />,
    content: <p>Minnesota, USA.</p>,
  },
  {
    id: 3,
    icon: <FaFacebook fill="#4d91ff" />,
    content: (
      <a
        className="underline"
        href="https://www.facebook.com/profile.php?id=61563239913904"
      >
        Pa Official
      </a>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Footer right */}
        <FooterForm />

        {/* Footer left */}
        <div className="w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium italic text-center mb-10 mt-10 md:mt-0">
            Email
          </h1>
          <div className="flex justify-center items-center mb-6">
            <div className="flex flex-col gap-4">
              {footerInfo.map((item, id) => (
                <div key={id} className="flex items-center gap-2">
                  {item.icon}
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm lg:text-left my-6">
        Copy Right & Reserved by “ប៉ា” Pa official .
      </p>
    </footer>
  );
};

export default Footer;
