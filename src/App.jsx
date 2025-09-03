import React, { useState } from 'react';
import FormSection from './components/FormSection';
import Preview from './components/Preview';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    location: '',
    linkedin: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Global function for PDF download
  window.generatePDF = () => {
    const element = document.getElementById('resume-template');
    const opt = {
      margin: 1,
      filename: `${formData.name}_resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  };

  return (
    <div>
      <header className="bg-blue-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">ATS Resume Builder</h1>
        <p className="mt-2">Create a professional, ATS-friendly resume in minutes.</p>
      </header>

      <FormSection formData={formData} handleChange={handleChange} />
      <Preview formData={formData} />
    </div>
  );
};

export default App;