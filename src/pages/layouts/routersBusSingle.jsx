import React, { useEffect, useState } from "react";

// import "../../assets/css/index.css";
import "../../assets/css/searchBus.css";
import {acitveBtnFloor, tabs, scrollFunction, filterMobile } from "../../assets/js/routersBus.js";
import Book from "../../componets/searchBook/bookTicket";
import Slideshow from "../../componets/home/slideshow";
import axiosClient from "../../axios-client";
import logo2 from "../../assets/images/LogoWebProTicket.png";
import { useLocation } from "react-router-dom";
import { formatDate, calculateTimeDifference } from "../../config";
const RoutersBusSingle = () => {
  const [data, setData] = useState([]);

  const location = useLocation();

  const fetchData = () => {
  console.log(location.search.toString());

    axiosClient
      .get(`/trip/search${location.search}`)
      .then((response) => {
        const fetchedData = response.data.data;
        setData(fetchedData);
        // console.log("Updated data:", fetchData);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {


    tabs();
    acitveBtnFloor();
    const handleLoad = () => {
      filterMobile();
    }
    // const handlePopstate = () => filterMobile();
    window.addEventListener('load', handleLoad);
    scrollFunction()
    window.onscroll = function() {scrollFunction()};
    // window.removeEventListener('popstate', handlePopstate);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
    return () => {
      window.addEventListener('load', handleLoad);
      handleLoad()
      clearTimeout(timer);
    }
    
  }, []);  
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
    console.log("useEffect is triggered");
  }, [location.search]);  

  
  return (
    <>
    {loading ? (
      <div className="loading ">
        <div className='img-load'><img src={logo2} alt=""  /></div>
        <div class="dots-3"></div>
        </div>
    ) : (  <div className=" search-results">
    {/* ------------------Banner -----------------------*/}
    <Slideshow/>
    {/*-----------------END  Banner ------------------*/}
    {/*-------Chọn địa điểm đi -> về  - booking ---------*/}
    <Book/>
    {/*-----END  Chọn địa điểm đi -> về  - booking -----*/}
    {/*-----Button Filter mobile -----*/}
    <button className="filter-toggler mt-5" type="button" id="filter-toggler">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        style={{ fill: "#ffffff" }}
      >
        <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
      </svg>
    </button>
    {/*-----END  Button Filter mobile -----*/}
    <>
  {/*------Bộ lộc và Kết quả tìm kiếm chuyến xe -  Search Filter and Search Bus Routers-----*/}
  <div className="search-bus-routers container my-4 ">
      <div className="content-search-bookTicket row justify-content-center ">
        {/*------Bộ lộc tìm kiếm -  Search Filter -----*/}
        <div className="search-filters title_home_bus me-4 col-sm backWhite-padding">
        <div className="background" />
        <div className="contents-items-filter">
          <div className="text-end close-filter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              style={{ fill: "#ccd2db" }}
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </div>
          <div className="w-100 border-right">
            <h1>BỘ LỌC TÌM KIẾM</h1>
            <div className="times-go w-85 mt-4 ps-2">
              <h5 className="pb-2">Giờ đi</h5>
              <ul className="ps-2">
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="sangsom" />
                  <label className="form-check-label ps-2" htmlFor="sangsom">
                    Sáng sớm (00:00 - 06:00)
                  </label>
                </li>
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="buoisang" />
                  <label className="form-check-label ps-2" htmlFor="buoisang">
                    Buổi sáng (06:00 - 12:00)
                  </label>
                </li>
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="buoichieu" />
                  <label className="form-check-label ps-2" htmlFor="buoichieu">
                    Buổi chiều (12:00 - 18:00)
                  </label>
                </li>
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="buoitoi" />
                  <label className="form-check-label ps-2" htmlFor="buoitoi">
                    Buổi tối (18:00 - 24:00)
                  </label>
                </li>
              </ul>
              <hr />
            </div>
            <div className="floor w-85 ps-2 mt-4 ">
              <h5 className="pb-2">Tầng </h5>
              <div className="ps-2 mb-4 d-flex">
                <input
                  type="checkbox"
                  id="floorUp"
                  hidden={true}
                  className="floorInputUp"
                />
                <label className="form-check-label btn-floor" htmlFor="floorUp">
                  Tầng trên
                </label>
                <input
                  type="checkbox"
                  id="floorDown"
                  hidden={true}
                  className="floorInputDown"
                />
                <label
                  className="form-check-label btn-floor"
                  htmlFor="floorDown"
                >
                  Tầng dưới
                </label>
              </div>
              <hr />
            </div>
            <div className="chair w-85 ps-2 mt-4">
              <h5 className="pb-2">Loại giường / ghế </h5>
              <ul className="ps-2 mb-4">
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="Limousine" />
                  <label className="form-check-label ps-2" htmlFor="Limousine">
                    Limousine
                  </label>
                </li>
                <li className="d-flex align-items-center pb-2">
                  <input type="checkbox" id="ghenam" />
                  <label className="form-check-label ps-2" htmlFor="ghenam">
                    Ghế nằm
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*------END  Bộ lộc tìm kiếm -  Search Filter -----*/}
      {/*--------- Kết quả tìm kiếm -   Search Bus Routers------*/}
      <div className="results-search title_home_bus px-3 col-md-8 backWhite-padding">
        <div>
          <div className="fixed-mobile-results" id="fixed-mobile-results">
            {/* title bus search and number routers*/}
  
            {
  data.length > 0 && data.map((item, index) => {
    const { route } = item;
    if (index === 0) {
      return (
        <div className="title-route-search">
          <h1>{route.start_location} - {route.end_location} ({data.length})</h1>
          <span>Chuyến đi { formatDate(item.departure_time)}</span>
        </div>
      );
    }
    return null;
  })
}
          </div>
          {/* {/* --------------------------------chuyến đi --------------------------* /} */}
          <div className="items-results-search active mt-4" id="go">
            {/* item1 */}
            {data.length > 0 && data.map((item,index) => {
            const { car } = item;
            const {route}= item;
            const station= route.station;
            let resultend = [];
            let resultstart = [];
            item.route.station.forEach(station => {
              if (station.type === "điểm trả" ) {
                 let infoend = {
                    type: station.type,
                    time: station.time,
                    name: station.name
                 };
                 resultend.push(infoend);
              }
              if (  station.type === "điểm đón") {
                let infostart = {
                   type: station.type,
                   time: station.time,
                   name: station.name
                };
                resultstart.push(infostart);
             }
           });
      
           let firstEndName = resultend[0].name;
           let firstStartName = resultstart[0].name;
           let timeEndName = resultend[0].time;
           let timeStartName = resultstart[0].time;
        console.log(resultend, resultstart);
            return (
              <div key={index}>
                  <div className="item-results-bus d-flex mb-4 flex-colum flex-wrap w-100">
                  <div className="d-flex mb-2 flex-row w-100">
                    <span className="time_go">{timeStartName}</span>
                    <div className="d-flex align-items-center travel">
                      <span className="icon-dot">
                        <i className="fa-solid fa-circle" />
                      </span>
                      <div className=" border-b-2 border-dotted mr-2" />
                      <div className="text-center travel_time">  {Object.values(calculateTimeDifference( timeStartName, timeEndName)).join(":")} giờ</div>
                      <div className=" border-b-2 border-dotted ml-2" />
                      <span className="icon-dotArrive">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                    </div>
                    <span className="time_arrive">{timeEndName}</span>
                  </div>
                  <div className="items-bus-station d-flex w-100">
                    <h5 className="w-50 ">  {firstStartName} </h5>
                    <h5 className="w-50 text-end">  {firstEndName} </h5>
                  </div>
                  <div className="d-flex w-100 mt-2 align-items-center flex-wrap">
                    <div className="item-about-bus w-75">
                      <ul className="d-flex p-0 w-100 m-0">
                        <li className="list-group-item ">{item.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</li>
                        <li className="list-group-item ">
                          <span className="icon-dot ps-4">
                            <i className="fa-solid fa-circle" />
                          </span>
                          <span className="ps-4">{car.type}</span>
                        </li>
                        <li className="list-group-item ">
                          <span className="icon-dot ps-4">
                            <i className="fa-solid fa-circle" />
                          </span>
                          <span className="ps-4">{item.available_seats} chỗ trống</span>
                        </li>
                      </ul>
                    </div>
                    <div className="btn-choose w-25 text-end">
                      <button className="">
                        <a href="datve1chieu.html">Chọn chuyến</a>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
  );
})}
             {data.length===0  &&
             <div>
              <h3>Không có tuyến xe nào </h3>
             </div>
             }
          </div>
        </div>
      </div>
      {/*--------- END  Kết quả tìm kiếm -   Search Bus Routers------*/}
    </div>
  </div>
  {/*------END Bộ lộc và Kết quả tìm kiếm chuyến xe -  Search Bus Routers-----*/}
</>

  </div>
    )}
    </>
  );
};

export default RoutersBusSingle;
