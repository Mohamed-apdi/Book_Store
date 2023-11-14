import Footer from "./Footer";
import Header from "./Header";

function Privacy() {
  return (
    <div>
      <Header/>
      <div className="bg-white p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">
          Privacy Policy
        </h2>
        <div className="text-gray-700 leading-loose">
          <p>
            At BookStore, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our services.
          </p>
          <p className="mt-4">
            <strong>Information We Collect</strong>
          </p>
          <ul className="list-disc ml-6">
            <li>BookStore, info@bookstore.com, and +252 61 000 0000.</li>
            <li>Payment information for purchases made on our platform.</li>
            <li>Usage data, such as your interactions with our website.</li>
          </ul>
          <p className="mt-4">
            <strong>How We Use Your Information</strong>
          </p>
          <p>
            We use the information we collect to provide and improve our
            services, personalize your experience, process transactions, and
            communicate with you. Your data is kept secure and is never shared
            with third parties without your consent.
          </p>
          <p className="mt-4">
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions or concerns regarding our Privacy Policy
            or the handling of your data, please do not hesitate to contact us
            at <a href="mailto:privacy@bookstore.com">privacy@bookstore.com</a>.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Privacy;
