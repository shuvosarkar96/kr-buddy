import Header from "@/components/Header";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

const Help = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "General",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contacts").insert([form]);

    if (!error) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        category: "General",
        message: "",
      });
    } else {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-10">

          <h1 className="text-3xl font-bold text-black mb-6">
            Get Help
          </h1>

          <p className="text-gray-700 mb-10 max-w-3xl">
            Ask anything about student life in Korea — visa, housing, jobs, or daily problems.
          </p>

          <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border px-4 py-3 rounded-lg"
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            >
              <option>General</option>
              <option>Visa</option>
              <option>Housing</option>
              <option>Jobs</option>
              <option>Language</option>
              <option>Emergency</option>
            </select>

            <textarea
              name="message"
              placeholder="Write your problem..."
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border px-4 py-3 rounded-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              {loading ? "Sending..." : "Submit"}
            </button>

            {success && (
              <p className="text-green-600 text-sm">
                Message saved successfully.
              </p>
            )}

          </form>

        </div>
      </main>

      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
          © 2026 KR Buddy
        </div>
      </footer>
    </div>
  );
};

export default Help;