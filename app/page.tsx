"use client";

import { MobilePage } from "@/src/pages/MobilePage";
import { DesktopPage } from "@/src/pages/DesktopPage";
import { useMediaQuery } from "@chakra-ui/react";

export default function Home() {
  const [isMobile] = useMediaQuery("(max-width: 765px)", { ssr: true });

  if (isMobile) {
    return <MobilePage />;
  }

  return <DesktopPage />;
}
