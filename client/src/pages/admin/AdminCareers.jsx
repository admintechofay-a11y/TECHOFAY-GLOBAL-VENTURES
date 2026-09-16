import React, { useState, useEffect } from 'react';
import { Users, Search, Download, Trash2, Eye, FileText, CheckCircle2 } from 'lucide-react';
import api from '../../utils/api';
import Modal from '../../components/common/Modal';
import EmptyState from '../../components/common/EmptyState';

export default function AdminCareers() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedApp, setSelectedApp] = useState(null);

  const fetchApplications = async () => {
    try {
      const res = await api.get('/careers/applications', {
        params: { status: statusFilter }
      });
      setApplications(res.data);
    } catch (err) {
      console.error('[Fetch Applications Error]:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [statusFilter]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await api.patch(`/careers/applications/${id}`, { status: newStatus });
      setApplications((prev) =>
        prev.map((app) => (app._id === id ? { ...app, status: newStatus } : app))
      );
      if (selectedApp?._id === id) {
        setSelectedApp((prev) => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('[Update App Status Error]:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this applicant record?')) return;
    try {
      await api.delete(`/careers/applications/${id}`);
      setApplications((prev) => prev.filter((a) => a._id !== id));
      if (selectedApp?._id === id) setSelectedApp(null);
    } catch (err) {
      console.error('[Delete Error]:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#F59E0B]">
            TALENT PIPELINE
          </span>
          <h1 className="font-heading font-extrabold text-2xl text-[#FFFBEB]">
            Career Applications
          </h1>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3.5 py-2 rounded-xl bg-[#1A1A1A] border border-[rgba(245,158,11,0.2)] text-xs text-[#FFFBEB] focus:outline-none focus:border-[#F59E0B]"
        >
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Rejected">Rejected</option>
          <option value="Hired">Hired</option>
        </select>
      </div>

      <div className="bg-[#1A1A1A] rounded-2xl border border-[rgba(245,158,11,0.15)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#111111] text-[#FDE68A]/70 uppercase font-mono text-[10px] border-b border-[rgba(245,158,11,0.1)]">
              <tr>
                <th className="px-5 py-3.5">Candidate</th>
                <th className="px-5 py-3.5">Role Applied</th>
                <th className="px-5 py-3.5">Submitted</th>
                <th className="px-5 py-3.5">Resume</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(245,158,11,0.08)]">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-xs font-mono text-[#F59E0B] animate-pulse">
                    LOADING APPLICANTS...
                  </td>
                </tr>
              ) : applications.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-6">
                    <EmptyState
                      icon={Users}
                      title="No Applications Found"
                      description="There are currently no job applications under the selected filter."
                      actionText="Show All Candidates"
                      onAction={() => setStatusFilter('All')}
                    />
                  </td>
                </tr>
              ) : (
                applications.map((app) => (
                  <tr key={app._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <div className="font-semibold text-[#FFFBEB]">{app.fullName}</div>
                      <div className="text-[11px] text-[#FDE68A]/60">{app.email}</div>
                    </td>

                    <td className="px-5 py-4 text-[#F59E0B] font-medium">
                      {app.role}
                    </td>

                    <td className="px-5 py-4 text-[#FDE68A]/60 whitespace-nowrap">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4">
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111] border border-[rgba(245,158,11,0.2)] hover:border-[#F59E0B] text-[#F59E0B] hover:text-[#FFFBEB] transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Resume</span>
                      </a>
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded-lg bg-[#111111] border focus:outline-none cursor-pointer ${
                          app.status === 'New'
                            ? 'text-[#F59E0B] border-[rgba(245,158,11,0.4)]'
                            : app.status === 'Shortlisted'
                            ? 'text-amber-300 border-amber-500/40'
                            : app.status === 'Interviewing'
                            ? 'text-yellow-400 border-yellow-500/40'
                            : app.status === 'Hired'
                            ? 'text-green-400 border-green-500/40'
                            : 'text-red-400 border-red-500/40'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Shortlisted">Shortlisted</option>
                        <option value="Interviewing">Interviewing</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Hired">Hired</option>
                      </select>
                    </td>

                    <td className="px-5 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedApp(app)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[rgba(245,158,11,0.15)] text-[#F59E0B] transition-colors cursor-pointer"
                          title="View Full Profile"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#FDE68A]/60 hover:text-red-400 transition-colors cursor-pointer"
                          title="Delete Application"
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

      {/* Applicant Detail Modal */}
      <Modal
        isOpen={!!selectedApp}
        onClose={() => setSelectedApp(null)}
        title={`Candidate: ${selectedApp?.fullName}`}
        subtitle={`Role: ${selectedApp?.role}`}
      >
        {selectedApp && (
          <div className="space-y-4 text-xs text-[#FDE68A]">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#111111] border border-[rgba(245,158,11,0.15)]">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#FDE68A]/50">Email</span>
                <a href={`mailto:${selectedApp.email}`} className="text-[#FFFBEB] font-medium hover:text-[#F59E0B]">
                  {selectedApp.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#FDE68A]/50">Phone</span>
                <span className="text-[#FFFBEB] font-medium">{selectedApp.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#FDE68A]/50">LinkedIn</span>
                {selectedApp.linkedin ? (
                  <a href={selectedApp.linkedin} target="_blank" rel="noreferrer" className="text-[#F59E0B] hover:underline">
                    View Profile &rarr;
                  </a>
                ) : <span className="text-[#FDE68A]/50">None provided</span>}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#FDE68A]/50">Portfolio / GitHub</span>
                {selectedApp.portfolio ? (
                  <a href={selectedApp.portfolio} target="_blank" rel="noreferrer" className="text-[#F59E0B] hover:underline">
                    {selectedApp.portfolio}
                  </a>
                ) : <span className="text-[#FDE68A]/50">None provided</span>}
              </div>
            </div>

            {selectedApp.coverLetter && (
              <div className="p-4 rounded-xl bg-[#111111] border border-[rgba(245,158,11,0.15)]">
                <span className="text-[10px] uppercase font-mono block text-[#F59E0B] mb-1">
                  Candidate Cover Note:
                </span>
                <p className="text-[#FFFBEB] leading-relaxed whitespace-pre-wrap">
                  {selectedApp.coverLetter}
                </p>
              </div>
            )}

            <div className="p-3 rounded-xl bg-[#111111] border border-[rgba(245,158,11,0.2)] flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#FFFBEB]">
                <FileText className="w-4 h-4 text-[#F59E0B]" />
                <span>Applicant Resume Document</span>
              </div>
              <a
                href={selectedApp.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold text-[#1c1400] bg-[#F59E0B] hover:bg-[#B45309] transition-colors"
              >
                Download Resume &rarr;
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
