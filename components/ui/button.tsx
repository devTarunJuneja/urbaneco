import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { supabase } from '@/lib/supabase'; // Import your supabase client

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  authAction?: 'login' | 'logout';  // New prop for handling login/logout actions
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, authAction, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    const handleAuthAction = async () => {
      if (authAction === 'login') {
        // Here, you can implement your login logic or navigate to the login page
        try {
          // Redirect to login page, or trigger the login modal, or any custom logic
          // Example: Assuming you use form for authentication
          const { error } = await supabase.auth.signInWithPassword({
            email: 'user@example.com', // Get email dynamically
            password: 'password', // Get password dynamically
          });
          if (error) {
            alert(error.message);
          } else {
            alert('Logged in successfully');
          }
        } catch (error) {
          alert('Error occurred during login');
        }
      } else if (authAction === 'logout') {
        // Handle logout
        try {
          const { error } = await supabase.auth.signOut();
          if (error) {
            alert(error.message);
          } else {
            alert('Logged out successfully');
          }
        } catch (error) {
          alert('Error occurred during logout');
        }
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleAuthAction} // Attach authAction handler to button click
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
