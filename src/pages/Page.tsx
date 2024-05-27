import FilterAndSection from "@/layout/FilterAndSection";
import Header from "@/layout/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-very_light_gray/40">
        <FilterAndSection />
      </main>
    </div>
  );
}
