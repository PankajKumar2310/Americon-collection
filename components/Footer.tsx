import { Separator } from "@/components/ui/separator";
import FooterBrandText from "@/components/ui/footer-brand-text";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

const Footer = () => {
  const { translations } = useLanguage();

  const collectionLinks = [
    { to: "/listings/yellow-house", label: translations.footer.collectionLinks.yellowHouse },
    { to: "/listings/american-estate", label: translations.footer.collectionLinks.americanEstate },
    { to: "/listings/carriage-house", label: translations.footer.collectionLinks.carriageHouse },
  ];

  const exploreLinks = [
    { to: "/listings", label: translations.footer.exploreLinks.listings },
    { to: "/gallery", label: translations.footer.exploreLinks.gallery },
    { to: "/world-cup", label: translations.footer.exploreLinks.worldCup },
    { to: "/explore", label: translations.footer.exploreLinks.explore },
    { to: "/transportation", label: translations.footer.exploreLinks.transportation },
    { to: "/about", label: translations.footer.exploreLinks.about },
    { to: "/contact", label: translations.footer.exploreLinks.contact },
  ];

  const infoLinks = [
    { to: "/privacy", label: translations.footer.infoLinks.privacy },
    { to: "/terms", label: translations.footer.infoLinks.terms },
  ];

  const FooterLabel = ({ children }: { children: React.ReactNode }) => (
    <h4 className="font-sans text-[10px] md:text-xs uppercase tracking-wider text-muted-foreground/80 mb-2 md:mb-4">
      {children}
    </h4>
  );

  return (
    <footer className="bg-transparent text-foreground pt-16 md:pt-24 w-full">
      <div className="container mx-auto px-4">
        {/* Constrain the grid width and center it for better balance */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-left">

            {/* Column 1: The Collection */}
            <div>
              <FooterLabel>{translations.footer.collectionSectionLabel}</FooterLabel>
              <nav className="flex flex-col space-y-2 md:space-y-3">
                {collectionLinks.map(link => (
                  <Link key={link.to} to={link.to} className="font-sans text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: Explore & Pages */}
            <div>
              <FooterLabel>{translations.footer.exploreSectionLabel}</FooterLabel>
              <nav className="flex flex-col space-y-2 md:space-y-3">
                {exploreLinks.map(link => (
                  <Link key={link.to} to={link.to} className="font-sans font-light text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 3: Information */}
            <div>
              <FooterLabel>{translations.footer.informationSectionLabel}</FooterLabel>
              <div className="flex flex-col space-y-2 md:space-y-3">
                {infoLinks.map(link => (
                  <Link key={link.to} to={link.to} className="font-sans text-xs md:text-sm text-muted-foreground/90 hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                ))}
                <p className="font-sans text-xs md:text-sm text-muted-foreground/70 pt-2">
                  {translations.footer.worldCupTagline}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mt-16 md:mt-24 px-4">
        <Separator className="w-full max-w-6xl mx-auto mb-10 md:mb-12 bg-white/10" />

        <div className="w-full mb-10 md:mb-12">
          <FooterBrandText />
        </div>

        <p className="text-xs text-muted-foreground text-center pb-12">
          &copy; {new Date().getFullYear()} Americon Collection. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;