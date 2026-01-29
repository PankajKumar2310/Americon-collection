import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import { BedDouble, Bath, Users, Wifi, Tv, UtensilsCrossed, ParkingCircle } from "lucide-react";

const yellowHouseAmenities = [
  { icon: <BedDouble size={28} />, label: "Bedrooms", value: "3" },
  { icon: <Bath size={28} />, label: "Bathrooms", value: "2.5" },
  { icon: <Users size={28} />, label: "Sleeps", value: "6-8" },
  { icon: <Wifi size={28} />, label: "High-Speed WiFi", value: "Included" },
  { icon: <Tv size={28} />, label: "Smart TVs", value: "Living & Master" },
  { icon: <UtensilsCrossed size={28} />, label: "Full Kitchen", value: "Equipped" },
  { icon: <ParkingCircle size={28} />, label: "Parking", value: "Garage" },
];

const YellowHouse = () => {
  return (
    <ListingPageLayout
      title="The Yellow House"
      descriptor="Warm. Light-filled. Designed for shared moments."
      heroImageUrl="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=3200&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">A residence for connection.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            The Yellow House is a light-filled, open-concept home designed for families, longer stays, and relaxed gatherings. With generous living spaces and a fully-equipped kitchen, it’s a place to settle in and feel at ease, whether you’re visiting for a weekend or a month.
          </p>
        </section>

        <section className="py-24 md:py-32">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">Key Features</h3>
          <AmenityList amenities={yellowHouseAmenities} />
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">Gallery</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=3270&auto=format&fit=crop" alt="Living room of The Yellow House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=3270&auto=format&fit=crop" alt="Bedroom in The Yellow House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=3271&auto=format&fit=crop" alt="Second bedroom in The Yellow House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=3271&auto=format&fit=crop" alt="Kitchen detail in The Yellow House" className="rounded-lg object-cover aspect-square shadow-lg" />
          </div>
        </section>
      </div>
    </ListingPageLayout>
  );
};

export default YellowHouse;