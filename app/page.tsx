"use client";
import { Suspense } from "react";
import LoaderOne from "@/components/loaders/svgs";
import Sections from "@/components/sections/Sections";

export default function Home() {
  return (
    <Suspense fallback={<LoaderOne />}>
      <Sections />
    </Suspense>
  );
}
