import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main >
        <Header />
        <Sidebar />
      {children}
    </main>
  );
}