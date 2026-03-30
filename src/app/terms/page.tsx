import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Nova Tech AI Limited Terms of Service. Read the terms and conditions governing your use of our products and services.",
};

const LAST_UPDATED = "March 25, 2026";
const EFFECTIVE_DATE = "March 25, 2026";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 pb-8 border-b border-[#1f1f1f]">
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl font-semibold text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-[#444]">
            <span>Last Updated: {LAST_UPDATED}</span>
            <span>·</span>
            <span>Effective Date: {EFFECTIVE_DATE}</span>
          </div>
        </div>

        <div className="prose max-w-none space-y-10">

          <section>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Nova Tech AI Limited (&quot;Nova Tech AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a company incorporated in the Hong Kong Special Administrative Region, governing your access to and use of our web applications, websites, and related services (collectively, the &quot;Services&quot;).
            </p>
            <p>
              By downloading, installing, accessing, or using any of our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated herein by reference. If you do not agree to these Terms, you must not use our Services.
            </p>
          </section>

          <section>
            <h2>1. Eligibility</h2>
            <p>
              You must be at least 13 years of age (or the applicable age of digital consent in your jurisdiction) to use our Services. By using our Services, you represent and warrant that:
            </p>
            <ul>
              <li>You meet the minimum age requirement described above;</li>
              <li>You have the legal capacity to enter into a binding agreement;</li>
              <li>Your use of the Services does not violate any applicable law or regulation; and</li>
              <li>If you are using the Services on behalf of an organization, you have the authority to bind that organization to these Terms.</li>
            </ul>
          </section>

          <section>
            <h2>2. Description of Services</h2>
            <p>
              Nova Tech AI provides AI-powered web applications, including but not limited to:
            </p>
            <ul>
              <li><strong>RestorePic:</strong> An AI photo restoration application that repairs, enhances, and upscales damaged or degraded photographs.</li>
              <li><strong>FuneralPhoto:</strong> An AI-powered memorial photo enhancement application designed to help families preserve and honor photographs of loved ones.</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of Services.
            </p>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <p>
              Certain features of our Services may require you to create an account. You agree to:
            </p>
            <ul>
              <li>Provide accurate, current, and complete information during registration;</li>
              <li>Maintain and promptly update your account information;</li>
              <li>Maintain the security and confidentiality of your login credentials;</li>
              <li>Accept responsibility for all activities that occur under your account; and</li>
              <li>Immediately notify us of any unauthorized use of your account.</li>
            </ul>
            <p>
              We reserve the right to terminate or suspend your account at our sole discretion, including for violation of these Terms.
            </p>
          </section>

          <section>
            <h2>4. User Content and Licenses</h2>
            <h3>4.1 Your Content</h3>
            <p>
              You retain all ownership rights in any photographs, images, or other content you submit to our Services (&quot;User Content&quot;). By submitting User Content, you grant Nova Tech AI a limited, non-exclusive, royalty-free license to process such content solely for the purpose of providing the requested Service to you.
            </p>
            <h3>4.2 Content Restrictions</h3>
            <p>You represent and warrant that any User Content you submit:</p>
            <ul>
              <li>Does not violate any applicable law or regulation;</li>
              <li>Does not infringe any third-party intellectual property, privacy, or publicity rights;</li>
              <li>Does not contain child sexual abuse material (CSAM) or any content that exploits or endangers minors;</li>
              <li>Is submitted with the consent of all identifiable individuals depicted, where required by applicable law.</li>
            </ul>
          </section>

          <section>
            <h2>5. Prohibited Uses</h2>
            <p>You agree not to use our Services to:</p>
            <ul>
              <li>Violate any applicable federal, state, local, or international law or regulation;</li>
              <li>Upload, transmit, or distribute malicious code, viruses, or harmful content;</li>
              <li>Engage in any activity that disrupts, damages, or impairs the performance of our Services;</li>
              <li>Attempt to gain unauthorized access to our systems or the accounts of other users;</li>
              <li>Use our Services for any illegal, fraudulent, or deceptive purpose;</li>
              <li>Reverse engineer, decompile, disassemble, or derive source code from our applications;</li>
              <li>Create deepfakes or non-consensual intimate imagery using our Services;</li>
              <li>Use our Services in any manner that violates the guidelines of Apple App Store or Google Play Store;</li>
              <li>Circumvent any access controls, technical limitations, or rate limits.</li>
            </ul>
          </section>

          <section>
            <h2>6. Intellectual Property</h2>
            <p>
              All intellectual property rights in our Services, including but not limited to software, algorithms, interfaces, logos, trademarks, and documentation, are owned by or licensed to Nova Tech AI. Nothing in these Terms grants you any right, title, or interest in our intellectual property other than the limited license to use our Services as described herein.
            </p>
            <p>
              &quot;Nova Tech AI,&quot; &quot;RestorePic,&quot; &quot;FuneralPhoto,&quot; and associated logos are trademarks of Nova Tech AI Limited. You may not use our trademarks without our prior written consent.
            </p>
          </section>

          <section>
            <h2>7. In-App Purchases and Subscriptions</h2>
            <p>
              Some features of our Services are available on a paid basis. By purchasing a subscription or making an in-app purchase:
            </p>
            <ul>
              <li>You authorize the applicable app store platform (Apple App Store or Google Play) to charge your payment method;</li>
              <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period;</li>
              <li>Refunds are subject to the refund policies of the applicable app store platform;</li>
              <li>Prices are subject to change upon reasonable notice.</li>
            </ul>
          </section>

          <section>
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE,&quot; WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OR ERROR-FREE SERVICE.
            </p>
            <p>
              We do not warrant that our Services will meet your specific requirements, that results obtained will be accurate or reliable, or that any errors will be corrected.
            </p>
          </section>

          <section>
            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL NOVA TECH AI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE OUR SERVICES.
            </p>
            <p>
              IN NO EVENT SHALL OUR AGGREGATE LIABILITY EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO US IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED UNITED STATES DOLLARS (USD $100).
            </p>
          </section>

          <section>
            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Nova Tech AI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to: (a) your violation of these Terms; (b) your User Content; (c) your use of the Services; or (d) your violation of any third-party rights.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our Services, with or without notice, for any reason, including violation of these Terms. Upon termination, your right to use the Services will immediately cease.
            </p>
            <p>
              Provisions of these Terms that by their nature should survive termination shall survive, including but not limited to Sections 6, 8, 9, 10, 12, and 13.
            </p>
          </section>

          <section>
            <h2>12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Hong Kong Special Administrative Region of the People&apos;s Republic of China, without regard to its conflict of law provisions.
            </p>
            <p>
              Any dispute arising out of or in connection with these Terms, including any question regarding its existence, validity, or termination, shall be submitted to the exclusive jurisdiction of the courts of Hong Kong SAR.
            </p>
          </section>

          <section>
            <h2>13. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the &quot;Last Updated&quot; date and, where appropriate, by providing in-app notification. Your continued use of our Services following notice of changes constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>14. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2>15. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Nova Tech AI regarding your use of our Services and supersede all prior agreements, representations, and understandings.
            </p>
          </section>

          <section>
            <h2>16. Product Domains</h2>
            <p>These Terms apply to services delivered on the following domains:</p>
            <ul>
              <li><a href="https://restorepic.xyz" target="_blank" rel="noopener noreferrer">https://restorepic.xyz</a></li>
              <li><a href="https://funeralphoto.com" target="_blank" rel="noopener noreferrer">https://funeralphoto.com</a></li>
            </ul>
          </section>

          <section>
            <h2>17. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="p-5 bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg not-prose">
              <div className="space-y-2 text-sm text-[#666]">
                <p><span className="text-[#888]">Company:</span> Nova Tech AI Limited</p>
                <p><span className="text-[#888]">Email:</span> <a href="mailto:win060787@gmail.com" className="text-white hover:opacity-70 transition-opacity">win060787@gmail.com</a></p>
                <p><span className="text-[#888]">Jurisdiction:</span> Hong Kong Special Administrative Region, China</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
