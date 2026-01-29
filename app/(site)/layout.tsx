import type { ReactNode } from "react";
import SiteLayout from "./site-layout";

export default function Layout({ children }: { children: ReactNode }) {
  return <SiteLayout>{children}</SiteLayout>;
}
