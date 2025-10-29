import { useCallback } from "react";

const CTA = () => {
  const onSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Replace with your submit logic or API call
    console.log(Object.fromEntries(data.entries()));
    e.currentTarget.reset();
  }, []);

  return (
    <section
      id="CTA"
      className="w-full bg-gray-100 text-white"
      aria-labelledby="cta-heading">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-start">
          <div>
            <h2
              id="cta-heading"
              className="lg:text-7xl md:text-3xl text-3xl text-deep-blue font-bold ">
              Ready to build with ALMFI Network?
            </h2>
            <p className="mt-3 max-w-2xl text-zinc-700">
              Ship faster with secure infrastructure, powerful APIs, and a
              developer-first experience. Join now and start scaling with
              confidence.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="bg-white text-deep-blue rounded-2xl p-6 md:p-7 shadow-2xl border border-white/20"
            aria-labelledby="cta-form-heading">
            <h3 id="cta-form-heading" className="text-xl font-semibold mb-4">
              Send Us a Message
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <label className="text-sm font-medium mt-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-deep-blue/60"
              />

              <label className="text-sm font-medium mt-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-deep-blue/60"
              />

              <button
                type="submit"
                className="mt-3 lg:w-fit md:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-deep-blue bg-deep-blue text-white px-8 py-3 font-medium hover:bg-white hover:text-deep-blue transition-colors">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
