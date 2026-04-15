const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">

          {/* Brand */}
          <div>
            <h2 className="text-black font-semibold text-base mb-3">
              KR Buddy
            </h2>
            <p className="leading-relaxed">
              Helping students in Korea with visa, housing, jobs, and daily life support.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-black font-medium mb-3">Support</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Help Center</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">FAQ</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-black font-medium mb-3">Legal</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
              <li className="hover:text-black cursor-pointer">Terms of Service</li>
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} KR Buddy. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;