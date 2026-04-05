import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Emergency = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <img 
            src="https://pbs.twimg.com/media/GKiGsyybIAAM4Su?format=jpg&name=medium" 
            alt="Emergency medical services and first aid" 
            className="w-full h-48 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-6">Emergency Information</h1>
          
          <p className="text-foreground mb-4">
            In case of an emergency in South Korea, knowing the right numbers to call and procedures 
            to follow can make a significant difference. Save these numbers in your phone and 
            familiarize yourself with the information below.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Emergency Phone Numbers</h2>
          <ul className="text-foreground mb-4 space-y-2">
            <li><strong>112</strong> — Police (available 24/7, some English support)</li>
            <li><strong>119</strong> — Fire and Ambulance (medical emergencies)</li>
            <li><strong>1339</strong> — Medical Emergency Counseling (English available)</li>
            <li><strong>1345</strong> — Immigration Contact Center (visa and ARC issues)</li>
            <li><strong>120</strong> — Dasan Call Center (general government inquiries)</li>
            <li><strong>1588-0082</strong> — Korea Tourism Helpline (tourist assistance)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">What to Do in a Medical Emergency</h2>
          <ol className="list-decimal list-inside text-foreground mb-4 space-y-2">
            <li>Call 119 for an ambulance</li>
            <li>State your location clearly (address or nearby landmarks)</li>
            <li>Describe the nature of the emergency</li>
            <li>Stay on the line until help arrives</li>
            <li>If possible, have someone meet the ambulance at the entrance</li>
          </ol>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Hospitals with English Service</h2>
          <p className="text-foreground mb-4">
            Major hospitals in Seoul and other cities often have international clinics with 
            English-speaking staff. Examples include Severance Hospital, Samsung Medical Center, 
            and Asan Medical Center. Your university health center can also provide referrals.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Natural Disasters</h2>
          <p className="text-foreground mb-4">
            South Korea experiences typhoons (summer/fall) and occasional earthquakes. When a 
            disaster warning is issued:
          </p>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Follow instructions from emergency broadcasts</li>
            <li>Stay indoors and away from windows during typhoons</li>
            <li>In an earthquake, take cover under sturdy furniture</li>
            <li>Know the location of your building's emergency shelter</li>
            <li>Keep an emergency kit with water, food, and first aid supplies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Crime and Safety</h2>
          <p className="text-foreground mb-4">
            South Korea is generally very safe, but petty crime can occur. If you are a victim 
            of crime, call 112 immediately. You can also visit the nearest police station to 
            file a report. Keep copies of important documents (passport, ARC) in a safe place.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Embassy Contact</h2>
          <p className="text-foreground mb-4">
            In serious emergencies, contact your country's embassy or consulate in Seoul. They 
            can assist with lost passports, legal issues, and emergency evacuations. Keep their 
            contact information saved in your phone.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">University Resources</h2>
          <p className="text-foreground mb-4">
            Your university likely has a campus security office (available 24/7) and an 
            international student office that can provide assistance. Save these numbers in 
            your phone and don't hesitate to reach out if you need help.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Campus Helper Korea. For informational purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default Emergency;
