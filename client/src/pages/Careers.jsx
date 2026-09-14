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
  const locations = ['All', 'Remote (Pan-India & Global)', 'Hybrid (Bengaluru / Mumbai)', 'Hybrid (Delhi NCR / Mumbai)', 'Remote (India)', 'Hybrid (Bengaluru / Pune)'];

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
    <div className="min-h-screen pt-28 pb-20 tech-grid-bg">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(43,110,250,0.12)] border border-[rgba(0,212,255,0.3)] shadow-glow-blue text-[#00D4FF] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Build High-Impact Systems
          </div>
          <h1 className="font-orbitron font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Careers at <span className="text-gradient">Techofay Global</span>
          </h1>
          <p className="text-sm sm:text-base text-[#8B9AB5] leading-relaxed">
            We are assembling the world’s most formidable team of systems engineers, security researchers, and AI scientists. Help us build the technological backbone of global commerce.
          </p>
        </div>
      </div>

      {/* Culture & Perks Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
            Our Culture & Benefits
          </span>
          <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mt-1">
            Engineered for High Autonomy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturePerks.map((perk, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2B6EFA]/15 flex items-center justify-center text-[#00D4FF] mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white mb-2">
                {perk.title}
              </h3>
              <p className="text-xs text-[#8B9AB5] leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="open-roles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
              Immediate Openings
            </span>
            <h2 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mt-1">
              Active Engineering & Leadership Roles
            </h2>
          </div>

          {/* Department & Location Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.3)] text-xs text-white focus:outline-none focus:border-[#00D4FF]"
            >
              {departments.map((d) => (
                <option key={d} value={d}>Department: {d}</option>
              ))}
            </select>

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-[#0A1628] border border-[rgba(43,110,250,0.3)] text-xs text-white focus:outline-none focus:border-[#00D4FF]"
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
            <div className="p-12 text-center glass-panel rounded-2xl">
              <p className="text-sm text-[#8B9AB5]">No matching roles found. Try resetting your filter.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-[rgba(43,110,250,0.2)] hover:border-[#00D4FF] transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#2B6EFA]/15 text-[#00D4FF] border border-[rgba(0,212,255,0.3)]">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-[#8B9AB5]">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-orbitron font-bold text-lg sm:text-xl text-white">
                    {job.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8B9AB5] leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#cad7ec] pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Coins className="w-3.5 h-3.5 text-[#00D4FF]" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <button
                    onClick={() => setApplyModalJob(job)}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center justify-center gap-2"
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
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[rgba(0,212,255,0.3)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="font-orbitron font-bold text-xl sm:text-2xl text-white">
              Don’t See Your Exact Role?
            </h3>
            <p className="text-xs sm:text-sm text-[#8B9AB5]">
              We frequently create bespoke positions for extraordinary talent. Send us your CV, GitHub, or research papers and tell us how you want to contribute.
            </p>
          </div>
          <button
            onClick={() => setApplyModalJob({ title: 'Spontaneous Enterprise Application' })}
            className="px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all shrink-0"
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
            <div className="w-14 h-14 rounded-full bg-[#00D4FF]/20 text-[#00D4FF] flex items-center justify-center mx-auto shadow-glow-cyan">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-orbitron font-bold text-xl text-white">
              Application Received!
            </h3>
            <p className="text-xs text-[#8B9AB5] max-w-sm mx-auto">
              Our technical recruitment team will review your resume and reach out if there is an architectural match.
            </p>
          </div>
        ) : (
          <form onSubmit={handleApplySubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Kaelen Thorne"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="kaelen@gmail.com"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Phone / WhatsApp</label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98200 12345"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#8B9AB5] mb-1">LinkedIn Profile URL</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/username"
                  className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">GitHub / Portfolio / Research Links</label>
              <input
                type="text"
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://github.com/username"
                className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Upload Resume / CV (PDF or DOCX) *</label>
              <div className="border-2 border-dashed border-[rgba(43,110,250,0.4)] hover:border-[#00D4FF] rounded-xl p-4 text-center cursor-pointer bg-[#050B1F]/60 transition-colors relative">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setResumeFile(e.target.files[0])}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-[#00D4FF] mx-auto mb-1" />
                <span className="text-xs text-white font-medium block">
                  {resumeFile ? resumeFile.name : 'Click to select or drag and drop your resume file'}
                </span>
                <span className="text-[10px] text-[#8B9AB5]">PDF, DOC, DOCX up to 15MB</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#8B9AB5] mb-1">Brief Technical Cover Note</label>
              <textarea
                rows={3}
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Highlight your most challenging architectural systems or security exploits..."
                className="w-full px-3.5 py-2 rounded-lg bg-[#050B1F] border border-[rgba(43,110,250,0.3)] text-white text-xs focus:outline-none focus:border-[#00D4FF]"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setApplyModalJob(null)}
                className="px-4 py-2 rounded-lg text-xs text-[#8B9AB5] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#2B6EFA] to-[#00D4FF] shadow-glow-blue hover:shadow-glow-cyan transition-all flex items-center gap-2"
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
