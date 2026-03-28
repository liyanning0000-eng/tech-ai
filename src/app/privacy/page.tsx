import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Nova Tech AI Limited Privacy Policy. Learn how we collect, use, and protect your personal information across our products and services.",
};

const LAST_UPDATED = "March 25, 2026";
const EFFECTIVE_DATE = "March 25, 2026";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#1a1a1a]">
          <p className="text-xs text-[#444] uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-[#333]">
            <span>Last Updated: {LAST_UPDATED}</span>
            <span>·</span>
            <span>Effective Date: {EFFECTIVE_DATE}</span>
          </div>
        </div>

        <div className="prose max-w-none space-y-10">

          <section>
            <p>
              This Privacy Policy describes how Nova Tech AI Limited (&quot;Nova Tech AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated under the laws of the Hong Kong Special Administrative Region of the People&apos;s Republic of China, collects, uses, discloses, and safeguards your information when you use our web applications, websites, and related services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              We are committed to protecting your privacy and handling your personal data in an open and transparent manner. Please read this policy carefully. By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
            </p>
          </section>

          <section>
            <h2>1. Company Information</h2>
            <p>Nova Tech AI Limited is the data controller responsible for your personal data.</p>
            <div className="p-5 bg-[#080808] border border-[#1a1a1a] rounded-xl not-prose">
              <div className="space-y-2 text-sm text-[#555]">
                <p><span className="text-[#888]">Company:</span> Nova Tech AI Limited</p>
                <p><span className="text-[#888]">Jurisdiction:</span> Hong Kong Special Administrative Region, China</p>
                <p><span className="text-[#888]">Email:</span> <a href="mailto:win060787@gmail.com" className="text-white hover:opacity-70 transition-opacity">win060787@gmail.com</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide Directly</h3>
            <ul>
              <li><strong>Contact Information:</strong> When you contact us via email or our feedback form, we collect your name, email address, and the content of your message.</li>
              <li><strong>User Feedback:</strong> Any feedback, suggestions, or reports you voluntarily submit to us.</li>
            </ul>
            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li><strong>Device Information:</strong> Operating system type and version, device model, and browser information.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our applications, including features accessed, actions taken, and session duration.</li>
              <li><strong>Log Data:</strong> IP address, browser type, referring URLs, pages viewed, and access timestamps.</li>
              <li><strong>Crash Reports:</strong> Anonymized diagnostic data related to application errors.</li>
            </ul>
            <h3>2.3 Photo Data - Special Handling</h3>
            <p>
              Our Services (including Restore.xyz and FuneratPhoto) involve the processing of photographs submitted by users. We treat photo data with the highest level of care:
            </p>
            <ul>
              <li>Photos are transmitted using TLS 1.3 encryption.</li>
              <li>Photos are processed in isolated compute environments.</li>
              <li>Photos are <strong>permanently and automatically deleted</strong> from our systems immediately upon delivery of the processed result.</li>
              <li>We do not store, retain, index, analyze, or use photo submissions for any purpose other than immediate processing.</li>
              <li>We do not use photo submissions to train machine learning models without explicit, separate consent.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <ul>
              <li><strong>Service Delivery:</strong> To provide, operate, and maintain our Services.</li>
              <li><strong>Service Improvement:</strong> To understand usage patterns and improve our applications.</li>
              <li><strong>Customer Support:</strong> To respond to your inquiries and support requests.</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud and security vulnerabilities.</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations.</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to any third party.</p>
          </section>

          <section>
            <h2>4. Legal Basis for Processing (GDPR)</h2>
            <ul>
              <li><strong>Contractual Necessity:</strong> Processing required to provide the Services you requested.</li>
              <li><strong>Legitimate Interests:</strong> Fraud prevention, security, and service improvement.</li>
              <li><strong>Legal Obligation:</strong> Processing required by applicable law.</li>
              <li><strong>Consent:</strong> Where we have obtained your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2>5. Data Sharing and Disclosure</h2>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in operating our Services, bound by confidentiality obligations.</li>
              <li><strong>Legal Requirements:</strong> When required by applicable law or court order.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger or acquisition, subject to confidentiality obligations.</li>
              <li><strong>Safety:</strong> Where necessary to protect the rights, property, or safety of users or the public.</li>
            </ul>
          </section>

          <section>
            <h2>6. Data Retention</h2>
            <ul>
              <li><strong>Photo Data:</strong> Deleted immediately and automatically upon delivery of processed results.</li>
              <li><strong>Contact and Support Data:</strong> Retained for up to 12 months from the date of last interaction.</li>
              <li><strong>Usage and Log Data:</strong> Retained for up to 90 days in identifiable form.</li>
            </ul>
          </section>

          <section>
            <h2>7. International Data Transfers</h2>
            <p>
              Nova Tech AI is based in Hong Kong SAR. Where data is transferred outside of the EEA or other jurisdictions with data transfer restrictions, we implement appropriate safeguards including Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe your child has submitted personal information to us, please contact us at win060787@gmail.com.
            </p>
          </section>

          <section>
            <h2>9. Your Privacy Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data.</li>
              <li><strong>Restriction:</strong> Request that we restrict processing of your data.</li>
              <li><strong>Portability:</strong> Request transfer of your data in a machine-readable format.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent at any time where processing is based on consent.</li>
            </ul>
            <p>To exercise these rights, please contact us at win060787@gmail.com. We will respond within 30 days.</p>
          </section>

          <section>
            <h2>10. Security</h2>
            <p>We implement industry-standard security measures including:</p>
            <ul>
              <li>TLS 1.3 encryption for all data in transit</li>
              <li>Encrypted storage for data at rest</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security assessments</li>
              <li>Automatic deletion policies for sensitive data</li>
            </ul>
          </section>

          <section>
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &quot;Last Updated&quot; date. Your continued use of our Services following notice of changes constitutes your acceptance of the revised Privacy Policy.
            </p>
          </section>

          <section>
            <h2>12. Governing Law</h2>
            <p>
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region of the People&apos;s Republic of China.
            </p>
          </section>

          <section>
            <h2>13. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="p-5 bg-[#080808] border border-[#1a1a1a] rounded-xl not-prose">
              <div className="space-y-2 text-sm text-[#555]">
                <p><span className="text-[#888]">Data Controller:</span> Nova Tech AI Limited</p>
                <p><span className="text-[#888]">Email:</span> <a href="mailto:win060787@gmail.com" className="text-white hover:opacity-70 transition-opacity">win060787@gmail.com</a></p>
                <p><span className="text-[#888]">Address:</span> Hong Kong Special Administrative Region, China</p>
                <p className="text-[#333] text-xs pt-2">Response time: Within 30 days</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
