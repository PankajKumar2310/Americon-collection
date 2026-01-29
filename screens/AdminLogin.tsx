"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { showError, showSuccess } from "@/utils/toast";

export default function AdminLogin() {
  const router = useRouter();
  const pageRef = useRef(null);

  const [email, setEmail] = useState("american@gmail.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".admin-login-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });
      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const check = async () => {
      const res = await fetch("https://americon-collection-781m.vercel.app/api/admin/me", { cache: "no-store" });
      if (res.ok) router.replace("/admin");
    };
    check();
  }, [router]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://americon-collection-781m.vercel.app/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        showError("Invalid login");
        return;
      }

      showSuccess("Logged in");
      router.replace("/admin");
    } catch {
      showError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto max-w-xl">
        <h1 className="text-4xl md:text-5xl font-serif text-center admin-login-anim">
          Admin Login
        </h1>
        <p className="mt-4 text-lg text-muted-foreground text-center admin-login-anim">
          Sign in to manage blogs.
        </p>

        <form onSubmit={onSubmit} className="mt-12 space-y-6 admin-login-anim">
          <div>
            <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
              Email
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-card border border-white/8 rounded-md p-6 mt-2"
              placeholder="american@gmail.com"
            />
          </div>

          <div>
            <label className="font-sans uppercase tracking-wider text-xs text-muted-foreground">
              Password
            </label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-card border border-white/8 rounded-md p-6 mt-2"
              placeholder="Enter password"
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-7 text-base font-sans uppercase tracking-widest"
            >
              {loading ? "Signing in…" : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
