export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-lg font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold">SaasFlow</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Scale your business effortlessly with our all-in-one platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 SaasFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}