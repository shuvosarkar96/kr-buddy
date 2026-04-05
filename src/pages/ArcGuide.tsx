import Header from "@/components/Header";
import { Link } from "react-router-dom";

const ArcGuide = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <img 
            src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Official documents and passport for registration" 
            className="w-full h-48 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-6">Alien Registration Card (ARC) Guide</h1>
          
          <p className="text-foreground mb-4">
            The Alien Registration Card (ARC) is a mandatory identification document for all foreign 
            nationals staying in South Korea for more than 90 days. As an international student, you 
            must apply for your ARC within 90 days of entering the country.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">What is the ARC?</h2>
          <p className="text-foreground mb-4">
            The ARC is your official ID in Korea. It contains your photo, personal information, visa 
            type, and a unique 13-digit registration number. You'll need this card for opening bank 
            accounts, getting a phone plan, signing rental contracts, and many other daily activities.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Required Documents</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Passport (original and copy of the photo page and visa page)</li>
            <li>Application form (available at the immigration office)</li>
            <li>One passport-sized photo (3.5cm x 4.5cm, white background)</li>
            <li>Certificate of enrollment from your university</li>
            <li>Proof of address (dormitory confirmation or lease contract)</li>
            <li>Application fee: 30,000 KRW</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">How to Apply</h2>
          <ol className="list-decimal list-inside text-foreground mb-4 space-y-2">
            <li>Book an appointment through the HiKorea website (www.hikorea.go.kr)</li>
            <li>Visit your local immigration office on your appointment date</li>
            <li>Submit your documents and pay the fee</li>
            <li>Provide your fingerprints at the office</li>
            <li>Receive your ARC by mail within 2-3 weeks</li>
          </ol>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Important Notes</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Apply within 90 days of arrival to avoid fines</li>
            <li>Always carry your ARC or a copy with you</li>
            <li>Report any changes (address, visa status) within 14 days</li>
            <li>If you lose your ARC, report it immediately and apply for a replacement</li>
            <li>Your university's international office can help with the application process</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Immigration Office Hours</h2>
          <p className="text-foreground mb-4">
            Most immigration offices are open Monday to Friday, 9:00 AM to 6:00 PM. They are closed 
            on weekends and public holidays. Arrive early as wait times can be long, especially at 
            the beginning of each semester.
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

export default ArcGuide;
