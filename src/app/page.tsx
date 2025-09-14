export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center bg-neutral-50">
      <section className="text-center max-w-2xl p-6">
        <h1 className="text-5xl font-bold">GTM Engineering</h1>
        <p className="mt-4 text-lg text-neutral-600">
          We build systems, data pipelines, and automation that turn intent into pipeline.
        </p>
        <a
          href="mailto:ravi@oneshot.ai"
          className="mt-8 inline-block rounded-xl bg-black px-6 py-3 text-white text-sm font-medium hover:bg-neutral-800"
        >
          Book an intro
        </a>
      </section>
    </main>
  );
}
