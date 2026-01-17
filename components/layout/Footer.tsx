'use client';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-500 text-center">
        <p>© {new Date().getFullYear()} Trading Education Platform. Educational purposes only.</p>
      </div>
    </footer>
  );
}
