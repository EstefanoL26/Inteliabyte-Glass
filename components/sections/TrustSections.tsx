"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, Award, Users, TrendingUp, Shield } from "lucide-react";

const testimonials = [
  { name:"Ricardo Andrade",  title:"CTO — Financiera Andina",      text:"Automatizamos el 65% de nuestras gestiones con Taurus Next y el Voice Bot. Los resultados superaron las expectativas en el primer trimestre.", rating:5, abbr:"RA", c:"var(--blue)",    bg:"rgba(59,139,250,0.10)" },
  { name:"Camila Vásquez",   title:"Gerente de Ops — Grupo Orión", text:"El Agente Negociador cerró más acuerdos en el primer mes que nuestro equipo anterior en un trimestre completo.", rating:5, abbr:"CV", c:"var(--violet-d)", bg:"rgba(124,58,237,0.10)" },
  { name:"Sebastián Torres", title:"CISO — Banco Regional Austral", text:"Detectaron y neutralizaron una amenaza crítica en menos de 12 minutos. La visibilidad que nos dan es invaluable.", rating:5, abbr:"ST", c:"#f59e0b",        bg:"rgba(245,158,11,0.10)" },
  { name:"Daniela Moreno",   title:"Dir. Digital — Telecom Sur",   text:"El chatbot de WhatsApp redujo el 72% de llamadas al call center. Clientes satisfechos y costos operativos a la baja.", rating:5, abbr:"DM", c:"var(--teal)",    bg:"rgba(0,201,167,0.10)" },
];

const logos = ["BANCORP","FINANCIERA+","GROUPTECH","ORION.SA","TELCOM","DATASYS"];

const whyItems = [
  { icon:"🎯", title:"Enfoque Consultivo",         desc:"No vendemos tecnología, resolvemos problemas de negocio con estrategia, diseño y ejecución impecable." },
  { icon:"⚡", title:"Tecnología de Vanguardia",   desc:"Usamos las últimas generaciones de IA, cloud y seguridad en cada solución que entregamos." },
  { icon:"🔄", title:"Soluciones Integrales",      desc:"Cubrimos todo el ciclo: estrategia, implementación, soporte y evolución continua." },
  { icon:"📈", title:"Diseño para Crecimiento",    desc:"Arquitecturas que escalan con tu empresa sin deuda técnica ni cuellos de botella." },
  { icon:"🛡️", title:"Seguridad y Continuidad",   desc:"Protección enterprise con cumplimiento normativo y planes de continuidad de negocio." },
  { icon:"🤖", title:"Automatización Inteligente", desc:"IA que aprende, se adapta y mejora continuamente los procesos que gestiona." },
  { icon:"✨", title:"UX y Eficiencia Operativa",  desc:"Interfaces intuitivas que maximizan la adopción y reducen la curva de aprendizaje." },
  { icon:"🤝", title:"Atención Personalizada",     desc:"Equipo dedicado que actúa como extensión de tu área tecnológica." },
];

