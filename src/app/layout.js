import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Himanshu",
  description: "Personal portfolio website of Himanshu Kumar, a Software Engineer and Web Developer",
  icons: {
    icon: [
      { url: '/assets/logo/logo.png' }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
