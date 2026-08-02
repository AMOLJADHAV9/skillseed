import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGamification } from '../context/GamificationContext';
import { FileUp, CheckCircle, Sparkles, Send, ArrowLeft, UploadCloud } from 'lucide-react';
import { Button } from '../components/common/Button';

export const AssignmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addXp, triggerCelebration } = useGamification();

  const [textSubmission, setTextSubmission] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addXp(100);
    triggerCelebration({
      title: '📝 ASSIGNMENT SUBMITTED!',
      message: 'Your project was submitted to Dr. Sarah Spark! +100 XP awarded.',
      icon: '🎉',
      xpEarned: 100
    });
    navigate('/dashboard/student');
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto space-y-8">
      <div className="glass-card p-8 rounded-[36px] border border-white/10 space-y-6">
        
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-amber-400 uppercase tracking-widest">
            HANDS-ON PROJECT ASSIGNMENT
          </span>
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 font-extrabold text-xs rounded-full">
            +100 XP REWARD
          </span>
        </div>

        <h1 className="text-3xl font-black text-white">Space Shooter Pygame Lab Submission</h1>
        <p className="text-xs text-slate-300 leading-relaxed">
          Create your custom spaceship sprite and program keyboard controls (Left / Right Arrow) to dodge incoming space asteroids!
        </p>

        {/* Rubric Checklist */}
        <div className="p-4 bg-slate-900/80 rounded-2xl border border-white/10 space-y-2">
          <h3 className="text-xs font-black text-white uppercase">Grading Rubric Checklist</h3>
          <ul className="text-xs text-slate-300 space-y-1">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Pygame window initialized (800x600 px)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Rocket sprite responds to arrow keys
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" /> Score counter updates on asteroid dodge
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">Code Explanation / Notes</label>
            <textarea
              rows={4}
              required
              placeholder="Describe how you wrote your rocket loop..."
              value={textSubmission}
              onChange={(e) => setTextSubmission(e.target.value)}
              className="w-full p-4 rounded-2xl glass-input text-xs"
            />
          </div>

          {/* File Upload Dropzone Mock */}
          <div
            onClick={() => setFileUploaded(true)}
            className={`p-8 border-2 border-dashed rounded-3xl text-center cursor-pointer transition ${
              fileUploaded ? 'border-emerald-500 bg-emerald-950/20' : 'border-white/20 hover:border-purple-500 bg-slate-900/40'
            }`}
          >
            <UploadCloud className={`w-10 h-10 mx-auto mb-2 ${fileUploaded ? 'text-emerald-400' : 'text-slate-400'}`} />
            <div className="text-xs font-extrabold text-white">
              {fileUploaded ? '✅ space_shooter_lab.py (Uploaded)' : 'Click to Upload .PY or .ZIP Project File'}
            </div>
            <div className="text-[10px] text-slate-500 mt-1">Maximum file size 25MB</div>
          </div>

          <Button type="submit" variant="amber" size="lg" className="w-full font-black text-slate-950">
            Submit Assignment to Teacher 🚀
          </Button>
        </form>

      </div>
    </div>
  );
};
