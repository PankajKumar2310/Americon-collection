import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/translations/LanguageProvider";

gsap.registerPlugin(ScrollTrigger);

const WorldCup = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".wc-anim") as HTMLElement[];
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      ScrollTrigger.create({
        trigger: elements,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: "power3.out",
          });
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center mb-24">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-serif wc-anim">
              {translations.pages.worldCup?.hero?.title || "Experience FIFA World Cup 2026™ in Kansas City: Your Complete Visitor Guide"}
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground max-w-prose">
              <p className="wc-anim">
                {translations.pages.worldCup?.hero?.description || "Kansas City earned its place as a FIFA World Cup 2026™ host city through decades of passionate soccer support and world-class facilities. From June 11 through July 13, 2026, the region will welcome fans from around the globe to GEHA Field at Arrowhead Stadium for six thrilling matches spanning three weeks of competition. Whether you are traveling internationally for your first World Cup experience or coming from across the United States to support your team, this comprehensive guide provides everything you need to plan an unforgettable visit to America's Soccer Capital."}
              </p>
              <p className="wc-anim">
                {translations.pages.worldCup?.hero?.americanDescription || "The American Collection offers luxury vacation rentals in Liberty, Missouri, strategically located just 15 minutes from Arrowhead Stadium. Our properties provide the perfect home base for World Cup visitors seeking comfort, space, and authentic Midwest hospitality while staying close to all the action."}
              </p>
            </div>
            <div className="mt-10 wc-anim">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/listings">{translations.pages.worldCup?.hero?.primaryCta || "Reserve Your Property Now"}</Link>
              </Button>
            </div>
          </div>
          <div className="wc-anim">
            <img
              src="/images/americonimages/kansascity.jpeg"
              alt="American Estate luxurious living space perfect for World Cup stays"
              className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
            />
          </div>
        </div>

        {/* Match Schedule Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="wc-anim">
              <img
                src="/images/yellowimages/stadium.jpeg"
                alt="World Cup Match Schedule"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.matchSchedule?.title || "Kansas City World Cup 2026 Match Schedule"}</h2>
              <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim">
                <p>
                  {translations.pages.worldCup?.matchSchedule?.description || "GEHA Field at Arrowhead Stadium will host six FIFA World Cup 2026™ matches featuring teams from four continents competing over three weeks. Kansas City's match schedule includes crucial group stage games that will determine which teams advance to the knockout rounds, plus an exciting quarterfinal match that could feature some of the tournament's biggest stars."}
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif mt-12 mb-6 wc-anim">{translations.pages.worldCup?.matchSchedule?.completeSchedule || "Complete Match Schedule"}</h3>
          <div className="overflow-x-auto wc-anim">
            <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">{translations.pages.worldCup?.matchSchedule?.tableHeaders?.matchType || "Match Type"}</th>
                  <th className="px-4 py-3 text-left">{translations.pages.worldCup?.matchSchedule?.tableHeaders?.date || "Date"}</th>
                  <th className="px-4 py-3 text-left">{translations.pages.worldCup?.matchSchedule?.tableHeaders?.venue || "Venue"}</th>
                  <th className="px-4 py-3 text-left">{translations.pages.worldCup?.matchSchedule?.tableHeaders?.significance || "Significance"}</th>
                </tr>
              </thead>
              <tbody>
                {(translations.pages.worldCup?.matchSchedule?.matches || [
                  {type:"Group Stage Match 1", date:"June 16, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Opening group stage action"},
                  {type:"Group Stage Match 2", date:"June 20, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Mid-group stage competition"},
                  {type:"Group Stage Match 3", date:"June 22, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Critical group positioning"},
                  {type:"Group Stage Match 4", date:"June 27, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Final group stage matches"},
                  {type:"Round of 32", date:"July 3, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Knockout stage begins"},
                  {type:"Quarterfinal", date:"July 11, 2026", venue:"GEHA Field at Arrowhead Stadium", significance:"Path to semifinals"}
                ]).map((match, index) => (
                  <tr key={index} className={index < 5 ? "border-b border-border" : ""}>
                    <td className="px-4 py-3">{match.type}</td>
                    <td className="px-4 py-3">{match.date}</td>
                    <td className="px-4 py-3">{match.venue}</td>
                    <td className="px-4 py-3">{match.significance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Arrowhead Stadium Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.venue?.title || "GEHA Field at Arrowhead Stadium: World Cup Venue"}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                {translations.pages.worldCup?.venue?.description || "Arrowhead Stadium's selection as a FIFA World Cup 2026™ venue recognizes Kansas City's passionate soccer culture and the facility's world-class capabilities. Originally built for American football, the stadium has hosted numerous international soccer matches and consistently delivers exceptional experiences for players and fans alike."}
              </p>
              <p>
                {translations.pages.worldCup?.venue?.capacity || "With a capacity of approximately 76,640 for soccer configurations, Arrowhead Stadium creates an intimate yet massive atmosphere, with every seat offering a clear view of the pitch. The stadium's bowl design keeps fans close to the action, while modern amenities ensure comfort throughout the match experience."}
              </p>
            </div>
            <div className="wc-anim">
              <img
                src="/images/yellowimages/arrowstadium.webp"
                alt="GEHA Field at Arrowhead Stadium"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.transportation?.title || "Getting Around: Transportation Options for World Cup Visitors"}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="wc-anim">
              <img
                src="/images/americonimages/cybertruck.png"
                alt="Transportation Options"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                {translations.pages.worldCup?.transportation?.description || "FIFA World Cup 2026™ offers a dedicated transportation solution for tournament visitors. The ConnectKC motorcoach bus service operates throughout the entire tournament period from June 11 through July 13, 2026, connecting the FIFA Fan Festival™ in downtown Kansas City with 15 regional sites across the metropolitan area."}
              </p>
              <p>
                {translations.pages.worldCup?.transportation?.rentalVehicles || "For visitors with rental vehicles or staying at properties like The American Collection in Liberty, driving to Arrowhead Stadium offers flexibility and convenience. The drive from Liberty, Missouri to Arrowhead Stadium follows Interstate 35 South, a straightforward route taking approximately 15 minutes in normal traffic conditions."}
              </p>
              <p>
                {translations.pages.worldCup?.transportation?.cyberTruckService || "Guests staying at The American Estate enjoy access to our exclusive Tesla CyberTruck transportation service, providing premium transportation to and from Arrowhead Stadium on match days. This complimentary service ensures you arrive in style while avoiding parking hassles and post-match traffic stress."}
              </p>
            </div>
          </div>
        </section>

        {/* Fan Festival Section */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.fanFestival?.title || "FIFA Fan Festival™ and Tournament Atmosphere"}</h2>
          <div className="mb-8 wc-anim">
            <img
              src="/images/carriageimages/peoplesimg.avif"
              alt="FIFA Fan Festival Kansas City"
              className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full max-w-4xl mx-auto h-64 md:h-96"
            />
          </div>
          <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim mx-auto text-center">
            <p>
              {translations.pages.worldCup?.fanFestival?.description || "The FIFA World Cup 2026™ experience extends far beyond the 90 minutes of match action at Arrowhead Stadium. The FIFA Fan Festival™ in downtown Kansas City creates a month-long celebration that brings together fans from around the world, offering entertainment, cultural experiences, and community gathering spaces throughout the tournament."}
            </p>
            <p>
              {translations.pages.worldCup?.fanFestival?.location || "Located in the heart of downtown Kansas City, the FIFA Fan Festival™ transforms public spaces into an international celebration of soccer culture. Large screens broadcast all World Cup matches live, allowing fans to watch games from other host cities while enjoying the festival atmosphere. Entry to the FIFA Fan Festival™ is free, making it accessible to all visitors regardless of whether they have match tickets."}
            </p>
          </div>
        </section>

        {/* Kansas City Attractions Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="wc-anim">
              <img
                src="/images/americonimages/fountain.jpg"
                alt="Kansas City Attractions"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.kansasCity?.title || "Explore Kansas City: Top Attractions and Activities"}</h2>
              <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim">
                <p>
                  {translations.pages.worldCup?.kansasCity?.description || "While the FIFA World Cup 2026™ brings you to Kansas City, the region offers world-class attractions and experiences that make your visit memorable beyond the matches. Planning time to explore Kansas City's diverse offerings enhances your trip and provides engaging activities for non-match days."}
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {(translations.pages.worldCup?.kansasCity?.attractions || [
              {title:"Museums and Cultural Attractions", description:"The Nelson-Atkins Museum of Art, National WWI Museum and Memorial, and American Jazz Museum offer world-class cultural experiences that enrich your World Cup visit."},
              {title:"Family-Friendly Activities", description:"Science City at Union Station, SEA LIFE Kansas City Aquarium, and LEGOLAND Discovery Center provide engaging entertainment for visitors of all ages."},
              {title:"Shopping and Entertainment", description:"The Country Club Plaza, Power & Light District, and historic Westport offer diverse shopping, dining, and entertainment experiences."}
            ]).map((attraction, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg wc-anim">
                <h3 className="text-xl font-serif mb-4">{attraction.title}</h3>
                <p className="text-muted-foreground">{attraction.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Liberty Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.liberty?.title || "Discover Liberty, Missouri: Your World Cup Home Base"}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                {translations.pages.worldCup?.liberty?.description || "Liberty, Missouri, offers World Cup visitors a strategic location combining quick access to Arrowhead Stadium with small-town charm and authentic Midwest hospitality. Staying in Liberty provides a peaceful retreat from tournament crowds while keeping you close to all the action."}
              </p>
              <p>
                Liberty's location, approximately 15 minutes north of Arrowhead Stadium and 20 minutes from downtown Kansas City, provides the perfect balance of convenience and tranquility. You can easily access all World Cup activities and Kansas City attractions, then return each evening to a quieter, more relaxed environment.
              </p>
            </div>
            <div className="wc-anim">
              <img
                src="/images/yellowimages/liberty.jpeg"
                alt="Historic Downtown Liberty"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </section>

        {/* Why Choose American Collection Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">{translations.pages.worldCup?.accommodations?.title || "Why Choose The American Collection for Your World Cup Stay"}</h2>
          <p className="text-lg text-muted-foreground max-w-4xl mb-8 wc-anim">
            {translations.pages.worldCup?.accommodations?.description || "Our properties provide more space than hotel rooms, with multiple bedrooms, full living areas, complete kitchens, and outdoor spaces. Perfect for groups and families."}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {translations.pages.worldCup?.accommodations?.propertyTypes?.map((propType, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-lg wc-anim">
                <h3 className="text-xl font-serif mb-4">{propType.name}</h3>
                <p className="text-muted-foreground">{propType.description}</p>
              </div>
            )) || [
              <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
                <h3 className="text-xl font-serif mb-4">Space and Privacy</h3>
                <p className="text-muted-foreground">
                  Our properties provide more space than hotel rooms, with multiple bedrooms, full living areas, complete kitchens, and outdoor spaces. Perfect for groups and families.
                </p>
              </div>,
              <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
                <h3 className="text-xl font-serif mb-4">Location Advantages</h3>
                <p className="text-muted-foreground">
                  Liberty's location, 15 minutes from Arrowhead Stadium, provides the perfect balance of convenience and tranquility while maintaining easy access to all activities.
                </p>
              </div>
            ]}
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-24">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 wc-anim">{translations.pages.worldCup?.conclusion?.title || "Your Unforgettable Kansas City World Cup Experience Awaits"}</h2>
            <div className="text-lg text-muted-foreground space-y-6 max-w-4xl mx-auto mb-8 wc-anim">
              <p>
                {translations.pages.worldCup?.conclusion?.description || "FIFA World Cup 2026™ in Kansas City represents a once-in-a-lifetime opportunity to experience soccer's greatest tournament in America's heartland. From the passionate atmosphere at Arrowhead Stadium to the cultural richness of Kansas City's attractions and the warm hospitality of Liberty, Missouri, every element combines to create unforgettable memories."}
              </p>
              <p>
                {translations.pages.worldCup?.conclusion?.secondDescription || "The American Collection provides the perfect home base for your World Cup adventure. Our luxury properties offer space, comfort, and convenience that transform your visit from a simple trip to an extraordinary experience. Start planning your FIFA World Cup 2026™ Kansas City experience today."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center wc-anim">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/listings">{translations.pages.worldCup?.conclusion?.primaryCta || "Reserve Your Property Now"}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/contact">{translations.pages.worldCup?.conclusion?.secondaryCta || "Contact Us"}</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-24">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center wc-anim">{translations.pages.worldCup?.newsletter?.title || "Subscribe for World Cup Updates"}</h2>
            <p className="text-lg text-muted-foreground text-center mb-8 wc-anim">
              {translations.pages.worldCup?.newsletter?.description || "Stay informed about the FIFA World Cup 2026™ in Kansas City with our newsletter. Receive updates about match schedules, ticket information, local events, and exclusive offers for American Collection guests."}
            </p>
            <form className="max-w-md mx-auto space-y-4 wc-anim">
              <input
                type="email"
                placeholder={translations.pages.worldCup?.newsletter?.emailPlaceholder || "Email Address (required)"}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                required
              />
              <input
                type="text"
                placeholder={translations.pages.worldCup?.newsletter?.namePlaceholder || "First Name (optional)"}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background">
                <option>{translations.pages.worldCup?.newsletter?.interestLabel || "Interested in..."}</option>
                {(translations.pages.worldCup?.newsletter?.interestOptions || [
                  "Booking Accommodation",
                  "General World Cup Info", 
                  "Local Attractions",
                  "All Updates"
                ]).map((option, index) => (
                  <option key={index}>{option}</option>
                ))}
              </select>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-base font-sans uppercase tracking-widest">
                {translations.pages.worldCup?.newsletter?.submitButton || "Get World Cup Updates"}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorldCup;