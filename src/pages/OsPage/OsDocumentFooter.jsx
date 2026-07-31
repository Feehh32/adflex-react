const OsDocumentFooter = () => {
  return (
    <footer className="mt-8 font-technical avoid-break">
      {/* Observations */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-secondary">
          Observações
        </p>

        {/* Desktop (lines to write) */}
        <div className="hidden md:block print:block mt-3 space-y-4">
          <div className="border-b border-zinc-400 h-6" />
          <div className="border-b border-zinc-400 h-6" />
          <div className="border-b border-zinc-400 h-6" />
        </div>

        {/* Mobile (simple blocks) */}
        <div className="md:hidden print:hidden mt-3 text-sm text-text-secondary">
          Nenhuma observação adicionada.
        </div>
      </div>

      {/* Signature */}
      <div className="mt-12 w-full md:w-1/2 md:mx-auto text-center">
        <div className="border-t border-zinc-500 pt-2 text-sm text-text-secondary">
          Responsável
        </div>
      </div>
    </footer>
  );
};

export default OsDocumentFooter;
