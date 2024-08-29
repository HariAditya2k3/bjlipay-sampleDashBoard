import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../pages/Down.css';
import { FaCloudDownloadAlt } from "react-icons/fa";
import Nodata from '../Assets/nodata.png';

const DownloadPage = () => {
  const location = useLocation();
  const [requestedFile, setRequestedFile] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const dataParam = params.get('data');

    if (dataParam) {
      const { fileName, data } = JSON.parse(dataParam);
      setRequestedFile({ fileName, data });
    }
  }, [location.search]); // Only run the effect when location.search changes

  const handleDownloadRequest = (fileName, data) => {
    // Logic to initiate download request only if the file hasn't been downloaded yet
    const alreadyDownloaded = transactionHistory.some(transaction => transaction.fileName === fileName);
    if (!alreadyDownloaded) {
      const csvContent = "data:text/csv;charset=utf-8," + data.map(row => Object.values(row).join(',')).join('\n');
      const encodedUri = encodeURI(csvContent);

      // Create a Blob object from the CSV content
      const blob = new Blob([csvContent], { type: 'text/csv' });

      // Create a temporary anchor element to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;

      // Simulate click on the anchor to trigger download
      link.click();

      // Add entry to transaction history
      const requestDate = new Date().toLocaleDateString();
      const requestTime = new Date().toLocaleTimeString();
      setTransactionHistory(prevHistory => [...prevHistory, { fileName, requestDate, requestTime }]);
    }
  };

  return (
    <div className='downcontainer'>
      <h1>Download Page</h1>

      {requestedFile && (
  <>
    <h2>Requested File</h2>
    <p>{requestedFile.fileName}</p>
    <div className='download'>
      <button onClick={() => handleDownloadRequest(requestedFile.fileName, requestedFile.data)} className="download-buttons">
        Download
      </button>
    </div>
  </>
)}


      {/* Render transaction history table */}
      {transactionHistory.length > 0 && (
        <>
          <h2>Transaction History</h2>
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Requested Date</th>
                <th>Requested Time</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistory.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.fileName}</td>
                  <td>{transaction.requestDate}</td>
                  <td>{transaction.requestTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {/* Render message and React icon when no pending download requests */}
      {!requestedFile && transactionHistory.length === 0 && (
  <div className="no-download-request">
    <div className="downimg">
      <FaCloudDownloadAlt className="react-icon" size={30} />
    </div>
    <h3>No Pending Request</h3>
  </div>
)}

    </div>
  );
};

export default DownloadPage;
