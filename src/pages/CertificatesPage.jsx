import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Award, Download, Share2, ShieldCheck, CheckCircle } from 'lucide-react';
import { Button } from '../components/common/Button';

export const CertificatesPage = () => {
  const { user } = useAuth();

  const certificates = [
    {
      id: 'cert-1',
      title: 'Python Coding Wizards for Kids',
      issuedDate: 'August 2026',
      instructor: 'Dr. Sarah Spark',
      grade: 'Distinction (98%)',
      verificationId: 'KM-CERT-2026-8841'
    },
    {
      id: 'cert-2',
      title: 'Cosmic Astronomy & Space Explorers',
      issuedDate: 'July 2026',
      instructor: 'Capt. Leo Starling',
      grade: 'High Honor (95%)',
      verificationId: 'KM-CERT-2026-7720'
    }
  ];

  return (
    <div className="py-10 px-4 max-w-5xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-black text-amber-400 uppercase tracking-widest">
          VERIFIED ACADEMIC ACHIEVEMENTS
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-white">Your Official Certificates</h1>
        <p className="text-slate-400 text-xs sm:text-sm">
          Download or print accredited completion certificates signed by SkillSeed master educators.
        </p>
      </div>

      <div className="space-y-8">
        {certificates.map((cert) => (
          <div key={cert.id} className="glass-card p-8 sm:p-12 rounded-[40px] border border-amber-500/40 shadow-2xl relative overflow-hidden glow-amber space-y-6">
            
            {/* Background Glow Ribbon */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center text-3xl shadow-lg">
                  🎓
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white">{cert.title}</h2>
                  <p className="text-xs text-amber-300 font-bold">Issued to {user.name} • {cert.issuedDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button size="sm" variant="amber">
                  <Download className="w-4 h-4" /> Download PDF
                </Button>
              </div>
            </div>

            {/* Certificate Body Mock */}
            <div className="p-6 bg-slate-950 rounded-3xl border border-white/10 text-center space-y-4 font-sans">
              <div className="text-xs font-bold uppercase tracking-widest text-purple-400">
                SkillSeed Academy • Certificate of Academic Mastery
              </div>
              <div className="text-sm text-slate-400">This is to certify that</div>
              <div className="text-3xl font-black text-white gradient-text-amber">{user.name}</div>
              <div className="text-xs text-slate-300 max-w-md mx-auto">
                has successfully completed all required coding projects, quizzes, and live lab requirements with a final grade of <strong>{cert.grade}</strong>.
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                <span>Instructor: {cert.instructor}</span>
                <span className="font-mono text-purple-300">ID: {cert.verificationId}</span>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
