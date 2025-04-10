import React from 'react';
import { FaFilePdf, FaDownload, FaShare } from 'react-icons/fa';
import './Reports.css';

const reports = [
  {
    id: 'r1',
    testName: 'Complete Blood Count',
    date: '2024-04-08',
    status: 'completed',
    downloadUrl: '#'
  },
  {
    id: 'r2',
    testName: 'Thyroid Profile',
    date: '2024-04-05',
    status: 'completed',
    downloadUrl: '#'
  },
  {
    id: 'r3',
    testName: 'Vitamin D Test',
    date: '2024-04-01',
    status: 'completed',
    downloadUrl: '#'
  },
  {
    id: 'r4',
    testName: 'Lipid Profile',
    date: '2024-03-28',
    status: 'completed',
    downloadUrl: '#'
  }
];

const Reports = () => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="reports">
      <div className="reports__header">
        <h1 className="reports__title">My Reports</h1>
        <p className="reports__subtitle">Access and download your test reports</p>
      </div>

      <div className="reports__content">
        {reports.length > 0 ? (
          <div className="reports__list">
            {reports.map((report) => (
              <div key={report.id} className="reports__item">
                <div className="reports__item-icon">
                  <FaFilePdf />
                </div>
                
                <div className="reports__item-content">
                  <h3 className="reports__item-title">{report.testName}</h3>
                  <p className="reports__item-date">{formatDate(report.date)}</p>
                  
                  <div className="reports__item-actions">
                    <button className="reports__item-button reports__item-button--download">
                      <FaDownload />
                      Download
                    </button>
                    <button className="reports__item-button reports__item-button--share">
                      <FaShare />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="reports__empty">
            <p className="reports__empty-text">No reports available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
