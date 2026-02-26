import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "OneDayOnly cookie policy. Learn how we use cookies and similar tracking technologies on our website.",
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

export default function CookiesPage() {
  const sections = [
    { id: "what-are-cookies", label: "What Are Cookies" },
    { id: "cookies-we-use", label: "Cookies We Use" },
    { id: "essential-cookies", label: "Essential Cookies" },
    { id: "analytics-cookies", label: "Analytics Cookies" },
    { id: "marketing-cookies", label: "Marketing Cookies" },
    { id: "managing-cookies", label: "Managing Your Cookies" },
    { id: "third-party-cookies", label: "Third-Party Cookies" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Cookie Policy" }]} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Cookie Policy
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Last updated: 1 February 2026
        </p>
      </div>

      {/* Introduction */}
      <div className="mb-8 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-surface p-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          OneDayOnly (Pty) Ltd (&ldquo;OneDayOnly&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) uses cookies and similar
          tracking technologies on our website at{" "}
          <strong>www.onedayonly.co.za</strong>. This Cookie Policy explains
          what cookies are, the types of cookies we use, and how you can manage
          your cookie preferences. This policy should be read together with our{" "}
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
        <Section id="what-are-cookies" number="1" title="What Are Cookies">
          <p>
            Cookies are small text files that are placed on your device (computer,
            smartphone, or tablet) when you visit a website. They are widely used
            to make websites work more efficiently, provide a better browsing
            experience, and supply information to the website owner.
          </p>
          <p>
            Cookies can be &ldquo;session cookies&rdquo; (which are deleted when
            you close your browser) or &ldquo;persistent cookies&rdquo; (which
            remain on your device for a set period or until you delete them).
          </p>
          <p>
            Cookies can be set by the website you are visiting
            (&ldquo;first-party cookies&rdquo;) or by third parties whose
            services the website uses (&ldquo;third-party cookies&rdquo;).
          </p>
        </Section>

        <Section id="cookies-we-use" number="2" title="Cookies We Use">
          <p>We use the following categories of cookies on our website:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Essential cookies</strong> &ndash; required for the website
              to function properly
            </li>
            <li>
              <strong>Analytics cookies</strong> &ndash; help us understand how
              visitors use our site
            </li>
            <li>
              <strong>Marketing cookies</strong> &ndash; used to deliver relevant
              advertisements
            </li>
            <li>
              <strong>Preference cookies</strong> &ndash; remember your settings
              and choices
            </li>
          </ul>
        </Section>

        <Section id="essential-cookies" number="3" title="Essential Cookies">
          <p>
            These cookies are strictly necessary for the website to function and
            cannot be disabled in our systems. They are usually set in response
            to actions you take, such as logging in, adding items to your cart,
            or filling in forms.
          </p>
          <p><strong>Examples include:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Session identification cookies</li>
            <li>Shopping cart cookies</li>
            <li>Authentication and security cookies</li>
            <li>Load-balancing cookies</li>
            <li>Cookie consent preference cookies</li>
          </ul>
          <p>
            You can set your browser to block these cookies, but some parts of
            the website may not function correctly without them.
          </p>
        </Section>

        <Section id="analytics-cookies" number="4" title="Analytics Cookies">
          <p>
            These cookies allow us to count visits, identify traffic sources, and
            understand how visitors navigate our website. This helps us improve
            the performance and user experience of our site. All information
            collected by these cookies is aggregated and anonymised.
          </p>
          <p><strong>Tools we use:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Google Analytics:</strong> Tracks page views, session
              duration, and user interactions. Data is anonymised and retained
              for 26 months.
            </li>
            <li>
              <strong>Hotjar:</strong> Records anonymised user behaviour
              (heatmaps, scroll depth) to help us optimise page layouts.
            </li>
          </ul>
        </Section>

        <Section id="marketing-cookies" number="5" title="Marketing Cookies">
          <p>
            These cookies are used to deliver advertisements that are relevant to
            you and your interests. They also help us measure the effectiveness
            of advertising campaigns.
          </p>
          <p><strong>Third-party marketing services:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Google Ads:</strong> Remarketing and conversion tracking
            </li>
            <li>
              <strong>Facebook Pixel:</strong> Conversion tracking and audience
              building for Facebook and Instagram advertisements
            </li>
            <li>
              <strong>TikTok Pixel:</strong> Conversion tracking for TikTok
              advertisement campaigns
            </li>
          </ul>
          <p>
            These cookies may track your browsing activity across different
            websites to build a profile of your interests and show you relevant
            advertisements on other sites.
          </p>
        </Section>

        <Section id="managing-cookies" number="6" title="Managing Your Cookies">
          <p>
            You have the right to decide whether to accept or reject cookies
            (other than essential cookies). You can manage your cookie
            preferences in the following ways:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Browser settings:</strong> Most browsers allow you to
              block or delete cookies through their settings menu. Refer to your
              browser&apos;s help documentation for instructions.
            </li>
            <li>
              <strong>Opt-out links:</strong> You can opt out of Google Analytics
              tracking by installing the{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline font-medium"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </li>
            <li>
              <strong>Ad industry opt-out:</strong> Visit{" "}
              <a
                href="https://www.youronlinechoices.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red hover:underline font-medium"
              >
                Your Online Choices
              </a>{" "}
              to manage advertising cookies from multiple providers.
            </li>
          </ul>
          <p>
            Please note that disabling certain cookies may affect the
            functionality of our website and limit your ability to use some
            features.
          </p>
        </Section>

        <Section id="third-party-cookies" number="7" title="Third-Party Cookies">
          <p>
            Some cookies on our website are set by third-party services that
            appear on our pages. We do not control the use of these cookies and
            cannot access them. The third-party service providers have their own
            privacy and cookie policies.
          </p>
          <p><strong>Third parties that may set cookies include:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Google (Analytics, Ads, reCAPTCHA)</li>
            <li>Facebook / Meta</li>
            <li>TikTok</li>
            <li>Payment processors (PayFast, Peach Payments)</li>
            <li>Customer support tools</li>
          </ul>
          <p>
            We encourage you to review the cookie policies of these third
            parties for more information about how they use cookies.
          </p>
        </Section>

        <Section id="contact" number="8" title="Contact Us">
          <p>
            If you have any questions about our use of cookies, please contact
            us:
          </p>
          <div className="rounded-lg bg-white dark:bg-dark-bg border border-gray-200 dark:border-dark-border p-4 mt-2">
            <p className="font-medium text-gray-900 dark:text-white">OneDayOnly (Pty) Ltd</p>
            <p className="mt-2">
              Email:{" "}
              <a href="mailto:privacy@onedayonly.co.za" className="text-brand-red hover:underline">
                privacy@onedayonly.co.za
              </a>
            </p>
            <p>Phone: 021 555 1234</p>
            <p className="mt-2">
              For more information about your privacy rights, see our{" "}
              <a
                href="/info/privacy"
                className="text-brand-red hover:underline font-medium"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/info/popia"
                className="text-brand-red hover:underline font-medium"
              >
                POPIA Compliance
              </a>{" "}
              pages.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
