"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Phone, Mail, MapPin, Send, ChevronDown, Zap, Linkedin, Twitter, Instagram, Github, CheckCircle, Check } from "lucide-react";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background:"linear-gradient(135deg, rgba(59,139,250,0.85) 0%, rgba(124,58,237,0.85) 50%, rgba(167,139,250,0.85) 100%)",
        backdropFilter:"blur(0px)"
      }}/>
      {/* Orbs inside CTA */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25" style={{ background:"radial-gradient(circle, rgba(255,255,255,0.3), transparent)", filter:"blur(60px)" }}/>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-25" style={{ background:"radial-gradient(circle, rgba(255,255,255,0.3), transparent)", filter:"blur(60px)" }}/>
      {/* Glass pattern */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage:"linear-gradient(rgba(255,255,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.06) 1px,transparent 1px)",
        backgroundSize:"40px 40px"
      }}/>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>
        <motion.div initial={{ opacity:0, y:24 }} animate={inView?{opacity:1,y:0}:{}} transition={{ duration:0.7 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border border-white/25" style={{ background:"rgba(255,255,255,0.18)", backdropFilter:"blur(12px)" }}>
            <Zap className="w-3.5 h-3.5 text-white"/>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-white" style={{ fontFamily:"var(--font-display)" }}>Siguiente nivel</span>
          </div>
          <h2 className="font-bold text-white leading-tight mb-6" style={{ fontFamily:"var(--font-display)", fontSize:"clamp(36px,5.5vw,72px)", fontWeight:800, letterSpacing:"-0.02em" }}>
            Transforma tu operación<br /><span style={{ color:"rgba(199,230,255,0.95)" }}>hoy mismo.</span>
          </h2>
          <p className="text-white/70 text-[17px] mb-8 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily:"var(--font-body)" }}>
            Solicita una demo y descubre cómo reducir costos, automatizar procesos y llevar tu empresa al siguiente nivel con IA.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Sin costo de implementación inicial","Resultados en 30 días","Propuesta personalizada gratuita"].map(b=>(
              <div key={b} className="flex items-center gap-2 text-[13px] text-white/75" style={{ fontFamily:"var(--font-body)" }}>
                <Check className="w-4 h-4 text-green-300 flex-shrink-0"/>{b}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contacto" className="btn-white px-10 py-4 text-[15px]">
              Solicitar Demo Gratuito <ArrowRight className="w-5 h-5"/>
            </a>
            <a href="https://wa.me/593990000000"
              className="inline-flex items-center gap-2 text-white border border-white/25 rounded-2xl px-10 py-4 text-[15px] font-bold hover:bg-white/15 transition-all"
              style={{ fontFamily:"var(--font-display)", backdropFilter:"blur(8px)" }}>
              <MessageCircle className="w-5 h-5"/> WhatsApp ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name:"", email:"", company:"", phone:"", service:"", message:"" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  return (
    <section id="contacto" className="py-28 relative overflow-hidden">
      <div className="orb w-[500px] h-[500px] top-0 right-0 opacity-35" style={{ background:"radial-gradient(circle, rgba(224,212,255,0.8), transparent)", animationDelay:"2s" }}/>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity:0, x:-24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7 }}>
            <div className="section-tag mb-6">Contáctanos</div>
            <h2 className="headline-lg mb-5">Hablemos de <span className="text-gradient">tu proyecto</span></h2>
            <p className="prose-lead mb-10">Cuéntanos tu desafío. Un especialista te contactará en menos de 24 horas con un plan de acción concreto.</p>
            <div className="space-y-3 mb-10">
              {[
                { Icon:Phone, l:"Teléfono", v:"+593 99 000 0000", href:"tel:+5930000000", c:"var(--blue)" },
                { Icon:Mail, l:"Email", v:"hola@inteliabyte.com", href:"mailto:hola@inteliabyte.com", c:"var(--violet-d)" },
                { Icon:MessageCircle, l:"WhatsApp", v:"Escríbenos ahora", href:"https://wa.me/593990000000", c:"var(--teal)" },
                { Icon:MapPin, l:"Ubicación", v:"Ecuador · América Latina", href:"#", c:"#f59e0b" },
              ].map(c=>(
                <a key={c.l} href={c.href} className="flex items-center gap-3.5 group p-3.5 rounded-2xl transition-all glass-card" style={{ textDecoration:"none" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/60"
                    style={{ background:`${c.c === "var(--blue)" ? "rgba(59,139,250,0.10)" : c.c === "var(--violet-d)" ? "rgba(124,58,237,0.10)" : c.c === "var(--teal)" ? "rgba(0,201,167,0.10)" : "rgba(245,158,11,0.10)"}` }}>
                    <c.Icon className="w-5 h-5" style={{ color:c.c }}/>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>{c.l}</div>
                    <div className="text-[14px] font-medium" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{c.v}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-6">
              <p className="text-[10.5px] font-bold uppercase tracking-wider mb-4" style={{ fontFamily:"var(--font-display)", color:"var(--text-4)" }}>Nuestros compromisos</p>
              <div className="space-y-3">
                {["Respuesta en menos de 24 horas","Demo personalizado sin compromiso","Propuesta técnica y económica gratuita"].map(p=>(
                  <div key={p} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border border-white/60" style={{ background:"rgba(0,201,167,0.12)" }}>
                      <CheckCircle className="w-3 h-3" style={{ color:"var(--teal)" }}/>
                    </div>
                    <span className="text-[13.5px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity:0, x:24 }} animate={inView?{opacity:1,x:0}:{}} transition={{ duration:0.7, delay:0.12 }}>
            <div className="glass-strong rounded-3xl overflow-hidden" style={{ boxShadow:"0 24px 80px rgba(100,80,200,0.22), inset 0 1px 0 rgba(255,255,255,0.90)" }}>
              <div className="px-8 py-5 border-b" style={{ background:"rgba(255,255,255,0.40)", borderColor:"rgba(255,255,255,0.60)" }}>
                <h3 className="font-bold text-[17px]" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>Solicitar información</h3>
                <p className="text-[12.5px] mt-0.5" style={{ fontFamily:"var(--font-body)", color:"var(--text-3)" }}>Completa el formulario y te contactamos en 24h</p>
              </div>
              <div className="p-8">
                {sent ? (
                  <motion.div initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 border border-white/60" style={{ background:"rgba(0,201,167,0.12)" }}>
                      <CheckCircle className="w-8 h-8" style={{ color:"var(--teal)" }}/>
                    </div>
                    <h3 className="font-bold text-xl mb-2" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>¡Mensaje enviado!</h3>
                    <p style={{ fontFamily:"var(--font-body)", color:"var(--text-3)" }}>Te contactaremos en menos de 24 horas.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={e=>{ e.preventDefault(); setSent(true); }} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>Nombre *</label>
                        <input className="input-glass" placeholder="Tu nombre" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>Email *</label>
                        <input type="email" className="input-glass" placeholder="tu@empresa.com" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>Empresa</label>
                        <input className="input-glass" placeholder="Tu empresa" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/>
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>Teléfono</label>
                        <input className="input-glass" placeholder="+593 99..." value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>¿Qué te interesa?</label>
                      <select className="input-glass" value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                        <option value="">Selecciona una opción</option>
                        <option>Taurus Next</option><option>Voice Bot IVR</option><option>Agente Negociador</option>
                        <option>Infraestructura Asistida</option><option>Ciberseguridad</option>
                        <option>Autoatención Digital</option><option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider mb-1.5 block" style={{ fontFamily:"var(--font-display)", color:"var(--text-3)" }}>Mensaje</label>
                      <textarea className="input-glass resize-none h-28" placeholder="Cuéntanos sobre tu empresa y el desafío que quieres resolver..."
                        value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-4 text-[14.5px] rounded-2xl">
                      <Send className="w-4 h-4"/> Enviar mensaje
                    </button>
                    <p className="text-[11px] text-center" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>Sin spam. Tu información es confidencial y segura.</p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  { q:"¿Cuánto tiempo toma implementar Taurus Next?", a:"La implementación base toma entre 2 y 4 semanas. Metodologías ágiles permiten generar valor desde la primera semana." },
  { q:"¿El Voice Bot funciona con cualquier sistema telefónico?", a:"Sí. Integramos con SIP, PBX, ISDN y proveedores cloud como Twilio, Amazon Connect y plataformas locales." },
  { q:"¿Cómo garantizan la seguridad de los datos?", a:"Cifrado extremo a extremo, controles de acceso granular, auditorías y cumplimiento ISO 27001, SOC 2 y regulaciones financieras." },
  { q:"¿El Agente Negociador puede personalizarse?", a:"El agente se entrena con tu base de conocimiento, políticas de negociación, rangos de acuerdo y flujos de tu sector." },
  { q:"¿Ofrecen soporte post-implementación?", a:"Sí, todos los proyectos incluyen soporte especializado. Planes desde N1 hasta soporte dedicado 24/7 con ingenieros asignados." },
  { q:"¿Se integran con nuestros sistemas existentes?", a:"APIs REST robustas y conectores nativos para ERPs, CRMs y sistemas core bancarios del mercado latinoamericano." },
];

export function FAQ() {
  const [open, setOpen] = useState<number|null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once:true });
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] top-1/2 left-0 opacity-30" style={{ transform:"translateY(-50%)", background:"radial-gradient(circle, rgba(199,240,255,0.7), transparent)", animationDelay:"3s" }}/>
      <div className="relative z-10 max-w-3xl mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity:0, y:20 }} animate={inView?{opacity:1,y:0}:{}} className="mb-12 text-center">
          <h2 className="headline-md mb-3">Preguntas <span className="text-gradient">frecuentes</span></h2>
        </motion.div>
        <div className="space-y-2.5">
          {faqs.map((f,i)=>(
            <motion.div key={i} initial={{ opacity:0, y:14 }} animate={inView?{opacity:1,y:0}:{}} transition={{ delay:i*0.05 }}
              className="glass-card rounded-2xl overflow-hidden">
              <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={()=>setOpen(open===i?null:i)}>
                <span className="font-semibold text-[14.5px] pr-4" style={{ fontFamily:"var(--font-display)", color:"var(--text)" }}>{f.q}</span>
                <ChevronDown className="w-4 h-4 flex-shrink-0 transition-transform duration-300" style={{ color:"var(--violet-d)", transform:open===i?"rotate(180deg)":"rotate(0deg)" }}/>
              </button>
              <AnimatePresence>
                {open===i&&(
                  <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.25 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-[14px] leading-relaxed border-t border-white/40 pt-4" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative" style={{ background:"rgba(26,35,64,0.95)", backdropFilter:"blur(20px)", borderTop:"1px solid rgba(167,139,250,0.20)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"linear-gradient(135deg,var(--blue),var(--violet-d))" }}>
                <Zap className="w-4 h-4 text-white"/>
              </div>
              <span className="font-bold text-[17px] tracking-tight text-white" style={{ fontFamily:"var(--font-display)", fontWeight:800 }}>
                intelia<span style={{ color:"var(--violet)" }}>byte</span>
              </span>
            </div>
            <p className="text-[13px] leading-relaxed mb-5 max-w-xs" style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.42)" }}>
              Tecnología, automatización e inteligencia artificial para empresas que quieren liderar su mercado.
            </p>
            <div className="flex items-center gap-2">
              {[Linkedin,Twitter,Instagram,Github].map((Icon,i)=>(
                <a key={i} href="#" className="w-8 h-8 rounded-lg border flex items-center justify-center transition-all" style={{ borderColor:"rgba(255,255,255,0.12)", color:"rgba(255,255,255,0.35)" }}>
                  <Icon className="w-3.5 h-3.5"/>
                </a>
              ))}
            </div>
          </div>
          {[
            { title:"Servicios", links:["Infraestructura Asistida","Ciberseguridad","Soporte N1","Autoatención Digital"], href:"#servicios" },
            { title:"Productos", links:["Taurus Next","Voice Bot IVR","Agente Negociador"], href:"#productos" },
            { title:"Empresa",   links:["Nosotros","Soluciones","Casos de uso","Contacto"], href:"#" },
          ].map(col=>(
            <div key={col.title}>
              <div className="text-[10px] font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily:"var(--font-display)", color:"var(--violet)" }}>{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map(l=>(
                  <li key={l}><a href={col.href} className="text-[12.5px] transition-colors" style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.38)" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
          <p className="text-[11.5px]" style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.28)" }}>© {new Date().getFullYear()} Inteliabyte. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            {["Privacidad","Términos","Cookies"].map(t=>(
              <a key={t} href="#" className="text-[11.5px] transition-colors" style={{ fontFamily:"var(--font-body)", color:"rgba(255,255,255,0.28)" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
