import { ReactNode } from "react";

type MinilabLayoutProps = {
  children: ReactNode;
};

export default function MinilabLayout({ children }: MinilabLayoutProps) {
  return <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>;
}
