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
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D4FF]">
            TALENT PIPELINE
          </span>
          <h1 className="font-orbitron font-extrabold text-2xl text-white">
            Career Applications
          </h1>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3.5 py-2 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.3)] text-xs text-white focus:outline-none focus:border-[#00D4FF]"
        >
          <option value="All">All Statuses</option>
          <option value="New">New</option>
          <option value="Shortlisted">Shortlisted</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Rejected">Rejected</option>
          <option value="Hired">Hired</option>
        </select>
      </div>

      <div className="glass-panel rounded-2xl border border-[rgba(43,110,250,0.25)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#050B1F]/80 text-[#8B9AB5] uppercase font-mono text-[10px] border-b border-white/5">
              <tr>
                <th className="px-5 py-3.5">Candidate</th>
                <th className="px-5 py-3.5">Role Applied</th>
                <th className="px-5 py-3.5">Submitted</th>
                <th className="px-5 py-3.5">Resume</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-xs font-mono text-[#00D4FF] animate-pulse">
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
                      <div className="font-semibold text-white">{app.fullName}</div>
                      <div className="text-[11px] text-[#8B9AB5]">{app.email}</div>
                    </td>

                    <td className="px-5 py-4 text-[#00D4FF] font-medium">
                      {app.role}
                    </td>

                    <td className="px-5 py-4 text-[#8B9AB5] whitespace-nowrap">
                      {new Date(app.createdAt).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4">
                      <a
                        href={app.resumeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 hover:bg-[#2B6EFA]/20 text-[#00D4FF] transition-colors"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Resume</span>
                      </a>
                    </td>

                    <td className="px-5 py-4">
                      <select
                        value={app.status}
                        onChange={(e) => handleStatusChange(app._id, e.target.value)}
                        className={`text-[10px] font-semibold px-2 py-1 rounded-lg bg-[#050B1F] border focus:outline-none cursor-pointer ${
                          app.status === 'New'
                            ? 'text-cyan-400 border-cyan-500/40'
                            : app.status === 'Shortlisted'
                            ? 'text-blue-400 border-blue-500/40'
                            : app.status === 'Interviewing'
                            ? 'text-amber-400 border-amber-500/40'
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
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-[#2B6EFA]/20 text-[#00D4FF] transition-colors"
                          title="View Full Profile"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(app._id)}
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#8B9AB5] hover:text-red-400 transition-colors"
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
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#050B1F] border border-white/5">
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8B9AB5]">Email</span>
                <a href={`mailto:${selectedApp.email}`} className="text-white font-medium hover:text-[#00D4FF]">
                  {selectedApp.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8B9AB5]">Phone</span>
                <span className="text-white font-medium">{selectedApp.phone || 'N/A'}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8B9AB5]">LinkedIn</span>
                {selectedApp.linkedin ? (
                  <a href={selectedApp.linkedin} target="_blank" rel="noreferrer" className="text-[#00D4FF] hover:underline">
                    View Profile &rarr;
                  </a>
                ) : <span className="text-[#8B9AB5]">None provided</span>}
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono block text-[#8B9AB5]">Portfolio / GitHub</span>
                {selectedApp.portfolio ? (
                  <a href={selectedApp.portfolio} target="_blank" rel="noreferrer" className="text-[#00D4FF] hover:underline">
                    {selectedApp.portfolio}
                  </a>
                ) : <span className="text-[#8B9AB5]">None provided</span>}
              </div>
            </div>

            {selectedApp.coverLetter && (
              <div className="p-4 rounded-xl bg-[#050B1F] border border-white/5">
                <span className="text-[10px] uppercase font-mono block text-[#00D4FF] mb-1">
                  Candidate Cover Note:
                </span>
                <p className="text-white leading-relaxed whitespace-pre-wrap">
                  {selectedApp.coverLetter}
                </p>
              </div>
            )}

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <FileText className="w-4 h-4 text-[#00D4FF]" />
                <span>Applicant Resume Document</span>
              </div>
              <a
                href={selectedApp.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF]"
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
