import "next-auth";

declare module "next-auth" {
  interface Session {
    id?: string;
    user: {
      id?: string;
      email?: string;
      name?: string;
    };
  }
}
