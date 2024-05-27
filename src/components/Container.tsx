import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`${className} max-w-[1400px] mx-auto w-full`}>
      {children}
    </div>
  );
}
