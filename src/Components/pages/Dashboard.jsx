//Dashboard.js
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {useNavigate } from 'react-router-dom'

import '../pages/Dashboard.css';

const Dashboard = () => {
  const [selectedDevices, setSelectedDevices] = useState([]);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showTotalAmount, setShowTotalAmount] = useState(false);
  const [events, setEvents] = useState([]);
  const [submitClicked, setSubmitClicked] = useState(false); // New state
  const navigate = useNavigate();

  const tidList = [
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 3,
      "mid": "BEQ000000032000",
      "tid": "BEQ31264",
      "lead_id": 339346,
      "active": true,
      "bijlipaySwitch": true
    },
    {
      "id": 4,
      "mid": "037346000090223",
      "tid": "BEQ23778",
      "lead_id": 404343,
      "active": true,
      "bijlipaySwitch": true
    },
    
  ];

  const transactionCountData = [
    
    {
        "date": "2024-01-10",
        "title": "2"
    },
    {
        "date": "2024-01-11",
        "title": "0"
    },
    {
        "date": "2024-01-12",
        "title": "0"
    },

    {
      "date": "2024-01-2",
      "title": "1"
    },
  
    {
        "date": "2024-01-13",
        "title": "0"
    },
    {
        "date": "2024-01-14",
        "title": "0"
    },
    {
        "date": "2024-01-15",
        "title": "0"
    },
    {
        "date": "2024-01-16",
        "title": "0"
    },
    {
        "date": "2024-01-17",
        "title": "0"
    },
    {
        "date": "2024-01-18",
        "title": "7"
    },
    {
        "date": "2024-01-19",
        "title": "54"
    },
    {
        "date": "2024-01-2",
        "title": "0"
    },
    {
        "date": "2024-01-20",
        "title": "29"
    },
    {
        "date": "2024-01-21",
        "title": "0"
    },
    {
        "date": "2024-01-22",
        "title": "22"
    },
    {
        "date": "2024-01-23",
        "title": "43"
    },
    {
        "date": "2024-01-24",
        "title": "0"
    },
    {
        "date": "2024-01-25",
        "title": "0"
    },
    {
        "date": "2024-01-26",
        "title": "0"
    },
    {
        "date": "2024-01-27",
        "title": "0"
    },
    {
        "date": "2024-01-28",
        "title": "0"
    },
    {
        "date": "2024-01-29",
        "title": "0"
    },
    {
        "date": "2024-01-3",
        "title": "0"
    },
    {
        "date": "2024-01-30",
        "title": "0"
    },
    {
        "date": "2024-01-31",
        "title": "0"
    },
    {
        "date": "2024-01-4",
        "title": "0"
    },
    {
        "date": "2024-01-5",
        "title": "0"
    },
    {
        "date": "2024-01-6",
        "title": "0"
    },
    {
        "date": "2024-01-7",
        "title": "0"
    },
    {
        "date": "2024-01-8",
        "title": "0"
    },
    {
        "date": "2024-01-9",
        "title": "0"
    }
  ];

  const volumeCountData = [
    {
        "date": "2024-01-1",
        "title": "11"
    },
    {
        "date": "2024-01-11",
        "title": null
    },
    {
        "date": "2024-01-12",
        "title": null
    },
    {
        "date": "2024-01-13",
        "title": null
    },
    {
        "date": "2024-01-14",
        "title": null
    },
    {
        "date": "2024-01-15",
        "title": null
    },
    {
        "date": "2024-01-16",
        "title": null
    },
    {
        "date": "2024-01-17",
        "title": null
    },
    {
        "date": "2024-01-18",
        "title": "42.0"
    },
    {
        "date": "2024-01-19",
        "title": "52.03999999999999"
    },
    {
        "date": "2024-01-2",
        "title": null
    },
    {
        "date": "2024-01-20",
        "title": "9.139999999999997"
    },
    {
        "date": "2024-01-21",
        "title": null
    },
    {
        "date": "2024-01-22",
        "title": "16.73"
    },
    {
        "date": "2024-01-23",
        "title": "1138.34"
    },
    {
        "date": "2024-01-24",
        "title": null
    },
    {
        "date": "2024-01-25",
        "title": null
    },
    {
        "date": "2024-01-26",
        "title": null
    },
    {
        "date": "2024-01-27",
        "title": null
    },
    {
        "date": "2024-01-28",
        "title": null
    },
    {
        "date": "2024-01-29",
        "title": null
    },
    {
        "date": "2024-01-3",
        "title": null
    },
    {
        "date": "2024-01-30",
        "title": null
    },
    {
        "date": "2024-01-31",
        "title": null
    },
    {
        "date": "2024-01-4",
        "title": null
    },
    {
        "date": "2024-01-5",
        "title": null
    },
    {
        "date": "2024-01-6",
        "title": null
    },
    {
        "date": "2024-01-7",
        "title": null
    },
    {
        "date": "2024-01-8",
        "title": null
    },
    {
        "date": "2024-01-9",
        "title": null
    }
  ];

  // Callback when an event is clicked on the FullCalendar
  const handleEventClick = (clickInfo) => {
    const selectedDate = new Date(clickInfo.event.start);
    selectedDate.setDate(selectedDate.getDate() + 1); // Add one day
    const formattedDate = selectedDate.toISOString().split('T')[0];
    navigate(`/transaction?startDate=${formattedDate}&endDate=${formattedDate}`);
  };

  // useEffect to update events when submitClicked changes
  useEffect(() => {
    if (submitClicked) {
      const hardcodedEvents = generateEventData(selectedDevices, showTransactions ? transactionCountData : volumeCountData);
      setEvents(hardcodedEvents);
      setSubmitClicked(false); // Reset submitClicked to enable looping
    }
  }, [selectedDevices, showTransactions, showTotalAmount, submitClicked]);



