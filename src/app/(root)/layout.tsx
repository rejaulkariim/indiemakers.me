import Footer from '@/components/design/footer/Footer';
import Navbar from '@/components/design/navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />

      <main className="flex-1 mt-[3.5rem]">{children}</main>

      <Footer />
    </div>
  );
}
