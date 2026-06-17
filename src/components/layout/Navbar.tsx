"use client";

import Link from "next/link";
import { Zap } from "lucide-react";

export default function Navbar() {
return ( <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl"> <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">


    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary p-1">
        <Zap className="text-black fill-black" size={18} />
      </div>

      <span className="font-black italic uppercase tracking-tighter text-xl text-white">
        BiciSmart<span className="text-primary">IoT</span>
      </span>
    </Link>

    <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
      <a href="#features" className="hover:text-white transition">
        Features
      </a>

      <a href="#pricing" className="hover:text-white transition">
        Pricing
      </a>

      <a href="#faq" className="hover:text-white transition">
        FAQ
      </a>

      <a href="#contact" className="hover:text-white transition">
        Contact
      </a>
    </div>
  </div>
</nav>


);
}
