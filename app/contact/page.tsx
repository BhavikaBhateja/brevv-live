export default function ContactPage() {
  return (
    <main className="w-full">
      {/* Dark band so the transparent global nav stays readable on inner pages */}
      <section className="bg-slate-900 text-white pt-[160px] pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold">Contact</h1>
        </div>
      </section>
    </main>
  );
}
