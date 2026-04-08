"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle, Shield, Cpu, Zap, Star, TrendingUp } from "lucide-react";

const ticker = ["✦ 99.9% Uptime SLA","✦ +200 empresas enterprise","✦ 40% reducción de costos","✦ Soporte 24/7","✦ ISO 27001 · SOC 2","✦ IA aplicada al negocio","✦ Implementación en días","✦ Integraciones nativas"];
const clients = ["BANCORP","FINANCIERA+","GROUPTECH","ORION.SA","TELCOM","DATASYS"];

export default function Hero() {
  const dup = [...ticker, ...ticker];
  return (
    <section id="inicio" className="relative overflow-hidden min-h-screen flex flex-col">

      {/* Orb blobs for depth */}
      <div className="orb w-[600px] h-[600px] top-[-100px] left-[-80px] opacity-60" style={{ background: "radial-gradient(circle, rgba(199,230,255,0.9), rgba(180,200,255,0.4))", animationDelay:"0s" }} />
      <div className="orb w-[500px] h-[500px] top-[-60px] right-[-60px] opacity-50" style={{ background: "radial-gradient(circle, rgba(224,212,255,0.9), rgba(200,180,255,0.4))", animationDelay:"3s" }} />
      <div className="orb w-[400px] h-[400px] bottom-[10%] left-[30%] opacity-40" style={{ background: "radial-gradient(circle, rgba(255,214,240,0.8), rgba(220,180,255,0.3))", animationDelay:"6s" }} />

      {/* Ticker strip */}
      <div className="relative z-10 overflow-hidden py-3 border-b" style={{ background: "rgba(255,255,255,0.28)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.55)" }}>
        <div className="ticker-track">
          {dup.map((t, i) => (
            <span key={i} className="px-8 whitespace-nowrap text-[11.5px] font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--text-3)" }}>{t}</span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex flex-col">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center py-16 lg:py-20 flex-1">

          {/* LEFT */}
          <div>
            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }} className="flex items-center gap-4 mb-7">
              <span className="label-tag">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background:"var(--violet-d)" }} />
                Enterprise Technology · Ecuador
              </span>
              <div className="hidden sm:flex items-center gap-1 text-[12px]" style={{ color:"var(--text-3)", fontFamily:"var(--font-body)" }}>
                {[...Array(5)].map((_,i)=><Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400"/>)}
                <span className="ml-1">+200 clientes</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity:0, y:22 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55, delay:0.07 }} className="headline-xl mb-6">
              Tu operación,<br />
              <span className="text-gradient">transformada</span><br />
              con IA.
            </motion.h1>

            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.13 }} className="prose-lead mb-8 max-w-xl">
              Automatización inteligente, ciberseguridad enterprise e inteligencia artificial
              aplicada. La plataforma que eligen bancos, financieras y corporativos para escalar sin límites.
            </motion.p>

            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.18 }} className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10">
              {["Implementación en días", "Soporte 24/7 incluido", "Sin costo de integración"].map(b => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(167,139,250,0.18)", border: "1px solid rgba(167,139,250,0.35)" }}>
                    <CheckCircle className="w-3 h-3" style={{ color:"var(--violet-d)" }} />
                  </div>
                  <span className="text-[13.5px] font-medium" style={{ fontFamily:"var(--font-body)", color:"var(--text-2)" }}>{b}</span>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.22 }} className="flex flex-wrap items-center gap-3 mb-14">
              <a href="#demo" className="btn-primary text-[14.5px] px-8 py-4 rounded-2xl">
                <Play className="w-4 h-4" /> Ver demo en vivo
              </a>
              <a href="#contacto" className="btn-glass text-[14.5px] px-8 py-4 rounded-2xl">
                Hablar con asesor <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}>
              <p className="text-[11px] uppercase tracking-[0.12em] mb-3 font-semibold" style={{ fontFamily:"var(--font-display)", color:"var(--text-4)" }}>Confiado por líderes del sector</p>
              <div className="flex flex-wrap gap-6 items-center">
                {clients.map(c => (
                  <span key={c} className="text-[11.5px] tracking-widest font-bold transition-colors" style={{ fontFamily:"var(--font-display)", color:"var(--text-4)" }}>{c}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — glass dashboard */}
          <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.7, delay:0.15 }}
            className="hidden lg:block flex-shrink-0 relative">

            {/* Glow behind card */}
            <div className="absolute inset-0 rounded-3xl scale-105"
              style={{ background:"radial-gradient(ellipse 80% 70% at 50% 50%, rgba(167,139,250,0.30), rgba(59,139,250,0.20), transparent)", filter:"blur(30px)" }} />

            <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut" }}
              className="relative glass-card rounded-3xl overflow-hidden" style={{ boxShadow:"0 24px 80px rgba(100,80,200,0.24), 0 4px 16px rgba(100,80,200,0.12), inset 0 1px 0 rgba(255,255,255,0.85)" }}>

              {/* Chrome bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b" style={{ background:"rgba(255,255,255,0.40)", borderColor:"rgba(255,255,255,0.60)" }}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[10.5px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>Taurus Next — Panel Operativo</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9.5px] font-semibold text-green-600">En vivo</span>
                </div>
              </div>

              <div className="p-5 space-y-4">
                {/* KPIs */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { n:"2,847", l:"Gestiones hoy",    c:"var(--blue)",   bg:"rgba(59,139,250,0.10)" },
                    { n:"94.2%", l:"Efectividad",      c:"#22c55e",       bg:"rgba(34,197,94,0.10)" },
                    { n:"$2.4M", l:"Cartera activa",   c:"var(--violet-d)", bg:"rgba(124,58,237,0.10)" },
                    { n:"318",   l:"Acuerdos hoy",     c:"var(--teal)",   bg:"rgba(0,201,167,0.10)" },
                  ].map(k=>(
                    <div key={k.l} className="rounded-2xl p-3.5 border" style={{ background:k.bg, borderColor:"rgba(255,255,255,0.60)", backdropFilter:"blur(8px)" }}>
                      <div className="text-[9px] uppercase tracking-wider mb-1" style={{ fontFamily:"var(--font-body)", color:"var(--text-3)" }}>{k.l}</div>
                      <div className="font-display text-[22px] font-bold leading-none" style={{ fontFamily:"var(--font-display)", fontWeight:800, color:k.c }}>{k.n}</div>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div className="rounded-2xl p-4 border" style={{ background:"rgba(255,255,255,0.40)", borderColor:"rgba(255,255,255,0.65)", backdropFilter:"blur(8px)" }}>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[9.5px] uppercase tracking-wider" style={{ fontFamily:"var(--font-body)", color:"var(--text-3)" }}>Recaudo hoy</span>
                    <span className="text-[10px] font-semibold text-green-600 flex items-center gap-0.5"><TrendingUp className="w-3 h-3"/>+18.4%</span>
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    {[28,45,38,60,52,75,65,80,72,88,70,100].map((h,i)=>(
                      <motion.div key={i} initial={{ scaleY:0 }} animate={{ scaleY:1 }} transition={{ delay:0.5+i*0.04 }}
                        className="flex-1 rounded-t-sm origin-bottom"
                        style={{ height:`${h}%`, background: i===11 ? "linear-gradient(to top, var(--blue), var(--violet))" : `rgba(100,80,200,${0.10+i*0.016})` }}/>
                    ))}
                  </div>
                </div>

                {/* Activity rows */}
                <div className="rounded-2xl border overflow-hidden" style={{ background:"rgba(255,255,255,0.35)", borderColor:"rgba(255,255,255,0.60)" }}>
                  {[
                    { name:"García López, Juan", a:"$4,500",  s:"Acuerdo",    ok:true },
                    { name:"Corp. Delta S.A.",   a:"$87,000", s:"Negociando", ok:false },
                    { name:"Tech Soluciones",    a:"$23,700", s:"Acuerdo",    ok:true },
                  ].map((r,i)=>(
                    <div key={r.name} className="flex items-center justify-between px-4 py-2.5 border-b last:border-0" style={{ borderColor:"rgba(255,255,255,0.50)" }}>
                      <div>
                        <div className="text-[11px] font-medium" style={{ color:"var(--text)" }}>{r.name}</div>
                        <div className="text-[9.5px]" style={{ color:"var(--text-4)" }}>{r.a}</div>
                      </div>
                      <span className="text-[9px] font-bold px-2.5 py-1 rounded-full" style={{ fontFamily:"var(--font-display)", background: r.ok ? "rgba(34,197,94,0.15)" : "rgba(245,158,11,0.15)", color: r.ok ? "#15803d" : "#92400e" }}>{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div animate={{ y:[0,-7,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:1 }}
              className="absolute -left-12 top-1/4 glass-card rounded-2xl px-4 py-3.5" style={{ boxShadow:"0 8px 32px rgba(100,80,200,0.22), inset 0 1px 0 rgba(255,255,255,0.85)" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"linear-gradient(135deg, var(--blue), var(--violet-d))" }}>
                  <Shield className="w-4 h-4 text-white"/>
                </div>
                <div>
                  <div className="text-[9px]" style={{ color:"var(--text-4)" }}>Ciberseguridad</div>
                  <div className="text-[12px] font-bold" style={{ fontFamily:"var(--font-display)", color:"#15803d" }}>✓ Protegido</div>
                </div>
              </div>
            </motion.div>

            <motion.div animate={{ y:[0,-7,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:2.5 }}
              className="absolute -right-8 bottom-1/4 glass-card rounded-2xl px-4 py-3.5" style={{ boxShadow:"0 8px 32px rgba(100,80,200,0.22), inset 0 1px 0 rgba(255,255,255,0.85)" }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background:"linear-gradient(135deg, var(--violet-d), var(--violet))" }}>
                  <Cpu className="w-4 h-4 text-white"/>
                </div>
                <div>
                  <div className="text-[9px]" style={{ color:"var(--text-4)" }}>IA activa</div>
                  <div className="text-[12px] font-bold" style={{ fontFamily:"var(--font-display)", color:"var(--violet-d)" }}>98.7% prec.</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
          className="glass-divider" />
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.55 }}
          className="py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[{v:"99.9%",l:"Disponibilidad SLA"},{v:"+200",l:"Empresas atendidas"},{v:"40%",l:"Reducción de costos"},{v:"24/7",l:"Soporte especializado"}].map(s=>(
            <div key={s.l} className="text-center">
              <div className="font-display font-bold text-3xl mb-0.5 text-gradient" style={{ fontFamily:"var(--font-display)", fontWeight:800 }}>{s.v}</div>
              <div className="text-[12px]" style={{ fontFamily:"var(--font-body)", color:"var(--text-4)" }}>{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
