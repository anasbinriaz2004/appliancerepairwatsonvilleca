import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import microwave_repair from "@/content/services/microwave-repair";

export const metadata: Metadata = microwave_repair.seo;

export default function CoffeeMachineRepairPage() {
  return <ServiceDetailPage service={microwave_repair} />;
}
