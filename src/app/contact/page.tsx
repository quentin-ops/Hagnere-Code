import { ContactFormGridWithDetails } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20 bg-background text-foreground">
        <ContactFormGridWithDetails />
      </main>
      <Footer />
    </>
  );
}
