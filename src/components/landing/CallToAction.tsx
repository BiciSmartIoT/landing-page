"use client";

import { APP_URL } from "@/src/app/config/app";
import { useLang } from "../../context/LangContext";
import Link from "next/link";
export default function CallToAction() {
  const { t } = useLang();

  return (
    <section id="contact" className="bg-black py-24 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-12 md:p-16 text-center">

  {/* Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,205,50,0.12),transparent_50%)] pointer-events-none" />

  <span className="relative text-primary text-xs font-black uppercase tracking-[0.4em]">
    BiciSmartIoT
  </span>

  <h2 className="relative mt-6 text-4xl md:text-6xl font-black italic text-white leading-tight">
    {t.cta.title_1}
    <span className="text-primary"> {t.cta.title_2}</span>
  </h2>

  <p className="relative mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
    {t.cta.description}
  </p>

  <div className="relative mt-10">
 <Link
  href={`${APP_URL}/login`}
  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-black font-black uppercase tracking-wider"
>
  {t.cta.button}
</Link>
  </div>
</div>


  </div>
</section>

  );
}