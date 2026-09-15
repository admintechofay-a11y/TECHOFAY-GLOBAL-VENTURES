import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Inbox, 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  Users, 
  Boxes, 
  ArrowRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  CartesianGrid 
} from 'recharts';
import api from '../../utils/api';
import { useRealtime } from '../../context/SocketContext';

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isConnected, latency, telemetry, realtimeAlerts } = useRealtime();

  const fetchMetrics = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get('/settings/metrics');
      setData(res.data);
    } catch (err) {
      console.error('[Dashboard Metrics Error]:', err);
      setError('Unable to load enterprise dashboard metrics. The backend server may be unreachable.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  // When a new inquiry or demo alert arrives via socket, refresh metrics dynamically
  useEffect(() => {
    if (realtimeAlerts.length > 0) {
      fetchMetrics();
    }
  }, [realtimeAlerts]);

  if (loading && !data) {
    return (
      <div className="py-24 text-center space-y-3">
        <div className="inline-block w-8 h-8 border-2 border-[#00D4FF] border-t-transparent rounded-full animate-spin" />
        <div className="font-orbitron text-xs text-[#00D4FF] tracking-widest">
          CALCULATING REAL-TIME ENTERPRISE METRICS...
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="py-16 text-center space-y-4 glass-panel rounded-2xl border border-red-500/30 p-8 max-w-lg mx-auto my-12">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="font-orbitron font-bold text-white text-base">Telemetry Connection Failed</h3>
        <p className="text-xs text-[#8B9AB5]">{error}</p>
        <button
          onClick={fetchMetrics}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
        >
          <span>Retry Connection</span>
        </button>
      </div>
    );
  }

  const stats = data?.stats || {};
  const charts = data?.charts || {};
  const recentInquiries = data?.recentInquiries || [];

  return (
    <div className="space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D4FF]">
            TELEMETRY & OPERATIONS HUB
          </span>
          <h1 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
            Mission Control Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/inquiries"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue flex items-center gap-1.5"
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Manage Inquiries</span>
          </Link>
          <Link
            to="/admin/blog"
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#cad7ec] glass-card hover:text-white"
          >
            Create Post
          </Link>
        </div>
      </div>

      {/* Real-time Telemetry & Live Event Alert Bar */}
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#0B1530] via-[#0D1E45] to-[#0B1530] border border-[rgba(0,212,255,0.25)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
          <span className="font-mono text-white font-semibold">
            {isConnected ? 'LIVE WEBSOCKET STREAM ACTIVE' : 'CONNECTING TO CORE...'}
          </span>
          <span className="text-white/20">|</span>
          <span className="text-[#8B9AB5]">Region: <strong className="text-white font-mono">{telemetry.serverRegion}</strong></span>
          <span className="text-white/20 hidden sm:inline">|</span>
          <span className="text-[#8B9AB5] hidden sm:inline">Latency: <strong className="text-[#00D4FF] font-mono">{latency}ms</strong></span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
            {telemetry.activeUsers} Live Concurrent Visitors
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#2B6EFA]/10 text-[#00D4FF] border border-[#2B6EFA]/20">
            SLA: {telemetry.uptime}
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1 */}
        <div className="glass-panel p-5 rounded-2xl border border-[rgba(43,110,250,0.3)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#8B9AB5]">TOTAL INQUIRIES</span>
            <div className="w-7 h-7 rounded-lg bg-[#2B6EFA]/20 flex items-center justify-center text-[#00D4FF]">
              <Inbox className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
            {stats.totalInquiries || 0}
          </div>
          <div className="text-[10px] text-[#00D4FF] mt-1 font-medium">
            Enterprise Client Leads
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-panel p-5 rounded-2xl border border-[rgba(0,212,255,0.3)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#8B9AB5]">NEW THIS WEEK</span>
            <div className="w-7 h-7 rounded-lg bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-[#00D4FF]">
            {stats.newThisWeek || 0}
          </div>
          <div className="text-[10px] text-[#8B9AB5] mt-1">
            Last 7 Calendar Days
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-panel p-5 rounded-2xl border border-[rgba(123,47,190,0.3)]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#8B9AB5]">IN PROGRESS</span>
            <div className="w-7 h-7 rounded-lg bg-[#7B2FBE]/20 flex items-center justify-center text-violet-400">
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-violet-400">
            {stats.pendingInquiries || 0}
          </div>
          <div className="text-[10px] text-[#8B9AB5] mt-1">
            Architecture Triage Active
          </div>
        </div>

        {/* Card 4 */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#8B9AB5]">DEMOS & APPLICANTS</span>
            <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white">
            {(stats.totalDemoRequests || 0) + (stats.totalApplications || 0)}
          </div>
          <div className="text-[10px] text-[#8B9AB5] mt-1">
            {stats.totalDemoRequests || 0} Demos &bull; {stats.totalApplications || 0} Applicants
          </div>
        </div>
      </div>

      {/* Recharts Data Visualization Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Leads Trend (Line Chart) */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-2xl border border-[rgba(43,110,250,0.25)] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-orbitron font-bold text-sm text-white">
                Monthly Lead & Demo Volume
              </h3>
              <p className="text-[11px] text-[#8B9AB5]">
                Inquiries vs SaaS Demo Requests (H2 2025)
              </p>
            </div>
            <span className="text-xs font-mono text-[#00D4FF] px-2 py-0.5 rounded bg-white/5">
              GROWTH: +340%
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.monthlyLeadsTrend || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" stroke="#8B9AB5" fontSize={11} />
                <YAxis stroke="#8B9AB5" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050B1F', borderColor: '#2B6EFA', borderRadius: '8px', fontSize: '11px' }}
                />
                <Line type="monotone" dataKey="inquiries" stroke="#00D4FF" strokeWidth={2.5} dot={{ fill: '#00D4FF' }} />
                <Line type="monotone" dataKey="demos" stroke="#7B2FBE" strokeWidth={2} dot={{ fill: '#7B2FBE' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inquiries by Vertical (Bar Chart) */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-2xl border border-[rgba(43,110,250,0.25)] space-y-4">
          <div>
            <h3 className="font-orbitron font-bold text-sm text-white">
              Inquiries by Practice Area
            </h3>
            <p className="text-[11px] text-[#8B9AB5]">
              Breakdown across enterprise verticals
            </p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.inquiriesByVertical || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="vertical" stroke="#8B9AB5" fontSize={10} tickFormatter={(v) => v.split(' ')[0]} />
                <YAxis stroke="#8B9AB5" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050B1F', borderColor: '#00D4FF', borderRadius: '8px', fontSize: '11px' }}
                />
                <Bar dataKey="count" fill="#2B6EFA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Quick Table */}
      <div className="glass-panel rounded-2xl border border-[rgba(43,110,250,0.25)] overflow-hidden">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div>
            <h3 className="font-orbitron font-bold text-sm text-white">
              Recent Enterprise Inquiries
            </h3>
            <p className="text-[11px] text-[#8B9AB5]">
              Latest submissions received via the contact portal
            </p>
          </div>
          <Link
            to="/admin/inquiries"
            className="text-xs font-semibold text-[#00D4FF] hover:text-white flex items-center gap-1"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#050B1F]/60 text-[#8B9AB5] uppercase font-mono text-[10px] border-b border-white/5">
              <tr>
                <th className="px-5 py-3">Client / Company</th>
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3">Budget</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {recentInquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-[#8B9AB5]">
                    No inquiries recorded yet.
                  </td>
                </tr>
              ) : (
                recentInquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-semibold text-white">
                        {inq.fullName || inq.name || 'Enterprise Client'}
                      </div>
                      <div className="text-[11px] text-[#8B9AB5]">
                        {inq.companyName || inq.company || inq.email || 'Direct Inquiry'}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 font-medium text-[#c4d7f5]">
                      {inq.service || 'General Consultation'}
                    </td>
                    <td className="px-5 py-3.5 text-[#00D4FF] font-mono">
                      {inq.budget || 'Custom / Flexible'}
                    </td>
                    <td className="px-5 py-3.5 text-[#8B9AB5]">
                      {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Today'}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        inq.status === 'New'
                          ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                          : inq.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : inq.status === 'Resolved'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <Link
                        to="/admin/inquiries"
                        className="text-xs text-[#00D4FF] hover:underline"
                      >
                        Details
                      </Link>
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
