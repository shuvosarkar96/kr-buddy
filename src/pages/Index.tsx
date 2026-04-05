import Header from "@/components/Header";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "ARC Guide",
    desc: "Alien Registration Card process and requirements",
    link: "/arc-guide",
  },
  {
    title: "Housing",
    desc: "Find and understand Korean housing system",
    link: "/housing",
  },
  {
    title: "Dorm Rules",
    desc: "University dormitory guidelines and tips",
    link: "/dorm-rules",
  },
  {
    title: "Emergency",
    desc: "Important contacts and emergency procedures",
    link: "/emergency",
  },
  {
    title: "Jobs",
    desc: "Part-time work regulations and opportunities",
    link: "/jobs",
  },
  {
    title: "Visa",
    desc: "Visa types, extensions, and requirements",
    link: "/visa",
  },
  {
    title: "Apps",
    desc: "Essential mobile apps for daily life in Korea",
    link: "/apps",
  },
  {
    title: "Language",
    desc: "Korean basics and daily phrases",
    link: "/language",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl font-bold text-black leading-tight mb-4">
              Your Complete Guide to Student Life in South Korea
            </h1>

            <p className="text-lg text-gray-600 mb-4">
              Everything you need to settle, survive, and succeed as an international student in Korea.
            </p>

            <p className="text-gray-600 mb-6">
              KR Buddy helps international students understand visas, housing, jobs, and daily life in Korea in a simple and practical way. We break down complex systems into clear steps.
            </p>

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search guides (visa, jobs, housing...)"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1619179834700-7a886aac80cc?q=80&w=2069&auto=format&fit=crop"
              alt="South Korea"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
        </section>

        {/* QUICK ACCESS */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold text-center mb-10 text-black">
            Quick Access
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="border border-gray-200 rounded-xl p-5 hover:shadow-sm transition"
              >
                <h3 className="font-semibold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            What is KR Buddy?
          </h2>

          <p className="text-gray-600 mb-4">
            KR Buddy is a practical survival toolkit built for international students in South Korea. Navigating a new country can be overwhelming, especially with complex administrative systems and language barriers.
          </p>

          <p className="text-gray-600 mb-4">
            This platform focuses on real problems students face every day — visas, housing, jobs, and emergencies — and turns them into simple, step-by-step guidance.
          </p>

          <p className="text-gray-600">
            The goal is simple: help you settle faster, avoid mistakes, and live more comfortably in Korea.
          </p>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Still confused? Get direct help.
          </h2>

          <Link
            to="/help"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Go to Help page
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © 2026 KR Buddy. For informational purposes only.
        </div>
      </footer>
    </div>
  );
};

export default Index;