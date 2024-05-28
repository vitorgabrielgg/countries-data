import Header from "@/layout/Header";
import AppRoutes from "@/routes/AppRoutes";

export default function Page() {
  return (
    <div>
      <Header />
      <main className="min-h-screen bg-very_light_gray/40 dark:bg-very_dark_blue_dark_bg transition-colors">
        <AppRoutes />
      </main>
    </div>
  );
}
