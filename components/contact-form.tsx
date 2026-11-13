'use client';
import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';
import { profile } from '@/content/profile';

/**
 * Mailto-only contact form: no backend, no email provider.
 * Submitting opens the visitor's own email app with the message
 * prefilled and addressed to the portfolio owner.
 */
type State = { status: 'idle' | 'success'; message: string };
export function ContactForm() {
  const [state, setState] = useState<State>({ status: 'idle', message: '' });
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = `Portfolio message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setState({ status: 'success', message: 'Your email app should have opened with the message ready to send.' });
    form.reset();
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-row"><label>Name<input name="name" autoComplete="name" required minLength={2} maxLength={80} placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label></div>
    <label>Message<textarea name="message" rows={5} required minLength={10} maxLength={3000} placeholder="A little context about what you have in mind…" /></label>
    <div className="form-actions"><button className="button button-primary" type="submit"><Send size={16} /> Send message <ArrowUpRight size={16} /></button><p className={`form-status ${state.status}`} aria-live="polite">{state.status === 'success' && <CheckCircle2 size={15} />}{state.message}</p></div>
  </form>;
}
