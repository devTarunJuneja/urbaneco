// pages/signup.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // Notify user for confirmation email
      alert('A confirmation email has been sent. Please check your inbox!');
      window.location.href = '/login'; // Redirect to login page
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSignUp} className="space-y-4">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
}
