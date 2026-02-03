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
              Experience FIFA World Cup 2026™ in Kansas City: Your Complete Visitor Guide
            </h1>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground max-w-prose">
              <p className="wc-anim">
                Kansas City earned its place as a FIFA World Cup 2026™ host city through decades of passionate soccer support and world-class facilities. From June 11 through July 13, 2026, the region will welcome fans from around the globe to GEHA Field at Arrowhead Stadium for six thrilling matches spanning three weeks of competition. Whether you are traveling internationally for your first World Cup experience or coming from across the United States to support your team, this comprehensive guide provides everything you need to plan an unforgettable visit to America's Soccer Capital.
              </p>
              <p className="wc-anim">
                The American Collection offers luxury vacation rentals in Liberty, Missouri, strategically located just 15 minutes from Arrowhead Stadium. Our properties provide the perfect home base for World Cup visitors seeking comfort, space, and authentic Midwest hospitality while staying close to all the action.
              </p>
            </div>
            <div className="mt-10 wc-anim">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/listings">Reserve Your Property Now</Link>
              </Button>
            </div>
          </div>
          <div className="wc-anim">
            <img
              src="/images/americonimages/175903-461844-w68i-JV8SA-1nCCmPOPwuR1iiBYFYhx5l5HwmId4M9E-693246335eeb6.webp"
              alt="Americon Estate luxurious living space perfect for World Cup stays"
              className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-full aspect-[4/5]"
            />
          </div>
        </div>

        {/* Match Schedule Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="wc-anim">
              <img
                src="/images/yellowimages/bannerimage.jpg"
                alt="World Cup Match Schedule"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">Kansas City World Cup 2026 Match Schedule</h2>
              <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim">
                <p>
                  GEHA Field at Arrowhead Stadium will host six FIFA World Cup 2026™ matches featuring teams from four continents competing over three weeks. Kansas City's match schedule includes crucial group stage games that will determine which teams advance to the knockout rounds, plus an exciting quarterfinal match that could feature some of the tournament's biggest stars.
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-serif mt-12 mb-6 wc-anim">Complete Match Schedule</h3>
          <div className="overflow-x-auto wc-anim">
            <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Match Type</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Venue</th>
                  <th className="px-4 py-3 text-left">Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Group Stage Match 1</td>
                  <td className="px-4 py-3">June 16, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Opening group stage action</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Group Stage Match 2</td>
                  <td className="px-4 py-3">June 20, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Mid-group stage competition</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Group Stage Match 3</td>
                  <td className="px-4 py-3">June 22, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Critical group positioning</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Group Stage Match 4</td>
                  <td className="px-4 py-3">June 27, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Final group stage matches</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3">Round of 32</td>
                  <td className="px-4 py-3">July 3, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Knockout stage begins</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Quarterfinal</td>
                  <td className="px-4 py-3">July 11, 2026</td>
                  <td className="px-4 py-3">GEHA Field at Arrowhead Stadium</td>
                  <td className="px-4 py-3">Path to semifinals</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Arrowhead Stadium Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">GEHA Field at Arrowhead Stadium: World Cup Venue</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                Arrowhead Stadium's selection as a FIFA World Cup 2026™ venue recognizes Kansas City's passionate soccer culture and the facility's world-class capabilities. Originally built for American football, the stadium has hosted numerous international soccer matches and consistently delivers exceptional experiences for players and fans alike.
              </p>
              <p>
                With a capacity of approximately 76,640 for soccer configurations, Arrowhead Stadium creates an intimate yet massive atmosphere, with every seat offering a clear view of the pitch. The stadium's bowl design keeps fans close to the action, while modern amenities ensure comfort throughout the match experience.
              </p>
            </div>
            <div className="wc-anim">
              <img
                src="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
                alt="GEHA Field at Arrowhead Stadium"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">Getting Around: Transportation Options for World Cup Visitors</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="wc-anim">
              <img
                src="/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp"
                alt="Transportation Options"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                FIFA World Cup 2026™ offers a dedicated transportation solution for tournament visitors. The ConnectKC motorcoach bus service operates throughout the entire tournament period from June 11 through July 13, 2026, connecting the FIFA Fan Festival™ in downtown Kansas City with 15 regional sites across the metropolitan area.
              </p>
              <p>
                For visitors with rental vehicles or staying at properties like The American Collection in Liberty, driving to Arrowhead Stadium offers flexibility and convenience. The drive from Liberty, Missouri to Arrowhead Stadium follows Interstate 35 South, a straightforward route taking approximately 15 minutes in normal traffic conditions.
              </p>
              <p>
                Guests staying at The American Estate enjoy access to our exclusive Tesla CyberTruck transportation service, providing premium transportation to and from Arrowhead Stadium on match days. This complimentary service ensures you arrive in style while avoiding parking hassles and post-match traffic stress.
              </p>
            </div>
          </div>
        </section>

        {/* Fan Festival Section */}
        <section className="mb-24 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">FIFA Fan Festival™ and Tournament Atmosphere</h2>
          <div className="mb-8 wc-anim">
            <img
              src="/images/carriageimages/175903-461812-hKqN2Rn0xPjXtED3luveAJhggL2vLlIECmIHM6CbNOk-693229fd4baf9.webp"
              alt="FIFA Fan Festival Kansas City"
              className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full max-w-4xl mx-auto h-64 md:h-96"
            />
          </div>
          <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim mx-auto text-center">
            <p>
              The FIFA World Cup 2026™ experience extends far beyond the 90 minutes of match action at Arrowhead Stadium. The FIFA Fan Festival™ in downtown Kansas City creates a month-long celebration that brings together fans from around the world, offering entertainment, cultural experiences, and community gathering spaces throughout the tournament.
            </p>
            <p>
              Located in the heart of downtown Kansas City, the FIFA Fan Festival™ transforms public spaces into an international celebration of soccer culture. Large screens broadcast all World Cup matches live, allowing fans to watch games from other host cities while enjoying the festival atmosphere. Entry to the FIFA Fan Festival™ is free, making it accessible to all visitors regardless of whether they have match tickets.
            </p>
          </div>
        </section>

        {/* Kansas City Attractions Section */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="wc-anim">
              <img
                src="/images/americonimages/175903-461844-gdQVR-5JSAoS7Jtx4o91F5UsEfEbg5pXxAE4mWFT2b8-6932462240079.webp"
                alt="Kansas City Attractions"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">Explore Kansas City: Top Attractions and Activities</h2>
              <div className="text-lg text-muted-foreground space-y-6 max-w-4xl wc-anim">
                <p>
                  While the FIFA World Cup 2026™ brings you to Kansas City, the region offers world-class attractions and experiences that make your visit memorable beyond the matches. Planning time to explore Kansas City's diverse offerings enhances your trip and provides engaging activities for non-match days.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Museums and Cultural Attractions</h3>
              <p className="text-muted-foreground">
                The Nelson-Atkins Museum of Art, National WWI Museum and Memorial, and American Jazz Museum offer world-class cultural experiences that enrich your World Cup visit.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Family-Friendly Activities</h3>
              <p className="text-muted-foreground">
                Science City at Union Station, SEA LIFE Kansas City Aquarium, and LEGOLAND Discovery Center provide engaging entertainment for visitors of all ages.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Shopping and Entertainment</h3>
              <p className="text-muted-foreground">
                The Country Club Plaza, Power & Light District, and historic Westport offer diverse shopping, dining, and entertainment experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Liberty Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">Discover Liberty, Missouri: Your World Cup Home Base</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-muted-foreground wc-anim">
              <p>
                Liberty, Missouri, offers World Cup visitors a strategic location combining quick access to Arrowhead Stadium with small-town charm and authentic Midwest hospitality. Staying in Liberty provides a peaceful retreat from tournament crowds while keeping you close to all the action.
              </p>
              <p>
                Liberty's location, approximately 15 minutes north of Arrowhead Stadium and 20 minutes from downtown Kansas City, provides the perfect balance of convenience and tranquility. You can easily access all World Cup activities and Kansas City attractions, then return each evening to a quieter, more relaxed environment.
              </p>
            </div>
            <div className="wc-anim">
              <img
                src="/images/yellowimages/bannerimage.jpg"
                alt="Historic Downtown Liberty"
                className="rounded-lg shadow-2xl shadow-black/30 object-cover w-full h-64 md:h-96"
              />
            </div>
          </div>
        </section>

        {/* Why Choose American Collection Section */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-serif mb-8 wc-anim">Why Choose The American Collection for Your World Cup Stay</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Space and Privacy</h3>
              <p className="text-muted-foreground">
                Our properties provide more space than hotel rooms, with multiple bedrooms, full living areas, complete kitchens, and outdoor spaces. Perfect for groups and families.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Location Advantages</h3>
              <p className="text-muted-foreground">
                Liberty's location, 15 minutes from Arrowhead Stadium, provides the perfect balance of convenience and tranquility while maintaining easy access to all activities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Cost-Effectiveness for Groups</h3>
              <p className="text-muted-foreground">
                When traveling with a group, vacation rentals often cost less per person than hotel rooms while providing significantly more space and amenities.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-lg wc-anim">
              <h3 className="text-xl font-serif mb-4">Premium Amenities and Services</h3>
              <p className="text-muted-foreground">
                Each property features high-end furnishings, modern appliances, and exclusive CyberTruck transportation service for match days.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-24">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 wc-anim">Your Unforgettable Kansas City World Cup Experience Awaits</h2>
            <div className="text-lg text-muted-foreground space-y-6 max-w-4xl mx-auto mb-8 wc-anim">
              <p>
                FIFA World Cup 2026™ in Kansas City represents a once-in-a-lifetime opportunity to experience soccer's greatest tournament in America's heartland. From the passionate atmosphere at Arrowhead Stadium to the cultural richness of Kansas City's attractions and the warm hospitality of Liberty, Missouri, every element combines to create unforgettable memories.
              </p>
              <p>
                The American Collection provides the perfect home base for your World Cup adventure. Our luxury properties offer space, comfort, and convenience that transform your visit from a simple trip to an extraordinary experience. Start planning your FIFA World Cup 2026™ Kansas City experience today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center wc-anim">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/listings">Reserve Your Property Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-sans uppercase tracking-widest">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mb-24">
          <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center wc-anim">Subscribe for World Cup Updates</h2>
            <p className="text-lg text-muted-foreground text-center mb-8 wc-anim">
              Stay informed about the FIFA World Cup 2026™ in Kansas City with our newsletter. Receive updates about match schedules, ticket information, local events, and exclusive offers for American Collection guests.
            </p>
            <form className="max-w-md mx-auto space-y-4 wc-anim">
              <input
                type="email"
                placeholder="Email Address (required)"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background"
                required
              />
              <input
                type="text"
                placeholder="First Name (optional)"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background"
              />
              <select className="w-full px-4 py-3 rounded-lg border border-border bg-background">
                <option>Interested in...</option>
                <option>Booking Accommodation</option>
                <option>General World Cup Info</option>
                <option>Local Attractions</option>
                <option>All Updates</option>
              </select>
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 text-base font-sans uppercase tracking-widest">
                Get World Cup Updates
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WorldCup;