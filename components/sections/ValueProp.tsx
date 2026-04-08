"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Building2, Rocket, Target, Brain, Lock, Headphones, Layers } from "lucide-react";

const items = [
  { icon:Lightbulb,   n:"01", title:"Innovación Aplicada",      desc:"Tecnologías emergentes convertidas en resultados medibles desde el día uno.",                  c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { icon:Building2,   n:"02", title:"Soluciones Enterprise",     desc:"Arquitecturas para bancos y corporativos con los más altos estándares de calidad.",             c:"var(--violet-d)",bg:"rgba(124,58,237,0.10)" },
  { icon:Rocket,      n:"03", title:"Implementación Ágil",       desc:"Desplegamos en días, no meses. Metodologías que minimizan riesgo y tiempo.",                   c:"var(--teal)",    bg:"rgba(0,201,167,0.10)" },
  { icon:Target,      n:"04", title:"Orientados a Resultados",   desc:"KPIs tangibles: eficiencia, reducción de costos y crecimiento medible.",                       c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { icon:Brain,       n:"05", title:"IA en cada capa",           desc:"Modelos de IA integrados en la operación para decisiones más inteligentes.",                   c:"var(--violet)",  bg:"rgba(167,139,250,0.12)" },
  { icon:Lock,        n:"06", title:"Seguridad Corporativa",     desc:"Protección de nivel bancario y cumplimiento normativo internacional.",                          c:"#f59e0b",        bg:"rgba(245,158,11,0.10)" },
  { icon:Headphones,  n:"07", title:"Soporte Especializado",     desc:"Ingenieros certificados con SLA garantizados y escalamiento inmediato 24/7.",                   c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { icon:Layers,      n:"08", title:"Arquitectura Escalable",    desc:"Infraestructura cloud-native que crece con tu empresa sin límites artificiales.",               c:"var(--teal)",    bg:"rgba(0,201,167,0.10)" },
];

export default function ValueProp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 right-0 opacity-40" style={{ background:"radial-gradient(circle, rgba(224,212,255,0.8), transparent)", animationDelay:"2s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-16 max-w-2xl">
          <div className="section-tag mb-5">Por qué elegirnos</div>
          <h2 className="headline-lg mb-5">La ventaja <span className="text-gradient">Inteliabyte</span></h2>
          <p className="prose-lead">Combinamos visión estratégica, tecnología de vanguardia y ejecución impecable para entregar resultados que otros prometen pero no alcanzan.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it,i)=>(
            <motion.div key={it.n} initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.07, duration:0.5 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-4 right-4 font-bold text-5xl select-none" style={{ fontFamily:"var(--font-display)", color:"rgba(167,139,250,0.12)", fontSize:52 }}>{it.n}</div>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-white/60" style={{ background:it.bg }}>
                <it.icon className="w-5 h-5" style={{ color:it.c }}/>
              </div>
              <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{it.title}</h3>
              <p className="prose-body text-[13.5px]">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
