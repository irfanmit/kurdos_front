import React, { useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

import { EmailContext } from '../context/context';

const ResumeUploadForm = () => {
  const {email} = useContext(EmailContext);
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('resume', resume);
    data.append('email',email);
    try {
      await axios.post('http://localhost:5000/resume', data);
      alert('Resume uploaded successfully!');
    } catch (error) {
      console.error('Error uploading resume', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="resume" onChange={handleFileChange} required />
      <button type="submit">Upload Resume</button>
    </form>
  );
};

export default ResumeUploadForm;
