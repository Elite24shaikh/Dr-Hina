function App() {
  const sections = [
    "Information We Collect",
    "How We Use Your Information",
    "Information Sharing and Disclosure",
    "Data Security",
    "Data Retention",
    "Your Choices",
    "Changes to This Privacy Policy",
    "Contact Us",
    "Links to Other Websites",
    "Children's Privacy",
    "International Users",
    "Acceptance of This Policy",
  ];

  return (
    <main className="privacy-page">
      <header className="privacy-header">
        <a className="privacy-brand" href="/" aria-label="Medimorphic home">
          <span className="privacy-brand-mark">M</span>
          <span>Medimorphic</span>
        </a>
        <a className="privacy-home-link" href="/">Back to website <span aria-hidden="true">↗</span></a>
      </header>

      <div className="privacy-layout">
        <aside className="privacy-aside" aria-label="Policy sections">
          <span className="privacy-eyebrow">Legal</span>
          <nav>
            {sections.map((section, index) => (
              <a key={section} href={`#section-${String(index + 1)}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section}
              </a>
            ))}
          </nav>
        </aside>

        <article className="privacy-container">
          <div className="privacy-intro">
            <span className="privacy-eyebrow">Medimorphic Clinic</span>
            <h1>Privacy<br /><em>Policy</em></h1>
            <p className="privacy-lead">Your trust matters to us. This policy explains how we collect, use, and protect your information when you use our digital health services.</p>
            <p className="privacy-date"><strong>Effective date</strong> 30 July 2024</p>
          </div>

          <div className="privacy-content">
        <p><strong>Medimorphic</strong> is a system-driven digital health platform dedicated to transforming lives through personalised nutrition, smart tracking, and expert guidance by Dr. Hina Ansari.</p>

        <h2 id="section-1">1. Information We Collect</h2>
        <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
        <ul>
          <li><strong>Personal Information:</strong> 
          <li>Email address</li>
          <li>First name and last name</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          </li>
          {/* <li><strong>Educational Information:</strong> Information about your academic background, skills, and job preferences.</li> */}
          <li><strong>Usage Data:</strong> Information about how you interact with the app, including log data and device information.</li>
        </ul>

        <h2 id="section-2">2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and improve our services.</li>
          <li>Personalize your experience.</li>
          <li>Communicate with you about your account and our services.</li>
          <li>Respond to your inquiries and support requests.</li>
          <li>Match you with job opportunities and educational resources.</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 id="section-3">3. Information Sharing and Disclosure</h2>
        <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
        <ul>
          <li><strong>Service Providers:</strong> Third-party vendors who help us provide our services, such as cloud storage and analytics providers.</li>
          {/* <li><strong>Employers and Educational Institutions:</strong> To match you with job opportunities and educational resources.</li> */}
          <li><strong>Legal Requirements:</strong> When required by law or in response to a legal process.</li>
          {/* <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li> */}
        </ul>

        <h2 id="section-4">4. Data Security</h2>
        <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet or email transmission is ever fully secure or error-free.</p>

        <h2 id="section-5">5. Data Retention</h2>
        <p>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. When we no longer need your information, we will delete it or anonymize it.</p>

        <h2 id="section-6">6. Your Choices</h2>
        <p>You may access, update, or delete your personal information by contacting us at the contact information provided below.</p>

        <h2 id="section-7">7. Changes to This Privacy Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our app and website.</p>

        <h2 id="section-8">8. Contact Us</h2>
        <p className="privacy-contact">
          If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
          <strong>Medimorphic</strong><br />
          Email: medimorphicclinic@gmail.com<br />
        </p>

        <h2 id="section-9">9. Links to Other Websites</h2>
        <p>Our app may contain links to other websites. This Privacy Policy does not apply to those websites, and we are not responsible for their content or privacy practices.</p>

        <h2 id="section-10">10. Children&apos;s Privacy</h2>
        <p>Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13.</p>

        <h2 id="section-11">11. International Users</h2>
        <p>If you are accessing our app from outside the country where we are based, your information may be transferred to, stored, and processed in that country.</p>

        <h2 id="section-12">12. Acceptance of This Policy</h2>
        <p>By using our app, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our app.</p>

        <h2>Compliance Checklist</h2>
        <p>To ensure compliance with Google Play&apos;s User Data policy, this privacy policy:</p>
        <ul>
          <li>Is linked on the app&apos;s store listing page in Play Console and within the app itself.</li>
          <li>References the entity named in the app&apos;s Google Play listing (Medimorphic Clinic).</li>
          <li>Includes a clear labeling as a privacy policy.</li>
          <li>Provides a privacy point of contact or a mechanism to submit inquiries.</li>
          <li>Is readable in a standard browser without any plug-ins or special handlers (no PDFs).</li>
          <li>Is available on an active, publicly accessible, and non-geofenced URL.</li>
          <li>Is non-editable.</li>
          <li>Comprehensively discloses how the app accesses, collects, uses, and shares user data, including:
            <ul>
              <li>The types of personal and sensitive user data accessed, collected, used, and shared.</li>
              <li>Parties with which any personal or sensitive user data is shared.</li>
              <li>Secure data handling procedures for personal and sensitive user data.</li>
              <li>Developer&apos;s data retention and deletion policy.</li>
            </ul>
          </li>
        </ul>
          </div>
      </article>
      </div>

      <footer className="privacy-footer">
        <span>&copy; 2024 Medimorphic Clinic</span>
        <a href="mailto:medimorphicclinic@gmail.com">medimorphicclinic@gmail.com</a>
      </footer>
    </main>
  );
}

export default App;
