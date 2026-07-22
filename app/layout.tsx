import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "TakeHomeTest.com — Premium Domain, Offers Invited",
  description:
    "TakeHomeTest.com — the category-defining domain for direct-to-consumer diagnostics. A single, exact-match name for the at-home testing market. Offers invited.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// StatCounter project ID + security code — replace with your own from
// statcounter.com after adding this site as a project there.
const STATCOUNTER_PROJECT_ID = 13337507;
const STATCOUNTER_SECURITY_CODE = "6f50ac65";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="statcounter-init" strategy="afterInteractive">
          {`
            var sc_project=${STATCOUNTER_PROJECT_ID};
            var sc_invisible=1;
            var sc_security="${STATCOUNTER_SECURITY_CODE}";
          `}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />
        <noscript>
          <div className="statcounter">
            <img
              className="statcounter"
              src={`https://c.statcounter.com/${STATCOUNTER_PROJECT_ID}/0/${STATCOUNTER_SECURITY_CODE}/1/`}
              alt="Web Analytics"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
