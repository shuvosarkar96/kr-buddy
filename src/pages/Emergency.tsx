const Emergency = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img
        src="https://uploaded.kcampus.kr/shutterstock_2034258953_f62c08c482.jpg"
        alt="Emergency services"
        className="w-full h-60 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-black mb-4">
          Emergency Information
        </h1>

        <p className="text-gray-700 mb-10 leading-relaxed">
          In emergency situations, knowing what to do and who to call is critical. Save these numbers and understand the basic procedures before you actually need them.
        </p>
      </div>

      {/* EMERGENCY NUMBERS */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Emergency Numbers
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="border rounded-xl p-5">
            <h3 className="text-xl font-bold text-black">119</h3>
            <p className="text-sm text-gray-600 mt-2">
              Fire and Ambulance
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-xl font-bold text-black">112</h3>
            <p className="text-sm text-gray-600 mt-2">
              Police
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-xl font-bold text-black">1330</h3>
            <p className="text-sm text-gray-600 mt-2">
              Travel Hotline (multi-language)
            </p>
          </div>

          <div className="border rounded-xl p-5">
            <h3 className="text-xl font-bold text-black">1345</h3>
            <p className="text-sm text-gray-600 mt-2">
              Immigration Office
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-3xl">

        {/* MEDICAL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Medical Emergencies
          </h2>

          <h3 className="font-semibold mb-2">What to Do</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Call 119 immediately</li>
            <li>Clearly state your location (address or landmark)</li>
            <li>Explain the situation briefly</li>
            <li>Follow dispatcher instructions</li>
            <li>Prepare ARC and insurance info</li>
          </ul>

          <h3 className="font-semibold mb-2">Hospitals and Clinics</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Emergency rooms operate 24/7</li>
            <li>Major hospitals have English-speaking staff</li>
            <li>Pharmacies marked with green cross (약국)</li>
            <li>Always carry ARC and insurance card</li>
          </ul>
        </section>

        {/* DISASTERS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Natural Disasters
          </h2>

          <h3 className="font-semibold mb-2">Typhoons</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Common in summer. Stay indoors, avoid coastal areas, follow alerts.
          </p>

          <h3 className="font-semibold mb-2">Earthquakes</h3>
          <p className="text-gray-700 mb-3 leading-relaxed">
            Rare but possible. Drop, cover, and hold. Move away from buildings after shaking.
          </p>

          <h3 className="font-semibold mb-2">Heat Waves</h3>
          <p className="text-gray-700 leading-relaxed">
            Stay hydrated, avoid peak sun hours, use air-conditioned spaces.
          </p>
        </section>

        {/* CONTACTS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Important Contacts
          </h2>

          <h3 className="font-semibold mb-2">Embassy</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
            <li>Lost or stolen passport</li>
            <li>Legal issues</li>
            <li>Emergency assistance</li>
          </ul>

          <h3 className="font-semibold mb-2">University</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>International office</li>
            <li>Campus security</li>
            <li>Student health center</li>
          </ul>
        </section>

        {/* ALERTS */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Emergency Alerts
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Install the Korean emergency alert app (재난안전 앱) for real-time updates. All phones in Korea receive emergency alerts automatically, but having the app gives additional information in English.
          </p>
        </section>

      </div>

    </div>
  );
};

export default Emergency;