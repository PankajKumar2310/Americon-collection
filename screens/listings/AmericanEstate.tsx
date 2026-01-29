import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import { BedDouble, Bath, Users, Wifi, UtensilsCrossed, ParkingCircle, Wind, LandPlot } from "lucide-react";

const americanEstateAmenities = [
  { icon: <BedDouble size={28} />, label: "Bedrooms", value: "5" },
  { icon: <Bath size={28} />, label: "Bathrooms", value: "4.5" },
  { icon: <Users size={28} />, label: "Sleeps", value: "10-12" },
  { icon: <LandPlot size={28} />, label: "Grounds", value: "3 Acres" },
  { icon: <Wind size={28} />, label: "Private Pool", value: "Seasonal" },
  { icon: <UtensilsCrossed size={28} />, label: "Chef's Kitchen", value: "Fully Equipped" },
  { icon: <ParkingCircle size={28} />, label: "Ample Parking", value: "Included" },
  { icon: <Wifi size={28} />, label: "High-Speed WiFi", value: "Included" },
];

const AmericanEstate = () => {
  return (
    <ListingPageLayout
      title="The American Estate"
      descriptor="Private. Spacious. Elevated in scale and setting."
      heroImageUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">A refined retreat.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            Set on three private acres, The American Estate offers a sense of scale and seclusion. It's a place for significant gatherings, executive stays, or simply a desire for more space. With expansive living areas, a chef's kitchen, and private grounds, it provides a backdrop for memorable moments.
          </p>
        </section>

        <section className="py-24 md:py-32">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">Key Features</h3>
          <AmenityList amenities={americanEstateAmenities} />
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">Gallery</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop" alt="Exterior of The American Estate" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3270&auto=format&fit=crop" alt="Dining area in The American Estate" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=3270&auto=format&fit=crop" alt="Kitchen in The American Estate" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=3270&auto=format&fit=crop" alt="Master bedroom in The American Estate" className="rounded-lg object-cover aspect-square shadow-lg" />
          </div>
        </section>
      </div>
    </ListingPageLayout>
  );
};

export default AmericanEstate;