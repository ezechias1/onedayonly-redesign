import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "OneDayOnly privacy policy. Learn how we collect, use, and protect your personal information in compliance with POPIA.",
};

// ---------------------------------------------------------------------------
// Section Component
// ---------------------------------------------------------------------------

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-baseline gap-3">
        <span className="text-brand-red font-bold">{number}.</span>
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed space-y-3 pl-8">
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrivacyPage() {
  const sections = [
    { id: "information-we-collect", label: "Information We Collect" },
    { id: "how-we-use", label: "How We Use Your Information" },
    { id: "cookies", label: "Cookies & Tracking" },
    { id: "third-parties", label: "Third Parties" },
    { id: "data-security", label: "Data Security" },
    { id: "your-rights", label: "Your Rights (POPIA)" },
    { id: "data-retention", label: "Data Retention" },
    { id: "contact", label: "Contact Details" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Last updated: 1 February 2026
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-surface p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          OneDayOnly (Pty) Ltd (&ldquo;OneDayOnly&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting
          your personal information and your right to privacy. This Privacy
          Policy describes how we collect, use, store, and share your
          information when you use our website at{" "}
          <strong>www.onedayonly.co.za</strong> and related services. This
          policy complies with the Protection of Personal Information Act, 2013
          (POPIA) and other applicable South African legislation.
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="mb-10 rounded-xl border border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface p-6">
        <h2 className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
          Contents
        </h2>
        <ol className="grid gap-1.5 sm:grid-cols-2">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red transition-colors"
              >
                <span className="text-brand-red font-medium">{i + 1}.</span>{" "}
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Sections */}
      <div className="space-y-10">
        <Section id="information-we-collect" number="1" title="Information We Collect">
          <p>We may collect and process the following categories of personal information:</p>
          <p><strong>Information you provide directly:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name, surname, and contact details (email address, phone number)</li>
            <li>Physical and delivery address</li>
            <li>Account credentials (email and password)</li>
            <li>Payment information (processed securely via third-party payment providers)</li>
            <li>Communications with our support team</li>
          </ul>
          <p><strong>Information collected automatically:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Device information (browser type, operating system, device type)</li>
            <li>IP address and approximate geographic location</li>
            <li>Browsing behaviour (pages visited, products viewed, time spent)</li>
            <li>Referring website or search terms</li>
            <li>Cookie and tracking technology data</li>
          </ul>
        </Section>

        <Section id="how-we-use" number="2" title="How We Use Your Information">
          <p>We use your personal information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Order fulfilment:</strong> Processing, shipping, and delivering your purchases</li>
            <li><strong>Account management:</strong> Creating and maintaining your user account</li>
            <li><strong>Customer support:</strong> Responding to enquiries, complaints, and return requests</li>
            <li><strong>Marketing:</strong> Sending deal alerts, newsletters, and promotional content (with your consent)</li>
            <li><strong>Personalisation:</strong> Tailoring product recommendations and website content to your preferences</li>
            <li><strong>Analytics:</strong> Understanding site usage to improve our platform and user experience</li>
            <li><strong>Legal compliance:</strong> Meeting our obligations under South African law</li>
            <li><strong>Fraud prevention:</strong> Detecting and preventing fraudulent transactions</li>
          </ul>
        </Section>

        <Section id="cookies" number="3" title="Cookies & Tracking">
          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience. Cookies are small text files stored on your
            device when you visit our website.
          </p>
          <p><strong>Types of cookies we use:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Essential cookies:</strong> Required for the website to function (e.g., shopping cart, authentication)</li>
            <li><strong>Analytics cookies:</strong> Help us understand how visitors use our site (e.g., Google Analytics)</li>
            <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
            <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p>
            You can manage your cookie preferences through your browser
            settings. Please note that disabling certain cookies may affect the
            functionality of our website.
          </p>
        </Section>

        <Section id="third-parties" number="4" title="Third Parties">
          <p>
            We may share your personal information with the following categories
            of third parties, only to the extent necessary:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Payment processors:</strong> To securely process your transactions (e.g., PayFast, Peach Payments)</li>
            <li><strong>Delivery partners:</strong> To ship your orders (e.g., The Courier Guy, Dawn Wing)</li>
            <li><strong>Marketing platforms:</strong> To send communications you have opted into (e.g., email service providers)</li>
            <li><strong>Analytics providers:</strong> To analyse website usage (e.g., Google Analytics)</li>
            <li><strong>Legal authorities:</strong> When required by law or to protect our legal rights</li>
          </ul>
          <p>
            We do not sell your personal information to third parties. All
            third-party service providers are contractually obligated to protect
            your information in accordance with POPIA.
          </p>
        </Section>

        <Section id="data-security" number="5" title="Data Security">
          <p>
            We implement appropriate technical and organisational measures to
            protect your personal information, including:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>SSL/TLS encryption for all data transmitted between your device and our servers</li>
            <li>PCI-DSS compliant payment processing (we never store full card details)</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Access controls limiting who can view personal information</li>
            <li>Secure data backups and disaster recovery procedures</li>
          </ul>
          <p>
            While we take every reasonable step to protect your information, no
            system is completely secure. We encourage you to use a strong,
            unique password for your account.
          </p>
        </Section>

        <Section id="your-rights" number="6" title="Your Rights (POPIA)">
          <p>
            Under the Protection of Personal Information Act (POPIA), you have
            the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Right to access:</strong> Request confirmation of what personal information we hold about you</li>
            <li><strong>Right to correction:</strong> Request that we correct or update inaccurate information</li>
            <li><strong>Right to deletion:</strong> Request that we delete your personal information (subject to legal retention requirements)</li>
            <li><strong>Right to object:</strong> Object to the processing of your information for direct marketing purposes</li>
            <li><strong>Right to data portability:</strong> Request a copy of your data in a commonly used format</li>
            <li><strong>Right to withdraw consent:</strong> Withdraw previously given consent at any time</li>
            <li><strong>Right to lodge a complaint:</strong> File a complaint with the Information Regulator of South Africa</li>
          </ul>
          <p>
            To exercise any of these rights, please contact our Information
            Officer at the details provided below.
          </p>
        </Section>

        <Section id="data-retention" number="7" title="Data Retention">
          <p>
            We retain your personal information only for as long as necessary to
            fulfil the purposes described in this policy, unless a longer
            retention period is required by law. Specifically:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Account information is retained for as long as your account is active</li>
            <li>Transaction records are retained for 5 years (as required by SARS)</li>
            <li>Marketing preferences are retained until you unsubscribe</li>
            <li>Analytics data is anonymised after 26 months</li>
          </ul>
          <p>
            When your information is no longer needed, we will securely delete
            or anonymise it.
          </p>
        </Section>

        <Section id="contact" number="8" title="Contact Details">
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us:
          </p>
          <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4 mt-2">
            <p className="font-medium text-gray-900 dark:text-white">OneDayOnly (Pty) Ltd</p>
            <p className="mt-2">Information Officer: Legal Department</p>
            <p>
              Email:{" "}
              <a href="mailto:privacy@onedayonly.co.za" className="text-brand-red hover:underline">
                privacy@onedayonly.co.za
              </a>
            </p>
            <p>Phone: 021 555 1234</p>
            <p className="mt-2">
              Information Regulator (South Africa):{" "}
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                inforegulator.org.za
              </a>
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
