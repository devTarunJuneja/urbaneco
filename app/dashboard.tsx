// pages/dashboard.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase'; // Assuming this is where you set up Supabase
import { useRouter } from 'next/router';
import { User } from '@supabase/supabase-js';

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetching session using getSession() instead of session directly
    const getSession = async () => {
      const session = await supabase.auth.getSession();
      if (!session.data.session) {
        // If there's no session, redirect to login
        router.push('/login');
      } else {
        setUser(session.data.session.user); // Set the authenticated user
      }
    };
    
    getSession();
  }, [router]);

  if (!user) {
    // This ensures the page doesn't render until we know the user's status
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold">Welcome to your Dashboard</h1>
      <p className="text-lg mt-4">You are logged in as: {user.email}</p>
      <button
        onClick={async () => {
          await supabase.auth.signOut();
          router.push('/login'); // Log the user out and redirect to the login page
        }}
        className="mt-4 p-2 bg-red-500 text-white rounded"
      >
        Log Out
      </button>
    </div>
  );
};

export default Dashboard;
