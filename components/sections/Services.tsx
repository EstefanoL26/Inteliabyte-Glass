"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, ShieldCheck, Headphones, MessageSquare, Check, ArrowUpRight } from "lucide-react";

const services = [
  { icon:Server,        name:"Administración de Infraestructura", tagline:"Operaciones sin interrupciones, 24/7",         desc:"Gestión proactiva con monitoreo continuo, automatización de tareas críticas y respuesta inmediata. Disponibilidad máxima y rendimiento óptimo.", benefits:["Monitoreo 24/7 con alertas inteligentes","Automatización de mantenimiento preventivo","SLA garantizado +99.9% uptime","Escalamiento bajo demanda","Reportería ejecutiva mensual"], c:"var(--blue)", bg:"rgba(59,139,250,0.10)", border:"rgba(59,139,250,0.25)" },
  { icon:ShieldCheck,   name:"Ciberseguridad Administrada",       tagline:"Protección enterprise en tiempo real",         desc:"SOC gestionado con análisis de amenazas avanzadas, respuesta a incidentes y cumplimiento normativo. Protección integral de datos, redes y sistemas críticos.", benefits:["SOC as a Service — detección en tiempo real","Análisis de vulnerabilidades continuo","Respuesta y contención de incidentes","Cumplimiento ISO 27001 / NIST","Pentesting periódico incluido"], c:"#f59e0b", bg:"rgba(245,158,11,0.10)", border:"rgba(245,158,11,0.28)" },
  { icon:Headphones,    name:"Soporte Técnico N1 en Sitio",       tagline:"Presencia física, respuesta inmediata",        desc:"Técnicos certificados en tus instalaciones para resolución inmediata de incidentes, soporte a usuarios y gestión del parque tecnológico.", benefits:["Técnicos certificados en sitio","Gestión de tickets con SLA definidos","Soporte a usuarios y endpoint","Inventario tecnológico actualizado","Informes periódicos de gestión"], c:"var(--teal)", bg:"rgba(0,201,167,0.10)", border:"rgba(0,201,167,0.28)" },
  { icon:MessageSquare, name:"Autoatención Digital",               tagline:"Agentes WhatsApp · Firma Digital",             desc:"Agentes conversacionales inteligentes y firma digital que eliminan fricciones, aceleran procesos y mejoran la experiencia del cliente.", benefits:["Agentes IA en WhatsApp Business","Firma digital con validez legal","Flujos de autogestión automatizados","Integración con sistemas legados","Dashboards en tiempo real"], c:"var(--violet-d)", bg:"rgba(124,58,237,0.10)", border:"rgba(124,58,237,0.28)" },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  return (
    <section id="servicios" className="py-28 relative overflow-hidden">
      <div className="orb w-[600px] h-[500px] bottom-0 left-0 opacity-35" style={{ background:"radial-gradient(circle, rgba(199,240,255,0.7), transparent)", animationDelay:"4s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-16 max-w-2xl">
          <div className="section-tag mb-5">Servicios gestionados</div>
          <h2 className="headline-lg mb-5">Nuestros <span className="text-gradient">Servicios</span></h2>
          <p className="prose-lead">Servicios de alto valor para empresas que no pueden permitirse la mediocridad tecnológica.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s,i)=>(
            <motion.div key={s.name} initial={{ opacity:0, y:32 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.09 }}
              className="glass-card rounded-2xl flex flex-col relative overflow-hidden"
              style={{ borderTop:`3px solid ${s.c}` }}>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center border flex-shrink-0" style={{ background:s.bg, borderColor:s.border }}>
                    <s.icon className="w-6 h-6" style={{ color:s.c }}/>
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] leading-tight" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{s.name}</h3>
                    <p className="text-[12px] font-semibold mt-0.5" style={{ fontFamily:"var(--font-body)", color:s.c }}>{s.tagline}</p>
                  </div>
                </div>
                <p className="prose-body mb-6">{s.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {s.benefits.map(b=>(
                    <li key={b} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background:s.bg }}>
                        <Check className="w-2.5 h-2.5" style={{ color:s.c }}/>
                      </div>
                      <span className="text-[13.5px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="flex items-center gap-2 font-bold text-[13px] mt-auto group/link" style={{ fontFamily:"var(--font-display)", color:s.c }}>
                  Más información <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
