import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrustBadges = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".trust-anim");
      gsap.set(elements, { autoAlpha: 0, y: 30 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(elements, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 trust-anim">
              Trust Badges & Credentials
            </h2>
          </div>

          {/* Logos Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/airbnb.png"
                  alt="Airbnb Superhost"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Airbnb Superhost</p>
              </div>
            </div>
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/vrbo.png"
                  alt="Vrbo Premier Host"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Vrbo Premier Host</p>
              </div>
            </div>
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/booking.jpg"
                  alt="Booking.com Guest Review Award"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Booking.com Guest Review Award</p>
              </div>
            </div>
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/liberty.png"
                  alt="Visit Liberty, MO Partner"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Visit Liberty, MO Partner</p>
              </div>
            </div>
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/leadership.png"
                  alt="Liberty Chamber of Commerce Member"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Liberty Chamber of Commerce Member</p>
              </div>
            </div>
            <div className="text-center trust-anim">
              <div className="bg-background p-6 rounded-lg shadow-md mb-4 h-40 flex flex-col items-center justify-center">
                <img
                  src="/images/logo/hostway.png"
                  alt="Hostaway Verified Property"
                  className="w-16 h-16 rounded-full mx-auto mb-2 object-contain"
                />
                <p className="text-sm font-medium">Hostaway Verified Property</p>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="bg-background p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif text-center mb-8 trust-anim">Guest Satisfaction Statistics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center trust-anim">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5.0</div>
                <p className="text-muted-foreground">Average Guest Rating</p>
              </div>
              <div className="text-center trust-anim">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Five-Star Reviews</p>
              </div>
              <div className="text-center trust-anim">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Guest Satisfaction Rate</p>
              </div>
              <div className="text-center trust-anim">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Years Hosting Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
