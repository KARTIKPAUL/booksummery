import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 px-6 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Privacy Policy</h2>
        <p className="text-lg text-gray-600 mt-3">
          Your privacy is important to us. This policy explains how we collect, use, and protect your data.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {/* 1. Information We Collect */}
        <section>
          <h3 className="text-2xl font-semibold">1. Information We Collect</h3>
          <p className="text-md text-gray-700 mt-2">
            We collect the following types of information when you use our website:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li><strong>Personal Information:</strong> Name, email address, and any details you provide when signing up.</li>
            <li><strong>Usage Data:</strong> Pages you visit, time spent, and interactions with the platform.</li>
            <li><strong>Cookies:</strong> To enhance your experience and improve website functionality.</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section>
          <h3 className="text-2xl font-semibold">2. How We Use Your Information</h3>
          <p className="text-md text-gray-700 mt-2">
            We use the collected data for:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Providing personalized book recommendations.</li>
            <li>Improving website performance and user experience.</li>
            <li>Sending newsletters or updates (only if you subscribe).</li>
            <li>Ensuring website security and preventing fraudulent activities.</li>
          </ul>
        </section>

        {/* 3. Data Protection & Security */}
        <section>
          <h3 className="text-2xl font-semibold">3. Data Protection & Security</h3>
          <p className="text-md text-gray-700 mt-2">
            We take reasonable precautions to protect your personal data using encryption, secure servers, and industry-standard security measures.
          </p>
        </section>

        {/* 4. Third-Party Services */}
        <section>
          <h3 className="text-2xl font-semibold">4. Third-Party Services</h3>
          <p className="text-md text-gray-700 mt-2">
            We may use third-party services like Google Analytics to track website performance, but we do not sell your personal data to any third parties.
          </p>
        </section>

        {/* 5. Your Rights & Choices */}
        <section>
          <h3 className="text-2xl font-semibold">5. Your Rights & Choices</h3>
          <p className="text-md text-gray-700 mt-2">
            You have the right to:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of marketing emails anytime.</li>
            <li>Disable cookies through your browser settings.</li>
          </ul>
        </section>

        {/* 6. Changes to This Policy */}
        <section>
          <h3 className="text-2xl font-semibold">6. Changes to This Policy</h3>
          <p className="text-md text-gray-700 mt-2">
            We may update this Privacy Policy periodically. If changes are significant, we will notify you via email or a notice on our website.
          </p>
        </section>

        {/* 7. Contact Us */}
        <section>
          <h3 className="text-2xl font-semibold">7. Contact Us</h3>
          <p className="text-md text-gray-700 mt-2">
            If you have any questions regarding this Privacy Policy, please contact us at:  
            <span className="font-semibold"> support@yourbooksummary.com</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
