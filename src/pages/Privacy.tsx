import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground py-20 px-4">
      <Card className="w-full max-w-2xl shadow-soft bg-card/90 backdrop-blur-md border border-border rounded-2xl">
        <CardContent className="p-10">
          <h1 className="text-3xl font-extrabold mb-4 text-center bg-gradient-to-r from-primary via-primary-accent to-accent bg-clip-text text-transparent">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8 text-center">This is a placeholder Privacy Policy page. Please replace this content with your own privacy policy before deploying your SaaS product.</p>
          <div className="prose max-w-none text-foreground">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque. (Add your privacy policy here.)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 