import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`${className} max-w-[1400px] mx-auto`}>{children}</div>
  );
};
