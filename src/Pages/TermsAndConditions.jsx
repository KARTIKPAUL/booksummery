import React from "react";

const TermsConditions = () => {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Terms & Conditions</h2>
        <p className="text-lg text-gray-600 mt-3">
          Please read these terms carefully before using our website.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {/* 1. Acceptance of Terms */}
        <section>
          <h3 className="text-2xl font-semibold">1. Acceptance of Terms</h3>
          <p className="text-md text-gray-700 mt-2">
            By accessing or using our website, you agree to comply with and be
            bound by these Terms & Conditions. If you do not agree, please do
            not use our services.
          </p>
        </section>

        {/* 2. Use of Services */}
        <section>
          <h3 className="text-2xl font-semibold">2. Use of Services</h3>
          <p className="text-md text-gray-700 mt-2">
            Our website provides book summaries, reviews, and related content
            for informational purposes only. You agree not to misuse any
            services or content available on the platform.
          </p>
        </section>

        {/* 3. User Accounts & Responsibilities */}
        <section>
          <h3 className="text-2xl font-semibold">
            3. User Accounts & Responsibilities
          </h3>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Users must provide accurate information when signing up.</li>
            <li>Accounts should not be shared or transferred.</li>
            <li>Users are responsible for maintaining account security.</li>
          </ul>
        </section>

        {/* 4. Intellectual Property */}
        <section>
          <h3 className="text-2xl font-semibold">4. Intellectual Property</h3>
          <p className="text-md text-gray-700 mt-2">
            All content, including text, graphics, logos, and summaries, are
            owned by our platform or used with permission. Unauthorized copying,
            distribution, or modification is prohibited.
          </p>
        </section>

        {/* 5. Content Disclaimer */}
        <section>
          <h3 className="text-2xl font-semibold">5. Content Disclaimer</h3>
          <p className="text-md text-gray-700 mt-2">
            The book summaries provided on our website are for educational
            purposes only. We do not claim ownership over original book content.
          </p>
        </section>

        {/* 6. Limitation of Liability */}
        <section>
          <h3 className="text-2xl font-semibold">6. Limitation of Liability</h3>
          <p className="text-md text-gray-700 mt-2">
            We are not responsible for any losses or damages resulting from the
            use of our website, including incorrect summaries or technical
            issues.
          </p>
        </section>

        {/* 7. Third-Party Links */}
        <section>
          <h3 className="text-2xl font-semibold">7. Third-Party Links</h3>
          <p className="text-md text-gray-700 mt-2">
            Our website may contain links to external sites. We are not
            responsible for the content, privacy policies, or practices of
            third-party websites.
          </p>
        </section>

        {/* 8. Termination of Use */}
        <section>
          <h3 className="text-2xl font-semibold">8. Termination of Use</h3>
          <p className="text-md text-gray-700 mt-2">
            We reserve the right to suspend or terminate access to our services
            at any time if a user violates these terms.
          </p>
        </section>

        {/* 9. Changes to Terms */}
        <section>
          <h3 className="text-2xl font-semibold">9. Changes to Terms</h3>
          <p className="text-md text-gray-700 mt-2">
            We may update these Terms & Conditions from time to time. Users will
            be notified of significant changes.
          </p>
        </section>

        {/* 10. Contact Us */}
        <section>
          <h3 className="text-2xl font-semibold">10. Contact Us</h3>
          <p className="text-md text-gray-700 mt-2">
            If you have any questions about these Terms & Conditions, please
            contact us at:{" "}
            <span className="font-semibold">support@yourbooksummary.com</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
