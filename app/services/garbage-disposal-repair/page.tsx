import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import garbage_disposal_repair from "@/content/services/garbage-disposal-repair";

export const metadata: Metadata = garbage_disposal_repair.seo;

export default function GarbageDisposalRepairPage() {
  return <ServiceDetailPage service={garbage_disposal_repair} />;
}
