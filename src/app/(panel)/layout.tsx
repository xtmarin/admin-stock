import { DashboardLayout } from "@/layouts";
import { Toaster } from "@/components/ui/sonner";

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      {children}
      <Toaster />
    </DashboardLayout>
  );
}