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
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-black mb-3">
          Get Help
        </h1>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Ask anything about student life in Korea — visa, housing, jobs, or daily problems.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto space-y-5 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
      >

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 transition"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 transition bg-white"
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
          className="w-full border border-gray-200 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 transition resize-none"
        />

        <div className="flex flex-col items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && (
            <p className="text-green-600 text-sm">
              Message saved successfully.
            </p>
          )}
        </div>

      </form>

    </div>
  );
};

export default Help;