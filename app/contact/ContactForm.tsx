'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Sorry, there was an issue sending your message. Please try calling us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full p-4 pl-12 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all bg-slate-50 focus:bg-white";
  const labelClass = "block text-sm font-bold text-slate-700 mb-2";

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-3xl border border-emerald-100 shadow-xl text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h2>
        <p className="text-lg text-slate-600 font-medium mb-8">
          Thank you for reaching out. A member of our team will review your message and reply within 24 hours.
        </p>
        <button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 relative">
      <h3 className="text-2xl font-black text-slate-900 mb-8">Send Us a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>Full Name *</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={inputClass}
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="email"
                type="email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className={labelClass}>Phone Number</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => {
                  const cleanPhone = e.target.value.replace(/[^\d\s\+\-\(\)]/g, '');
                  setFormData({...formData, phone: cleanPhone});
                }}
                className={inputClass}
                placeholder="07000 000 000"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass}>Subject *</label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <select
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className={`${inputClass} appearance-none`}
              >
                <option value="" disabled>Select a topic</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Update Quote">Update an Existing Quote</option>
                <option value="Job Application">Careers / Job Application</option>
                <option value="Complaint / Feedback">Complaint / Feedback</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>Your Message *</label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400" />
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className={`${inputClass} !pl-12 pt-5 resize-none`}
              placeholder="How can we help you today?"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center disabled:opacity-70"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
          {!isSubmitting && <Send className="w-5 h-5 ml-2" />}
        </button>
      </form>
    </div>
  );
}
