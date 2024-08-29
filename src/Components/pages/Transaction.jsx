import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Nodata from '../Assets/nodata.png';
import '../pages/Transaction.css';

const TransactionsPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [showNoData, setShowNoData] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const transactionsPerPage = 3;
  const transactions = [
    {
      "id":125511434,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-17",
      "txnTime":"175326",
      "txnAmount":9.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600407000,
      "rRNumber":"401812271082",
      "stan":"200007",
      "invoiceNumber":"000008",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   },
   {
      "id":125511537,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-19",
      "txnTime":"175250",
      "txnAmount":7.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600371000,
      "rRNumber":"401812270202",
      "stan":"200006",
      "invoiceNumber":"000007",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   },
   {
      "id":125511625,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-22",
      "txnTime":"175220",
      "txnAmount":4.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600341000,
      "rRNumber":"401812269461",
      "stan":"200005",
      "invoiceNumber":"000006",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   },
   {
      "id":125510734,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-25",
      "txnTime":"175141",
      "txnAmount":5.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600302000,
      "rRNumber":"401812268472",
      "stan":"200004",
      "invoiceNumber":"000005",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   },
   {
      "id":125510835,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-28",
      "txnTime":"175101",
      "txnAmount":6.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600262000,
      "rRNumber":"401812267502",
      "stan":"200003",
      "invoiceNumber":"000004",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   },
   {
      "id":125510518,
      "mti":"0100",
      "txnType":"37",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-01-31",
      "txnTime":"175018",
      "txnAmount":6.0,
      "txnResponseCode":"13",
      "responseReceivedTime":1705600243000,
      "rRNumber":"118174945718",
      "stan":"200002",
      "invoiceNumber":"GTZ2377804820240118174945",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":6.0
   },
   {
      "id":125510237,
      "mti":"0200",
      "txnType":"00",
      "terminalId":"23778048",
      "merchantId":"037346000090223",
      "txnDate":"2024-03-1",
      "txnTime":"174800",
      "txnAmount":5.0,
      "txnResponseCode":"00",
      "responseReceivedTime":1705600081000,
      "rRNumber":"401812263066",
      "stan":"200001",
      "invoiceNumber":"000002",
      "batchNumber":"000001",
      "urn":"null",
      "txnAdditionalAmount":0.0
   }


  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const startDateParam = params.get('startDate');
    const endDateParam = params.get('endDate');

    setStartDate(startDateParam);
    setEndDate(endDateParam);

    if (startDateParam && endDateParam) {
      handleFilterTransactions(startDateParam, endDateParam);
    }
  }, [location.search]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleFilterTransactions = (start, end) => {
    const filtered = transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.txnDate);
      const startDateObj = new Date(start);
      const endDateObj = new Date(end);
      endDateObj.setHours(23, 59, 59, 999); // Set the end date to the end of the day
      return transactionDate >= startDateObj && transactionDate <= endDateObj;
    });
  
    if (filtered.length > 0) {
      const sorted = filtered.sort((a, b) => new Date(a.txnDate) - new Date(b.txnDate));
      setFilteredTransactions(sorted);
      setShowDownloadButton(true);
      setShowNoData(false);
    } else {
      setShowNoData(true);
      setShowDownloadButton(false);
      setFilteredTransactions([]);
    }
  };
  

  const handleDownloadRequest = () => {
    const fileName = `transactions_${startDate}_to_${endDate}.csv`;
  
    // Define headers for the CSV file
    const headers = [
      "Date",
      "Transaction ID",
      "Time",
      "Amount",
      "Response Code",
      "RR Number",
      "STAN",
      "Invoice Number",
    ];
  
    // Map transactions to an array of arrays containing their values
    const data = filteredTransactions.map(transaction => [
      transaction.txnDate,
      transaction.id,
      transaction.txnTime,
      transaction.txnAmount,
      transaction.txnResponseCode,
      transaction.rRNumber,
      transaction.stan,
      transaction.invoiceNumber,
    ]);
  
    // Insert headers as the first row in the data array
    data.unshift(headers);
  
    const downloadData = {
      fileName,
      data,
    };
  
    // Convert downloadData to a URL-friendly string and navigate to the download route
    navigate(`/download?data=${encodeURIComponent(JSON.stringify(downloadData))}`);
  };
  

  const handleFilterClick = () => {
    if (startDate && endDate) {
      handleFilterTransactions(startDate, endDate);
    }
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filteredTransactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalFilteredTransactions = filteredTransactions.length;
const totalPages = Math.ceil(totalFilteredTransactions / transactionsPerPage);

const handlePageChange = (pageNumber) => {
  const totalFilteredTransactions = filteredTransactions.length;
  const totalPages = Math.ceil(totalFilteredTransactions / transactionsPerPage);
  if (pageNumber >= 1 && pageNumber <= totalPages) {
    setCurrentPage(pageNumber);
  }
};

  


  

  return (
    <div className='transcontainer'>
      <div className="transactions-page">
        <h1 className="calendar-header">Select a Date Range</h1>
        <div className='Dateinput'>
          <div className="date-input-start">
            <label htmlFor="startDate">Start Date:</label>
            <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} className="date-input" />
          </div>

          <div className="date-input-end">
            <label htmlFor="endDate">End Date:</label>
            <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} className="date-input" />
          </div>
        </div>

        <div className='fb'>
          <button onClick={handleFilterClick} className="filter-button">
            Filter Transactions
          </button>
        </div>

        {showNoData && (
          <div className="no-data-message">
              <div className="no-data-container">
                  
              <img src={Nodata} alt="React Logo"  width='100px' height='100px'/>
              
              </div>
              <h3>OOPS! data found for the selected date range!</h3>
          </div>
        )}

        {filteredTransactions.length > 0 && (
          <div className="table-container">
            <table className="transactions-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction ID</th>
                  <th>Time</th>
                  <th>Amount</th>
                  <th>Response Code</th>
                  <th>RR Number</th>
                  <th>STAN</th>
                  <th>Invoice Number</th>
                  {/* Add other table headers */}
                </tr>
              </thead>
              <tbody>
              {currentTransactions.map((transaction) => (
    <tr key={transaction.id}>
      <td>{transaction.txnDate}</td>
      <td>{transaction.id}</td>
      <td>{transaction.txnTime}</td>
      <td>{transaction.txnAmount}</td>
      <td>{transaction.txnResponseCode}</td>
      <td>{transaction.rRNumber}</td>
      <td>{transaction.stan}</td>
      <td>{transaction.invoiceNumber}</td>
      {/* Render other transaction details here */}
    </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showDownloadButton && currentPage === Math.ceil(filteredTransactions.length / transactionsPerPage) && (
          <button
            onClick={handleDownloadRequest}
            disabled={!startDate || !endDate}
            className="download-button"
            style={{ position: 'absolute', bottom: '10px', right: '10px' }}
          >
            Download Tabulations
          </button>
        )}
     {filteredTransactions.length > 0 && (
          <>
            <div className="table-container">
              {/* Existing code for displaying transactions */}
            </div>

            <div className="pagination">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="page-button">
                Previous
              </button>
              <span>{`Page ${currentPage}`}</span>
              <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Disable when current page is the last page
            className="page-button"
          >
            Next
          </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionsPage;
