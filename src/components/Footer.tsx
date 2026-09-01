export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-black/25 px-6 py-8 text-sm text-muted md:px-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row">
        <p className="m-0">© {currentYear} Hojune Kim</p>
        <p className="m-0">Built with React, TypeScript, and Tailwind CSS.</p>
      </div>
    </footer>
  );
}