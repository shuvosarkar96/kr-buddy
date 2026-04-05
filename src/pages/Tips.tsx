import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <img 
            src="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80" 
            alt="Korean street with shops and cafes" 
            className="w-full h-48 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-6">Tips for Living in Korea</h1>
          
          <p className="text-foreground mb-4">
            Adjusting to life in a new country takes time. Here are practical tips to help you 
            settle in, save money, and make the most of your experience in South Korea.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Banking and Money</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Open a Korean bank account as soon as you have your ARC</li>
            <li>Popular banks include Shinhan, KB Kookmin, and Woori</li>
            <li>Get a check card (debit card) — it's widely accepted everywhere</li>
            <li>Download your bank's app for easy transfers and payments</li>
            <li>ATMs at convenience stores (CU, GS25) accept international cards</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Phone and Internet</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Get a Korean phone number — required for many services</li>
            <li>Major carriers: SK Telecom, KT, LG U+</li>
            <li>Budget options: prepaid SIMs or MVNOs for cheaper plans</li>
            <li>Free WiFi is available almost everywhere in Korea</li>
            <li>Download KakaoTalk — it's the main messaging app everyone uses</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Transportation</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Get a T-money card for buses and subways — available at convenience stores</li>
            <li>The subway system is excellent and announcements are in Korean and English</li>
            <li>Buses are efficient but routes can be confusing — use Naver Maps or KakaoMap</li>
            <li>Taxis are safe and relatively affordable — use Kakao T app to hail one</li>
            <li>KTX (high-speed rail) connects major cities quickly</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Food and Dining</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>University cafeterias offer cheap, filling meals (3,000-5,000 KRW)</li>
            <li>Convenience store meals (ramyeon, kimbap, sandwiches) are budget-friendly</li>
            <li>Many restaurants offer lunch specials at reduced prices</li>
            <li>Banchan (side dishes) are always free and refillable</li>
            <li>Delivery apps: Baemin, Coupang Eats, Yogiyo</li>
            <li>Learn basic food vocabulary to navigate menus</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Shopping</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Daiso is perfect for cheap household items and school supplies</li>
            <li>Coupang offers fast delivery (often same-day or next-day)</li>
            <li>Traditional markets are great for fresh produce at lower prices</li>
            <li>Myeongdong and Gangnam have international stores but higher prices</li>
            <li>Second-hand apps: Danggeun Market (당근마켓) for used items</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Health and Wellbeing</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Enroll in National Health Insurance — mandatory for students staying over 6 months</li>
            <li>Pharmacies (약국) are on almost every street for minor ailments</li>
            <li>Clinics are affordable — most consultations are under 10,000 KRW</li>
            <li>Mental health support is available through your university counseling center</li>
            <li>Stay active — Korea has great hiking trails and public fitness facilities</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Cultural Tips</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>Learn basic Korean greetings and phrases — locals appreciate the effort</li>
            <li>Remove shoes when entering homes and some traditional restaurants</li>
            <li>Use two hands when giving or receiving items from elders</li>
            <li>Bowing is a common greeting — a slight nod is usually sufficient</li>
            <li>Tipping is not expected and can sometimes be refused</li>
            <li>Recycling is mandatory — learn the separation rules for your area</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mb-3 mt-6">Useful Apps</h2>
          <ul className="list-disc list-inside text-foreground mb-4 space-y-2">
            <li>KakaoTalk — messaging</li>
            <li>Naver Maps / KakaoMap — navigation</li>
            <li>Papago — translation</li>
            <li>Baemin — food delivery</li>
            <li>Coupang — online shopping</li>
            <li>T-money — transportation balance check</li>
          </ul>
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

export default Tips;
