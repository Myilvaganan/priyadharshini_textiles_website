import Button from "../components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-brand-offwhite px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-serif text-4xl font-bold text-brand-dark">Page Not Found</h1>
      <p className="mt-3 max-w-md text-brand-gray">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
