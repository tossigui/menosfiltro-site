import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Wellness Store
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("desincha")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Desincha Express
          </button>
          <button
            onClick={() => scrollToSection("skindetox")}
            className="text-foreground hover:text-primary transition-colors"
          >
            SkinDetox
          </button>
          <button
            onClick={() => scrollToSection("fitness")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Corpo Firme
          </button>
        </nav>

        <Button
          variant="cta"
          size="sm"
          onClick={() => scrollToSection("produtos")}
        >
          Ver Produtos
        </Button>
      </div>
    </header>
  );
};

export default Header;
