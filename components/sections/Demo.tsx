"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { LayoutDashboard, Phone, Bot, Play, MessageSquare, TrendingUp, Check, PhoneCall, BarChart3, Send, User, Clock, ArrowRight } from "lucide-react";

function TaurusDashboard() {
  const rows = [
    { name: "García López, Juan", amount: "$4,500",  days: 45,  status: "Acuerdo",    ok: true },
    { name: "Martínez, Ana S.",   amount: "$12,300", days: 120, status: "Negociando", ok: false },
    { name: "Corp. Delta S.A.",   amount: "$87,000", days: 30,  status: "Nuevo",      ok: null },
    { name: "Pérez, Carlos M.",   amount: "$2,100",  days: 200, status: "Alto riesgo",ok: false },
    { name: "Tech Soluciones",    amount: "$23,700", days: 60,  status: "Acuerdo",    ok: true },
  ];
  const statusStyle = (ok: boolean | null) =>
    ok === true  ? { bg: "var(--green-s)", c: "var(--green)" } :
    ok === false ? { bg: "var(--amber-s)", c: "var(--amber)" } :
                   { bg: "var(--blue-s)",  c: "var(--blue)"  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {[
          { l:"Cartera", v:"$2.4M", c:"var(--blue)", bg:"var(--blue-s)" },
          { l:"Acuerdos hoy", v:"318", c:"var(--green)", bg:"var(--green-s)" },
          { l:"Efectividad", v:"94.2%", c:"#7C3AED", bg:"#F5F3FF" },
          { l:"Pendientes", v:"1,204", c:"var(--amber)", bg:"var(--amber-s)" },
        ].map((k) => (
          <div key={k.l} className="rounded-xl p-3 border border-[var(--line)]" style={{ background: k.bg }}>
            <div className="text-[9px] text-[var(--ink-5)] font-body uppercase tracking-wider">{k.l}</div>
            <div className="font-display font-800 text-[22px] mt-1" style={{ color: k.c, fontWeight: 800 }}>{k.v}</div>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl border border-[var(--line)] overflow-hidden">
        <div className="px-4 py-2.5 glass-card border-b border-[var(--line)] flex items-center justify-between">
          <span className="text-[11px] font-display font-700 text-[var(--ink)]" style={{ fontWeight: 700 }}>Gestiones recientes</span>
          <span className="text-[9px] font-body text-[var(--green)] flex items-center gap-1 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse" />En vivo
          </span>
        </div>
        {rows.map((r, i) => {
          const st = statusStyle(r.ok);
          return (
            <motion.div key={r.name} initial={{ opacity:0, x:-8 }} animate={{ opacity:1, x:0 }} transition={{ delay: i*0.07 }}
              className="grid grid-cols-4 gap-2 px-4 py-2.5 text-[11.5px] font-body border-b border-[var(--line)] last:border-0 hover:glass-card transition-colors">
              <span className="text-[var(--ink)] font-medium truncate">{r.name}</span>
              <span className="font-display font-700 text-[var(--ink)]" style={{ fontWeight: 700 }}>{r.amount}</span>
              <span className="text-[var(--ink-4)]">{r.days}d</span>
              <span><span className="text-[9px] font-display font-700 px-2 py-0.5 rounded-full" style={{ background: st.bg, color: st.c, fontWeight: 700 }}>{r.status}</span></span>
            </motion.div>
          );
        })}
      </div>
      <div className="glass-card rounded-xl p-4 border border-[var(--line)]">
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[9.5px] font-body text-[var(--ink-4)] uppercase tracking-wider">Recaudo diario</span>
          <span className="text-[10px] font-body text-[var(--green)] font-semibold flex items-center gap-1"><TrendingUp className="w-3 h-3"/>+18%</span>
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40,65,45,80,70,90,60,85,75,95,55,88,92,100].map((h,i)=>(
            <div key={i} className="flex-1 rounded-t-sm" style={{ height:`${h}%`, background: i===13?"var(--blue)":`rgba(0,82,255,${0.08+i*0.018})` }}/>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function VoiceBotDemo() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="grid grid-cols-4 gap-3">
        {[
          { l:"Llamadas activas", v:"142", c:"var(--blue)", bg:"var(--blue-s)", Icon:PhoneCall },
          { l:"Completadas", v:"1,893", c:"var(--green)", bg:"var(--green-s)", Icon:Check },
          { l:"Efectividad", v:"67.4%", c:"#7C3AED", bg:"#F5F3FF", Icon:TrendingUp },
          { l:"Acuerdos", v:"189", c:"var(--amber)", bg:"var(--amber-s)", Icon:BarChart3 },
        ].map((s)=>(
          <div key={s.l} className="rounded-xl p-3 border border-[var(--line)] text-center" style={{ background: s.bg }}>
            <s.Icon className="w-4 h-4 mx-auto mb-1" style={{ color: s.c }} />
            <div className="font-display font-800 text-[20px]" style={{ color: s.c, fontWeight: 800 }}>{s.v}</div>
            <div className="text-[9px] text-[var(--ink-4)] font-body mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl p-4 border border-[var(--line)]">
        <div className="text-[9.5px] font-display font-700 text-[var(--ink-4)] uppercase tracking-wider mb-3" style={{ fontWeight: 700 }}>Flujo IVR — Campaña Cobranza Q2</div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {["Marcado","Contestó","Identificación","Mensaje IA","Negociación","Acuerdo"].map((step,i)=>(
            <div key={step} className="flex items-center gap-2 flex-shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-display font-700 border"
                  style={{ background: i<=3?"var(--blue-s)":"var(--paper-2)", borderColor: i<=3?"var(--blue)":"var(--line)", color: i<=3?"var(--blue)":"var(--ink-5)", fontWeight: 700 }}>
                  {i+1}
                </div>
                <span className="text-[8px] text-[var(--ink-4)] font-body text-center w-14 leading-tight">{step}</span>
              </div>
              {i<5&&<div className="w-4 h-px flex-shrink-0 mt-[-14px]" style={{ background: i<=3?"var(--blue)":"var(--line)" }}/>}
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card rounded-xl border border-[var(--line)] overflow-hidden">
        <div className="px-4 py-2.5 glass-card border-b border-[var(--line)]">
          <span className="text-[11px] font-display font-700 text-[var(--ink)]" style={{ fontWeight: 700 }}>Llamadas recientes</span>
        </div>
        {[
          { id:"C-001", phone:"+593 99 123 4567", status:"En curso", dur:"1:34", color:"var(--blue)" },
          { id:"C-002", phone:"+593 98 765 4321", status:"Acuerdo",  dur:"0:52", color:"var(--green)" },
          { id:"C-003", phone:"+593 87 456 7890", status:"No contesta",dur:"0:30",color:"var(--amber)" },
        ].map((c,i)=>(
          <div key={c.id} className="grid grid-cols-4 gap-2 px-4 py-2.5 text-[11.5px] font-body border-b border-[var(--line)] last:border-0">
            <span className="font-display font-700 text-[var(--blue)]" style={{ fontWeight: 700 }}>{c.id}</span>
            <span className="text-[var(--ink-3)]">{c.phone}</span>
            <span style={{ color: c.color }}>{c.status}</span>
            <span className="text-[var(--ink-4)] flex items-center gap-1"><Clock className="w-3 h-3"/>{c.dur}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function AgenteDemo() {
  const msgs = [
    { r:"bot",  t:"Hola, le llamo de Financiera XYZ. Tengo una opción especial para regularizar su cuenta. ¿Tiene un momento?" },
    { r:"user", t:"Sí, adelante. ¿Cuánto debo?" },
    { r:"bot",  t:"Su saldo es $4,500. Preparé 3 opciones:\n• Pago único hoy: $3,600 (20% dto.)\n• 3 cuotas de $1,200 sin interés\n• 6 cuotas de $700" },
    { r:"user", t:"Prefiero las 6 cuotas." },
    { r:"bot",  t:"¡Perfecto! Primera cuota de $700 hoy. Genero su acuerdo ahora mismo. ¿Confirma su correo?" },
    { r:"sys",  t:"🤝 Acuerdo generado — enviando por email y WhatsApp" },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[{ l:"Negociaciones", v:"67", c:"#7C3AED", bg:"#F5F3FF" }, { l:"Acuerdos", v:"48", c:"var(--green)", bg:"var(--green-s)" }, { l:"Tasa cierre", v:"71.6%", c:"var(--blue)", bg:"var(--blue-s)" }].map(s=>(
          <div key={s.l} className="rounded-xl p-3 text-center border border-[var(--line)]" style={{ background: s.bg }}>
            <div className="font-display font-800 text-[22px]" style={{ color: s.c, fontWeight: 800 }}>{s.v}</div>
            <div className="text-[9px] text-[var(--ink-4)] font-body mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="glass-card rounded-xl border border-[var(--line)] overflow-hidden">
        <div className="px-4 py-2.5 bg-[#F5F3FF] border-b border-[var(--line)] flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#7C3AED]"/>
          <span className="text-[11px] font-display font-700 text-[var(--ink)]" style={{ fontWeight: 700 }}>Agente Negociador IA</span>
          <span className="ml-auto text-[9px] text-[var(--green)] font-semibold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse"/>En vivo</span>
        </div>
        <div className="p-4 space-y-3 max-h-52 overflow-y-auto glass-card">
          {msgs.map((m,i)=>(
            <motion.div key={i} initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ delay: i*0.1 }}
              className={`flex gap-2 ${m.r==="user"?"flex-row-reverse":""} ${m.r==="sys"?"justify-center":""}`}>
              {m.r==="sys"?(
                <div className="text-[10px] font-body text-[var(--green)] bg-[var(--green-s)] border border-[var(--green)]/20 px-3 py-1.5 rounded-full">{m.t}</div>
              ):(
                <>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${m.r==="bot"?"bg-[#7C3AED]":"bg-[var(--line)]"}`}>
                    {m.r==="bot"?<Bot className="w-3 h-3 text-white"/>:<User className="w-3 h-3 text-[var(--ink-4)]"/>}
                  </div>
                  <div className={`max-w-[78%] rounded-xl px-3 py-2 text-[11.5px] font-body leading-relaxed whitespace-pre-wrap ${m.r==="bot"?"glass-card border border-[var(--line)] text-[var(--ink-3)]":"bg-[var(--blue)] text-white"}`}>
                    {m.t}
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
        <div className="px-4 py-2.5 border-t border-[var(--line)] flex items-center gap-2 glass-card">
          <input className="flex-1 text-[11.5px] font-body text-[var(--ink-4)] outline-none bg-transparent" placeholder="Escribiendo..." disabled/>
          <Send className="w-4 h-4 text-[var(--ink-5)]"/>
        </div>
      </div>
    </motion.div>
  );
}

const tabs = [
  { id:"taurus",   label:"Taurus Next",       Icon:LayoutDashboard, color:"var(--blue)",  bg:"var(--blue-s)" },
  { id:"voicebot", label:"Voice Bot IVR",      Icon:Phone,           color:"#7C3AED",      bg:"#F5F3FF" },
  { id:"agente",   label:"Agente Negociador",  Icon:Bot,             color:"var(--green)", bg:"var(--green-s)" },
];

export default function Demo() {
  const [active, setActive] = useState("taurus");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="demo" className="py-28 glass-card relative overflow-hidden">
      <div className="absolute right-8 top-8 font-display font-800 text-[200px] leading-none text-[var(--line)] select-none pointer-events-none" style={{ fontWeight: 800 }}>04</div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-14 max-w-2xl">
          <div className="section-num mb-5">Demo interactivo</div>
          <h2 className="headline-lg mb-5">Experimente <span className="text-gradient">en vivo</span></h2>
          <p className="prose-lead">Explore las interfaces reales de nuestras plataformas y descubra cómo transforman la operación.</p>
        </motion.div>

        {/* Tab pills */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {tabs.map((t)=>(
            <button key={t.id} onClick={() => setActive(t.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-display font-700 transition-all duration-200"
              style={{
                fontWeight: 700,
                background: active===t.id ? t.bg : "transparent",
                color: active===t.id ? t.color : "var(--ink-4)",
                border: active===t.id ? `1.5px solid ${t.color}35` : "1.5px solid transparent",
              }}
            >
              <t.Icon className="w-4 h-4"/>
              {t.label}
            </button>
          ))}
        </div>

        {/* Browser chrome */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="glass-card rounded-2xl border border-[var(--line)] overflow-hidden shadow-[var(--s4)]">
          <div className="flex items-center gap-2 px-5 py-3.5 glass-card border-b border-[var(--line)]">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"/>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"/>
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"/>
            </div>
            <div className="flex-1 text-center text-[10.5px] font-body text-[var(--ink-5)]">
              {tabs.find(t=>t.id===active)?.label} — Inteliabyte Platform
            </div>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)] animate-pulse"/>
              <span className="text-[9px] font-body text-[var(--green)] font-semibold">Live</span>
            </div>
          </div>
          <div className="p-6">
            <AnimatePresence mode="wait">
              {active==="taurus"   && <TaurusDashboard key="taurus"/>}
              {active==="voicebot" && <VoiceBotDemo key="voicebot"/>}
              {active==="agente"   && <AgenteDemo key="agente"/>}
            </AnimatePresence>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a href="#contacto" className="btn btn-blue px-8 py-4 text-[14px]"><Play className="w-4 h-4"/>Solicitar Demo Real</a>
          <a href="#contacto" className="btn btn-outline px-8 py-4 text-[14px]"><MessageSquare className="w-4 h-4"/>Hablar con Ventas</a>
        </div>
      </div>
    </section>
  );
}
