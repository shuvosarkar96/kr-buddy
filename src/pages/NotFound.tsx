import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="flex items-center justify-center py-20">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Page not found
        </p>
        <Link to="/" className="text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;