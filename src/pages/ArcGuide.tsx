const ArcGuide = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img
        src="/banners/arc.webp"
        alt="ARC and documents"
        className="w-full h-60 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-black mb-4">
          Alien Registration Card (ARC) Guide
        </h1>

        <p className="text-gray-700 mb-8 leading-relaxed">
          The Alien Registration Card (외국인등록증) is a mandatory ID for all foreigners staying in Korea for more than 90 days. It acts as your official identification and is required for banking, phone plans, housing contracts, and most daily services.
        </p>

        {/* SECTION */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-3">
            What is an ARC?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The ARC contains your photo, visa type, address, and a unique registration number. It functions like a national ID for foreigners and is essential for almost every administrative and financial activity in Korea.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-3">
            When to Apply
          </h2>
          <p className="text-gray-700 leading-relaxed">
            You must apply within 90 days of entering Korea. Most students apply within the first 2–4 weeks after arrival to avoid delays in opening bank accounts or getting a SIM card.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-3">
            Required Documents
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Passport (original)</li>
            <li>Completed application form</li>
            <li>One passport-sized photo (3.5cm × 4.5cm)</li>
            <li>Certificate of enrollment</li>
            <li>Proof of address</li>
            <li>Application fee: ₩30,000</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-3">
            Application Process
          </h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>Book appointment via HiKorea</li>
            <li>Prepare all documents</li>
            <li>Visit immigration office and submit</li>
            <li>Fingerprint registration</li>
            <li>Receive ARC (2–4 weeks)</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-3">
            Important Rules
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Apply within 90 days</li>
            <li>Update address within 14 days</li>
            <li>Carry ARC when required</li>
            <li>Report loss immediately</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            Tips
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Book early (slots fill fast)</li>
            <li>Arrive early</li>
            <li>Bring Korean-speaking friend if needed</li>
            <li>Double-check address</li>
          </ul>
        </section>
      </div>

    </div>
  );
};

export default ArcGuide;