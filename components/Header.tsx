import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Globe2, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/translations/LanguageProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { translations, languageCode, availableLanguages, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { to: "/", key: "home" as const },
    { to: "/listings", key: "listings" as const },
    { to: "/gallery", key: "gallery" as const },
    { to: "/world-cup", key: "worldCup" as const },
    { to: "/about", key: "about" as const },
    { to: "/contact", key: "contact" as const },
    { to: "/blogs", key: "blogs" as const },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/90 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-6">
        <Link to="/" className="transition-opacity hover:opacity-80 flex-shrink-0">
          <img src="/logo.png" alt="American Collection Logo" className="h-14" />
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "font-sans font-light text-base text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground"
                )
              }
            >
              {translations.nav[link.key]}
            </NavLink>
          ))}
          {/* Language Dropdown - Commented Out */}
          {/*
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground focus:outline-none">
                <Globe2 className="h-5 w-5" />
                <span className="hidden lg:inline text-sm font-sans">
                  {translations.languageName}
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px]">
              <DropdownMenuRadioGroup
                value={languageCode}
                onValueChange={(value) => setLanguage(value as any)}
              >
                {availableLanguages.map((lang) => (
                  <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          */}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-white/8 w-[280px]">
              <div className="flex flex-col h-full p-4">
                <Link to="/" className="mb-12 mt-4">
                  <img src="/logo.png" alt="American Collection Logo" className="h-20" />
                </Link>
                <nav className="flex flex-col space-y-6">
                  {navLinks.map(link => (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        className="font-sans text-lg uppercase tracking-wider text-primary hover:text-accent transition-colors"
                      >
                        {translations.nav[link.key]}
                      </Link>
                    </SheetClose>
                  ))}
                  {/* Language Dropdown - Commented Out */}
                  {/*
                  <div className="pt-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="flex items-center gap-2 text-primary hover:text-accent focus:outline-none text-base">
                          <Globe2 className="h-5 w-5" />
                          <span className="font-sans tracking-wider">
                            {translations.languageName}
                          </span>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="min-w-[200px]">
                        <DropdownMenuRadioGroup
                          value={languageCode}
                          onValueChange={(value) => setLanguage(value as any)}
                        >
                          {availableLanguages.map((lang) => (
                            <DropdownMenuRadioItem key={lang.code} value={lang.code}>
                              {lang.name}
                            </DropdownMenuRadioItem>
                          ))}
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  */}
                </nav>
                <div className="mt-auto">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-sans uppercase tracking-widest">
                      <Link to="/contact">{translations.pages.common?.bookNow || "Book Now"}</Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;