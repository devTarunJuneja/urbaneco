"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Remove Supabase client-side check for static export
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // For static export, we'll handle auth client-side only
    const checkAuth = async () => {
      // For demo, we'll just show the admin interface
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {children}
      </div>
    </div>
  );
}