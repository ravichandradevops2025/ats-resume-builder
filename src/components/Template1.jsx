import React from 'react';

const Template1 = ({ formData }) => {
  const skills = formData.skills?.split(',').map(skill => skill.trim()) || [];

  return (
    <div className="bg-white p-10 max-w-4xl mx-auto shadow-lg font-sans" id="resume-template">
      {/* Header */}
      <div className="text-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold">{formData.name}</h1>
        <p className="text-lg text-gray-700">{formData.title}</p>
        <p className="text-sm text-gray-600 mt-1">
          {formData.email} | {formData.phone} | {formData.location}
        </p>
        {formData.linkedin && (
          <p className="text-sm text-gray-600">{formData.linkedin}</p>
        )}
      </div>

      {/* Summary */}
      {formData.summary && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b border-gray-300">Professional Summary</h2>
          <p className="mt-2 text-gray-800">{formData.summary}</p>
        </div>
      )}

      {/* Experience */}
      {formData.experience && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b border-gray-300">Experience</h2>
          <div className="mt-2 whitespace-pre-line text-gray-800">{formData.experience}</div>
        </div>
      )}

      {/* Education */}
      {formData.education && (
        <div className="mb-4">
          <h2 className="text-xl font-semibold border-b border-gray-300">Education</h2>
          <div className="mt-2 whitespace-pre-line text-gray-800">{formData.education}</div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold border-b border-gray-300">Skills</h2>
          <div className="mt-2">
            {skills.map((skill, i) => (
              <span key={i} className="inline-block bg-gray-200 rounded px-2 py-1 mr-2 mb-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Template1;