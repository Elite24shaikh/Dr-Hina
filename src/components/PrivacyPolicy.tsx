import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem", lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        We respect your privacy. This Privacy Policy explains how we collect,
        use, and protect your information when you use our website or services.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect information you provide directly, such as your name,
        email address, and messages. We may also collect basic usage data to
        help us improve our services.
      </p>

      <h2>How We Use Information</h2>
      <p>
        We use your information to provide and maintain our services, respond
        to requests, improve the user experience, and communicate important
        updates.
      </p>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with
        trusted service providers when necessary to operate our services or
        when required by law.
      </p>

      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information, but no method
        of transmission or storage is completely secure.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may contact us to request access to, correction of, or deletion of
        your personal information, subject to applicable laws.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this policy, please contact us at
        <a href="mailto:privacy@example.com"> privacy@example.com</a>.
      </p>
    </main>
  );
};

export default PrivacyPolicy;