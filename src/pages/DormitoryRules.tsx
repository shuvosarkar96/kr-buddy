import Header from "@/components/Header";
import { Link } from "react-router-dom";

const DormitoryRules = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <img 
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80" 
            alt="University dormitory building" 
            className="w-full h-48 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-6">Dormitory Rules</h1>
          
          <p className="text-foreground mb-4">
            Living in a university dormitory in Korea comes with specific rules and regulations. 
            These rules are designed to ensure a safe, clean, and respectful living environment 
            for all residents. Violations may result in warnings, fines, or removal from housing.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">General Rules</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Quiet hours are typically from 10:00 PM to 7:00 AM</li>
            <li>Guests must register at the front desk and leave by curfew (usually 11:00 PM)</li>
            <li>Overnight guests of the opposite gender are not permitted</li>
            <li>Smoking is prohibited in all dormitory buildings and common areas</li>
            <li>Alcohol consumption is restricted to designated areas only</li>
            <li>Pets are not allowed under any circumstances</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Room Regulations</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Keep your room clean and tidy at all times</li>
            <li>Room inspections occur monthly; advance notice is usually given</li>
            <li>Do not modify or damage room furniture or fixtures</li>
            <li>Cooking appliances (hot plates, rice cookers) are prohibited in rooms</li>
            <li>Use only approved electrical devices to prevent fire hazards</li>
            <li>Report any maintenance issues immediately to the dormitory office</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Common Area Etiquette</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Clean up after yourself in kitchens, bathrooms, and lounges</li>
            <li>Do not leave personal belongings in shared spaces</li>
            <li>Respect the time limits for laundry machines</li>
            <li>Keep noise levels low in hallways and common areas</li>
            <li>Report any damage or safety concerns immediately</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Check-in and Check-out</h2>
          <p className="text-foreground mb-4">
            When moving in, you'll receive a room inspection checklist. Document any existing 
            damage before signing. Upon moving out, clean your room thoroughly and return all 
            keys and access cards. Failure to do so may result in deductions from your deposit.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Safety Guidelines</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Never prop open security doors</li>
            <li>Do not share your room key or access card with others</li>
            <li>Know the location of emergency exits and fire extinguishers</li>
            <li>Participate in mandatory fire drills</li>
            <li>Contact the dormitory office immediately in case of emergencies</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Consequences of Rule Violations</h2>
          <p className="text-foreground mb-4">
            First offense: Written warning. Second offense: Fine and meeting with dormitory 
            administration. Third offense: Possible eviction from dormitory housing. Serious 
            violations (violence, theft, drug use) may result in immediate expulsion and 
            university disciplinary action.
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

export default DormitoryRules;
