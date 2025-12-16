"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left - Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Tarmoq Hub</h1>
          </div>

          {/* Right - Profile Section */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-muted">
              <Image
                src="/avatar.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Babakulov Bekzod
              </p>
              <p className="text-xs text-muted-foreground"></p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
