import React, { useState, useEffect } from 'react';
import { 
  Inbox, 
  Search, 
  Download, 
  Trash2, 
  CheckCircle, 
  Mail, 
  Send, 
  Eye, 
  Clock, 
  Filter,
  FileText,
  Radio,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import api from '../../utils/api';
import Modal from '../../components/common/Modal';
import EmptyState from '../../components/common/EmptyState';
import { useRealtime } from '../../context/SocketContext';

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [search, setSearch] = useState('');
  
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [replyModalInquiry, setReplyModalInquiry] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [replySending, setReplySending] = useState(false);

  const { realtimeAlerts, isConnected } = useRealtime();

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await api.get('/contact', {
        params: { status: statusFilter, service: serviceFilter, search }
      });
      const data = Array.isArray(res.data) ? res.data : (res.data?.inquiries || []);
      setInquiries(data);
    } catch (err) {
      console.error('[Fetch Inquiries Error]:', err);
      // Ensure state is never undefined or non-array
      setInquiries((prev) => (Array.isArray(prev) ? prev : []));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, [statusFilter, serviceFilter]);

  // Real-time socket ingestion: whenever a new inquiry arrives, prepend live
  useEffect(() => {
    if (realtimeAlerts.length > 0 && realtimeAlerts[0]?.type === 'inquiry') {
      const newInq = realtimeAlerts[0].data;
      if (newInq) {
        const id = newInq._id || newInq.id || `inq-${Date.now()}`;
        setInquiries((prev) => {
          const list = Array.isArray(prev) ? prev : [];
          const exists = list.some((item) => String(item._id) === String(id));
          if (exists) return list;
          return [{ ...newInq, _id: id, isLiveArrival: true }, ...list];
        });
      }
    }
  }, [realtimeAlerts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchInquiries();
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.patch(`/contact/${id}`, { status: newStatus });
      setInquiries((prev) =>
        (Array.isArray(prev) ? prev : []).map((item) => (item._id === id ? { ...item, status: newStatus } : item))
      );
      if (selectedInquiry?._id === id) {
        setSelectedInquiry((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('[Update Status Error]:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to permanently delete this inquiry?')) return;
    try {
      await api.delete(`/contact/${id}`);
      setInquiries((prev) => (Array.isArray(prev) ? prev : []).filter((item) => item._id !== id));
      if (selectedInquiry?._id === id) setSelectedInquiry(null);
    } catch (err) {
      console.error('[Delete Error]:', err);
    }
  };

  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!replyMessage || !replyModalInquiry) return;
    setReplySending(true);

    try {
      await api.post(`/contact/${replyModalInquiry._id}/reply`, { replyMessage });
      alert('Reply logged and dispatched to customer email.');
      setReplyModalInquiry(null);
      setReplyMessage('');
      fetchInquiries();
    } catch (err) {
      console.error('[Reply Error]:', err);
      alert('Failed to send reply');
    } finally {
      setReplySending(false);
    }
  };

  const handleExportCsv = () => {
    window.open('/api/contact/export-csv', '_blank');
  };

  const servicesList = [
    'All',
    'ERP Management Software',
    'Hospital Management System (HMS)',
    'School Management Software',
    'Hotel Management Software (HMS)',
    'Transport & Fleet Management Software',
    'Cybersecurity & Zero Trust',
    'Engineering & QA Testing',
    'AI & Autonomous Systems',
    'Growth Marketing & SEO',
    'Cloud Architecture & DevOps',
    'General Consultation'
  ];

  return (
    <div className="space-y-6">
      {/* Header & CSV Export */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#2B6EFA]">
              CLIENT PIPELINE
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A1628] border border-[rgba(43,110,250,0.2)] text-[10px] font-mono">
              <span className={`w-1.5 h-1.5 rounded-full ${isConnected ? 'bg-[#2B6EFA] animate-pulse' : 'bg-amber-600'}`} />
              <span className="text-[#c4d7f5]/70">{isConnected ? 'Live WebSockets' : 'Connecting'}</span>
              <span className="text-[#2B6EFA]">({inquiries.length})</span>
            </div>
          </div>
          <h1 className="font-heading font-extrabold text-2xl text-[#FFFFFF] mt-1">
            Enterprise Inquiries
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={fetchInquiries}
            className="p-2.5 rounded-xl text-xs font-semibold text-[#c4d7f5]/70 hover:text-[#FFFFFF] bg-[#0A1628] border border-[rgba(43,110,250,0.2)] hover:border-[#2B6EFA] transition-all flex items-center gap-1.5 cursor-pointer"
            title="Refresh Inquiries"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#2B6EFA]' : ''}`} />
          </button>
          <button
            onClick={handleExportCsv}
            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] shadow-[0_0_12px_rgba(43,110,250,0.2)] transition-all flex items-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-[#0A1628] p-4 rounded-2xl border border-[rgba(43,110,250,0.2)] flex flex-col md:flex-row items-center justify-between gap-4">
        <form onSubmit={handleSearchSubmit} className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c4d7f5]/50" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search name, company, email..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] placeholder:text-[#c4d7f5]/40 focus:outline-none focus:border-[#2B6EFA]"
          />
        </form>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#2B6EFA]"
          >
            <option value="All">Status: All</option>
            <option value="New">Status: New</option>
            <option value="In Progress">Status: In Progress</option>
            <option value="Resolved">Status: Resolved</option>
            <option value="Spam">Status: Spam</option>
          </select>

          {/* Service Filter */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="px-3 py-2 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-xs text-[#FFFFFF] focus:outline-none focus:border-[#2B6EFA]"
          >
            {servicesList.map((s) => (
              <option key={s} value={s}>Vertical: {s}</option>
            ))}
          </select>

          {(statusFilter !== 'All' || serviceFilter !== 'All' || search) && (
            <button
              onClick={() => {
                setStatusFilter('All');
                setServiceFilter('All');
                setSearch('');
              }}
              className="text-[11px] text-[#2B6EFA] hover:underline px-2 py-1 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#0A1628] rounded-2xl border border-[rgba(43,110,250,0.2)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#050B1F] text-[#c4d7f5]/70 uppercase font-mono text-[10px] border-b border-[rgba(43,110,250,0.1)]">
              <tr>
                <th className="px-5 py-3.5">Client & Company</th>
                <th className="px-5 py-3.5">Vertical</th>
                <th className="px-5 py-3.5">Budget & Timeline</th>
                <th className="px-5 py-3.5">Submitted</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(43,110,250,0.08)]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-xs font-mono text-[#2B6EFA] animate-pulse">
                    SYNCHRONIZING ENTERPRISE INQUIRY PIPELINE...
                  </td>
                </tr>
              ) : inquiries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-6">
                    <EmptyState
                      icon={Inbox}
                      title="No Inquiries Found"
                      description="No enterprise inquiries match your current search and filter parameters."
                      actionText="Reset Filters"
                      onAction={() => {
                        setStatusFilter('All');
                        setServiceFilter('All');
                        setSearch('');
                        fetchInquiries();
                      }}
                    />
                  </td>
                </tr>
              ) : (
                inquiries.map((inq) => (
                  <tr key={inq._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-1.5">
                        {inq.isLiveArrival && (
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] border border-[rgba(0,212,255,0.4)] animate-pulse uppercase">
                            LIVE
                          </span>
                        )}
                        <div className="font-semibold text-[#FFFFFF] text-xs">
                          {inq.fullName || inq.name || 'Anonymous Client'}
                        </div>
                      </div>
                      <div className="text-[11px] text-[#c4d7f5]/60">
                        {inq.companyName || inq.company || inq.email || 'Individual Account'}
                      </div>
                      {inq.phone && <div className="text-[10px] text-[#c4d7f5]/40 font-mono">{inq.phone}</div>}
                    </td>

                    <td className="px-5 py-4 font-medium text-[#c4d7f5]">
                      <span className="px-2 py-0.5 rounded-md bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[11px]">
                        {inq.service || 'General Consultation'}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <div className="text-[#2B6EFA] font-mono font-medium">
                        {inq.budget || 'Custom / Flexible'}
                      </div>
                      <div className="text-[10px] text-[#c4d7f5]/60">
                        {inq.timeline || '1 - 3 Months'}
                      </div>
                    </td>

                    <td className="px-5 py-4 text-[#c4d7f5]/60 whitespace-nowrap">
                      {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : 'Today'}
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={inq.status || 'New'}
                        onChange={(e) => handleStatusChange(inq._id, e.target.value)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded-lg bg-[#050B1F] border focus:outline-none cursor-pointer ${
                          inq.status === 'New'
                            ? 'text-[#2B6EFA] border-[rgba(0,212,255,0.4)]'
                            : inq.status === 'In Progress'
                            ? 'text-amber-400 border-amber-500/40'
                            : inq.status === 'Resolved'
                            ? 'text-green-400 border-green-500/40'
                            : 'text-red-400 border-red-500/40'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Resolved">Resolved</option>
                        <option value="Spam">Spam</option>
                      </select>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[rgba(43,110,250,0.2)] text-[#2B6EFA] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                          title="View Full Scope"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setReplyModalInquiry(inq)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[rgba(43,110,250,0.2)] text-[#00D4FF] hover:text-[#FFFFFF] transition-colors cursor-pointer"
                          title="Send Direct Reply"
                        >
                          <Mail className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(inq._id)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#c4d7f5]/60 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
      <Modal
        isOpen={!!selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        title={`Inquiry: ${selectedInquiry?.fullName || selectedInquiry?.name || 'Client Scope'}`}
        subtitle={`Submitted on ${selectedInquiry?.createdAt ? new Date(selectedInquiry.createdAt).toLocaleString() : 'Recent'}`}
      >
        {selectedInquiry && (
          <div className="space-y-4 text-xs text-[#c4d7f5]">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)]">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Email Address</span>
                <a href={`mailto:${selectedInquiry.email}`} className="text-[#FFFFFF] font-medium hover:text-[#2B6EFA]">
                  {selectedInquiry.email || 'N/A'}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Phone / WhatsApp</span>
                <span className="text-[#FFFFFF] font-medium">{selectedInquiry.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Company</span>
                <span className="text-[#FFFFFF] font-medium">{selectedInquiry.companyName || selectedInquiry.company || 'Individual'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Service Vertical</span>
                <span className="text-[#2B6EFA] font-medium">{selectedInquiry.service || 'General Consultation'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Budget</span>
                <span className="text-[#FFFFFF] font-mono">{selectedInquiry.budget || 'Custom / Flexible'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#c4d7f5]/50">Timeline</span>
                <span className="text-[#FFFFFF]">{selectedInquiry.timeline || '1 - 3 Months'}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)]">
              <span className="text-[10px] uppercase font-mono block text-[#2B6EFA] mb-1">
                Project Scope Message:
              </span>
              <p className="text-[#FFFFFF] text-xs leading-relaxed whitespace-pre-wrap">
                {selectedInquiry.message || 'No project description provided.'}
              </p>
            </div>

            {selectedInquiry.attachment && (
              <div className="p-3 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#FFFFFF] text-xs">
                  <FileText className="w-4 h-4 text-[#2B6EFA]" />
                  <span>Project Attachment / RFQ</span>
                </div>
                <a
                  href={selectedInquiry.attachment}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-[#2B6EFA] hover:text-[#00D4FF] hover:underline"
                >
                  Download / View &rarr;
                </a>
              </div>
            )}

            {/* Replies Log */}
            {selectedInquiry.replies && selectedInquiry.replies.length > 0 && (
              <div className="space-y-2 pt-2">
                <span className="text-[10px] uppercase font-mono text-[#2B6EFA] block">
                  Logged Replies:
                </span>
                {selectedInquiry.replies.map((rep, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.1)] text-[11px] text-[#c4d7f5]">
                    <div className="flex justify-between text-[10px] text-[#c4d7f5]/50 mb-1">
                      <span>{rep.sender}</span>
                      <span>{new Date(rep.sentAt).toLocaleString()}</span>
                    </div>
                    <div>{rep.message}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 border-t border-[rgba(43,110,250,0.2)] flex justify-end gap-3">
              <button
                onClick={() => {
                  setReplyModalInquiry(selectedInquiry);
                  setSelectedInquiry(null);
                }}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                Reply to Client
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Reply Modal */}
      <Modal
        isOpen={!!replyModalInquiry}
        onClose={() => setReplyModalInquiry(null)}
        title={`Reply to ${replyModalInquiry?.fullName}`}
        subtitle={`Dispatch email to ${replyModalInquiry?.email}`}
      >
        <form onSubmit={handleSendReply} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#c4d7f5] mb-1">Reply Message</label>
            <textarea
              required
              rows={5}
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your response to the enterprise client..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#050B1F] border border-[rgba(43,110,250,0.2)] text-[#FFFFFF] text-xs focus:outline-none focus:border-[#2B6EFA]"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setReplyModalInquiry(null)}
              className="px-4 py-2 rounded-lg text-xs text-[#c4d7f5]/60 hover:text-[#FFFFFF] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={replySending}
              className="px-5 py-2 rounded-lg text-xs font-semibold text-white font-semibold bg-[#2B6EFA] hover:bg-[#1E50C8] flex items-center gap-2 cursor-pointer transition-colors"
            >
              {replySending ? 'Sending...' : 'Send & Log Reply'}
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
