import { Github, Linkedin, Mail, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-card text-foreground border-t border-border py-10 mt-20">
      {/* Background stars (optional decorative divs) */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="star top-10 left-20 w-1.5 h-1.5 animate-pulse-subtle" />
        <div className="star bottom-10 right-10 w-2 h-2 animate-float" />
        <div className="star top-1/2 left-1/2 w-1 h-1 animate-pulse-subtle" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        <h3 className="text-xl font-semibold text-glow mb-2">
          Let's build something <span className="text-primary">awesome</span> together.
        </h3>
        <p className="text-muted-foreground mb-6">Connect with me on:</p>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:yourmail@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition"
            title="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Manish Bhunia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