export function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  return (
    <section id="casos" className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 right-0 opacity-35" style={{ background:"radial-gradient(circle, rgba(224,212,255,0.8), transparent)", animationDelay:"3s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-16 max-w-2xl">
          <div className="section-tag mb-5">La diferencia</div>
          <h2 className="headline-lg mb-5">Por qué <span className="text-gradient">elegirnos</span></h2>
          <p className="prose-lead">Más que proveedor de tecnología, somos el socio estratégico que acelera tu crecimiento y protege tu operación.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {whyItems.map((it,i)=>(
            <motion.div key={it.title} initial={{ opacity:0, y:28 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.06 }}
              className="glass-card rounded-2xl p-6">
              <div className="text-3xl mb-4">{it.icon}</div>
              <h3 className="font-bold text-[15px] mb-2" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{it.title}</h3>
              <p className="prose-body text-[13px]">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-80px" });
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="orb w-[600px] h-[400px] top-1/2 left-1/2 opacity-30" style={{ transform:"translate(-50%,-50%)", background:"radial-gradient(circle, rgba(224,212,255,0.7), transparent)", animationDelay:"2s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-14 max-w-xl">
          <div className="section-tag mb-5">Testimonios</div>
          <h2 className="headline-lg mb-5">Lo que dicen <span className="text-gradient">nuestros clientes</span></h2>
        </motion.div>
        <motion.div initial={{ opacity:0 }} animate={inView?{opacity:1}:{}} transition={{ delay:0.2 }} className="flex flex-wrap gap-4 mb-14">
          {logos.map(l=>(
            <div key={l} className="glass-card rounded-xl px-5 py-2.5 text-[11px] font-bold tracking-widest transition-all" style={{ fontFamily:"var(--font-display)", color:"var(--text-4)" }}>{l}</div>
          ))}
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t,i)=>(
            <motion.div key={t.name} initial={{ opacity:0, y:32 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.1+i*0.1 }}
              className="glass-card rounded-2xl p-6" style={{ borderTop:`3px solid ${t.c}` }}>
              <Quote className="w-5 h-5 mb-4 opacity-30" style={{ color:t.c }}/>
              <p className="text-[13.5px] leading-relaxed mb-5 italic" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>"{t.text}"</p>
              <div className="flex mb-4">{[...Array(t.rating)].map((_,i)=><Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400"/>)}</div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[12px] font-bold border border-white/60 flex-shrink-0"
                  style={{ fontFamily:"var(--font-display)", background:t.bg, color:t.c }}>{t.abbr}</div>
                <div>
                  <div className="text-[13px] font-bold" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{t.name}</div>
                  <div className="text-[11px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  return (
    <section id="nosotros" className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[400px] top-0 left-1/4 opacity-35" style={{ background:"radial-gradient(circle, rgba(199,240,255,0.7), transparent)", animationDelay:"1s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div ref={ref} initial={{ opacity:0, x:-28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
            <div className="section-tag mb-6">Quiénes somos</div>
            <h2 className="headline-lg mb-6">Líderes en <span className="text-gradient">Tecnología Empresarial</span></h2>
            <p className="prose-lead mb-5">Inteliabyte nació de la convicción de que las empresas merecen tecnología de verdadero impacto. Somos ingenieros, estrategas y especialistas en IA que combinamos visión de negocio con excelencia técnica.</p>
            <p className="prose-body mb-10">Trabajamos con bancos, financieras, corporativos y empresas en crecimiento que necesitan un socio tecnológico confiable, innovador y orientado a resultados medibles.</p>
            <a href="#contacto" className="btn-primary px-8 py-4 text-[14px]">Conocer más →</a>
          </motion.div>
          <motion.div initial={{ opacity:0, x:28 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.15 }} className="grid grid-cols-2 gap-4">
            {[
              { Icon:TrendingUp, l:"Visión de Liderazgo",   d:"Referente tecnológico de América Latina en IA enterprise.", c:"var(--blue)" },
              { Icon:Shield,     l:"Seguridad Primero",     d:"La seguridad es el fundamento de cada decisión técnica.", c:"#f59e0b" },
              { Icon:Users,      l:"Equipo Clase Mundial",  d:"Ingenieros certificados y especialistas IA con experiencia real.", c:"var(--violet-d)" },
              { Icon:Award,      l:"Orientados a Valor",    d:"Medimos el éxito por el impacto en tu negocio.", c:"var(--teal)" },
            ].map((it,i)=>(
              <motion.div key={it.l} initial={{ opacity:0, y:16 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:0.25+i*0.1 }}
                className="glass-card rounded-2xl p-5">
                <it.Icon className="w-6 h-6 mb-3" style={{ color:it.c }}/>
                <h4 className="font-bold text-[13.5px] mb-1.5" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{it.l}</h4>
                <p className="prose-body text-[12px]">{it.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
