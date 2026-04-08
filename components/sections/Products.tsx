"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { LayoutDashboard, Phone, Bot, Check, ArrowRight, Sparkles } from "lucide-react";

const products = [
  { icon:LayoutDashboard, flagship:true, badge:"Producto Flagship", name:"Taurus Next", sub:"Gestión operativa inteligente de cobranzas", desc:"Plataforma SaaS de última generación para cobranzas, operaciones y cartera. CRM, automatización de flujos, reportería e integración IA nativa.", benefits:["CRM de cobranzas con IA predictiva","Automatización de workflows complejos","Dashboard ejecutivo en tiempo real","Módulo de promesas y acuerdos","Integración omnicanal completa","Reportería regulatoria automatizada"], useCases:["Financieras y bancos","Cobranzas","Utilities","Retail crédito"], c:"var(--blue)", grad:"linear-gradient(135deg,#3b8bfa,#a78bfa)" },
  { icon:Phone,           flagship:false, badge:"Automatización IA",  name:"Voice Bot IVR", sub:"Llamadas salientes inteligentes con IA", desc:"Agente de voz IA para campañas de cobranza, encuestas y notificaciones. Conversaciones naturales, NLP avanzado y escalamiento automático.", benefits:["Voz natural con NLP avanzado","Campañas salientes masivas","Detección de intención en tiempo real","Escalamiento a agente humano","Panel de resultados de campaña","Integración con marcadores predictivos"], useCases:["Cobranza preventiva","Citas","NPS","Notificaciones masivas"], c:"var(--violet-d)", grad:"linear-gradient(135deg,#7c3aed,#a78bfa)" },
  { icon:Bot,             flagship:false, badge:"IA Conversacional",  name:"Agente Negociador", sub:"Negociación y acuerdos automáticos", desc:"Agente IA que negocia acuerdos de pago en tiempo real con propuestas personalizadas por perfil del deudor. Cierra más con menos recursos.", benefits:["Propuestas de pago por IA predictiva","Negociación multicanal (WhatsApp, IVR, web)","Análisis de perfil crediticio en tiempo real","Generación automática de acuerdos","Integración con sistemas de pago","Auditoría completa de interacciones"], useCases:["Negociación deudas","Reestructuración","Acuerdos de pago","Recuperación temprana"], c:"var(--teal)", grad:"linear-gradient(135deg,#00c9a7,#3b8bfa)" },
];

function ProductCard({ p, i }: { p:typeof products[0], i:number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-50px" });
  return (
    <motion.div ref={ref} initial={{ opacity:0, y:32 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.12 }}
      className="glass-card rounded-3xl overflow-hidden flex flex-col relative"
      style={{ boxShadow: p.flagship ? "0 16px 60px rgba(100,80,200,0.25), 0 4px 16px rgba(100,80,200,0.15), inset 0 1px 0 rgba(255,255,255,0.85)" : undefined }}>
      {p.flagship && (
        <div className="absolute top-5 right-5 text-white text-[9px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"
          style={{ fontFamily:"var(--font-display)", background:"linear-gradient(135deg,var(--blue),var(--violet-d))", boxShadow:"0 4px 16px rgba(100,80,200,0.35)" }}>
          <Sparkles className="w-2.5 h-2.5"/> FLAGSHIP
        </div>
      )}
      <div className="h-1.5" style={{ background:p.grad }}/>
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/60"
            style={{ background:`${p.c === "var(--blue)" ? "rgba(59,139,250,0.12)" : p.c === "var(--violet-d)" ? "rgba(124,58,237,0.12)" : "rgba(0,201,167,0.12)"}` }}>
            <p.icon className="w-6 h-6" style={{ color:p.c }}/>
          </div>
          <span className="text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
            style={{ fontFamily:"var(--font-display)", color:p.c, background:`${p.c === "var(--blue)" ? "rgba(59,139,250,0.10)" : p.c === "var(--violet-d)" ? "rgba(124,58,237,0.10)" : "rgba(0,201,167,0.10)"}`, border:`1px solid ${p.c === "var(--blue)" ? "rgba(59,139,250,0.25)" : p.c === "var(--violet-d)" ? "rgba(124,58,237,0.25)" : "rgba(0,201,167,0.25)"}` }}>
            {p.badge}
          </span>
        </div>
        <h3 className="font-bold text-[22px] mb-1" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{p.name}</h3>
        <p className="text-[12.5px] font-semibold mb-4" style={{ fontFamily:"var(--font-body)", color:p.c }}>{p.sub}</p>
        <p className="prose-body text-[13.5px] mb-6">{p.desc}</p>
        <ul className="space-y-2.5 mb-6 flex-1">
          {p.benefits.map(b=>(
            <li key={b} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/60"
                style={{ background:`${p.c === "var(--blue)" ? "rgba(59,139,250,0.10)" : p.c === "var(--violet-d)" ? "rgba(124,58,237,0.10)" : "rgba(0,201,167,0.10)"}` }}>
                <Check className="w-2.5 h-2.5" style={{ color:p.c }}/>
              </div>
              <span className="text-[13px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mb-8">
          {p.useCases.map(u=>(
            <span key={u} className="text-[10.5px] px-2.5 py-1 rounded-xl border border-white/60" style={{ fontFamily:"var(--font-body)", color:p.c, background:`${p.c === "var(--blue)" ? "rgba(59,139,250,0.08)" : p.c === "var(--violet-d)" ? "rgba(124,58,237,0.08)" : "rgba(0,201,167,0.08)"}` }}>{u}</span>
          ))}
        </div>
        <a href="#contacto" className="btn-primary justify-center py-3.5 rounded-2xl mt-auto" style={{ background:p.grad }}>
          Ver Demo <ArrowRight className="w-4 h-4"/>
        </a>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, margin:"-100px" });
  return (
    <section id="productos" className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 left-0 opacity-35" style={{ background:"radial-gradient(circle, rgba(224,212,255,0.8), transparent)", animationDelay:"1s" }}/>
      <div className="orb w-[400px] h-[400px] bottom-0 right-0 opacity-35" style={{ background:"radial-gradient(circle, rgba(199,240,255,0.7), transparent)", animationDelay:"5s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-16 max-w-2xl">
          <div className="section-tag mb-5">Tecnología propia</div>
          <h2 className="headline-lg mb-5">Nuestros <span className="text-gradient">Productos</span></h2>
          <p className="prose-lead">Plataformas que resuelven los desafíos más complejos de la operación empresarial moderna.</p>
        </motion.div>
        <div className="grid lg:grid-cols-3 gap-7">
          {products.map((p,i)=><ProductCard key={p.name} p={p} i={i}/>)}
        </div>
      </div>
    </section>
  );
}
