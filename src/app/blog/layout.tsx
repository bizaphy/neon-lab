import { ReactNode } from "react";
type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <main className="mx-auto max-w-3xl px-6 py-16">{children}</main>;
}
