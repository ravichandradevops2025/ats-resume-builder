import React from 'react';
import Template1 from './Template1';

const Preview = ({ formData }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
      <Template1 formData={formData} />
    </div>
  );
};

export default Preview;