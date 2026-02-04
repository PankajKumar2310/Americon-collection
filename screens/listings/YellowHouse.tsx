import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import { getYellowHouseImages } from "@/lib/yellowHouseImages";
import { BedDouble, Bath, Users, Wifi, Tv, UtensilsCrossed, ParkingCircle } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/translations/LanguageProvider";

const YellowHouse = () => {
  const { translations } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const yellowHouseAmenities = [
    { icon: <BedDouble size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.bedrooms || "Bedrooms", value: "3" },
    { icon: <Bath size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.bathrooms || "Bathrooms", value: "2.5" },
    { icon: <Users size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.sleeps || "Sleeps", value: "6-8" },
    { icon: <Wifi size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.highSpeedWifi || "High-Speed WiFi", value: "Included" },
    { icon: <Tv size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.smartTvs || "Smart TVs", value: "Living & Master" },
    { icon: <UtensilsCrossed size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.fullKitchen || "Full Kitchen", value: "Equipped" },
    { icon: <ParkingCircle size={28} />, label: translations.pages.listings?.yellowHouse?.amenities?.parking || "Parking", value: "Garage" },
  ];

  const allImages = getYellowHouseImages();
  const previewImages = allImages.slice(0, 4);

  return (
    <ListingPageLayout
      title={translations.pages.listings?.yellowHouse?.title || "The Yellow House"}
      descriptor={translations.pages.listings?.yellowHouse?.descriptor || "Warm. Light-filled. Designed for shared moments."}
      heroImageUrl="/images/yellowimages/bannerimage.jpg"
      bookingLink="https://www.americancollectionkc.com/listings/457908"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">{translations.pages.listings?.yellowHouse?.heroTitle || "A residence for connection."}</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            {translations.pages.listings?.yellowHouse?.heroDescription || "The Yellow House is a light-filled, open-concept home designed for families, longer stays, and relaxed gatherings. With generous living spaces and a fully-equipped kitchen, it's a place to settle in and feel at ease, whether you're visiting for a weekend or a month."}
          </p>
        </section>

        <section className="py-24 md:py-32">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">{translations.pages.listings?.yellowHouse?.keyFeatures || "Key Features"}</h3>
          <AmenityList amenities={yellowHouseAmenities} />
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">{translations.pages.listings?.yellowHouse?.gallery || "Gallery"}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`The Yellow House - Image ${index + 1}`}
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
                {translations.pages.listings?.viewMoreImages || "View More Images"} ({allImages.length - 4} {translations.pages.listings?.moreImagesCount || "more"})
              </button>
            </div>
          )}
        </section>
      </div>
      
      <ImageGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        images={allImages}
        title="The Yellow House"
      />
    </ListingPageLayout>
  );
};

export default YellowHouse;