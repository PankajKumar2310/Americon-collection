import ListingPageLayout from "@/components/ListingPageLayout";
import AmenityList from "@/components/AmenityList";
import ImageGalleryModal from "@/components/ImageGalleryModal";
import { getAmericanEstateImages } from "@/lib/americanEstateImages";
import { BedDouble, Bath, Users, Wifi, UtensilsCrossed, ParkingCircle, Wind, LandPlot } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/translations/LanguageProvider";

const AmericanEstate = () => {
  const { translations } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const americanEstateAmenities = [
    { icon: <BedDouble size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.bedrooms || "Bedrooms", value: "5" },
    { icon: <Bath size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.bathrooms || "Bathrooms", value: "4.5" },
    { icon: <Users size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.sleeps || "Sleeps", value: "10-12" },
    { icon: <LandPlot size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.grounds || "Grounds", value: "3 Acres" },
    { icon: <Wind size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.privatePool || "Private Pool", value: "Seasonal" },
    { icon: <UtensilsCrossed size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.chefKitchen || "Chef's Kitchen", value: "Fully Equipped" },
    { icon: <ParkingCircle size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.ampleParking || "Ample Parking", value: "Included" },
    { icon: <Wifi size={28} />, label: translations.pages.listings?.americanEstate?.amenities?.highSpeedWifi || "High-Speed WiFi", value: "Included" },
  ];

  const allImages = getAmericanEstateImages();
  const previewImages = allImages.slice(0, 4);

  return (
    <ListingPageLayout
      title={translations.pages.listings?.americanEstate?.title || "The American Estate"}
      descriptor={translations.pages.listings?.americanEstate?.descriptor || "Private. Spacious. Elevated in scale and setting."}
      heroImageUrl="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
      bookingLink="https://www.americancollectionkc.com/listings/461812"
    >
      <div className="max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">{translations.pages.listings?.americanEstate?.heroTitle || "A refined retreat."}</h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-prose mx-auto">
            {translations.pages.listings?.americanEstate?.heroDescription || "Set on three private acres, The American Estate offers a sense of scale and seclusion. It's a place for significant gatherings, executive stays, or simply a desire for more space. With expansive living areas, a chef's kitchen, and private grounds, it provides a backdrop for memorable moments."}
          </p>
        </section>

        <section className="py-24 md:py-32">
          <h3 className="text-2xl md:text-3xl font-serif text-center mb-12">{translations.pages.listings?.americanEstate?.keyFeatures || "Key Features"}</h3>
          <AmenityList amenities={americanEstateAmenities} />
        </section>

        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif">{translations.pages.listings?.americanEstate?.gallery || "Gallery"}</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {previewImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`The American Estate - Image ${index + 1}`}
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
        title="The American Estate"
      />
    </ListingPageLayout>
  );
};

export default AmericanEstate;