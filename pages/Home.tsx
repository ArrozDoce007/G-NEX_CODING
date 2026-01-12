import React from 'react';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import ProjectCarousel from '../components/ProjectCarousel';
import { projectsData } from '../data/projects';

interface HomeProps {
  onProjectClick: (id: string) => void;
}

const Home: React.FC<HomeProps> = ({ onProjectClick }) => {
  return (
    <main className="bg-transparent">
      <Hero />
      
      {/* Featured Showcase Section - Spacing Optimized */}
      <section className="py-12 overflow-hidden" id="showcase">
        <div className="container mx-auto px-6 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-brand-purple" />
            <span className="text-xs font-mono font-bold text-brand-purple uppercase tracking-[0.3em]">Showcase Elite</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tighter">Projetos em <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-violet-400">Destaque</span></h2>
        </div>
        
        <ProjectCarousel onProjectClick={onProjectClick} />
      </section>

      <section className="py-16 scroll-mt-24" id="projects">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors duration-500 text-shadow-sm">Todos os Cases</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-base transition-colors duration-500 leading-relaxed">
                Nossa biblioteca completa de soluções digitais validadas e entregues.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] font-mono text-brand-purple dark:text-violet-400 uppercase tracking-[0.2em] border border-brand-purple/30 px-6 py-2.5 rounded-full font-bold bg-brand-purple/5 backdrop-blur-xl">
                {projectsData.length} CASES CATALOGADOS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onClick={onProjectClick} 
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/[0.02] dark:bg-black/40 backdrop-blur-2xl border-y border-black/5 dark:border-white/10 transition-colors duration-500 scroll-mt-24" id="methodology">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-12 text-slate-900 dark:text-white tracking-tight transition-colors duration-500 uppercase tracking-widest">Metodologia de Entrega Elite</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { label: 'Estratégia UX', text: 'Mapeamento psicológico do usuário para conversão máxima.' },
              { label: 'Código Limpo', text: 'Arquitetura preparada para escala global e manutenção zero.' },
              { label: 'Performance', text: 'Otimização Core Web Vitals para carregamento instantâneo.' },
              { label: 'Homologação', text: 'Garantia total de qualidade através de testes rigorosos.' }
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl border border-black/10 dark:border-white/20 flex items-center justify-center text-brand-purple dark:text-violet-400 font-mono mb-5 font-bold bg-white/50 dark:bg-slate-900/50 shadow-lg group-hover:scale-110 group-hover:border-brand-purple/40 transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold mb-2 text-slate-900 dark:text-white text-base transition-colors duration-500">{item.label}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 px-2 leading-relaxed transition-colors duration-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;