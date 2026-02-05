
import Header from "../components/header";
import Sidebar from "../components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 


  return (
    

     <div >
        <Header />
        <Sidebar />
        <main  className=" w-full  min-h-screen">
      {children}
    </main>
     </div>
    
  );
}