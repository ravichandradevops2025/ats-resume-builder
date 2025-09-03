import React from 'react';

const FormSection = ({ formData, handleChange }) => {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Enter Your Details</h2>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Job Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="url"
            placeholder="LinkedIn (optional)"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>

        <textarea
          placeholder="Summary / Objective"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          rows="3"
          className="w-full p-2 border rounded mt-4"
        />

        <h3 className="font-semibold mt-6">Experience</h3>
        <textarea
          placeholder="Job Title - Company - Dates
Description of role and achievements (use bullet points, start with action verbs)"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          rows="6"
          className="w-full p-2 border rounded mt-2"
        />

        <h3 className="font-semibold mt-6">Education</h3>
        <textarea
          placeholder="Degree - School - Year
GPA, honors, relevant coursework (optional)"
          name="education"
          value={formData.education}
          onChange={handleChange}
          rows="4"
          className="w-full p-2 border rounded mt-2"
        />

        <h3 className="font-semibold mt-6">Skills (comma-separated)</h3>
        <input
          type="text"
          placeholder="JavaScript, React, Communication, Project Management"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
          className="w-full p-2 border rounded mt-2"
        />

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => window.generatePDF()}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Download PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;