                  import React from "react";
                  import Link from "next/link";
                  import { Card, CardContent } from "@/components/ui/card";
                  import { Car, Star } from "lucide-react";

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

                  export default function Testimonials() {
                    return (
                      <div className="flex flex-col min-h-screen">
                        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                          <div className="container flex h-14 items-center">
                            <div className="mr-4 flex">
                              <Link href="/" className="mr-6 flex items-center space-x-2">
                                <Car className="h-6 w-6" />
                                <span className="font-bold">AutoDetail Pro</span>
                              </Link>
                              <nav className="flex items-center space-x-6 text-sm font-medium">
                                <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                                  Home
                                </Link>
                                <Link href="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">
                                  Services
                                </Link>
                              </nav>
                            </div>
                          </div>
                        </header>
                        <main className="flex-1">
                          <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
                            <div className="container px-4 md:px-6">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
                                What Our Customers Say
                              </h2>
                              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {testimonials.map((testimonial, index) => (
                                  <Card key={index}>
                                    <CardContent className="pt-6">
                                      <div className="flex items-center mb-4">
                                        <Star className="w-5 h-5 fill-current text-yellow-500" />
                                        <Star className="w-5 h-5 fill-current text-yellow-500" />
                                        <Star className="w-5 h-5 fill-current text-yellow-500" />
                                        <Star className="w-5 h-5 fill-current text-yellow-500" />
                                        <Star className="w-5 h-5 fill-current text-yellow-500" />
                                      </div>
                                      <p className="mb-2">{testimonial.comment}</p>
                                      <p className="font-bold">{testimonial.name}</p>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          </section>
                        </main>
                        <footer className="w-full py-6 bg-gray-200">
                          <div className="container px-4 md:px-6">
                            <p className="text-center text-sm text-gray-500">
                              © 2023 AutoDetail Pro. All rights reserved.
                            </p>
                          </div>
                        </footer>
                      </div>
                    );
                  }