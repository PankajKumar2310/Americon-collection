"use client";

import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import Concierge from "@/components/Concierge";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      {/* <Concierge /> */}
    </>
  );
}
