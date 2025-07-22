import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", title: "1. Introduction" },
  { id: "info", title: "2. Information We Collect" },
  { id: "use", title: "3. How We Use Information" },
  { id: "cookies", title: "4. Cookies & Tracking" },
  { id: "sharing", title: "5. Sharing of Information" },
  { id: "security", title: "6. Data Security" },
  { id: "rights", title: "7. Your Rights" },
  { id: "contact", title: "8. Contact" },
];

export default function Privacy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20 px-4">
      <Card className="w-full max-w-2xl shadow-2xl border-2 border-primary/30 bg-white/90 dark:bg-card/90 backdrop-blur-lg rounded-3xl">
        <CardContent className="p-12 sm:p-16">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-yellow-500 text-center mb-2">Placeholder Only</div>
            <div className="text-center text-muted-foreground mb-4">This is a sample Privacy Policy page. <b>Buyers must replace this with their own privacy policy before deploying.</b></div>
          </div>
          <h1 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary via-primary-accent to-accent bg-clip-text text-transparent">Privacy Policy</h1>
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
            <p>This Privacy Policy explains how [Your SaaS Name] collects, uses, and protects your information when you use our services.</p>
            <h2 id="info">2. Information We Collect</h2>
            <p>We may collect information you provide directly, such as your name and email, as well as data collected automatically, such as usage statistics and cookies.</p>
            <h2 id="use">3. How We Use Information</h2>
            <p>We use your information to provide, improve, and personalize our services, and to communicate with you.</p>
            <h2 id="cookies">4. Cookies & Tracking</h2>
            <p>We use cookies and similar technologies to enhance your experience and analyze usage of our platform.</p>
            <h2 id="sharing">5. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share data with trusted third parties to operate our service, as required by law, or with your consent.</p>
            <h2 id="security">6. Data Security</h2>
            <p>We implement reasonable security measures to protect your data, but cannot guarantee absolute security.</p>
            <h2 id="rights">7. Your Rights</h2>
            <p>You may have rights to access, correct, or delete your personal information. Contact us to exercise these rights.</p>
            <h2 id="contact">8. Contact</h2>
            <p>For questions about this Privacy Policy, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/" className="text-primary hover:underline text-base">&larr; Back to Home</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 