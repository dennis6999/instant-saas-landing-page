import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "user", title: "2. User Responsibilities" },
  { id: "account", title: "3. Account Registration" },
  { id: "usage", title: "4. Acceptable Use" },
  { id: "termination", title: "5. Termination" },
  { id: "disclaimer", title: "6. Disclaimer" },
  { id: "contact", title: "7. Contact" },
];

export default function Terms() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 px-4 sm:px-0">
      <Card className="w-full max-w-2xl shadow-2xl border-2 border-primary/30 bg-white/90 dark:bg-card/90 backdrop-blur-lg rounded-3xl">
        <CardContent className="p-12 sm:p-16">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-yellow-500 text-center mb-2">Placeholder Only</div>
            <div className="text-center text-muted-foreground mb-4">This is a sample Terms of Service page. <b>Buyers must replace this with their own legal terms before deploying.</b></div>
          </div>
          <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary via-primary-accent to-accent bg-clip-text text-transparent">Terms of Service</h1>
          {/* Table of Contents */}
          <nav className="mb-10">
            <ul className="flex flex-wrap justify-center gap-4 text-base font-medium text-primary/80">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline">{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="prose max-w-none text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-3 prose-p:text-base prose-p:leading-relaxed">
            <h2 id="introduction">1. Introduction</h2>
            <p>Welcome to [Your SaaS Name]. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to these Terms.</p>
            <h2 id="user">2. User Responsibilities</h2>
            <p>You agree to use the service in compliance with all applicable laws and not to misuse the platform in any way.</p>
            <h2 id="account">3. Account Registration</h2>
            <p>To access certain features, you may need to register for an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
            <h2 id="usage">4. Acceptable Use</h2>
            <p>You may not use the service for any unlawful, harmful, or abusive purpose. We reserve the right to suspend accounts that violate these rules.</p>
            <h2 id="termination">5. Termination</h2>
            <p>We may terminate or suspend your access to the service at any time, with or without notice, for conduct that we believe violates these Terms.</p>
            <h2 id="disclaimer">6. Disclaimer</h2>
            <p>This template is provided as-is, without warranty of any kind. [Your SaaS Name] is not responsible for any damages resulting from its use.</p>
            <h2 id="contact">7. Contact</h2>
            <p>For questions about these Terms, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/" className="text-primary hover:underline text-base">&larr; Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 