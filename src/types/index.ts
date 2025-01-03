import { StaticImageData } from "next/image";

export interface NavBarList {
  name: string;
  href: string;
}

export interface FooterInfo {
  email: string;
  message: string;
}

export interface dataType {
  id: number;
  img: StaticImageData;
  name: string;
  price: number;
  infoBrand: string;
  infoText: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}
