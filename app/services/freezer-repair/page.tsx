import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import freezer_repair from "@/content/services/freezer-repair";

export const metadata: Metadata = freezer_repair.seo;

export default function FreezerRepairPage() {
  return <ServiceDetailPage service={freezer_repair} />;
}