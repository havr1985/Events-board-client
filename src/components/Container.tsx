import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Container = ({ children }: Props) => {
  return <div className=" container mx-auto p-3 md:p-5 xl:p-8">{children}</div>;
};
