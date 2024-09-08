    import type { NextPage } from 'next'
    import React from 'react'
    import Link from 'next/link'
    import { Button } from '@/components/ui/button'

    const testimonials = [
      { name: "John D.", comment: "Best detailing service in town!" },
      { name: "Sarah M.", comment: "My car looks brand new after their full detail." },
      { name: "Mike R.", comment: "Professional and thorough. Highly recommend!" },
    ]

    const Testimonials: NextPage = () => {
      return (
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold">AutoDetail Pro</span>
              </Link>
              <nav className="ml-auto flex items-center space-x-4">
                <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Home
                </Link>
                <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
                  Services
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
              <div className="container px-4 md:px-6">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-8">
                  Testimonials
                </h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-card text-card-foreground shadow-sm">
                      <p className="mb-2 italic">"{testimonial.comment}"</p>
                      <p className="font-semibold">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                    <Button>
                        <Link href="/#schedule">Book Your Detailing</Link>
                      </Button>
                </div>
              </div>
            </section>
          </main>
          <footer className="w-full py-6 bg-background border-t">
            <div className="container flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2023 AutoDetail Pro. All rights reserved.
              </p>
              <nav className="flex items-center space-x-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </footer>
        </div>
      )
    }

    export default Testimonials