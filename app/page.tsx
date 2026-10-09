import { Contact, Footer, Gallery, Header, Hero, Offerings } from "@/components/Sections";

/** Section order: clients/brimmup/layout-manifest.md */
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
