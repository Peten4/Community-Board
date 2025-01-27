import React from "react";
import Card from "./Card";
import "./Card.css";

const App = () => {
  const cardsData = [
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipN4BHf3NlLc7m-pivz-Psal_C43AhpytG7Odz08=s680-w680-h510",
      name: "Sakura Ramen",
      cuisine: "Thai-Japanese",
      href: "https://sakuraramen99.com/",
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipPGnstevhf8pN93NNqjfPwTga3bYHYi4ygMlCKP=s680-w680-h510",
      name: "Pho O7",
      cuisine: "Vietnamese",
      href: "https://phoo7.com/",
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipNuEGkl-y-kHkLC2_uIRHRuSUyUvEiJWBgs_0YF=s680-w680-h510",
      name: "Moon Thai & Japanese",
      cuisine: "Thai-Japanese",
      href: "https://moonthai.com/menus/coral-springs-menu/",
    },
    {
      img: "https://s3-media0.fl.yelpcdn.com/bphoto/m2X2ClRQHsFXQB6wZliIlg/348s.jpg",
      name: "Ten Ten Seafood and Dimsum Restaurant",
      cuisine: "Chinese",
      href: "https://www.tentenseafoodsunrise.com/",
    },
    {
      img: "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/ftlauderdale/Arun-s-Indian-Kitchen_24E9C4D9-5056-B3A8-493DAE1DFD9C590A-24e9c3ea5056b3a_24e9c528-5056-b3a8-490c315da8b795a2.png",
      name: "Arun's Indian Kitchen",
      cuisine: "Indian",
      href: "https://indiankichen.com/",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5eaa302110f4544bcb0be02e/1591497927872-OTDT11UT10TSUI90NSB1/FullSizeRender.jpeg?format=1000w",
      name: "Gabose Korean BBQ",
      cuisine: "Korean",
      href: "https://www.gabosebbq.com/",
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipNjfQMvcEik9rR9KzuYlKtnALZKsJEbS8K2gc4e=s680-w680-h510",
      name: "Lemongrass Hotpot",
      cuisine: "Chinese",
      href: "https://www.tripadvisor.com/Restaurant_Review-g34170-d12501908-Reviews-Lemongrass_Hotpot-Davie_Broward_County_Florida.html",
    },
    {
      img: "https://lh3.googleusercontent.com/p/AF1QipNRWxuE3Mcab3OXeFR4r752DZhLb7eOKP6HP-WM=s680-w680-h510",
      name: "545 Vietnamese Restaurant",
      cuisine: "Vietnamese",
      href: "https://545.cafe/",
    },
    {
      img: "https://static.wixstatic.com/media/0b1ae7_2dcfca0e8a384605be72944295566a06~mv2.jpg/v1/fill/w_980,h_510,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/0b1ae7_2dcfca0e8a384605be72944295566a06~mv2.jpg",
      name: "Izziban Sushi & Korean BBQ",
      cuisine: "Korean-Japanese",
      href: "https://www.izziban-lauderhill.com/",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTko7pE7Kea0lNK1316cP6Gg1duf-On06qK3g&s",
      name: "The Indian Harbor",
      cuisine: "Indian",
      href: "https://www.getsauce.com/order/the-indian-harbor/menu?utm_source=GMB&utm_medium=Menu%20link&utm_id=The%20Indian%20Harbor",
    },
  ];

  return (
    <div className="App">
      <h1>Asian Restaurants in Broward</h1>
      <h2>Peten Nhan</h2>
      <h2>Z23363663</h2>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            img={card.img}
            name={card.name}
            cuisine={card.cuisine}
            href={card.href}
          />
        ))}
      </div>
    </div>
  );
};

export default App;


