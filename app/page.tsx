export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Invoice Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Know Which Invoices Will Be Paid Late —{" "}
          <span className="text-[#58a6ff]">Before It Happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          InvoiceAI analyzes your invoice history and customer payment patterns to predict late payments with confidence scores and recommended actions — so you can protect your cash flow.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>

        {/* Mini feature grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Risk Dashboard", desc: "See every invoice ranked by late-payment risk at a glance." },
            { icon: "🤖", title: "AI Confidence Scores", desc: "ML models trained on payment behavior give you a % likelihood of delay." },
            { icon: "⚡", title: "Recommended Actions", desc: "Get specific next steps: send a reminder, offer a discount, escalate." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$14<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop late payments.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoice predictions",
              "CSV upload & API integration",
              "AI confidence scores per invoice",
              "Recommended action playbooks",
              "Payment timeline forecasts",
              "Email alerts for high-risk invoices"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI predict late payments?",
              a: "InvoiceAI analyzes historical payment data — invoice amounts, due dates, customer history, and industry patterns — to build a model that scores each invoice by its likelihood of being paid late."
            },
            {
              q: "What data do I need to get started?",
              a: "Just upload a CSV of your past invoices and payments. We support QuickBooks, FreshBooks, and Wave exports out of the box, or you can use our API for live sync."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your account settings with no penalties. You keep access until the end of your billing period."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} InvoiceAI. All rights reserved.
      </footer>
    </main>
  );
}
