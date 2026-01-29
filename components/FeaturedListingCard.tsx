import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeaturedListingCardProps {
  title: string;
  descriptor: string;
  supportingLine: string;
  ctaText: string;
  imageUrl: string;
  linkTo: string;
  cardClass: string;
  reverseLayout?: boolean;
}

const FeaturedListingCard = ({
  title,
  descriptor,
  supportingLine,
  ctaText,
  imageUrl,
  linkTo,
  cardClass,
  reverseLayout = false,
}: FeaturedListingCardProps) => {
  const layoutClasses = reverseLayout ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div className={`listing-card-wrapper ${cardClass} py-16 md:py-24 opacity-0`} style={{ transform: 'translateY(20px)' }}>
      <div className={`flex flex-col ${layoutClasses} items-center gap-8 md:gap-16`}>
        <div className="w-full md:w-1/2 listing-card-image">
          <Card className="overflow-hidden border-none bg-transparent shadow-2xl shadow-black/30 rounded-lg">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </Card>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left listing-card-content">
          <h3 className="text-4xl md:text-5xl font-serif listing-card-title opacity-0" style={{ transform: 'translateY(12px)' }}>{title}</h3>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground listing-card-descriptor opacity-0" style={{ transform: 'translateY(12px)' }}>{descriptor}</p>
          <p className="mt-2 text-base text-muted-foreground listing-card-supporting opacity-0" style={{ transform: 'translateY(12px)' }}>{supportingLine}</p>
          <Button asChild variant="link" className="mt-6 text-lg text-accent hover:text-primary p-0 h-auto listing-card-cta opacity-0" style={{ transform: 'translateY(12px)' }}>
            <Link to={linkTo}>
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListingCard;