import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

type Contact = {
  id: number;
  name: string;
  email: string;
  category: string;
  message: string;
  status: string;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();

  const [data, setData] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setData(data);
    setLoading(false);
  };

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        navigate("/login");
        return;
      }

      fetchMessages();
    };

    init();
  }, [navigate]);

  const markResolved = async (id: number) => {
    await supabase
      .from("contacts")
      .update({ status: "resolved" })
      .eq("id", id);

    fetchMessages();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const filtered =
    filter === "all"
      ? data
      : data.filter((item) => item.status === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* HEADER */}
      <div className="mb-10 flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-black mb-3">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Manage and review help requests submitted by users.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>

      {/* FILTER BUTTONS */}
      <div className="mb-10 flex gap-3 flex-wrap">
        {["all", "pending", "resolved"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              filter === item
                ? "bg-blue-700 text-white"
                : "border border-gray-200 text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-500">No messages found.</p>
      ) : (
        <div className="space-y-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-xl p-5 bg-white"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.email}
                  </p>
                </div>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    item.status === "resolved"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-sm text-gray-500 mb-2">
                {item.category} •{" "}
                {new Date(item.created_at).toLocaleString()}
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {item.message}
              </p>

              {item.status !== "resolved" && (
                <button
                  onClick={() => markResolved(item.id)}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-800 transition"
                >
                  Mark as Resolved
                </button>
              )}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default Admin;