import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Coins, 
  ArrowRight, 
  UploadCloud, 
  CheckCircle2, 
  Sparkles,
  Send,
  HeartHandshake
} from 'lucide-react';
import { jobsData, culturePerks } from '../data/jobsData';
import Modal from '../components/common/Modal';
import api from '../utils/api';
import CtaBanner from '../components/home/CtaBanner';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    coverLetter: ''
  });

  const departments = ['All', 'Engineering', 'Cybersecurity', 'Artificial Intelligence', 'Marketing', 'Quality Assurance', 'Infrastructure'];
  const locations = ['All', 'Remote (Pan-India & Global)', 'Hybrid (Bengaluru / Mumbai)', 'Hybrid (ETV Marathahalli Bangalore)', 'Remote (India)', 'Hybrid (Bengaluru / Pune)'];

  const filteredJobs = jobsData.filter((j) => {
    const matchDept = selectedDept === 'All' || j.department === selectedDept;
    const matchLoc = selectedLocation === 'All' || j.location === selectedLocation;
    return matchDept && matchLoc;
  });

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      alert('Please attach your Resume file (PDF or DOCX)');
      return;
    }

    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append('fullName', formData.fullName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('role', applyModalJob?.title || 'General Engineering Applicant');
      data.append('linkedin', formData.linkedin);
      data.append('portfolio', formData.portfolio);
      data.append('coverLetter', formData.coverLetter);
      data.append('resume', resumeFile);

      await api.post('/careers/apply', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setApplySuccess(true);
      setTimeout(() => {
        setApplySuccess(false);
        setApplyModalJob(null);
        setResumeFile(null);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          linkedin: '',
          portfolio: '',
          coverLetter: ''
        });
      }, 2500);
    } catch (err) {
      console.error('[Application Submission Error]:', err);
      alert(err.response?.data?.message || 'Error submitting application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#166534] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
            Build High-Impact Systems & Careers
          </div>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111827] tracking-tight">
            Careers at <span className="text-[#16A34A]">Techofay Global</span>
          </h1>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed">
            We are assembling a premier team of software engineers, AI developers, growth marketers, and solutions architects. Help us build the technological backbone of global digital commerce.
          </p>
        </div>
      </div>

      {/* Culture & Perks Grid */}
      <div className="bg-[#F8FAF8] border-y border-[#E5E7EB] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
              Our Culture & Benefits
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1">
              Engineered for High Autonomy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturePerks.map((perk, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-xs hover:border-[#16A34A] transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-[#DCFCE7] flex items-center justify-center text-[#16A34A] mb-4">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#111827] mb-2">
                  {perk.title}
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="open-roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-[#166534] font-semibold uppercase tracking-wider">
              Immediate Openings
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#111827] mt-1">
              Active Engineering & Growth Roles
            </h2>
          </div>

          {/* Department & Location Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#16A34A]"
            >
              {departments.map((d) => (
                <option key={d} value={d}>Department: {d}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-xs text-[#111827] focus:outline-none focus:border-[#16A34A]"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>Location: {loc}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center bg-[#F8FAF8] rounded-2xl border border-[#E5E7EB]">
              <p className="text-sm text-[#6B7280]">No matching roles found. Try resetting your filter.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E7EB] hover:border-[#16A34A] hover:shadow-[0_8px_24px_rgba(22,163,74,0.08)] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-xs"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#DCFCE7] text-[#166534] border border-[#BBF7D0] font-semibold">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#F8FAF8] text-[#6B7280] border border-[#E5E7EB]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#111827]">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#374151] pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5 text-[#16A34A]" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setApplyModalJob(job)}
                    className="w-full sm:w-auto px-7 py-3 rounded-lg font-semibold text-xs text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Apply for this Position</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Spontaneous Application Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#F0FDF4] p-8 sm:p-12 rounded-3xl border border-[#BBF7D0] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#111827]">
              Don’t See Your Exact Role?
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280]">
              We frequently create bespoke positions for extraordinary talent. Send us your CV, GitHub, or case studies and tell us how you want to contribute.
            </p>
          </div>
          <button
            onClick={() => setApplyModalJob({ title: 'Spontaneous Enterprise Application' })}
            className="px-8 py-3.5 rounded-lg text-xs font-semibold text-[#16A34A] bg-white hover:bg-[#F8FAF8] border border-[#16A34A] transition-colors shrink-0 shadow-xs cursor-pointer"
          >
            Submit Open Application &rarr;
          </button>
        </div>
      </div>

      {/* Job Application Modal */}
      <Modal
        isOpen={!!applyModalJob}
        onClose={() => setApplyModalJob(null)}
        title={`Apply: ${applyModalJob?.title}`}
        subtitle="Submit your credentials directly to our engineering leadership team."
      >
        {applySuccess ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-xl text-[#111827]">
              Application Received!
            </h3>
            <p className="text-xs text-[#6B7280] max-w-sm mx-auto">
              Our recruitment team will review your application and reach out if there is an alignment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleApplySubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Kaelen Thorne"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="kaelen@gmail.com"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 9359339000"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#374151] mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">GitHub / Portfolio / Work Links</label>
              <input
                type="text"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://github.com/username"
                className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Upload Resume / CV (PDF or DOCX) *</label>
              <div className="border-2 border-dashed border-[#BBF7D0] hover:border-[#16A34A] rounded-xl p-4 text-center cursor-pointer bg-[#F0FDF4] transition-colors relative">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-[#16A34A] mx-auto mb-1" />
                <span className="text-xs text-[#111827] font-medium block">
                  {resumeFile ? resumeFile.name : 'Click to select or drag and drop your resume file'}
                </span>
                <span className="text-[10px] text-[#6B7280]">PDF, DOC, DOCX up to 15MB</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#374151] mb-1">Brief Technical Cover Note</label>
              <textarea
                rows={3}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Highlight your most impactful projects or technical achievements..."
                className="w-full px-3.5 py-2 rounded-lg bg-[#F8FAF8] border border-[#E5E7EB] text-[#111827] text-xs focus:outline-none focus:border-[#16A34A]"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setApplyModalJob(null)}
                className="px-4 py-2 rounded-lg text-xs text-[#6B7280] hover:text-[#111827] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-lg text-xs font-semibold text-white bg-[#16A34A] hover:bg-[#166534] transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </Modal>

      <CtaBanner />
    </div>
  );
}
