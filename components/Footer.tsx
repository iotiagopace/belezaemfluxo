export default function Footer() {
  return (
    <footer className="section-divider bg-black py-16">
      <div className="container-max grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="display text-white text-2xl">
            beleza em fluxo <span className="text-white/40">by metry</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/60 lowercase">
            presença profissional e contatos organizados para o seu negócio de beleza.
          </p>
        </div>
        <div>
          <div className="section-label mb-4">/ navegar</div>
          <ul className="grid gap-2 text-sm text-white/70 lowercase">
            <li><a href="#modelos" className="hover:text-white">modelos</a></li>
            <li><a href="#cases" className="hover:text-white">cases</a></li>
            <li><a href="#planos" className="hover:text-white">planos</a></li>
            <li><a href="#faq" className="hover:text-white">dúvidas</a></li>
            <li><a href="/politica-de-privacidade" className="hover:text-white">política de privacidade</a></li>
            <li><a href="/termos-de-uso" className="hover:text-white">termos de uso</a></li>
            <li><a href="https://metry.cc" target="_blank" rel="noreferrer" className="hover:text-white">metry</a></li>
          </ul>
        </div>
        <div>
          <div className="section-label mb-4">/ contato</div>
          <ul className="grid gap-2 text-sm text-white/70 lowercase">
            <li>whatsapp: <a href="https://wa.me/5511999999999" className="hover:text-white">(11) 99999-9999</a></li>
            <li>e-mail: <a href="mailto:contato@metry.cc" className="hover:text-white">contato@metry.cc</a></li>
            <li>instagram: <a href="https://instagram.com/metry.cc" target="_blank" rel="noreferrer" className="hover:text-white">@metry.cc</a></li>
          </ul>
        </div>
      </div>
      <div className="container-max mt-14 border-t border-white/10 pt-6 text-xs text-white/40 lowercase">
        os valores apresentados correspondem às condições básicas da oferta e
        podem variar conforme personalizações, integrações, domínio, licenças e
        serviços adicionais.
      </div>
    </footer>
  );
}
