import React from "react";
<h3 className="text-2xl font-bold">Montage & Editing Services</h3>
<p className="text-slate-400 mt-2 max-w-2xl">Need a montage from your clips? I offer editing packages for creators on a budget — montage editing, color grade, sync to music, and highlight reels. Fill the contact form below and include your clip links.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-4 bg-slate-900 rounded-lg">
<h4 className="font-semibold">Starter</h4>
<p className="text-sm text-slate-400 mt-2">1–2 minute montage, basic cuts</p>
<p className="mt-4 font-bold">From $30</p>
</div>
<div className="p-4 bg-slate-900 rounded-lg">
<h4 className="font-semibold">Standard</h4>
<p className="text-sm text-slate-400 mt-2">2–4 minute montage, effects, grade</p>
<p className="mt-4 font-bold">From $60</p>
</div>
<div className="p-4 bg-slate-900 rounded-lg">
<h4 className="font-semibold">Premium</h4>
<p className="text-sm text-slate-400 mt-2">Full montage, custom edits, priority</p>
<p className="mt-4 font-bold">From $120</p>
</div>
</div>
</section>


<section id="about" className="mt-16 bg-gradient-to-r from-slate-900/60 to-black p-6 rounded-2xl">
<div className="md:flex md:items-center md:gap-6">
<div className="w-36 h-36 rounded-xl bg-slate-800 flex items-center justify-center text-2xl font-bold">P?</div>
<div className="mt-4 md:mt-0">
<h3 className="text-2xl font-bold">About Phoenix?</h3>
<p className="text-slate-300 mt-2 max-w-xl">I make Shell Shockers gameplay videos — montages, 1v1 highlights, and best‑of clips. I post on a repeating schedule (two weeks of Shell Shockers, one week of other games). I edit everything myself and aim to drop montages for milestone subscribers.</p>
</div>
</div>
</section>


<section id="contact" className="mt-16">
<h3 className="text-2xl font-bold">Contact</h3>
<p className="text-slate-400 mt-2">Want a montage, collab, or business inquiry? Fill in the form or reach out on socials.</p>


<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<form className="space-y-3 bg-slate-900 p-4 rounded-lg">
<label className="block">
<span className="text-sm text-slate-300">Your name</span>
<input className="mt-1 block w-full rounded-md bg-black/60 border border-slate-700 px-3 py-2 text-slate-100" placeholder="e.g. Sam" />
</label>
<label className="block">
<span className="text-sm text-slate-300">Email</span>
<input className="mt-1 block w-full rounded-md bg-black/60 border border-slate-700 px-3 py-2 text-slate-100" placeholder="you@example.com" />
</label>
<label className="block">
<span className="text-sm text-slate-300">Message / Clip links</span>
<textarea className="mt-1 block w-full rounded-md bg-black/60 border border-slate-700 px-3 py-2 text-slate-100" rows={5} placeholder="Paste YouTube/Drive links and a brief description" />
</label>
<div className="flex items-center gap-3">
<button type="button" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl text-black font-semibold">
<Mail className="w-4 h-4" /> Send message
</button>
<span className="text-xs text-slate-400">No backend included — copy the form output locally or wire up your favourite form service (Formspree, Netlify Forms, etc.)</span>
</div>
</form>


<div className="p-4 bg-slate-900 rounded-lg">
<h4 className="font-semibold">Socials</h4>
<div className="mt-3 flex flex-col gap-3">
<a className="inline-flex items-center gap-2 text-sm text-slate-200" href="#"><Youtube className="w-4 h-4"/> YouTube: Phoenix?</a>
<a className="inline-flex items-center gap-2 text-sm text-slate-200" href="#"><Twitch className="w-4 h-4"/> Twitch: (your channel)</a>
<a className="inline-flex items-center gap-2 text-sm text-slate-200" href="#">Discord: (invite link)</a>
</div>


<div className="mt-6">
<h5 className="text-sm font-semibold">Quick bio</h5>
<p className="text-xs text-slate-400 mt-2">Video creator who focuses on Shell Shockers montages, killstreaks, and highlight content. Open to collabs and montage requests.</p>
</div>
</div>
</div>
</section>


<footer className="mt-16 py-8 text-slate-400 text-sm text-center">
© {new Date().getFullYear()} Phoenix? — Made with 🥚 and fire. • Built with Tailwind + React
</footer>
</main>
</div>
);
}
