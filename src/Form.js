import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import './index.css'

import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, {'font': []}],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  },
}

const formats = [  'header', 'font', 'size',  'bold', 'italic', 'underline', 'strike', 'blockquote',  'list', 'bullet', 'indent',  'link', 'image', 'video']

const Form = () => {
  const [eventName, seteventName] = useState('');
  const [displayName, setdisplayName] = useState('');
  const [description, setDescription] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [visibility, setVisibility] = useState('public');


  const [locations, setLocations] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [actualPrice, setActualPrice] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState('');
  const [image, setImage] = useState(null);
  const [itinerary, setItinerary] = useState('');
  const [thingsToCarry, setThingsToCarry] = useState('');
  const [pickUpPoint, setPickUpPoint] = useState('');
  const [includes, setIncludes] = useState('');
  const [contactDetails, setContactDetails] = useState('');

  const handleDescriptionChange = (value) => {
    setDescription(value);
  }

  const handleItineraryChange = (value) => {
    setItinerary(value);
  }

  const handleThingsToCarryChange = (value) => {
    setThingsToCarry(value);
  }

  const handlePickUpPointChange = (value) => {
    setPickUpPoint(value);
  }

  const handleIncludesChange = (value) => {
    setIncludes(value);
  }

  const handleContactDetailsChange = (value) => {
    setContactDetails(value);
  }
  function handleVisibilityChange(event) {
    setVisibility(event.target.value);
  }


  const handleChange = (value) => {
    setDescription(value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      eventName,
      displayName,
      description,
      locations,
      fromDate,
      toDate,
      actualPrice,
      discountedPrice,
      itinerary,
      thingsToCarry,
      pickUpPoint,
      includes,
      contactDetails,
    }
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await axios.post('/api/products', data, config);

    } catch (error) {
    }
  };
return(
  
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
  <h1 className="text-4xl text-center mb-8 font-bold text-gray-800" style={{ width: '100%' }}>Trek Form</h1>
  <div className="mb-4">
  <label
    className="block font-bold text-gray-700"
    htmlFor="eventName"
    style={{ display: "block" }}
  >
    Event Name:
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    id="eventName"
    type="text"
    placeholder="Enter Event Name"
    value={eventName}
    onChange={(e) => seteventName(e.target.value)}
  />
</div>

<div className="mb-4">
  <label
    className="block font-bold text-gray-700"
    htmlFor="displayName"
    style={{ display: "block" }}
  >
    Event Display Name:
  </label>
  <input
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
    id="displayName"
    type="text"
    placeholder="Enter Event Name"
    value={displayName}
    onChange={(e) => setdisplayName(e.target.value)}
  />
</div>
<div className="my-4 flex flex-col">
    <label className="block font-bold text-gray-700 mb-2">Event Location:</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      rows="4"
      value={locations}
      onChange={(e) => setLocations(e.target.value)}
      required
    />
  </div>
  <div className="my-4">
          <p>Event Visibility</p>
          <div>
          <input type="radio" id="public" name="visibility" value="public" checked={visibility === 'public'} onChange={handleVisibilityChange} />

            <label htmlFor="public" className="form-label">Public</label>
          </div>
          <div>
          <input type="radio" id="link" name="visibility" value="link" checked={visibility === 'link'} onChange={handleVisibilityChange} />

            <label htmlFor="link" className="form-label">Link</label>
          </div>
          <div>
          <input type="radio" id="private" name="visibility" value="private" checked={visibility === 'private'} onChange={handleVisibilityChange} />
            <label htmlFor="private" className="form-label">Private</label>
          </div>
        </div>
  

  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <label className="block font-bold text-gray-700">From Date:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="date"
        value={fromDate}
        onChange={(e) => setFromDate(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block font-bold text-gray-700">To Date:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="date"
        value={toDate}
        onChange={(e) => setToDate(e.target.value)}
        required
      />
    </div>
  </div>
  <div className="grid grid-cols-2 gap-4 mb-6">
    <div>
      <label className="block font-bold text-gray-700">Actual Price:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="number"
        value={actualPrice}
        onChange={(e) => setActualPrice(e.target.value)}
        required
      />
    </div>
    <div>
      <label className="block font-bold text-gray-700">Discount Price:</label>
      <input
        className="block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type="number"
        value={discountedPrice}
        onChange={(e) => setDiscountedPrice(e.target.value)}
        required
      />
    </div>
      </div>
      <div className="mb-4">
        <label className="block">Upload Image:</label>
        <input
          className="block w-full border-gray-300 rounded-md shadow-sm"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <div className="mb-6">
    <label className="block font-bold text-gray-700">Description:</label>
    <ReactQuill 
      className="w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={description} 
      onChange={handleChange}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Enter description here"
      required
    />
  </div>
  <div className="mb-4">
      <label className="block">Pick up points:</label>
      <ReactQuill 
        className="w-full border-gray-300 rounded-md shadow-sm"
        value={pickUpPoint}
        onChange={handlePickUpPointChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter pick up points here"
        />
        </div>

      <div className="mb-4">
        <label className="block">Itinerary:</label>
        <ReactQuill 
          className="w-full border-gray-300 rounded-md shadow-sm"
          value={itinerary} 
          onChange={handleItineraryChange}
          modules={modules}
          formats={formats}
          theme="snow"
          placeholder="Enter itinerary here"
        />
      </div>
      <div className="mb-4">
      <label className="block">Things to carry:</label>
      <ReactQuill 
        className="w-full border-gray-300 rounded-md shadow-sm"
        value={thingsToCarry}
        onChange={handleThingsToCarryChange}
        modules={modules}
        formats={formats}
        theme="snow"
        placeholder="Enter things to carry here"
        />
        </div>
      

        <div className="my-4 flex flex-col">
    <label className="block font-bold text-gray-700 mb-2">Cost Includes:</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      rows="4"
      value={includes}
      onChange={(e) => setIncludes(e.target.value)}
      required
    />
  </div>
  <div className="my-4 flex flex-col">
    <label className="block font-bold text-gray-700 mb-2">Contact  Details:</label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type="text"
      rows="4"
      value={contactDetails}
      onChange={(e) => setContactDetails(e.target.value)}
      required
    />
  </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 transition-colors duration-300">
        Submit
        </button>
        
          </form>
          );
          
          
          
  
  }  
  export default Form;