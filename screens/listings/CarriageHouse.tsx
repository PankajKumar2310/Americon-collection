import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import { Bed, Bath, User, Wifi, Tv, UtensilsCrossed, ParkingCircle, KeyRound } from "lucide-react";

const carriageHouseAmenities = [
  { icon: <Bed size={28} />, label: "Bedroom", value: "1" },
  { icon: <Bath size={28} />, label: "Bathroom", value: "1" },
  { icon: <User size={28} />, label: "Sleeps", value: "2" },
  { icon: <KeyRound size={28} />, label: "Private Entry", value: "Included" },
  { icon: <UtensilsCrossed size={28} />, label: "Kitchenette", value: "Equipped" },
  { icon: <Wifi size={28} />, label: "High-Speed WiFi", value: "Included" },
  { icon: <Tv size={28} />, label: "Smart TV", value: "Included" },
  { icon: <ParkingCircle size={28} />, label: "Parking", value: "Designated" },
];

const CarriageHouse = () => {
  return (
    <ListingPageLayout
      title="The Carriage House"
      descriptor="Refined. Self-contained. Calm by design."
      heroImageUrl="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=3087&auto=format&fit=crop"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">An independent stay.</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            The Carriage House is a thoughtfully designed, self-contained residence perfect for solo travelers or couples. With its own private entry and carefully considered amenities, it offers an effortless, independent experience where every detail is in its right place.
          </p>
        </section>

        <section className="py-24 md:py-32">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">Key Features</h3>
          <AmenityList amenities={carriageHouseAmenities} />
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">Gallery</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=3270&auto=format&fit=crop" alt="Living area of The Carriage House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=3270&auto=format&fit=crop" alt="Bedroom in The Carriage House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?q=80&w=3270&auto=format&fit=crop" alt="Exterior view of The Carriage House" className="rounded-lg object-cover aspect-square shadow-lg" />
            <img src="https://images.unsplash.com/photo-1617104679095-040635393fac?q=80&w=3270&auto=format&fit=crop" alt="Kitchenette detail in The Carriage House" className="rounded-lg object-cover aspect-square shadow-lg" />
          </div>
        </section>
      </div>
    </ListingPageLayout>
  );
};

export default CarriageHouse;