"use client";
import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { v:99.9, s:"%",  l:"Disponibilidad SLA",  sub:"Uptime garantizado",      c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { v:40,   s:"%",  l:"Reducción de costos", sub:"Promedio por cliente",     c:"var(--teal)",    bg:"rgba(0,201,167,0.10)" },
  { v:60,   s:"%",  l:"Automatización",      sub:"De procesos operativos",   c:"var(--violet-d)",bg:"rgba(124,58,237,0.10)" },
  { v:35,   s:"%",  l:"Mejora en atención",  sub:"Satisfacción del cliente", c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { v:200,  s:"+",  l:"Proyectos exitosos",  sub:"Implementaciones",         c:"#f59e0b",        bg:"rgba(245,158,11,0.10)" },
  { v:24,   s:"/7", l:"Soporte activo",      sub:"Sin interrupciones",       c:"var(--teal)",    bg:"rgba(0,201,167,0.10)" },
];

function Counter({ v, s }: { v:number; s:string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  const [d, setD] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(0, v, { duration:2.2, ease:"easeOut", onUpdate:n=>setD(n) });
    return ctrl.stop;
  }, [inView, v]);
  return <span ref={ref} className="font-bold text-[38px] leading-none" style={{ fontFamily:"var(--font-display)", fontWeight:800 }}>
    {v%1!==0?d.toFixed(1):Math.round(d)}{s}
  </span>;
}

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="glass-divider mb-0"/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <motion.div ref={ref} initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} className="text-center mb-12">
          <h2 className="headline-md mb-3">Resultados que <span className="text-gradient">hablan solos</span></h2>
          <p className="prose-body">Métricas reales de nuestras implementaciones enterprise</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((m,i)=>(
            <motion.div key={m.l} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.08 }}
              className="glass-card rounded-2xl p-5 text-center">
              <div style={{ color:m.c }}><Counter v={m.v} s={m.s}/></div>
              <div className="font-bold text-[12px] mt-2" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{m.l}</div>
              <div className="text-[10px] mt-0.5" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="glass-divider"/>
    </section>
  );
}
