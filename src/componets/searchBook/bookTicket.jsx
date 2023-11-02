import React, { useEffect, useState } from "react";
// import "../../assets/css/home.css";
import axiosClient from "../../axios-client";
import axios from "axios";


import AutocompleteCity from "./inputLocation.jsx";
import { useNavigate } from "react-router-dom";
import { timers } from "jquery";
const Book = () => {
  const [city, setCity] = useState([]);
  // const [dataStart, setDataStart]=useState([]);

const   navigate = useNavigate()


  const handleCheckedKhuHoi = () => {
    let khuhoi = document.getElementById("khuhoi");
    console.log(khuhoi);
    let disabled = document.querySelector(".disabled_input");
    if (khuhoi.checked !== true) {
      console.log(disabled);
      disabled.classList.add("disabled");
      disabled.disabled = true;
    } else {
      disabled.classList.remove("disabled");
      disabled.disabled = false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  const location = window.location;

    console.log(event.target);
    var dateGo = document.getElementById("time").value;
    var start = document.getElementById("start_location").value;
    var end = document.getElementById("end_location").value;

    console.log(dateGo, start, end);
    const searchParams = new URLSearchParams();
    console.log(searchParams);
    searchParams.append('start_location', start);
    searchParams.append('end_location', end);
    searchParams.append('time', dateGo);
    // axiosClient
    //   .get(`/trip/search?${searchParams.toString()}`)
    //   .then((response) => {
    //     const data = response.data.data;

    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    
      navigate(`/lichtrinh1chieu?${searchParams.toString()}`);
  };
  
  return (
    <div className='book-content_container container'>
    <div className="book-contents">
      <div className="booking-content">
        <div className="trip-book">
          <div className="form-check">
            <input
              className="form-input"
              type="radio"
              name="trip"
              id="motchieu"
              defaultValue="motchieu"
              defaultChecked="checked"
              onChange={handleCheckedKhuHoi}
            />
            <label className="form-check-label" htmlFor="motchieu">
              Một chiều
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-input"
              type="radio"
              name="trip"
              id="khuhoi"
              defaultValue="khuhoi"
              defaultChecked=""
              onChange={handleCheckedKhuHoi}
            />
            <label className="form-check-label" htmlFor="khuhoi">
              Khứ hồi
            </label>
          </div>
        </div>
        <div className="book-ticket">
          <form id="search-form"  className="form-book-ticket flex-wrap align-items-end" onSubmit={handleSubmit}>
       
          <AutocompleteCity

/>


  

            <div className="form-group">
              <label htmlFor="date_go">Ngày đi</label>
              <input type="date" className="form-control" id="time" name="time" />
            </div>
            <div className="form-group">
              <label htmlFor="date_go">Ngày về</label>
              <input
                type="date"
                className="form-control disabled_input disabled"
                id="date_go" 
              />
            </div>

          <div className="form-group ">
                      <button type="submit" className=" button_search_ticket" style={{color:"white"}} >Tìm chuyến xe
                     {/* <a href="/lichtrinh" style={{textDecoration:"none", color:"white"}}></a>  */}
                      </button>
                  </div>
          </form>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Book;
