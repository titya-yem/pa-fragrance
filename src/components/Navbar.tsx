import Image from "next/image";
import logo from "../../public/Logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container">
      <nav className="flex-container">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Pa Fragrance Logo official"
        />
        <ul className="flex-container gap-10 md:text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
