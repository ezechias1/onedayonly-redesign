import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "POPIA Compliance",
  description:
    "OneDayOnly POPIA compliance notice. Learn how we comply with the Protection of Personal Information Act and protect your personal data.",
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

export default function PopiaPage() {
  const sections = [
    { id: "about-popia", label: "About POPIA" },
    { id: "responsible-party", label: "Responsible Party" },
    { id: "purpose-of-processing", label: "Purpose of Processing" },
    { id: "lawful-grounds", label: "Lawful Grounds for Processing" },
    { id: "your-rights", label: "Your Rights as a Data Subject" },
    { id: "exercising-rights", label: "How to Exercise Your Rights" },
    { id: "data-security", label: "Security Safeguards" },
    { id: "information-regulator", label: "Information Regulator" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "POPIA Compliance" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          POPIA Compliance
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Last updated: 1 February 2026
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-surface p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          OneDayOnly (Pty) Ltd (&ldquo;OneDayOnly&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to complying
          with the Protection of Personal Information Act, 2013 (Act 4 of 2013)
          (&ldquo;POPIA&rdquo;). This page explains how we process your
          personal information in accordance with POPIA and outlines your rights
          as a data subject. This notice should be read together with our{" "}
          <a
            href="/info/privacy"
            className="text-brand-red hover:underline font-medium"
          >
            Privacy Policy
          </a>
          .
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
        <Section id="about-popia" number="1" title="About POPIA">
          <p>
            The Protection of Personal Information Act (POPIA) is South
            Africa&apos;s data protection law that regulates how organisations
            collect, store, process, and share personal information. POPIA came
            into full effect on 1 July 2021 and applies to all organisations
            that process the personal information of South African data
            subjects.
          </p>
          <p>
            POPIA establishes eight conditions for the lawful processing of
            personal information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Accountability</li>
            <li>Processing limitation</li>
            <li>Purpose specification</li>
            <li>Further processing limitation</li>
            <li>Information quality</li>
            <li>Openness</li>
            <li>Security safeguards</li>
            <li>Data subject participation</li>
          </ul>
          <p>
            OneDayOnly is committed to adhering to all eight conditions in our
            handling of your personal information.
          </p>
        </Section>

        <Section id="responsible-party" number="2" title="Responsible Party">
          <p>
            Under POPIA, OneDayOnly (Pty) Ltd is the &ldquo;responsible
            party&rdquo; for the processing of your personal information. This
            means we determine the purpose and means of processing your data.
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
          </div>
          <p>
            Our Information Officer is responsible for ensuring compliance with
            POPIA and for handling all requests related to personal information.
          </p>
        </Section>

        <Section id="purpose-of-processing" number="3" title="Purpose of Processing">
          <p>
            We process your personal information for specific, explicitly
            defined, and legitimate purposes. These include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Order processing:</strong> To process, fulfil, and deliver
              your purchases
            </li>
            <li>
              <strong>Account management:</strong> To create and manage your
              OneDayOnly account
            </li>
            <li>
              <strong>Customer communication:</strong> To respond to your
              enquiries and provide customer support
            </li>
            <li>
              <strong>Marketing:</strong> To send you deal alerts and promotional
              content (only with your explicit consent)
            </li>
            <li>
              <strong>Legal compliance:</strong> To comply with applicable laws,
              regulations, and legal processes
            </li>
            <li>
              <strong>Fraud prevention:</strong> To detect, prevent, and
              investigate fraudulent transactions
            </li>
            <li>
              <strong>Website improvement:</strong> To analyse usage patterns and
              improve our platform
            </li>
          </ul>
          <p>
            We will not process your personal information for purposes
            incompatible with those listed above without your consent, unless
            permitted by law.
          </p>
        </Section>

        <Section id="lawful-grounds" number="4" title="Lawful Grounds for Processing">
          <p>
            Under POPIA, we must have a lawful basis for processing your
            personal information. We rely on the following grounds:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Consent:</strong> You have given us explicit consent to
              process your information (e.g., subscribing to our newsletter)
            </li>
            <li>
              <strong>Contract:</strong> Processing is necessary to fulfil a
              contract with you (e.g., processing your order)
            </li>
            <li>
              <strong>Legal obligation:</strong> Processing is required to comply
              with the law (e.g., tax records for SARS)
            </li>
            <li>
              <strong>Legitimate interest:</strong> Processing is necessary for
              our legitimate business interests, provided your rights are not
              overridden (e.g., fraud prevention, website security)
            </li>
          </ul>
        </Section>

        <Section id="your-rights" number="5" title="Your Rights as a Data Subject">
          <p>
            POPIA grants you the following rights regarding your personal
            information:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Right to be notified:</strong> You have the right to be
              informed that your personal information is being collected and the
              purpose for which it is being processed
            </li>
            <li>
              <strong>Right of access:</strong> You may request confirmation of
              whether we hold personal information about you and request access
              to that information
            </li>
            <li>
              <strong>Right to correction:</strong> You may request that we
              correct or delete personal information that is inaccurate,
              irrelevant, excessive, out of date, incomplete, or misleading
            </li>
            <li>
              <strong>Right to deletion:</strong> You may request the destruction
              or deletion of your personal information, subject to legal
              retention requirements
            </li>
            <li>
              <strong>Right to object:</strong> You may object to the processing
              of your personal information, including for direct marketing
              purposes
            </li>
            <li>
              <strong>Right not to be subject to automated decisions:</strong>{" "}
              You have the right not to be subject to a decision based solely on
              automated processing that significantly affects you
            </li>
            <li>
              <strong>Right to lodge a complaint:</strong> You may submit a
              complaint to the Information Regulator if you believe your rights
              have been infringed
            </li>
          </ul>
        </Section>

        <Section id="exercising-rights" number="6" title="How to Exercise Your Rights">
          <p>
            To exercise any of your rights under POPIA, you may contact our
            Information Officer:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:privacy@onedayonly.co.za" className="text-brand-red hover:underline font-medium">
                privacy@onedayonly.co.za
              </a>
            </li>
            <li>
              <strong>Phone:</strong> 021 555 1234
            </li>
            <li>
              <strong>Post:</strong> OneDayOnly (Pty) Ltd, Information Officer,
              Cape Town, South Africa
            </li>
          </ul>
          <p>
            When submitting a request, please provide sufficient information to
            verify your identity and specify which right you wish to exercise.
            We will respond to your request within 30 days, as required by
            POPIA.
          </p>
          <p>
            There is no fee for submitting a request unless the request is
            manifestly unfounded or excessive, in which case a reasonable fee
            may be charged.
          </p>
        </Section>

        <Section id="data-security" number="7" title="Security Safeguards">
          <p>
            In accordance with POPIA&apos;s security safeguard requirements, we
            implement appropriate technical and organisational measures to
            protect your personal information against unauthorised access, loss,
            destruction, or damage. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>SSL/TLS encryption for all data transmitted to and from our website</li>
            <li>PCI-DSS compliant payment processing</li>
            <li>Regular security assessments and penetration testing</li>
            <li>Strict access controls and role-based permissions for staff</li>
            <li>Secure data storage with encryption at rest</li>
            <li>Employee training on data protection and information security</li>
            <li>Incident response procedures for data breaches</li>
          </ul>
          <p>
            In the event of a data breach that poses a risk to your rights, we
            will notify the Information Regulator and affected data subjects as
            soon as reasonably possible, as required by Section 22 of POPIA.
          </p>
        </Section>

        <Section id="information-regulator" number="8" title="Information Regulator">
          <p>
            The Information Regulator is the independent body established under
            POPIA to monitor and enforce compliance with data protection
            legislation in South Africa. If you are not satisfied with how we
            have handled your personal information or a request you have made,
            you have the right to lodge a complaint with the Information
            Regulator.
          </p>
          <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4 mt-2">
            <p className="font-medium text-gray-900 dark:text-white">Information Regulator (South Africa)</p>
            <p className="mt-2">
              Website:{" "}
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline"
              >
                inforegulator.org.za
              </a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:complaints.IR@justice.gov.za" className="text-brand-red hover:underline">
                complaints.IR@justice.gov.za
              </a>
            </p>
            <p>Phone: 012 406 4818</p>
          </div>
          <div className="mt-4 rounded-lg bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              For more information about how we handle your personal information,
              please refer to our{" "}
              <a
                href="/info/privacy"
                className="text-brand-red hover:underline font-medium"
              >
                Privacy Policy
              </a>{" "}
              or contact us at{" "}
              <a
                href="mailto:privacy@onedayonly.co.za"
                className="text-brand-red hover:underline font-medium"
              >
                privacy@onedayonly.co.za
              </a>
              .
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
