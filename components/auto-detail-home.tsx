'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Car, Menu, Star, X } from "lucide-react"

export function AutoDetailHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    { name: "Basic Wash", description: "Exterior wash and dry", price: "$20" },
    { name: "Full Detail", description: "Interior and exterior detailing", price: "$150" },
    { name: "Paint Correction", description: "Remove scratches and swirls", price: "$250" },
  ]

  const testimonials = [
    { name: "John D.", comment: "Best detailing service in town!" },
    { name: "Sarah M.", comment: "My car looks brand new after their full detail." },
    { name: "Mike R.", comment: "Professional and thorough. Highly recommend!" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Car className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">AutoDetail Pro</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#services">Services</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">Testimonials</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#schedule">Schedule</a>
            </nav>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 md:hidden">
          <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#schedule" onClick={() => setIsMenuOpen(false)}>Schedule</a>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Professional Auto Detailing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transform your vehicle with our expert detailing services. Book your appointment today!
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                  href="#schedule"
                >
                  Schedule Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                    <p className="font-bold mt-2">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="w-5 h-5 mr-2 text-yellow-400" />
                      {testimonial.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{testimonial.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Schedule Your Service</h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">Ready to give your car the care it deserves?</p>
            <Button
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              onClick={() => alert("Scheduling functionality would be integrated here")}
            >
              <Calendar className="mr-2 h-4 w-4" /> Open Scheduling Platform
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 AutoDetail Pro. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}