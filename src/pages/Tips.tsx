import { Link } from "react-router-dom";

const Tips = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <img 
        src="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=800&q=80" 
        alt="Korean street with shops and cafes" 
        className="w-full h-56 object-cover rounded-xl mb-10"
      />

      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Tips for Living in Korea
        </h1>
        
        <p className="text-foreground mb-8 leading-relaxed">
          Adjusting to life in a new country takes time. Here are practical tips to help you 
          settle in, save money, and make the most of your experience in South Korea.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Banking and Money
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Open a Korean bank account as soon as you have your ARC</li>
            <li>Popular banks include Shinhan, KB Kookmin, and Woori</li>
            <li>Get a check card (debit card) — it's widely accepted everywhere</li>
            <li>Download your bank's app for easy transfers and payments</li>
            <li>ATMs at convenience stores (CU, GS25) accept international cards</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Phone and Internet
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Get a Korean phone number — required for many services</li>
            <li>Major carriers: SK Telecom, KT, LG U+</li>
            <li>Budget options: prepaid SIMs or MVNOs for cheaper plans</li>
            <li>Free WiFi is available almost everywhere in Korea</li>
            <li>Download KakaoTalk — it's the main messaging app everyone uses</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Transportation
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Get a T-money card for buses and subways — available at convenience stores</li>
            <li>The subway system is excellent and announcements are in Korean and English</li>
            <li>Buses are efficient but routes can be confusing — use Naver Maps or KakaoMap</li>
            <li>Taxis are safe and relatively affordable — use Kakao T app to hail one</li>
            <li>KTX (high-speed rail) connects major cities quickly</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Food and Dining
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>University cafeterias offer cheap, filling meals (3,000-5,000 KRW)</li>
            <li>Convenience store meals are budget-friendly</li>
            <li>Many restaurants offer lunch specials</li>
            <li>Banchan (side dishes) are free and refillable</li>
            <li>Delivery apps: Baemin, Coupang Eats, Yogiyo</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Shopping
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Daiso is great for cheap essentials</li>
            <li>Coupang offers very fast delivery</li>
            <li>Traditional markets are cheaper for fresh food</li>
            <li>Danggeun Market (당근마켓) for second-hand items</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Health and Wellbeing
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Enroll in National Health Insurance</li>
            <li>Pharmacies (약국) are everywhere</li>
            <li>Clinics are affordable</li>
            <li>Use university counseling services if needed</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Cultural Tips
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>Learn basic Korean phrases</li>
            <li>Remove shoes indoors</li>
            <li>Use two hands with elders</li>
            <li>Bowing is common</li>
            <li>Tipping is not expected</li>
            <li>Follow recycling rules</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Useful Apps
          </h2>
          <ul className="list-disc list-inside text-foreground space-y-2">
            <li>KakaoTalk</li>
            <li>Naver Maps / KakaoMap</li>
            <li>Papago</li>
            <li>Baemin</li>
            <li>Coupang</li>
            <li>T-money</li>
          </ul>
        </section>
      </div>

    </div>
  );
};

export default Tips;