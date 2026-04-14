import React from 'react';

const FloatingWord = ({ word, className }: { word: string, className: string }) => (
  <div className={`absolute font-heading uppercase text-ink opacity-10 pointer-events-none select-none ${className}`} style={{ fontSize: '15vw', lineHeight: '0.8' }}>
    {word}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b-[12px] border-ink bg-paper">
      <FloatingWord word="СПАСИ" className="top-10 -left-10 rotate-rand-1" />
      <FloatingWord word="ОХРАНИ" className="bottom-20 -right-20 rotate-rand-4" />
      
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img src="/1.jpg" alt="Church silhouette" className="w-[80vw] h-[80vh] object-contain opacity-60 mix-blend-multiply grayscale contrast-200" onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/church1/1000/1000?grayscale'} />
      </div>
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20">
        <div className="relative">
          <h1 className="text-[10vw] md:text-[8vw] font-heading text-ink uppercase tracking-tighter rotate-rand-1 mb-2 brutal-shadow-red bg-paper px-6 py-2 brutal-border inline-block">
            Кто живет
          </h1>
          <img src="/3.jpg" className="absolute -top-10 -right-20 w-40 h-40 object-cover mix-blend-multiply rotate-rand-3" onError={(e) => e.currentTarget.style.display = 'none'} />
        </div>
        
        <h1 className="text-[12vw] md:text-[10vw] font-heading text-paper uppercase tracking-tighter rotate-rand-4 mb-2 bg-ink px-8 py-2 brutal-border text-shadow-red z-20 -ml-10">
          в панельке
        </h1>
        
        <div className="relative">
          <h1 className="text-[18vw] md:text-[15vw] font-heading text-blood uppercase tracking-tighter rotate-rand-2 bg-paper px-10 py-0 brutal-border brutal-shadow z-30">
            Хаски
          </h1>
          <div className="absolute -bottom-10 -left-10 text-6xl font-heading text-ink rotate-rand-1 bg-paper border-4 border-ink px-4 py-1">?</div>
        </div>
      </div>
      
      <div className="absolute bottom-10 right-5 md:right-20 z-40 rotate-rand-3">
        <div className="border-8 border-blood text-blood font-heading text-4xl md:text-6xl px-6 py-2 uppercase tracking-widest bg-paper/90 backdrop-blur-sm shadow-[8px_8px_0_#BB0017]">
          ОДОБРЕНО
        </div>
      </div>
    </section>
  );
};

