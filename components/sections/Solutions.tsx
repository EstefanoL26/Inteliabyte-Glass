"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  RefreshCw,
  MessageCircle,
  ShieldAlert,
  BarChart2,
  Settings,
  Globe2,
  BrainCircuit,
  Cloud,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    Icon: RefreshCw,
    title: "Transformación Digital",
    desc: "Modernizamos procesos legacy con cloud, automatización e IA sin disrupciones, con resultados desde el primer mes.",
    tags: ["Cloud Migration", "Legacy Mod.", "Redesign"],
    color: "var(--blue)",
  },
  {
    Icon: MessageCircle,
    title: "Atención Automatizada",
    desc: "Bots conversacionales e IVR inteligente que resuelven el 70% de consultas sin agente, disponibles 24/7.",
    tags: ["Chatbot IA", "Voice Bot", "WhatsApp"],
    color: "#7C3AED",
  },
  {
    Icon: ShieldAlert,
    title: "Ciberseguridad Empresarial",
    desc: "SOC gestionado, análisis de amenazas y respuesta a incidentes para organizaciones que no pueden comprometer su seguridad.",
    tags: ["SOC as a Service", "SIEM", "Threat Intel"],
    color: "var(--amber)",
  },
  {
    Icon: BarChart2,
    title: "Gestión Operativa con IA",
    desc: "Plataformas que unifican datos, automatizan decisiones y ofrecen visibilidad total de la operación en tiempo real.",
    tags: ["Dashboard", "KPIs", "Analytics"],
    color: "var(--green)",
  },
  {
    Icon: Settings,
    title: "Automatización de Procesos",
    desc: "RPA, BPM y workflows para eliminar tareas manuales, reducir errores y liberar a tu equipo para trabajo de mayor valor.",
    tags: ["RPA", "BPM", "Workflow"],
    color: "var(--blue)",
  },
  {
    Icon: Globe2,
    title: "Omnicanalidad",
    desc: "Unificamos voz, chat, email, WhatsApp y web en una sola plataforma con historial unificado del cliente.",
    tags: ["Omnicanal", "CRM Unificado", "Contact"],
    color: "#7C3AED",
  },
  {
    Icon: BrainCircuit,
    title: "Asistentes Virtuales con IA",
    desc: "Agentes LLM personalizados que aprenden de tu negocio, atienden clientes y cierran operaciones autónomamente.",
    tags: ["LLM Enterprise", "AI Agents", "Negociación"],
    color: "var(--green)",
  },
  {
    Icon: Cloud,
    title: "Infraestructura y Soporte",
    desc: "Gestión integral cloud y on-premise con monitoreo proactivo, soporte especializado y continuidad garantizada.",
    tags: ["Cloud Mgmt", "24/7 Support", "BCP"],
    color: "var(--blue)",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="soluciones"
      className="py-28 bg-[var(--paper-2)] relative overflow-hidden"
    >
      <div
        className="absolute left-0 top-10 select-none pointer-events-none leading-none"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(80px, 14vw, 180px)",
          color: "rgba(24, 36, 82, 0.06)",
          transform: "translateX(-22%)",
          letterSpacing: "-0.08em",
          zIndex: 0,
        }}
      >
        05
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="relative z-10 mb-16 max-w-2xl ml-8 md:ml-20"
        >
          <div className="section-num mb-5">Soluciones empresariales</div>
          <h2 className="headline-lg mb-5">
            Resolvemos <span className="text-gradient">cada desafío</span>
          </h2>
          <p className="prose-lead">
            Desde la estrategia hasta la implementación, soluciones completas
            para cada necesidad de la empresa moderna.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 group cursor-pointer"
            >
              <div
                className="w-10 h-10 rounded-xl border border-[var(--line)] flex items-center justify-center mb-4"
                style={{ background: `${s.color}12` }}
              >
                <s.Icon className="w-5 h-5" style={{ color: s.color }} />
              </div>

              <h3
                className="font-display font-700 text-[15px] text-[var(--ink)] mb-2"
                style={{ fontWeight: 700 }}
              >
                {s.title}
              </h3>

              <p className="prose-body text-[13px] mb-4">{s.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[9.5px] font-body px-2 py-0.5 rounded-md border"
                    style={{
                      color: s.color,
                      background: `${s.color}10`,
                      borderColor: `${s.color}25`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight className="w-4 h-4" style={{ color: s.color }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}