import { Suspense } from 'react';
import QuoteFormContent from './QuoteFormContent';

function QuoteFormFallback() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 bg-slate-200 rounded-xl"></div>
      <div className="h-64 bg-slate-200 rounded-xl"></div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Get Your Free Moving Quote</h1>
          
          <Suspense fallback={<QuoteFormFallback />}>
            <QuoteFormContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}