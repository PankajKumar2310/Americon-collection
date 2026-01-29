"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type RRLinkProps = {
  to: string;
  children?: ReactNode;
  className?: any;
  [key: string]: any;
};

export function Link({ to, ...props }: RRLinkProps) {
  return <NextLink href={to} {...props} />;
}

type NavLinkClassName = string | ((args: { isActive: boolean }) => string);

type NavLinkProps = RRLinkProps & {
  end?: boolean;
  className?: NavLinkClassName;
};

export function NavLink({ to, end, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = end ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);

  const resolvedClassName =
    typeof className === "function" ? className({ isActive }) : className;

  return <NextLink href={to} {...props} className={resolvedClassName} />;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname } as any;
}

export function Outlet() {
  return null;
}

export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}
