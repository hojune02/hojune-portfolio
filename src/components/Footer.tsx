export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Hojune Kim</p>
      <p>Built with React and TypeScript.</p>
    </footer>
  );
}