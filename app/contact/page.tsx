import Section from "@/components/Section";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="Reach out about partnerships, speakers, or volunteering">
      <form
        action="https://formspree.io/f/REPLACE_WITH_YOUR_ID"
        method="POST"
        className="card grid gap-4 max-w-xl"
      >
        <label className="grid gap-2">
          <span className="text-sm">Name</span>
          <input name="name" className="border rounded-xl px-4 py-2" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Email</span>
          <input name="email" type="email" className="border rounded-xl px-4 py-2" required />
        </label>
        <label className="grid gap-2">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={5} className="border rounded-xl px-4 py-2" required />
        </label>
        <input type="hidden" name="_subject" value="Blue Futures — Website Contact" />
        <button className="btn btn-primary w-fit" type="submit">Send</button>
      </form>
    </Section>
  );
}
