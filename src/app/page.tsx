'use client';

import { useState } from 'react';
import { AlertOctagon, CheckCircle2, Clock, PackageX, Search, Truck } from 'lucide-react';

// Initializing mock state for the prototype demonstration
const initialExceptions = [
  { id: 'EX-0921', orderId: '#ORD-7721A', issue: 'Invalid Address Format', source: 'WMS', status: 'open', age: '14 mins', value: 245.50 },
  { id: 'EX-0922', orderId: '#ORD-7719C', issue: 'Inventory Mismatch (SKU-992)', source: 'OMS', status: 'open', age: '1 hr', value: 129.99 },
  { id: 'EX-0915', orderId: '#ORD-7688B', issue: 'Carrier SLA Breached', source: 'Logistics', status: 'resolved', age: '3 hrs', value: 89.00 }
];

export default function ExceptionEngine() {
  const [exceptions, setExceptions] = useState(initialExceptions);
  const [filter, setFilter] = useState('open');

  // Fast resolution handler for ops team
  const handleResolve = (id: string) => {
    setExceptions(prev => prev.map(ex => 
      ex.id === id ? { ...ex, status: 'resolved' } : ex
    ));
  };

  const visibleExceptions = exceptions.filter(ex => ex.status === filter);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <header className="mb-8 flex justify-between items-center border-b pb-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">ClearFlow Exception Engine</h1>
          <p className="text-sm text-slate-500 mt-1">Real-time WMS/OMS discrepancy resolution</p>
        </div>
        <div className="flex items-center gap-3 bg-white px-4 py-2 border rounded-md shadow-sm">
          <Search className="w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search order or SKU..." 
            className="outline-none text-sm w-64"
          />
        </div>
      </header>

      <main className="grid grid-cols-12 gap-6">
        {/* Left Sidebar - Metrics */}
        <div className="col-span-3 space-y-4">
          <div className="bg-white p-5 border rounded-lg shadow-sm">
            <div className="flex items-center gap-3 text-rose-600 mb-2">
              <AlertOctagon className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wide">Action Required</span>
            </div>
            <span className="text-4xl font-black">{exceptions.filter(e => e.status === 'open').length}</span>
            <p className="text-xs text-slate-500 mt-2">Open exceptions across all nodes</p>
          </div>
          
          <div className="bg-white p-5 border rounded-lg shadow-sm">
            <div className="flex items-center gap-3 text-emerald-600 mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-medium text-sm uppercase tracking-wide">Resolved Today</span>
            </div>
            <span className="text-4xl font-black">{exceptions.filter(e => e.status === 'resolved').length}</span>
          </div>
        </div>

        {/* Main Work Area */}
        <div className="col-span-9 bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="flex border-b px-6 py-3 gap-6 bg-slate-50/50">
            <button 
              onClick={() => setFilter('open')}
              className={`text-sm font-medium pb-2 ${filter === 'open' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}
            >
              Open Queue
            </button>
            <button 
              onClick={() => setFilter('resolved')}
              className={`text-sm font-medium pb-2 ${filter === 'resolved' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'}`}
            >
              Resolved
            </button>
          </div>

          <div className="divide-y">
            {visibleExceptions.length === 0 ? (
              <div className="p-8 text-center text-slate-500 text-sm">No exceptions found in this queue.</div>
            ) : (
              visibleExceptions.map(ex => (
                <div key={ex.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-md ${ex.status === 'open' ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {ex.issue.includes('Address') ? <Truck className="w-5 h-5" /> : <PackageX className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{ex.orderId}</span>
                        <span className="text-xs font-medium bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">{ex.source}</span>
                      </div>
                      <p className="text-sm text-slate-600 mt-1">{ex.issue}</p>
                      <div className="flex items-center gap-1 text-xs text-slate-400 mt-2">
                        <Clock className="w-3 h-3" />
                        <span>Flagged {ex.age}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="font-medium text-slate-700">${ex.value.toFixed(2)}</span>
                    {ex.status === 'open' && (
                      <button 
                        onClick={() => handleResolve(ex.id)}
                        className="bg-slate-900 text-white text-sm px-4 py-2 rounded-md font-medium hover:bg-slate-800 transition-colors"
                      >
                        Force Resolve
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}