const MaterialsSection = () => {
  return (
    <section className="py-24 px-4 md:px-10 bg-paper relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url(/5.jpg)', backgroundSize: '300px' }}></div>
      <FloatingWord word="БЛОК" className="top-1/2 left-1/4 -translate-y-1/2 rotate-rand-2" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-[8vw] md:text-[6vw] font-heading mb-20 text-ink uppercase border-b-8 border-ink pb-4 inline-block rotate-rand-1 bg-paper px-4 brutal-shadow">
          Материалы
        </h2>
        
        <div className="flex flex-col gap-24">
          {/* Article 1 */}
          <article className="relative flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2 brutal-border p-3 bg-paper brutal-shadow z-20 rotate-rand-2">
              <div className="lubok-border p-2">
                <img src="/6.jpg" alt="Panel" className="w-full h-[60vh] object-cover grayscale contrast-150" onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/panel/800/1000?grayscale'} />
              </div>
            </div>
            <div className="md:w-1/2 relative z-30 md:-ml-16 mt-10 md:mt-20">
              <h3 className="text-5xl md:text-7xl font-heading uppercase mb-6 bg-ink text-paper inline-block px-4 py-2 rotate-rand-4 brutal-shadow-red">
                Поэзия бетона
              </h3>
              <div className="bg-paper brutal-border p-6 brutal-shadow rotate-rand-1">
                <p className="font-body text-xl md:text-2xl leading-relaxed tracking-wide">
                  Как панельные дома стали главным героем русского рэпа. Архитектура отчаяния, где каждая трещина в стене — это строчка из нового трека.
                </p>
                <button className="mt-8 border-4 border-ink px-8 py-3 font-heading text-2xl uppercase hover:bg-ink hover:text-paper transition-colors duration-0">
                  Читать ✕
                </button>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="relative flex flex-col md:flex-row-reverse gap-8 items-start">
            <div className="md:w-5/12 brutal-border p-3 bg-paper brutal-shadow-red z-20 rotate-rand-3">
              <img src="/4.jpg" alt="Blood" className="w-full h-[50vh] object-cover grayscale contrast-200 riso-red" onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/blood/800/800?grayscale'} />
            </div>
            <div className="md:w-7/12 relative z-30 md:-mr-20 mt-10">
              <h3 className="text-6xl md:text-8xl font-heading uppercase mb-6 text-blood text-shadow-red rotate-rand-1 bg-paper inline-block px-4 border-4 border-blood">
                Лубок и кровь
              </h3>
              <div className="bg-ink text-paper brutal-border border-paper p-8 brutal-shadow rotate-rand-4">
                <p className="font-body text-xl md:text-2xl leading-relaxed tracking-wide">
                  Народная мистика в текстах Хаски. Откуда берутся эти образы? Столкновение языческого и православного в одном грязном подъезде.
                </p>
                <button className="mt-8 border-4 border-paper text-paper px-8 py-3 font-heading text-2xl uppercase hover:bg-paper hover:text-ink transition-colors duration-0">
                  Читать —
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

const ArchiveSection = () => {
  const images = [
    "/2.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg", "/13.jpg", "/14.jpg", "/15.jpg", "/18.jpg"
  ];

  return (
    <section className="py-24 px-4 md:px-10 bg-concrete border-y-[16px] border-ink relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url(/19.jpg)', backgroundSize: '100px' }}></div>
      <FloatingWord word="НЕБО" className="bottom-10 right-10 rotate-rand-3 text-paper opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-[10vw] md:text-[8vw] font-heading mb-16 text-paper uppercase rotate-rand-4 text-shadow-red inline-block bg-ink px-6 border-8 border-blood">
          Архив
        </h2>
        
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className={`relative group break-inside-avoid brutal-border brutal-shadow bg-paper p-3 ${i % 3 === 0 ? 'rotate-rand-1' : i % 2 === 0 ? 'rotate-rand-3' : 'rotate-rand-2'}`}>
              <img src={img} alt={`Archive ${i}`} className="w-full h-auto grayscale contrast-[1.3] group-hover:contrast-200 transition-all duration-0" onError={(e) => e.currentTarget.src = `https://picsum.photos/seed/arch${i}/600/${800 + (i%3)*150}?grayscale`} />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-blood/90 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-0">
                <span className="font-body text-paper border-4 border-paper px-6 py-3 text-xl font-bold rotate-rand-4 bg-ink">
                  ДОК. №{i+104}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-32 px-4 md:px-10 bg-paper flex justify-center relative overflow-hidden">
      <FloatingWord word="ПАНЕЛЬКА" className="top-20 left-0 rotate-rand-1" />
      
      <div className="max-w-4xl brutal-border brutal-shadow-red bg-paper p-8 md:p-16 relative z-10 rotate-rand-2">
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-blood rounded-full mix-blend-multiply blur-2xl opacity-60"></div>
        
        <h2 className="text-6xl md:text-8xl font-heading uppercase mb-12 border-b-8 border-ink pb-4 inline-block">О проекте</h2>
        
        <div className="font-body text-xl md:text-3xl leading-relaxed space-y-8 tracking-wide">
          <p>
            Мы пишем этот манифест в 3 ночи. Вокруг — бетонные коробки, внутри — пустота, которую заполняет только гул холодильника и чужие голоса за стеной.
          </p>
          <p className="text-3xl md:text-4xl font-bold bg-ink text-paper px-4 py-2 inline-block rotate-rand-4 brutal-shadow-red">
            ЭТО НЕ МУЗЫКАЛЬНАЯ ЖУРНАЛИСТИКА.
          </p>
          <p>
            Это попытка задокументировать столкновение двух Россий. Той, что смотрит на нас с потемневших икон, и той, что плюет семечки у подъезда. Хаски — шаман этого пограничья.
          </p>
          <p className="text-blood font-bold text-4xl md:text-5xl uppercase font-heading tracking-widest mt-12 border-4 border-blood p-6 rotate-rand-1 text-center bg-paper">
            СПАСИ. ОХРАНИ. ПАНЕЛЬКА. НЕБО. БЛОК.
          </p>
        </div>
        
        <div className="mt-20 flex justify-center border-t-8 border-ink pt-10">
          <img src="/17.jpg" alt="Ornament" className="h-64 object-contain grayscale contrast-200 mix-blend-multiply" onError={(e) => e.currentTarget.src = 'https://picsum.photos/seed/ornament2/600/300?grayscale'} />
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <footer className="py-32 px-4 bg-ink text-paper flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 mix-blend-screen grayscale" style={{ backgroundImage: 'url(/16.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      
      <div className="relative z-10 border-[12px] border-blood p-12 md:p-20 rotate-rand-3 max-w-3xl text-center bg-ink/95 backdrop-blur-sm shadow-[16px_16px_0_#BB0017]">
        <h2 className="text-6xl md:text-8xl font-heading uppercase mb-8 text-blood">Связь</h2>
        <p className="font-body text-2xl md:text-3xl mb-12 tracking-wide">Если ты тоже слышишь голоса из вентиляции — пиши.</p>
        <a href="mailto:panelka@husky.ru" className="font-heading text-4xl md:text-6xl border-b-8 border-blood hover:bg-blood hover:text-ink transition-colors duration-0 px-4 py-2 inline-block rotate-rand-1">
          PANELKA@HUSKY.RU
        </a>
      </div>
      
      <div className="mt-32 relative z-10 font-body text-2xl text-concrete tracking-[1em]">
        * * * ✕ * * *
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blood selection:text-paper">
      <HeroSection />
      <MaterialsSection />
      <ArchiveSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
