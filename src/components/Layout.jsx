import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, currentPage, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-soft-bg text-text-primary flex flex-col font-body">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 w-full overflow-hidden">
        {children}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
