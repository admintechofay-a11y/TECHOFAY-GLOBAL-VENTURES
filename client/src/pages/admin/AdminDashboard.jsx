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
        <div className="inline-block w-8 h-8 border-2 border-[#2B6EFA] border-t-transparent rounded-full animate-spin" />
        <div className="font-heading text-xs text-[#2B6EFA] tracking-widest font-semibold">
          CALCULATING REAL-TIME ENTERPRISE METRICS...
        </div>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="py-16 text-center space-y-4 bg-[#0A1628] rounded-2xl border border-red-500/30 p-8 max-w-lg mx-auto my-12">
        <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mx-auto">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="font-heading font-bold text-[#FFFFFF] text-base">Telemetry Connection Failed</h3>
        <p className="text-xs text-[#c4d7f5]/70">{error}</p>
        <button
          onClick={fetchMetrics}
          className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] transition-colors cursor-pointer inline-flex items-center gap-2"
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
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#2B6EFA]">
            TELEMETRY & OPERATIONS HUB
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFFFF] mt-0.5">
            Mission Control Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/inquiries"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] shadow-[0_0_15px_rgba(0,212,255,0.3)] flex items-center gap-1.5 transition-colors"
          >
            <Inbox className="w-3.5 h-3.5" />
            <span>Manage Inquiries</span>
          </Link>
          <Link
            to="/admin/blog"
            className="px-4 py-2 rounded-xl text-xs font-medium text-[#c4d7f5] bg-[#0A1628] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] hover:text-[#FFFFFF] transition-colors"
          >
            Create Post
          </Link>
        </div>
      </div>

      {/* Real-time Telemetry & Live Event Alert Bar */}
      <div className="p-3.5 rounded-2xl bg-[#0A1628] border border-[rgba(43,110,250,0.2)] flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className={`w-2.5 h-2.5 rounded-full ${isConnected ? 'bg-[#2B6EFA] animate-pulse' : 'bg-amber-600'}`} />
          <span className="font-mono text-[#FFFFFF] font-semibold">
            {isConnected ? 'LIVE WEBSOCKET STREAM ACTIVE' : 'CONNECTING TO CORE...'}
          </span>
          <span className="text-[#FFFFFF]/20">|</span>
          <span className="text-[#c4d7f5]/70">Region: <strong className="text-[#FFFFFF] font-mono">{telemetry.serverRegion}</strong></span>
          <span className="text-[#FFFFFF]/20 hidden sm:inline">|</span>
          <span className="text-[#c4d7f5]/70 hidden sm:inline">Latency: <strong className="text-[#2B6EFA] font-mono">{latency}ms</strong></span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-mono">
          <span className="px-2.5 py-1 rounded-lg bg-[rgba(43,110,250,0.12)] text-[#2B6EFA] border border-[rgba(0,212,255,0.3)] font-semibold">
            {telemetry.activeUsers} Live Concurrent Visitors
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#050B1F] text-[#c4d7f5] border border-[rgba(43,110,250,0.2)]">
            SLA: {telemetry.uptime}
          </span>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Card 1 */}
        <div className="bg-[#0A1628] p-5 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#c4d7f5]/70">TOTAL INQUIRIES</span>
            <div className="w-7 h-7 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA]">
              <Inbox className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFFFF]">
            {stats.totalInquiries || 0}
          </div>
          <div className="text-[10px] text-[#2B6EFA] mt-1 font-medium">
            Enterprise Client Leads
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0A1628] p-5 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#c4d7f5]/70">NEW THIS WEEK</span>
            <div className="w-7 h-7 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA]">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#2B6EFA]">
            {stats.newThisWeek || 0}
          </div>
          <div className="text-[10px] text-[#c4d7f5]/60 mt-1">
            Last 7 Calendar Days
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0A1628] p-5 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#c4d7f5]/70">IN PROGRESS</span>
            <div className="w-7 h-7 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#00D4FF]">
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#00D4FF]">
            {stats.pendingInquiries || 0}
          </div>
          <div className="text-[10px] text-[#c4d7f5]/60 mt-1">
            Architecture Triage Active
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0A1628] p-5 rounded-2xl border border-[rgba(43,110,250,0.2)] shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono text-[#c4d7f5]/70">DEMOS & APPLICANTS</span>
            <div className="w-7 h-7 rounded-lg bg-[rgba(43,110,250,0.2)] flex items-center justify-center text-[#2B6EFA]">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="font-heading font-extrabold text-2xl sm:text-3xl text-[#FFFFFF]">
            {(stats.totalDemoRequests || 0) + (stats.totalApplications || 0)}
          </div>
          <div className="text-[10px] text-[#c4d7f5]/60 mt-1">
            {stats.totalDemoRequests || 0} Demos &bull; {stats.totalApplications || 0} Applicants
          </div>
        </div>
      </div>

      {/* Recharts Data Visualization Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Monthly Leads Trend (Line Chart) */}
        <div className="lg:col-span-7 bg-[#0A1628] p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-heading font-bold text-sm text-[#FFFFFF]">
                Monthly Lead & Demo Volume
              </h3>
              <p className="text-[11px] text-[#c4d7f5]/60">
                Inquiries vs SaaS Demo Requests (H2 2025)
              </p>
            </div>
            <span className="text-xs font-mono text-[#2B6EFA] px-2 py-0.5 rounded bg-[rgba(43,110,250,0.12)]">
              GROWTH: +340%
            </span>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={charts.monthlyLeadsTrend || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(43,110,250,0.08)" />
                <XAxis dataKey="month" stroke="#8B9AB5" fontSize={11} />
                <YAxis stroke="#8B9AB5" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050B1F', borderColor: 'rgba(43,110,250,0.3)', borderRadius: '8px', fontSize: '11px', color: '#FFFFFF' }}
                />
                <Line type="monotone" dataKey="inquiries" stroke="#2B6EFA" strokeWidth={2.5} dot={{ fill: '#2B6EFA' }} />
                <Line type="monotone" dataKey="demos" stroke="#00D4FF" strokeWidth={2} dot={{ fill: '#00D4FF' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Inquiries by Vertical (Bar Chart) */}
        <div className="lg:col-span-5 bg-[#0A1628] p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] space-y-4">
          <div>
            <h3 className="font-heading font-bold text-sm text-[#FFFFFF]">
              Inquiries by Practice Area
            </h3>
            <p className="text-[11px] text-[#c4d7f5]/60">
              Breakdown across enterprise verticals
            </p>
          </div>

          <div className="h-64 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={charts.inquiriesByVertical || []}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(43,110,250,0.08)" />
                <XAxis dataKey="vertical" stroke="#8B9AB5" fontSize={10} tickFormatter={(v) => v.split(' ')[0]} />
                <YAxis stroke="#8B9AB5" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#050B1F', borderColor: 'rgba(43,110,250,0.3)', borderRadius: '8px', fontSize: '11px', color: '#FFFFFF' }}
                />
                <Bar dataKey="count" fill="#2B6EFA" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Inquiries Quick Table */}
      <div className="bg-[#0A1628] rounded-2xl border border-[rgba(43,110,250,0.2)] overflow-hidden">
        <div className="p-5 border-b border-[rgba(43,110,250,0.1)] flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-sm text-[#FFFFFF]">
              Recent Enterprise Inquiries
            </h3>
            <p className="text-[11px] text-[#c4d7f5]/60">
              Latest submissions received via the contact portal
            </p>
          </div>
          <Link
            to="/admin/inquiries"
            className="text-xs font-semibold text-[#2B6EFA] hover:text-[#00D4FF] flex items-center gap-1"
          >
            View All &rarr;
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#050B1F] text-[#c4d7f5]/70 uppercase font-mono text-[10px] border-b border-[rgba(43,110,250,0.1)]">
              <tr>
                <th className="px-5 py-3">Client / Company</th>
                <th className="px-5 py-3">Service</th>
                <th className="px-5 py-3">Budget</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(43,110,250,0.08)]">
              {recentInquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-[#c4d7f5]/60">
                    No inquiries recorded yet.
                  </td>
                </tr>
              ) : (
                recentInquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="font-semibold text-[#FFFFFF]">
                        {inq.fullName || inq.name || 'Enterprise Client'}
                      </div>
                      <div className="text-[11px] text-[#c4d7f5]/60">
                        {inq.companyName || inq.company || inq.email || 'Direct Inquiry'}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 font-medium text-[#c4d7f5]">
                      {inq.service || 'General Consultation'}
                    </td>
                    <td className="px-5 py-3.5 text-[#2B6EFA] font-mono">
                      {inq.budget || 'Custom / Flexible'}
                    </td>
                    <td className="px-5 py-3.5 text-[#c4d7f5]/60">
                      {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Today'}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${
                        inq.status === 'New'
                          ? 'bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] border border-[rgba(43,110,250,0.3)]'
                          : inq.status === 'In Progress'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : inq.status === 'Resolved'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-red-500/20 text-red-400 border border-red-500/30'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <Link
                        to="/admin/inquiries"
                        className="text-xs text-[#2B6EFA] hover:underline"
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
