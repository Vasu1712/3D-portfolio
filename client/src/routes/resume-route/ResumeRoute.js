import React from 'react';

const ResumeRoute = () => {
  const resumeFileId = process.env.REACT_APP_RESUME_FILE_ID;
  const embedUrl = `https://drive.google.com/file/d/${resumeFileId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeFileId}`;

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
      <a
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Resume"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: '#1a1a1a',
          color: '#ffffff',
          padding: '10px 16px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: '500',
          fontSize: '14px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1a1a1a'}
      >
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download PDF
      </a>

      <iframe
        src={embedUrl}
        width="100%"
        height="100%"
        style={{ border: 'none', display: 'block' }}
        title="Vasu Resume"
        allow="autoplay"
      />
    </div>
  );
};

export default ResumeRoute;
