import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
    </div>
  );
}
