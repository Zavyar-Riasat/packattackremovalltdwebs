'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, ChevronLeft, CheckCircle2, Home, Building2, Package, MapPin, Calendar, User, Phone, Mail } from 'lucide-react';

export default function QuoteFormContent() {
  const searchParams = useSearchParams();
  const initialPostcode = searchParams.get('postcode') || '';
  const initialBorough = searchParams.get('borough') || '';
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    moveType: 'residential',
    propertySize: '2-bed',
    moveDate: '',
    collectionAddress: initialPostcode ? `${initialPostcode}, ${initialBorough}` : '',
    deliveryAddress: '',
    name: '',
    email: '',
    phone: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Scroll to top of form when step changes
  useEffect(() => {
    if (step > 1) {
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  }, [step]);

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handlePrev = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Failed to submit quote:', error);
      alert('Sorry, there was an error submitting your quote. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full p-4 pl-12 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all bg-slate-50 focus:bg-white";
  const labelClass = "block text-sm font-bold text-slate-700 mb-2";

  if (isSuccess) {
    return (
      <div className="w-full max-w-3xl mx-auto bg-white p-10 rounded-3xl border border-slate-200 shadow-xl text-center">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-600" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Request Received!</h2>
        <p className="text-lg text-slate-600 font-medium max-w-md mx-auto mb-8">
          Thank you for choosing Pack & Attack. Our team is calculating your customized quote and will contact you within 24 hours.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors shadow-lg"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
      
      {/* Progress Bar */}
      <div className="relative flex items-center justify-between mb-12 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full before:h-1 before:bg-slate-100 before:z-0">
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 z-0 transition-all duration-500 ease-out"
          style={{ width: `${((step - 1) / 2) * 100}%` }}
        />
        
        {[1, 2, 3].map((num) => (
          <div 
            key={num} 
            className={`relative z-10 flex flex-col items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
              step >= num 
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30' 
                : 'bg-slate-100 text-slate-400 border-2 border-white'
            }`}
          >
            {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
          </div>
        ))}
      </div>

      <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
        
        {/* STEP 1: Move Details */}
        <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-8 hidden'}`}>
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Move Details</h2>
            <p className="text-slate-500 font-medium">Tell us what you are moving and when.</p>
          </div>

          <div className="space-y-8">
            <div>
              <label id="typeOfMoveLabel" className={labelClass}>Type of Move</label>
              <div role="radiogroup" aria-labelledby="typeOfMoveLabel" className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, moveType: 'residential'})}
                  className={`p-4 border-2 rounded-xl flex flex-col items-center justify-center gap-3 transition-all ${formData.moveType === 'residential' ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                >
                  <Home className={`w-6 h-6 ${formData.moveType === 'residential' ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span className="font-bold text-sm">Residential</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, moveType: 'commercial'})}
                  className={`p-4 border-2 rounded-xl flex flex-col items-center justify-center gap-3 transition-all ${formData.moveType === 'commercial' ? 'border-emerald-500 bg-emerald-50 text-emerald-900' : 'border-slate-100 hover:border-slate-200 text-slate-600'}`}
                >
                  <Building2 className={`w-6 h-6 ${formData.moveType === 'commercial' ? 'text-emerald-600' : 'text-slate-400'}`} />
                  <span className="font-bold text-sm">Commercial</span>
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="propertySize" className={labelClass}>Approximate Size</label>
              <select 
                id="propertySize"
                value={formData.propertySize}
                onChange={(e) => setFormData({...formData, propertySize: e.target.value})}
                className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all bg-slate-50 focus:bg-white appearance-none"
              >
                <option value="single-item">Single Item / Few Items</option>
                <option value="studio">Studio Apartment</option>
                <option value="1-bed">1 Bedroom Property</option>
                <option value="2-bed">2 Bedroom Property</option>
                <option value="3-bed">3 Bedroom Property</option>
                <option value="4-bed">4+ Bedroom Property</option>
                <option value="office">Office / Commercial Space</option>
              </select>
            </div>

            <div>
              <label htmlFor="moveDate" className={labelClass}>Preferred Move Date</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="moveDate"
                  type="date"
                  required={step === 1}
                  value={formData.moveDate}
                  onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
                  className={inputClass}
                />
              </div>
            </div>
          </div>
        </div>

        {/* STEP 2: Locations */}
        <div className={`transition-all duration-500 ${step === 2 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-8 hidden'}`}>
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Locations</h2>
            <p className="text-slate-500 font-medium">Where are we moving you from and to?</p>
          </div>

          <div className="space-y-6">
            {initialBorough && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl mb-4">
                <p className="text-sm font-medium text-emerald-800 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  We noticed you are looking in <span className="font-bold">{initialBorough}</span>. We've pre-filled your collection area!
                </p>
              </div>
            )}

            <div>
              <label htmlFor="collectionAddress" className={labelClass}>Moving From (Collection Address)</label>
              <div className="relative">
                <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="collectionAddress"
                  type="text"
                  required={step === 2}
                  value={formData.collectionAddress}
                  onChange={(e) => setFormData({...formData, collectionAddress: e.target.value})}
                  className={inputClass}
                  placeholder="Full address or Postcode"
                />
              </div>
            </div>

            <div>
              <label htmlFor="deliveryAddress" className={labelClass}>Moving To (Delivery Address)</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="deliveryAddress"
                  type="text"
                  required={step === 2}
                  value={formData.deliveryAddress}
                  onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
                  className={inputClass}
                  placeholder="Full address or Postcode"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="additionalInfo" className={labelClass}>Additional Details (Optional)</label>
              <textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                className="w-full p-4 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all bg-slate-50 focus:bg-white min-h-[120px]"
                placeholder="E.g., 2nd floor flat, no lift, need packing materials..."
              />
            </div>
          </div>
        </div>

        {/* STEP 3: Contact Details */}
        <div className={`transition-all duration-500 ${step === 3 ? 'opacity-100 translate-x-0 block' : 'opacity-0 translate-x-8 hidden'}`}>
          <div className="mb-8">
            <h2 className="text-2xl font-black text-slate-900 mb-2">Contact Details</h2>
            <p className="text-slate-500 font-medium">How should we send your quote?</p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClass}>Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="name"
                  type="text"
                  required={step === 3}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  required={step === 3}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address (e.g., name@domain.com)"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={inputClass}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="phone"
                  type="tel"
                  required={step === 3}
                  minLength={10}
                  maxLength={15}
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
          </div>
        </div>

        {/* Form Controls */}
        <div className="flex items-center justify-between pt-10 mt-10 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-6 py-3 font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back
            </button>
          ) : <div></div>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center disabled:opacity-70"
          >
            {step === 3 ? (isSubmitting ? 'Submitting...' : 'Request Quote') : 'Next Step'}
            {step < 3 && <ChevronRight className="w-5 h-5 ml-1" />}
          </button>
        </div>

      </form>
    </div>
  );
}
