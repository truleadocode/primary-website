export function SocialProof() {
  const brands = [
    'Glossier',
    'Warby Parker',
    'Allbirds',
    'Casper',
    'Away',
    'Bombas',
  ]

  return (
    <section className="border-y border-slate-800 bg-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <div className="text-2xl font-black text-slate-600 hover:text-slate-400 transition-colors">
                {brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