// Move event data generation inside a function
const generateEventData = (tidList, countData) => {
    const eventData = {};
    
    tidList.forEach((tid) => {
      countData.forEach((item) => {
        const key = item.date;
        if (!eventData[key]) {
          eventData[key] = {
            date: item.date,
            transactions: 0,
            totalAmount: 0,
          };
        }

        // Accumulate transactions and total amount
        eventData[key].transactions += parseInt(item.title) || 0; // Parse as integer or default to 0
        eventData[key].totalAmount += parseFloat(item.title) || 0; // Parse as float or default to 0
      });
    });

    // Convert aggregated data into array format for FullCalendar events
    return Object.values(eventData).map(({ date, transactions, totalAmount }) => ({
      date,
      title: showTransactions ? `T: ${transactions}` : showTotalAmount ? `A: ${totalAmount.toFixed(2)}` : '',
    }));
  };

  // useEffect to update events when submitClicked changes
  useEffect(() => {
    if (submitClicked) {
      const hardcodedEvents = generateEventData(selectedDevices, showTransactions ? transactionCountData : volumeCountData);
      setEvents(hardcodedEvents);
      setSubmitClicked(false); // Reset submitClicked to enable looping
    }
  }, [selectedDevices, showTransactions, showTotalAmount, submitClicked]);

  const handleDeviceCheckboxChange = (device) => {
    if (selectedDevices.includes(device)) {
      setSelectedDevices(selectedDevices.filter((d) => d !== device));
    } else {
      setSelectedDevices([...selectedDevices, device]);
    }
  };

  const handleCheckboxChange = (type) => {
    if (type === 'transactions') {
      setShowTransactions(!showTransactions);
      setShowTotalAmount(false);
    } else if (type === 'amount') {
      setShowTotalAmount(!showTotalAmount);
      setShowTransactions(false);
    }
  };

  const handleSubmit = () => {
    setSubmitClicked(true);
  };

  const handleSelectAllDevices = (selectAll) => {
    if (selectAll) {
      const allDeviceIds = tidList.map((device) => device.tid);
      setSelectedDevices(allDeviceIds);
    } else {
      setSelectedDevices([]);
    }
  };
  

  return (
    <div className="merchant-portal-container">
      <div className="checkboxes-and-submit-container">
        <div className="checkboxes-container">
        
          <div className="device-checkboxes-container">
            
          <div className="device-checkboxes">
              <div className='head-dev'>
              <h5>Select your T-ID here!</h5>
                <h3>Devices</h3>
              </div> 
              {/* Select All Checkbox */}
              <div className='select-all'>
            <label>
              <input
                type="checkbox"
                checked={selectedDevices.length === tidList.length}
                onChange={(e) => handleSelectAllDevices(e.target.checked)}
              />
              Select All
            </label>
            </div>
              {/* Individual Checkboxes */}
              <div className='row-check'>
            {tidList.map((device) => (
              <label key={device.tid}>
                <input
                  type="checkbox"
                  checked={selectedDevices.includes(device.tid)}
                  onChange={() => handleDeviceCheckboxChange(device.tid)}
                />
                {device.tid}
              </label>
            ))}
                </div>
          </div>

          </div>

          <div className="checkbox-options-container">
            
            <div className="checkbox-options">
            <div className='head-dev1'><h3>Select by</h3></div>
              <label>
                <input
                  type="radio"
                  checked={showTransactions}
                  onChange={() => handleCheckboxChange('transactions')}
                />
                Number of Transactions
              </label>
              <label>
                <input
                  type="radio"
                  checked={showTotalAmount}
                  onChange={() => handleCheckboxChange('amount')}
                />
                Total Amount
              </label>
            </div>
          </div>
        </div>

        <button className="submit-button" onClick={handleSubmit} disabled={!showTransactions && !showTotalAmount}>Submit</button> {/* Submit button */}
      </div>

      <div className="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          eventClick={handleEventClick} // Set the eventClick callback
        />
      </div>
    </div>
  );
};

export default Dashboard;