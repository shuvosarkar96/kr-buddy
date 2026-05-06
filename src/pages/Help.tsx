import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

const Help = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "General",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Validate form
  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (form.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    // clear error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      {
        ...form,
        status: "pending",
      },
    ]);

    if (error) {
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Message sent",
        description: "Your request has been saved successfully.",
      });

      setForm({
        name: "",
        email: "",
        category: "General",
        message: "",
      });
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
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 bg-white"
        >
          <option>General</option>
          <option>Visa</option>
          <option>Housing</option>
          <option>Jobs</option>
          <option>Language</option>
          <option>Emergency</option>
        </select>

        <div>
          <textarea
            name="message"
            placeholder="Write your problem..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full border px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 resize-none"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex flex-col items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 active:scale-[0.98] transition disabled:opacity-60"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Help;