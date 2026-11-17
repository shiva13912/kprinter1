'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .regex(/^[0-9+\s-]{10,15}$/, 'Invalid phone number format'),
  service: z.string().min(1, 'Please select a packaging service'),
  quantity: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: 'pouch-printing-without-cylinder',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmittedData(data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted && submittedData) {
    const waText = encodeURIComponent(
      `Hello Kakatiya Printers, I just submitted an inquiry on your website:
Name: ${submittedData.name}
Phone: ${submittedData.phone}
Email: ${submittedData.email}
Service: ${submittedData.service}
Quantity: ${submittedData.quantity || 'Not specified'}
Message: ${submittedData.message || 'None'}`
    );

    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-outfit mb-2">
          Inquiry Received Successfully!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-slate-800">{submittedData.name}</span>. Our packaging team at the Uppal plant will review your requirements and respond within 2 hours.
        </p>

        <div className="space-y-3 max-w-md mx-auto">
          <a
            href={`https://wa.me/919391014493?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-accent-whatsapp hover:bg-accent-whatsapp-hover text-white text-sm font-semibold rounded-lg shadow-whatsapp transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Forward to WhatsApp for Priority Response</span>
          </a>

          <button
            onClick={() => setIsSubmitted(false)}
            className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white border border-slate-200/80 rounded-2xl shadow-subtle p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Your Full Name"
          placeholder="e.g. Rahul Sharma"
          required
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          label="Phone / Mobile Number"
          type="tel"
          placeholder="e.g. 93910 14493"
          required
          error={errors.phone?.message}
          {...register('phone')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          label="Business Email"
          type="email"
          placeholder="e.g. rahul@brand.com"
          required
          error={errors.email?.message}
          {...register('email')}
        />

        <Select
          label="Packaging Service Required"
          required
          options={[
            { label: 'Pouch Printing Without Cylinder', value: 'pouch-printing-without-cylinder' },
            { label: 'Roll Form Label Printing', value: 'roll-form-label-printing' },
            { label: 'Shrink Sleeves Printing', value: 'shrink-sleeves-printing' },
            { label: 'Film Printing Services (FFS)', value: 'film-printing-services' },
            { label: 'Flat Bottom Pouches', value: 'flat-bottom-pouches' },
            { label: 'Custom / Other Packaging Inquiries', value: 'other' },
          ]}
          error={errors.service?.message}
          {...register('service')}
        />
      </div>

      <Input
        label="Estimated Quantity / Batch Size"
        placeholder="e.g. 1,000 pouches or 10,000 roll labels"
        helperText="Low MOQs available starting from 500 units"
        error={errors.quantity?.message}
        {...register('quantity')}
      />

      <Textarea
        label="Project Specifications & Requirements"
        placeholder="Tell us about your product (e.g., spices, coffee, dry fruits), dimensions, soft-touch matte or glossy finish, barrier layers, or timeline."
        rows={4}
        error={errors.message?.message}
        {...register('message')}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full text-base"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
        >
          Request Free Quote & Sample Kit
        </Button>
      </div>

      <p className="text-[11px] text-slate-500 text-center leading-normal">
        By submitting this form, you agree to receive technical quotes and packaging consultation from Kakatiya Printers. We do not spam.
      </p>
    </form>
  );
}
