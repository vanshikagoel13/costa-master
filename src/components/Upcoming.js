import React from "react";
import "../styles/Upcoming.css";
import Row from "./UpcomingGridRow";
import "../styles/Fonts.css";

const contents = [
  {
    id: "1",
    url: "/Upcoming/Mumbai_image14.png",
    date: "Sat, 4 Nov 2023",
    nights: "3  ",
    itenray: "Mumbai > <br/><span style='color:grey'> At Sea > <br/> Goa ></span> <br/> Mumbai",
    rupee: "₹ 21,950",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "2",
    url: "/Upcoming/Goa image 15.png",
    date: "Tue, 7 Nov 2023",
    nights: "3  ",
    itenray: "Mumbai > <br/><span style='color:grey'> At Sea > <br/> Goa ></span> <br/> Mumbai",
    rupee: "₹ 21,950",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "3",
    url: "/Upcoming/Mumbai 1.png",
    date: "Fri, 10 Nov 2023",
    nights: "3  ",
    itenray: "Mumbai > <br/><span style='color:grey'> Goa > <br/> Goa > </span><br/> Mumbai",
    rupee: "₹ 24,950",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "4",
    url: "/Upcoming/Costa Serena aerial view image 3.jpg",
    date: "Fri, 24 Nov 2023",
    nights: "2  ",
    itenray: "Mumbai > <br/><span style='color:grey'> At Sea > </span><br/> Mumbai",
    rupee: "₹ 17,400",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "5",
    url: "/Upcoming/Cochin image 6.png",
    date: "Sun, 19 Nov 2023",
    nights: "2  ",
    itenray: "Mumbai > <br/><span style='color:grey'> At Sea > </span><br/> Cochin",
    rupee: "₹ 15,600",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "6",
    url: "/Upcoming/Mumbai image 7.png",
    date: "Sun, 26th Nov 2023",
    nights: "2  ",
    itenray: "Mumbai > <br/><span style='color:grey'> At Sea > </span><br/> Cochin",
    rupee: "₹ 15,600",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
  {
    id: "7",
    url: "/Upcoming/Goa image 10.png",
    date: "Tue, 21 Nov 2023",
    nights: "3  ",
    itenray: "Cochin > <br/><span style='color:grey'> At Sea > <br/> Goa > </span> <br/> Mumbai",
    rupee: "₹ 24,950",
    guid: "Mandatory gratuities, port taxes, taxes are not included in the above price",
  },
];

function Upcoming() {
  return (
    <section id="Upcoming">
      <div className="container upcoming-container">
        <h3
          className="KepStd"
          style={{
            marginBottom: "20px",
            marginLeft: "10px",
            marginTop: "70px",
            paddingTop: "20px",
            fontWeight: "800",
            fontSize: "40px",
          }}
        >
          Upcoming Cruises
        </h3>
        <h6
          className="AltReg"
          style={{
            marginBottom: "40px",
            marginLeft: "10px",
            fontWeight: "600",
            color: "purple",
          }}
        >
          Filter by origin, destination or offers &gt;
        </h6>
        <div>
          {/* <p>hello</p> */}
          {contents.map((cont) => {
            return(
              <Row content={cont} />
            // <p>hellooo</p>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Upcoming;
