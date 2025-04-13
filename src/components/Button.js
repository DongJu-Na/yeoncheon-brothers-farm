import { cn } from '../utils/cn';

export function Button({ className, variant = "default", children, ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-amber-800 text-amber-50 hover:bg-amber-900",
    outline: "border border-amber-200 hover:bg-amber-100 text-amber-800",
    ghost: "hover:bg-amber-100 text-amber-800",
  };
  
  return (
    <button 
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}