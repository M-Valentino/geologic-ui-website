import Head from "next/head";
import { iconNames } from "@/iconSRCs";
import { Blink, Button, Center, HR, Icon } from "geologic-ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Geologic UI - Privacy Policy</title>
        <meta name="description" content="Geologic UI's Privacy Policy" />
        <meta name="author" content="Mark Valentino" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Privacy Policy</h1>
        <h2>LAST UPDATED: Febuary 25th, 2024</h2>

        <p>
          This document outlines how my site gathers, stores, uses, and possibly
          shares your information when you use my services, including visiting
          my website at geologic-ui.vercel.app. By using my website, you agree
          to the terms laid out in this policy. If you have questions or
          concerns, reading this policy will provide insights into your privacy
          rights and options. If you disagree with my practices, kindly refrain
          from using my website. For inquiries, reach me at
          mark_valentino_jr@outlook.com.
        </p>

        <h2>INFORMATION COLLECTION</h2>

        <p>
          I gather personal information you willingly provide, including when
          interact with my website or contact me.
        </p>

        <p>
          When you access my services, certain data like your IP address and
          device characteristics are collected automatically for security,
          analytics, and reporting purposes. I employ cookies and similar tech
          for data collection.
        </p>

        <h2>INFORMATION PROCESSING</h2>

        <p>
          I process my data to enhance and manage my services, communicate with
          you, prevent fraud, and comply with legal requirements. I may also
          process your data with your consent or for other specified purposes.
        </p>

        <h2>SHARING INFORMATION</h2>

        <p>
          I may share information with third-party vendors, service providers,
          and agents who support my operations. Specific third parties include:
          Vercel (for cloud computing and hosting services) and Microsoft
          Clarity (for performance and user interaction analytics).
          Additionally, I might share your data as required by law.
        </p>

        <h2>COOKIES AND TRACKING</h2>

        <p>
          I employ cookies and tracking technologies to collect and store data.
          If you disable the use of cookies on your browser, some services on
          this website may not function.
        </p>

        <h2>DATA RETENTION</h2>

        <p>
          I store my data only as long as needed to fulfill the purposes
          mentioned in this policy, unless extended by law.
        </p>

        <h2>MINORS' DATA</h2>

        <p>
          I do not knowingly collect data from individuals under 18 years of
          age. If such data is inadvertently collected, I take measures to
          remove it. By using this site, you represent that you are at least 18
          years of age or older and have permission from a parent or guardian to
          use this site.
        </p>

        <h2>PRIVACY RIGHTS DO-NOT-TRACK FEATURES</h2>

        <p>
          While I don't respond to Do-Not-Track browser signals, I might keep
          you informed if I adopt such practices in the future.
        </p>

        <h2>CALIFORNIA RESIDENTS' RIGHTS</h2>

        <p>
          California residents can inquire about personal information disclosure
          and request removal of certain data.
        </p>

        <h2>UPDATES TO POLICY</h2>

        <p>
          I may update this policy in response to legal changes. Check back
          regularly for updates.
        </p>

        <h2>DATA ACCESS REQUEST</h2>

        <p>
          Depending on your location, you can request access to, modification
          of, or deletion of your personal information by submitting a data
          subject access request.
        </p>

        <h2>MICROSOFT CLARITY</h2>

        <p>
          This website partners with Microsoft Clarity to capture how you use
          and interact with this website through behavioral metrics, heatmaps,
          and session replay to improve the user experience of this site.
          Website usage data is captured using first and third-party cookies and
          other tracking technologies to determine the popularity of web pages
          and online activity. Additionally, this site uses this information for
          site optimization, and fraud/security purposes. For more information
          about how Microsoft collects and uses your data, visit the{" "}
          <a href="https://privacy.microsoft.com/en-US/privacystatement">
            Microsoft Privacy Statement
          </a>
          .
        </p>
      </main>
    </>
  );
}
