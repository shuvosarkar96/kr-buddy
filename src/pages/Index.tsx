import Header from "@/components/Header";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <img 
            src="https://images.unsplash.com/photo-1619179834700-7a886aac80cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Seoul cityscape with traditional and modern architecture" 
            className="w-full h-48 object-cover rounded mb-6"
          />
          <h1 className="text-3xl font-bold text-foreground mb-6">Welcome to Campus Helper Korea</h1>
          
          <p className="text-foreground mb-4">
            This website is designed to help international students navigate life in South Korea. 
            Whether you're new to the country or have been studying here for a while, you'll find 
            useful information about official procedures, campus life, and practical tips.
          </p>

          <p className="text-foreground mb-6">
            Use the navigation above to explore different topics. We cover everything from getting 
            your Alien Registration Card (ARC) to understanding dormitory rules and knowing what to 
            do in emergencies.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4">Quick Links</h2>
          
          <ul className="space-y-3">
            <li>
              <Link to="/arc-guide" className="text-primary hover:underline">
                ARC Guide — Learn how to apply for your Alien Registration Card
              </Link>
            </li>
            <li>
              <Link to="/dormitory-rules" className="text-primary hover:underline">
                Dormitory Rules — Understand the rules for on-campus housing
              </Link>
            </li>
            <li>
              <Link to="/emergency" className="text-primary hover:underline">
                Emergency — Important phone numbers and procedures
              </Link>
            </li>
            <li>
              <Link to="/campus-life" className="text-primary hover:underline">
                Campus Life — Tips for making the most of your time on campus
              </Link>
            </li>
            <li>
              <Link to="/tips" className="text-primary hover:underline">
                Tips — General advice for living in Korea
              </Link>
            </li>
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

export default Index;
