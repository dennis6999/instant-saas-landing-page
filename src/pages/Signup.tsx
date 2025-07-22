import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate("/"), 1200);
    }, 1200);
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground">
      {/* Left: Gradient + Illustration */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-primary to-accent p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
          <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="300" cy="300" rx="260" ry="180" fill="#fff" fillOpacity="0.08" />
            <ellipse cx="400" cy="200" rx="120" ry="80" fill="#fff" fillOpacity="0.10" />
            <ellipse cx="200" cy="400" rx="100" ry="60" fill="#fff" fillOpacity="0.07" />
          </svg>
        </div>
        <div className="text-left max-w-md z-10">
          <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">Join <span className="text-yellow-300">SaaSFlow</span></h1>
          <p className="text-lg text-white/80 mb-8">Create your account and start building your SaaS business today.</p>
        </div>
      </div>
      {/* Right: Signup Card */}
      <div className="flex flex-1 items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md shadow-soft bg-card/90 backdrop-blur-md border border-border rounded-2xl">
          <CardContent className="p-10">
            <h2 className="text-3xl font-extrabold mb-2 text-center bg-gradient-to-r from-primary via-primary-accent to-accent bg-clip-text text-transparent">Create your account</h2>
            <p className="text-muted-foreground mb-8 text-center">Sign up to get started with SaaSFlow</p>
            {success && (
              <div className="mb-6 text-green-600 bg-green-100 dark:bg-green-900/30 rounded-lg px-4 py-3 text-center font-semibold animate-fade-in-up">
                Signup successful! Redirecting...
              </div>
            )}
            <Button type="button" className="w-full flex items-center justify-center gap-2 mb-6 bg-background border border-border text-foreground hover:bg-muted transition-smooth shadow-none font-semibold">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
              Sign up with Google
            </Button>
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="mx-4 text-muted-foreground text-xs uppercase tracking-widest">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" type="text" autoComplete="name" required className="bg-background" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" autoComplete="email" required className="bg-background" />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} autoComplete="new-password" required className="bg-background pr-10" />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary text-xs"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <Button type="submit" className="w-full btn-premium text-base py-3 rounded-xl shadow-soft" disabled={loading || success}>
                {loading ? <span className="animate-spin mr-2 inline-block w-5 h-5 border-2 border-t-transparent border-primary rounded-full align-middle" /> : null}
                Sign Up
              </Button>
            </form>
            <div className="mt-8 text-center text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:underline">Sign in</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 