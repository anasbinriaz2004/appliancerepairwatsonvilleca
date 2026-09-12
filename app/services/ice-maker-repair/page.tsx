import type { Metadata } from "next";
import ServiceDetailPage from "@/components/ServiceDetailPage";
import ice_maker_repair from "@/content/services/ice-maker-repair";

export const metadata: Metadata = ice_maker_repair.seo;

export default function IceMakerRepairPage() {
  return <ServiceDetailPage service={ice_maker_repair} />;
}