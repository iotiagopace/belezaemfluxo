import Link from "next/link";
import { Instagram, ArrowRight } from "@/components/icons-lucide";

const yearNow = new Date().getFullYear();

const navLinks = [
  { label: "Modelos", href: "/#modelos" },
  { label: "Cases", href: "/#cases" },
  { label: "Gestão de contatos", href: "/#crm" },
  { label: "Planos", href: "/#planos" },
  { label: "Perguntas frequentes", href: "/#faq" },
];

const modelLinks = [
  { label: "Essência — cílios e sobrancelhas", href: "/modelos/essencia" },
  { label: "Aura — clínicas e studios", href: "/modelos/aura" },
  { label: "Movimento — salões com equipe", href: "/modelos/movimento" },
  { label: "Traço — marca pessoal", href: "/modelos/traco" },
  { label: "Forma — premium editorial", href: "/modelos/forma" },
  { label: "Urbano — barbearias", href: "/modelos/urbano" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-900">
      <div className="container-max py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Marca + social */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="display text-2xl">
              beleza em fluxo <span className="text-neutral-500">by metry</span>
            </div>
            <p className="mt-5 text-sm text-neutral-600 leading-relaxed max-w-sm">
              Presença profissional e contatos organizados para o seu negócio de
              beleza. Um produto Metry.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/cc.metry/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram cc.metry"
                className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Modelos */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Modelos
            </h4>
            <ul className="space-y-3">
              {modelLinks.map((m) => (
                <li key={m.href}>
                  <Link
                    href={m.href}
                    className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-5">
              Contato
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="text-sm text-neutral-600">
                <a href="mailto:tiago@metry.cc" className="hover:text-neutral-900 transition-colors">
                  tiago@metry.cc
                </a>
              </li>
              <li className="text-sm text-neutral-600">
                <a
                  href="https://www.instagram.com/cc.metry/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 transition-colors"
                >
                  @cc.metry
                </a>
              </li>
              <li className="text-sm text-neutral-600">São Paulo, SP — Brasil</li>
              <li className="text-sm text-neutral-600">Seg–Sex, 9h–18h</li>
            </ul>
            <a
              href="#formulario"
              className="dark-on-light inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Fale conosco
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-200 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © {yearNow} Metry. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/politica-de-privacidade"
              className="text-neutral-500 hover:text-neutral-900 text-xs transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-neutral-500 hover:text-neutral-900 text-xs transition-colors"
            >
              Termos de Uso
            </Link>
            <a
              href="https://metry.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-900 text-xs transition-colors"
            >
              metry.cc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
