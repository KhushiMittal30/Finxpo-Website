import img1 from "../../assets/Hackathon_home.jpg"
import img2 from "../../assets/MockTrading.jpg";
import img3 from "../../assets/starup_home.png";
import img4 from "../../assets/workshop_home.jpg";
import img5 from "../../assets/QuantTrading.png";
import img6 from "../../assets/prizedist.jpg";
import img7 from "../../assets/research.jpg";



const day1Data = {
    // i:1,
    day: "DAY 1",
    tthalf1: "EVENT",
    tthalf2:"SCHEDULE",
    scheduleItems: [
            { id: 1, date: "March 20, 25", label: "10:30 AM - 12:30 PM" ,title: "Forex Trading Workshop", date: "March 20, 25",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam."},
   
            { id: 2, date: "March 20, 25", label: "10:00 AM - 1:00 PM" ,title: "Elevator Pitch", date: "March 20, 25",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam."},
   
            { id: 3, date: "March 20, 25", label: "2:00 PM - 5:00 PM", title: "Research Challenge",date: "March 20, 25",
                content:
                  "BL Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},
  
            { id: 4, date: "March 20, 25", label: "3:30 PM - 5:30 PM", title: "Blockchain Workshop", date: "March 20, 25",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam."},
 
            { id: 5, date: "March 20, 25", label: "8:30 AM - 4:30 PM" ,title: "Web3 & AI Hackathon", date: "March 20, 25",
                content:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam."},
    ],
    images: [
      img2,
      img3,
      img7,
      img4,
      img1,
      // Add more image paths...
    ],
  };
  
  const day2Data = {
    // i:6,
    day: "DAY 2",
    tthalf1: "",
    tthalf2:"",
    scheduleItems: [
      {id: 1, date: "March 21, 25", label: "9:30 AM - 12:30 PM",title: "Forex Trading Competition Phase 1", date: "March 21, 25",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",},
      {id: 2, date: "March 21, 25", label: "1:30 PM - 3:30 PM",title: "Forex Trading Competition Phase 2", date: "March 21, 25",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",},        
          { id: 3, date: "March 21, 25", label: "3:30 PM - 5:30 PM",title: "Quant Trading Workshop",date: "March 21, 25",
            content:
              "BL Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},

        {id: 4, date: "March 21, 25", label: "",title: "Prize Distribution Ceremony", date: "March 21, 25",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.", },

    ],
    images: [
        img2,
        img5,
        img6,
    ],
  };

  // const day3Data = {
  //   // i:12,
  //   day: "DAY 3",
  //   tthalf1: "",
  //   tthalf2:"",
  //   scheduleItems: 
  //       [{ id: 1, date: "Opening Ceremony", label: "time",title: "Item 1", date: "May 1, 2019",
  //       content:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",},
        
  //         { id: 2, date: "Speaker Session", label: "Item 2",title: "Item 2",date: "June 1, 2019",
  //           content:
  //             "BL Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."},

  //       {id: 3, date: "Blockchain Workshop", label: "Item 3",title: "Item 1", date: "May 1, 2019",
  //           content:
  //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.", },

  //        { id: 4, date: "Fireside Chat", label: "Item 4",title: "Item 1",
  //           date: "May 1, 2019",
  //           content:
  //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",},

  //       { id: 5, date: "Elevator Pitch", label: "Item 4", title: "Item 1",
  //           date: "May 1, 2019",
  //           content:
  //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.", },
        
  //       { id: 6, date: "Networking Dinner", label: "Item 4",title: "Item 1", date: "May 1, 2019",
  //       content:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim accumsan aliquam.",},
  //   ],
  //   images: [
  //       img1,
  //       img1,
  //       img1,
  //       img1,
  //       img1,
  //       img1
  //   ],
  // };
  
  export { day1Data, day2Data};
  