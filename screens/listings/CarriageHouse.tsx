import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import { getCarriageHouseImages } from "@/lib/carriageHouseImages";
import { Bed, Bath, User, Wifi, Tv, UtensilsCrossed, ParkingCircle, KeyRound } from "lucide-react";
import { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const allImages = getCarriageHouseImages();
  const previewImages = allImages.slice(0, 4);

  return (
    <ListingPageLayout
      title="The Carriage House"
      descriptor="Refined. Self-contained. Calm by design."
      heroImageUrl="/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp"
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
            {previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`The Carriage House - Image ${index + 1}`}
                className="rounded-lg object-cover aspect-square shadow-lg transition-transform duration-300 hover:scale-105"
              />
            ))}
          </div>
          
          {allImages.length > 4 && (
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-sans uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                View More Images ({allImages.length - 4} more)
              </button>
            </div>
          )}
        </section>
      </div>
      
      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImages}
        title="The Carriage House"
      />
    </ListingPageLayout>
  );
};

export default CarriageHouse;