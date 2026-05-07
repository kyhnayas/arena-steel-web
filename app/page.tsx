import Hero from "@/components/home/Hero";
import ValueProposition from "@/components/home/ValueProposition";
import ServicesGrid from "@/components/home/ServicesGrid";
import CtaBanner from "@/components/home/CtaBanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arena Steel — Dev Projelerin Çelik İskeleti",
  description:
    "Enerjisa'dan Avrasya Tüneli'ne kadar Türkiye'nin dev projelerinde çeliğe hayat veriyoruz. Sakarya'nın lider çelik konstrüksiyon ve demir işleme uzmanı.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
