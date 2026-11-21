"use client";

import { useState } from "react";
import {
  ArrowRight, Award, BookOpen, CarFront, CheckCircle2, ChevronRight,
  CircleHelp, Clock3, Gauge, GraduationCap, Menu, ShieldCheck, Sparkles,
  TrafficCone, Trophy, Volume2, X
} from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Yo‘l harakati qoidalari", detail: "Mavzular bo‘yicha sodda va tushunarli darslar", tag: "Nazariya", color: "blue" },
  { icon: TrafficCone, title: "Yo‘l belgilari", detail: "Belgilarni rasmlar va misollar bilan o‘rganing", tag: "Interaktiv", color: "orange" },
  { icon: CircleHelp, title: "Imtihon testlari", detail: "Vaqt bilan cheklangan sinov va xatolar tahlili", tag: "B toifa", color: "purple" },
  { icon: CarFront, title: "Haydash simulyatori", detail: "Avtomobil boshqaruvi va mashq vaziyatlari", tag: "Amaliyot", color: "green" },
];

const lessons = ["Yo‘l harakati ishtirokchilari", "Yo‘l belgilari va chiziqlari", "Chorrahalardan o‘tish", "To‘xtash va to‘xtab turish"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Bosh sahifa");
  const [menuOpen, setMenuOpen] = useState(false);
  const [completed, setCompleted] = useState<number[]>([0]);

  const nav = ["Bosh sahifa", "Nazariya", "Testlar", "Simulyator", "AI ustoz"];

  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-amber-400 shadow-lg shadow-slate-900/15"><CarFront size={23}/></span>
            <span><strong className="block text-lg font-black tracking-tight">PRAVA <span className="text-amber-500">AI</span></strong><small className="block text-[10px] font-bold uppercase tracking-[.2em] text-slate-400">Driving academy</small></span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map(item => <button key={item} onClick={() => setActiveTab(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeTab === item ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}>{item}</button>)}
          </nav>
          <div className="hidden items-center gap-3 sm:flex">
            <button className="text-sm font-bold text-slate-600 hover:text-slate-900">Kirish</button>
            <button className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300">Boshlash <ArrowRight className="ml-1 inline" size={16}/></button>
          </div>
          <button className="rounded-xl p-2 text-slate-700 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menyuni ochish">{menuOpen ? <X/> : <Menu/>}</button>
        </div>
        {menuOpen && <div className="border-t border-slate-100 bg-white px-4 py-3 lg:hidden">{nav.map(item => <button key={item} onClick={() => {setActiveTab(item);setMenuOpen(false)}} className="block w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-slate-50">{item}</button>)}</div>}
      </header>

      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_20%,rgba(245,158,11,.22),transparent_35%),linear-gradient(115deg,#101a2a_0%,#17283a_55%,#101827_100%)]"/>
        <div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full border border-white/10"/>
        <div className="absolute -right-12 top-24 -z-10 h-56 w-56 rounded-full border border-white/10"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-xs font-bold tracking-wide text-amber-200"><Sparkles size={14}/> SUN’IY INTELLEKT YORDAMIDA O‘RGANING</div>
            <h1 className="max-w-2xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">Rulga ishonch bilan o‘tiring. <span className="text-amber-400">Yo‘lni bilim bilan boshlang.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">Haydovchilik nazariyasi, imtihon testlari va interaktiv mashqlar — barchasi bitta aqlli platformada.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => setActiveTab("Nazariya")} className="rounded-full bg-amber-400 px-7 py-4 text-sm font-black text-slate-950 shadow-xl shadow-amber-500/20 transition hover:-translate-y-1 hover:bg-amber-300">Bepul o‘rganishni boshlash <ArrowRight className="ml-2 inline" size={17}/></button>
              <button onClick={() => setActiveTab("Testlar")} className="rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10">Sinov testini ko‘rish</button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-slate-400"><span className="flex items-center gap-2"><ShieldCheck size={16} className="text-emerald-400"/> O‘zbek tilida</span><span className="flex items-center gap-2"><GraduationCap size={16} className="text-amber-300"/> B toifa bilan boshlaymiz</span><span className="flex items-center gap-2"><Volume2 size={16} className="text-sky-300"/> AI tushuntirishlari</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-amber-400/10 blur-2xl"/>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900 p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">Haydovchi paneli</span><span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-[11px] font-bold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"/> O‘quv rejimi</span></div>
              <div className="mt-7 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-start justify-between"><div><p className="text-sm text-slate-400">Bugungi maqsad</p><h3 className="mt-1 text-2xl font-black">Bilimingizni oshiring</h3></div><span className="rounded-xl bg-amber-400/15 p-3 text-amber-300"><Gauge size={25}/></span></div>
                <div className="mt-6 flex items-end justify-between"><span className="text-xs font-semibold text-slate-400">O‘rganish jarayoni</span><strong className="text-2xl text-amber-300">25%</strong></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/4 rounded-full bg-amber-400"/></div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-white/5 p-3"><BookOpen className="text-sky-300" size={18}/><b className="mt-2 block text-xl">4</b><small className="text-[10px] text-slate-400">Darslar</small></div>
                  <div className="rounded-xl bg-white/5 p-3"><CheckCircle2 className="text-emerald-300" size={18}/><b className="mt-2 block text-xl">12</b><small className="text-[10px] text-slate-400">To‘g‘ri javob</small></div>
                  <div className="rounded-xl bg-white/5 p-3"><Award className="text-amber-300" size={18}/><b className="mt-2 block text-xl">120</b><small className="text-[10px] text-slate-400">Ball</small></div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400 text-slate-950"><Sparkles size={19}/></span><div className="min-w-0 flex-1"><b className="block text-sm">AI ustoz tavsiyasi</b><p className="mt-1 text-xs text-slate-400">Bugun chorrahalar mavzusini takrorlang.</p></div><ChevronRight className="text-slate-500" size={18}/></div>
              <p className="mt-4 text-center text-[10px] text-slate-500">Namuna interfeys — haqiqiy o‘quv natijalari profil yaratilgach saqlanadi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-xs font-black uppercase tracking-[.2em] text-amber-600">O‘QUV MARKAZI</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">O‘rganish uchun barcha vositalar</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">B toifa bo‘yicha bosqichma-bosqich o‘rganing. Keyinchalik boshqa toifalar ham qo‘shiladi.</p></div><span className="w-fit rounded-full bg-slate-200 px-4 py-2 text-xs font-bold text-slate-600">01 / 04 — Boshlang‘ich modul</span></div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {modules.map((item) => { const Icon = item.icon; return <button key={item.title} onClick={() => setActiveTab(item.title)} className="group rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-slate-200/60"><div className={`grid h-12 w-12 place-items-center rounded-2xl ${item.color === "blue" ? "bg-blue-50 text-blue-600" : item.color === "orange" ? "bg-orange-50 text-orange-600" : item.color === "purple" ? "bg-purple-50 text-purple-600" : "bg-emerald-50 text-emerald-600"}`}><Icon size={23}/></div><span className="mt-5 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">{item.tag}</span><h3 className="mt-3 text-lg font-extrabold text-slate-900">{item.title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">{item.detail}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 group-hover:text-amber-600">Bo‘limni ochish <ArrowRight size={15}/></span></button>})}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-black uppercase tracking-[.2em] text-amber-600">SHAXSIY REJA</p><h2 className="mt-2 text-3xl font-black tracking-tight">Bugungi darslaringiz</h2><p className="mt-3 text-sm leading-6 text-slate-500">Har bir mavzuni ketma-ket yakunlang. Belgilangan darslar brauzerda vaqtincha saqlanadi.</p><div className="mt-7 rounded-2xl bg-slate-900 p-5 text-white"><div className="flex items-center gap-3"><Trophy className="text-amber-400"/><b>Izchil o‘rganing!</b></div><p className="mt-2 text-xs leading-5 text-slate-400">Muntazam mashq bilimni mustahkamlaydi. Har kuni oz-ozdan o‘rganing.</p></div></div>
          <div className="space-y-3">{lessons.map((lesson,i) => <button key={lesson} onClick={() => setCompleted(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev,i])} className="flex w-full items-center gap-4 rounded-2xl border border-slate-200 p-4 text-left transition hover:border-amber-300 hover:bg-amber-50/30"><span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-black ${completed.includes(i) ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>{completed.includes(i) ? <CheckCircle2 size={20}/> : String(i+1).padStart(2,"0")}</span><span className="min-w-0 flex-1"><b className="block text-sm text-slate-800">{lesson}</b><small className="mt-1 block text-xs text-slate-400">Nazariya · {8+i*3} daqiqa</small></span><span className="hidden items-center gap-1 text-xs font-bold text-emerald-600 sm:flex">{completed.includes(i) ? "Bajarildi" : "Boshlash"} <ChevronRight size={16}/></span></button>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-amber-400 p-7 sm:p-10 lg:flex lg:items-center lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[.2em] text-slate-800/60">AI YORDAMCHI</p><h2 className="mt-2 max-w-xl text-3xl font-black tracking-tight text-slate-950">Savolingiz bormi? AI ustoz bilan o‘rganing.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-slate-800/75">Murakkab qoidalarni sodda tilda tushuntirish va xatolaringizni tahlil qilish uchun yordamchi.</p></div><button onClick={() => setActiveTab("AI ustoz")} className="mt-6 rounded-full bg-slate-950 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-slate-800 lg:mt-0">AI ustozni ochish <ArrowRight className="ml-2 inline" size={16}/></button></div>
      </section>

      <footer className="bg-slate-950 px-4 py-8 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row sm:items-center"><div className="flex items-center gap-2 text-white"><CarFront className="text-amber-400"/><b>PRAVA AI</b></div><p className="text-xs">© 2026 PRAVA AI. O‘rganish platformasi. Simulyator haqiqiy haydash mashg‘ulotining o‘rnini bosmaydi.</p><span className="flex items-center gap-2 text-xs"><Clock3 size={14}/> Yangi avlod haydovchilar uchun</span></div></footer>
    </main>
  );
}
