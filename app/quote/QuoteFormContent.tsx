'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function QuoteFormContent() {
  const searchParams = useSearchParams();
  const postcode = searchParams.get('postcode') || '';
  const borough = searchParams.get('borough') || '';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    collectionAddress: '',
    deliveryAddress: '',
    moveDate: '',
    moveType: '',
    additionalInfo: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your API
    console.log('Form submitted:', formData);
    alert('Thank you! We\'ll be in touch within 24 hours.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {borough && (
        <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
          <p className="text-sm font-medium text-slate-700">
            📍 Serving your area: <span className="font-bold text-blue-700">{borough} ({postcode})</span>
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="020 7946 0192"
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Collection Address *</label>
        <input
          type="text"
          required
          value={formData.collectionAddress}
          onChange={(e) => setFormData({...formData, collectionAddress: e.target.value})}
          className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder={`${postcode ? postcode + ', ' : ''}${borough || 'Your address'}`}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Delivery Address *</label>
        <input
          type="text"
          required
          value={formData.deliveryAddress}
          onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
          className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="Where are we moving you to?"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Move Date *</label>
          <input
            type="date"
            required
            value={formData.moveDate}
            onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-2">Move Type *</label>
          <select
            required
            value={formData.moveType}
            onChange={(e) => setFormData({...formData, moveType: e.target.value})}
            className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select move type</option>
            <option value="studio">Studio Flat</option>
            <option value="1bed">1 Bedroom House</option>
            <option value="2bed">2 Bedroom House</option>
            <option value="3bed">3 Bedroom House</option>
            <option value="4bed">4+ Bedroom House</option>
            <option value="office">Office Move</option>
            <option value="commercial">Commercial Move</option>
            <option value="man-van">Man with Van</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-slate-700 mb-2">Additional Information</label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
          rows={3}
          className="w-full p-3 border border-slate-200 rounded-xl text-slate-800 font-medium focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
          placeholder="Any special requirements or large items? Let us know..."
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition-colors shadow-lg shadow-blue-600/20"
      >
        Submit Booking Request
      </button>

      <p className="text-xs text-center text-slate-500">
        By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
      </p>
    </form>
  );
}
