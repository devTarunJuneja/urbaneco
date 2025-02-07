"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

// Sample products data (in a real app, this would come from your database)
const products = [
  {
    id: "1",
    name: "Arduino Uno R3",
    description: "Refurbished microcontroller board, perfect for DIY projects",
    price: 24.99,
    image_url: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "2",
    name: "LCD Display Module",
    description: "16x2 character LCD display, fully tested and functional",
    price: 9.99,
    image_url: "https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "3",
    name: "Lithium Battery Pack",
    description: "Reconditioned 3.7V lithium battery pack with protection circuit",
    price: 14.99,
    image_url: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "4",
    name: "Refurbished Solar Panel",
    description: "A high-efficiency refurbished solar panel, perfect for renewable energy projects.",
    price: 49.99,
    image_url: "https://unsplash.com/photos/car-batteries-background-car-and-motorcycle-spare-parts-one-battery-out-of-the-rest-3d-illustration-vmEliD0Oz58"
  },
  {
    id: "5",
    name: "Arduino Kit",
    description: "Complete Arduino kit with essential components for your DIY projects.",
    price: 35.00,
    image_url: "https://images.unsplash.com/photo-1597451529917-d8b9f8efb3c1"
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    description: "Refurbished portable Bluetooth speaker with high-quality sound and a sleek design.",
    price: 29.99,
    image_url: "https://images.unsplash.com/photo-1529090901341-8f3b2b5686b9"
  },
  {
    id: "7",
    name: "Electric Motor Kit",
    description: "A refurbished electric motor kit for your engineering or robotics projects.",
    price: 39.99,
    image_url: "https://images.unsplash.com/photo-1585200554609-cd6b20685c8d"
  },
  {
    id: "8",
    name: "Smartphone",
    description: "Refurbished smartphone with high specifications, great for students and tech enthusiasts.",
    price: 199.99,
    image_url: "https://images.unsplash.com/photo-1562645933-35a2fdbf58d2"
  },
  {
    id: "9",
    name: "3D Printer Filament",
    description: "Refurbished 3D printer filament in various colors for your printing projects.",
    price: 18.00,
    image_url: "https://images.unsplash.com/photo-1541811537-dfdb94369ab6"
  },
  {
    id: "10",
    name: "Microcontroller Board",
    description: "Affordable microcontroller board for electronics enthusiasts and students.",
    price: 22.50,
    image_url: "https://images.unsplash.com/photo-1514790193036-4042ac4d4baf"
  }  
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    setAddedItems(new Set([...addedItems, product.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 2000);
  };

  return (
    <main className="container py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={product.image_url}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-muted-foreground mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium">
                  {formatPrice(product.price)}
                </span>
                <Button
                  onClick={() => handleAddToCart(product)}
                  variant={addedItems.has(product.id) ? "secondary" : "default"}
                >
                  {addedItems.has(product.id) ? "Added!" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}