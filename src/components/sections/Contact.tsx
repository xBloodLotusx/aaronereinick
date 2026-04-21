import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Mail, Linkedin, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
  message: z.string().min(10, 'Please include a message (at least 10 characters)'),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      // TODO: Replace with your Lovable/Supabase edge function endpoint
      // e.g. await supabase.functions.invoke('send-contact-email', { body: data })
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, to: 'areinick@eragroup.com' }),
      });

      if (!res.ok) throw new Error('Server responded with an error');

      toast.success("Message sent! Aaron will be in touch within one business day.");
      reset();
    } catch {
      // Fallback: open the user's email client pre-filled
      const subject = `Inquiry from ${data.name} – ${data.company}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\n${data.message}`;
      window.open(
        `mailto:areinick@eragroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      );
      toast.success("Opening your email client to send the message.");
      reset();
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-steel font-sans text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-navy">Start the Conversation</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Contact details */}
          <div>
            <h3 className="font-serif text-navy text-2xl font-semibold mb-6">Contact Aaron</h3>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Ready to explore what cost reduction could look like for your organization? Reach out
              directly or fill in the form — Aaron will respond within one business day.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:areinick@eragroup.com"
                className="flex items-center gap-4 group"
                aria-label="Email Aaron"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <Mail className="w-5 h-5 text-navy" aria-hidden="true" />
                </div>
                <span className="text-slate-700 group-hover:text-navy transition-colors text-sm">
                  areinick@eragroup.com
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/aaron-reinick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Aaron's LinkedIn profile"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <Linkedin className="w-5 h-5 text-navy" aria-hidden="true" />
                </div>
                <span className="text-slate-700 group-hover:text-navy transition-colors text-sm">
                  linkedin.com/in/aaron-reinick
                </span>
              </a>

              <a
                href="https://bookings.cloud.microsoft/bookwithme/user/74974952f30141509e361fa7433e4586%40eragroup.com?anonymous&ismsaljsauthenabled=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                aria-label="Book an appointment with Aaron"
              >
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <Calendar className="w-5 h-5 text-navy" aria-hidden="true" />
                </div>
                <span className="text-slate-700 group-hover:text-navy transition-colors text-sm">
                  Book an Appointment
                </span>
              </a>

              <div className="flex items-center gap-4" aria-label="Phone number coming soon">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-slate-300" aria-hidden="true" />
                </div>
                <span className="text-slate-400 text-sm">Phone number coming soon</span>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 space-y-5"
          >
            <div>
              <Label htmlFor="name" className="text-navy font-medium text-sm mb-1.5 block">
                Full Name <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="name"
                placeholder="Jane Smith"
                autoComplete="name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                {...register('name')}
                className={errors.name ? 'border-red-400 focus-visible:ring-red-400' : ''}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="email" className="text-navy font-medium text-sm mb-1.5 block">
                Email Address <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@company.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                {...register('email')}
                className={errors.email ? 'border-red-400 focus-visible:ring-red-400' : ''}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="company" className="text-navy font-medium text-sm mb-1.5 block">
                Company <span aria-hidden="true">*</span>
              </Label>
              <Input
                id="company"
                placeholder="Acme Corporation"
                autoComplete="organization"
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
                {...register('company')}
                className={errors.company ? 'border-red-400 focus-visible:ring-red-400' : ''}
              />
              {errors.company && (
                <p id="company-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="message" className="text-navy font-medium text-sm mb-1.5 block">
                Message <span aria-hidden="true">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Tell Aaron about your organization and its cost challenges…"
                rows={4}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                {...register('message')}
                className={errors.message ? 'border-red-400 focus-visible:ring-red-400' : ''}
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-navy hover:bg-navy/90 text-white py-3 h-auto text-base font-medium"
            >
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </Button>

            <p className="text-slate-400 text-xs text-center">
              By submitting, you agree to be contacted by Aaron E. Reinick regarding your inquiry.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
