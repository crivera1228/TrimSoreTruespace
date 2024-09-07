"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Car, Menu, Star, X } from "lucide-react";

export function AutoDetailHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Basic Wash", description: "Exterior wash and dry", price: "$20" },
    {
      name: "Full Detail",
      description: "Interior and exterior detailing",
      price: "$150",
    },
    {
      name: "Paint Correction",
      description: "Remove scratches and swirls",
      price: "$250",
    },
  ];

  const testimonials = [
    { name: "John D.", comment: "Best detailing service in town!" },
    {
      name: "Sarah M.",
      comment: "My car looks brand new after their full detail.",
    },
    {
      name: "Mike R.",
      comment: "Professional and thorough. Highly recommend!",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                AutoDetail Pro
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#services"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Testimonials
              </Link>
              <Link
                href="#schedule"
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Schedule
              </Link>
            </nav>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 md:hidden">
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            <Link
              href="#services"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#schedule"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule
            </Link>
          </nav>
        </div>
      )}
      {/* Rest of the component remains the same */}
    </div>
  );
}
