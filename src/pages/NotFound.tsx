import Header from "@/components/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">Page not found</p>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
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

export default NotFound;
