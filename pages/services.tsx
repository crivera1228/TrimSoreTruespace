import React from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car } from "lucide-react";

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

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ... header ... */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <AnimatedCard
                  key={index}
                  service={service}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* ... footer ... */}
    </div>
  );
}

interface Service {
  name: string;
  description: string;
  price: string;
}
function AnimatedCard({ service, delay }: { service: Service; delay: number }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Card>
        <CardHeader>
          <Link href={`/services/${service.name.toLowerCase().replace(/\s/g, '-')}`}>
            <CardTitle>
              <Car className="w-4 h-4 mr-2" /> {/*  Using the Car icon */}
              {service.name}
            </CardTitle>
          </Link>
        </CardHeader>
        <CardContent>
          <Button variant="default">Learn More</Button>
          <p>{service.description}</p>
          <p className="font-bold mt-2">{service.price}</p>
        </CardContent>
      </Card>
    </div>
  );
}
