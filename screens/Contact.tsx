import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/translations/LanguageProvider";

const Contact = () => {
  const { translations } = useLanguage();
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".contact-anim");
      gsap.set(elements, { autoAlpha: 0, y: 20 });

      gsap.to(elements, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-32 md:pt-48 pb-24">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif contact-anim">
          {translations.pages.contact?.title || "Let's connect."}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground contact-anim">
          {translations.pages.contact?.description || "For booking inquiries, questions, or collaboration ideas, please reach out. We typically respond within 24 hours."}
        </p>
        <div className="mt-16 contact-anim">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;