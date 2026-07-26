"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Database } from "reicon-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const isEditor = pathname === "/editor";

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 h-14 flex items-center px-6 border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60",
        isEditor && "hidden"
      )}
    >
      <div className="flex items-center gap-2.5 mr-auto">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="h-8 w-8 rounded-lg bg-amber-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-shadow">
            <Database className="h-4.5 w-4.5 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Query<span className="text-amber-500">Forge</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link href="/editor">
          <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white gap-1.5 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all">
            Open Editor <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </div>
    </nav>
  );
}
