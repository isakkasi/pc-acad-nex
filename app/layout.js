import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";

export const metadata = {
  title: "Plane Care Academy",
  description: "The next level of aviation training",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* ### The preloader is removed due to issues with the component */}
      {/* <Preloader /> */}
      {children}
      </body>
    </html>
  );
}
