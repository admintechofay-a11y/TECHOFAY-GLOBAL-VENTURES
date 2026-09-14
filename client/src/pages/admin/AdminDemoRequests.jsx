import React, { useState, useEffect } from 'react';
import { Boxes, Search, Trash2, CheckCircle2, Clock } from 'lucide-react';
import api from '../../utils/api';
import { useRealtime } from '../../context/SocketContext';

export default function AdminDemoRequests() {
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { realtimeAlerts } = useRealtime();

  const fetchDemos = async () => {
    try {
      setLoading(true);
      const res = await api.get('/demo-request');
      const data = Array.isArray(res.data) ? res.data : (res.data?.demoRequests || []);
      setDemos(data);
    } catch (err) {
      console.error('[Fetch Demo Requests Error]:', err);
      setDemos((prev) => (Array.isArray(prev) ? prev : []));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDemos();
  }, []);

  // Real-time socket sync
  useEffect(() => {
    if (realtimeAlerts.length > 0 && realtimeAlerts[0]?.type === 'demo') {
      const newDemo = realtimeAlerts[0].data;
      if (newDemo) {
        const id = newDemo._id || newDemo.id || `demo-${Date.now()}`;
        setDemos((prev) => {
          const list = Array.isArray(prev) ? prev : [];
          if (list.some((d) => String(d._id) === String(id))) return list;
          return [{ ...newDemo, _id: id, isLiveArrival: true }, ...list];
        });
      }
    }
  }, [realtimeAlerts]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.patch(`/demo-request/${id}`, { status: newStatus });
      setDemos((prev) =>
        prev.map((d) => (d._id === id ? { ...d, status: newStatus } : d))
      );
    } catch (err) {
      console.error('[Update Demo Error]:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this demo lead?')) return;
    try {
      await api.delete(`/demo-request/${id}`);
      setDemos((prev) => prev.filter((d) => d._id !== id));
    } catch (err) {
      console.error('[Delete Demo Error]:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D4FF]">
          SAAS PLATFORMS
        </span>
        <h1 className="font-orbitron font-extrabold text-2xl text-white">
          Product Demo Requests
        </h1>
      </div>

      <div className="glass-panel rounded-2xl border border-[rgba(43,110,250,0.25)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#050B1F]/80 text-[#8B9AB5] uppercase font-mono text-[10px] border-b border-white/5">
              <tr>
                <th className="px-5 py-3.5">Product</th>
                <th className="px-5 py-3.5">Contact / Company</th>
                <th className="px-5 py-3.5">Size</th>
                <th className="px-5 py-3.5">Date</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-xs font-mono text-[#00D4FF] animate-pulse">
                    LOADING DEMO REQUESTS...
                  </td>
                </tr>
              ) : demos.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-xs text-[#8B9AB5]">
                    No demo requests recorded yet.
                  </td>
                </tr>
              ) : (
                demos.map((d) => (
                  <tr key={d._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4 font-orbitron font-bold text-white">
                      <div className="flex items-center gap-1.5">
                        {d.isLiveArrival && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 animate-pulse uppercase">
                            LIVE
                          </span>
                        )}
                        <span>{d.productName || 'Enterprise Product'}</span>
                      </div>
                    </td>

                    <td className="px-5 py-4">
                      <div className="font-semibold text-white">{d.fullName || d.name || 'Client Lead'}</div>
                      <div className="text-[11px] text-[#8B9AB5]">
                        {(d.companyName || d.company || 'Corporate')} &bull; {d.email || 'N/A'}
                      </div>
                      {d.requirements && (
                        <div className="text-[11px] text-[#00D4FF] italic mt-0.5 line-clamp-1">"{d.requirements}"</div>
                      )}
                    </td>

                    <td className="px-5 py-4 font-mono text-[#cad7ec]">
                      {d.companySize || 'Enterprise'}
                    </td>

                    <td className="px-5 py-4 text-[#8B9AB5] whitespace-nowrap">
                      {d.createdAt ? new Date(d.createdAt).toLocaleDateString() : 'Today'}
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={d.status}
                        onChange={(e) => handleStatusChange(d._id, e.target.value)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded-lg bg-[#050B1F] border focus:outline-none cursor-pointer ${
                          d.status === 'Pending'
                            ? 'text-amber-400 border-amber-500/40'
                            : d.status === 'Scheduled'
                            ? 'text-cyan-400 border-cyan-500/40'
                            : d.status === 'Completed'
                            ? 'text-green-400 border-green-500/40'
                            : 'text-red-400 border-red-500/40'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Scheduled">Scheduled</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => handleDelete(d._id)}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#8B9AB5] hover:text-red-400 transition-colors"
                        title="Delete Demo Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
