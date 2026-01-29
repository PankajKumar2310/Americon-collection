import { useLanguage } from "@/translations/LanguageProvider";

const Terms = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen container mx-auto px-4 py-32 md:py-48">
      <div className="max-w-prose mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-12">{translations.pages.terms?.title || "Terms of Service"}</h1>
        <div className="space-y-8 text-lg text-muted-foreground">
          <p>
            {translations.pages.terms?.intro || "Please read these Terms of Service (\"Terms\") carefully before using our website or booking a stay with The American Collection. Your access to and use of the service is conditioned on your acceptance of and compliance with these Terms."}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.terms?.bookings?.title || "Bookings and Payments"}</h2>
            <p>
              {translations.pages.terms?.bookings?.text || "All booking inquiries are subject to availability and confirmation. By making a booking, you agree to provide current, complete, and accurate purchase and account information. Payment terms will be outlined in your booking agreement."}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.terms?.responsibilities?.title || "Guest Responsibilities"}</h2>
            <p>
              {translations.pages.terms?.responsibilities?.text || "Guests are expected to treat the property with respect and care. Any damages to the property or its contents will be the responsibility of the guest. All properties are non-smoking. House rules specific to each property must be adhered to at all times."}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.terms?.liability?.title || "Limitation of Liability"}</h2>
            <p>
              {translations.pages.terms?.liability?.text || "The American Collection is not liable for any personal injuries, property damage, or losses that may occur during your stay. We encourage all guests to secure their own travel insurance."}
            </p>
          </section>

          <p className="pt-4">
            {translations.pages.terms?.lastUpdated || "Last updated:"} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Terms;