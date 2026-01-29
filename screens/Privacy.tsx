import { useLanguage } from "@/translations/LanguageProvider";

const Privacy = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen container mx-auto px-4 py-32 md:py-48">
      <div className="max-w-prose mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif mb-12">{translations.pages.privacy?.title || "Privacy Policy"}</h1>
        <div className="space-y-8 text-lg text-muted-foreground">
          <p>
            {translations.pages.privacy?.intro || "The American Collection (\"we,\" \"us,\" or \"our\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website."}
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.privacy?.collection?.title || "Information We Collect"}</h2>
            <p>
              {translations.pages.privacy?.collection?.text || "We may collect personal information from you such as your name, email address, and phone number when you fill out our contact form or make a booking inquiry. We also collect non-personal information, such as browser type and operating system, to improve our website."}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.privacy?.usage?.title || "How We Use Your Information"}</h2>
            <p>
              {translations.pages.privacy?.usage?.text || "We use the information we collect to:"}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {(translations.pages.privacy?.usage?.list || [
                "Respond to your inquiries and provide customer support.",
                "Process bookings and manage your stay.",
                "Send you marketing and promotional communications, with your consent.",
                "Improve our website and services."
              ]).map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-serif text-foreground">{translations.pages.privacy?.security?.title || "Data Security"}</h2>
            <p>
              {translations.pages.privacy?.security?.text || "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems."}
            </p>
          </section>

          <p className="pt-4">
            {translations.pages.privacy?.lastUpdated || "Last updated:"} {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Privacy;