import { useEffect, useState } from "react";
import { fetchImages } from "./api";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Form from "./components/Form/Form";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  const [urls, setUrls] = useState<string[] | null>(null); // useStateの型定義

  useEffect(() => {
    fetchImages("shiba").then((urlList) => {
      setUrls(urlList);
    });
  }, []);

  function reloadImages(breed: string) {
    fetchImages(breed).then((urlList) => {
      setUrls(urlList);
    });
  }

  return (
    <>
      <Header />
      <Form onFormSubmit={reloadImages} />

      <div className="mt-20"></div>

      <Gallery items={urls} />
      <Footer />
    </>
  );
}

export default App;
