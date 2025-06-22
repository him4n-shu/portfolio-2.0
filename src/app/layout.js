import "./globals.css";
import Navbar from "./components/Navbar";
import SmoothScroll from './components/SmoothScroll';
import FloatingResumeButton from './components/FloatingResumeButton';

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
        <SmoothScroll />
        <Navbar />
        {children}
        <FloatingResumeButton />
      </body>
    </html>
  );
}
