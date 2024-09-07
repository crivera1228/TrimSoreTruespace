import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Car, Menu, X } from "lucide-react";
import { DarkModeToggle } from "./dark-mode-toggle";
import { FAQ } from "./faq";
import { Gallery } from "./gallery";

export function AutoDetailHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span className="font-bold">AutoDetail Pro</span>
            </Link>
            <nav className="ml-6 hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Services
              </Link>
              <Link href="/testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Testimonials
              </Link>
              <a href="#schedule" className="transition-colors hover:text-foreground/80 text-foreground/60">
                Schedule
              </a>
            </nav>
          </div>
          <div className="flex items-center">
            <DarkModeToggle />
            <button
              className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 md:hidden ml-2"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 md:hidden">
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/testimonials" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <a href="#schedule" className="transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
              Schedule
            </a>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className={`w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to AutoDetail Pro
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Professional car detailing services to keep your vehicle looking its best.
              </p>
              <Button className="mt-4" size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </section>

        <Gallery />

        <FAQ />

        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Schedule Your Appointment
            </h2>
            <div className="flex justify-center">
              <Button size="lg" className="mt-4">
                <Calendar className="mr-2 h-4 w-4" /> Book Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © 2023 AutoDetail Pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}