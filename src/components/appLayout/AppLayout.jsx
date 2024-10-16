import Header from "../header/Header";
import Footer from "../footer/Footer";
import Routers from "../../routers/Routers";

function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Routers/>
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
