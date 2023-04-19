let ProductData = [
  {
    id: "1",
    ProductName: "APPLE iPhone 13 (Blue, 128 GB)",
    description:
      "The iPhone 13 features a 6.1-inch (155 mm) display with Super Retina XDR OLED technology at a resolution of 2532×1170 pixels and a pixel density of about 460 PPI with a refresh rate of 60 Hz.",
    price: "72600",
    discount: "15%",
    Pimage:
      "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png/mxw_640,f_auto",
    PImageFirst:
      "https://rbzone.com/pub/media/catalog/product/cache/f6721767d779d2feba5f86857e7bb8ac/i/p/iphone_13_blue_01.jpeg",

    features: {
      first: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      second: "16.36 cm (6.44 inch) Full HD+ AMOLED Display",
      third: "50MP + 2MP + 2MP | 16MP Front Camera",
      forth: "5000 mAh Lithium Battery",
      fifth: "Qualcomm Snapdragon 680 Processor",
    },
  },
  {
    id: "2",
    ProductName: "iPhone 14 Pro (Space Black, 128 GB)",
    description:
      "The iPhone 14 looks identical to the iPhone 13, but there's a new 6.7-inch model called the iPhone 14 Plus. Under-the-hood improvements include 6GB of RAM, a 5-core GPU, Bluetooth 5.3, and multiple camera updates.",
    price: "106999",
    discount: "25%",
    Pimage:
      "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg",
    PImageFirst:
      "https://apollo-singapore.akamaized.net/v1/files/puvh5zcvs33j3-IN/image;s=850x0",

    features: {
      first: "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      second: "16.36 cm (6.44 inch) Full HD+ AMOLED Display",
      third: "50MP + 2MP + 2MP | 16MP Front Camera",
      forth: "5000 mAh Lithium Battery",
      fifth: "Qualcomm Snapdragon 680 Processor",
    },
  },
  {
    id: "3",
    ProductName: "Xiaomi 12 Pro",
    description:
      "The Xiaomi 12 Pro is a solid contender in the premium smartphone segment. Its design feels premium and is made from glass and metal, but the phone lacks an official IP rating which may be a deal breaker for some.",
    price: "106999",
    discount: "35%",
    Pimage:
      "https://i.gadgets360cdn.com/products/large/xiaomi-12-pro-800x800-1640703618.jpg",

    features: {
      first: "8 GB RAM | 256 GB ROM",
      second: "16.94 cm (6.67 inch) Full HD Display",
      third: "50MP (OIS) + 8MP + 2MP | 16MP Front Camera",
      forth: "5000 mAh Lithium Battery",
      fifth: "Mediatek Dimensity 1080 Processor",
    },
  },
  {
    id: "4",
    ProductName: "Mi Watch",
    description:
      "The Mi Watch measures the daily resting heart rate by sampling heart rate data multiple times a day and combining it with activity data",
    price: "6500",
    discount: "55%",
    Pimage:
      "https://i01.appmifile.com/webfile/globalimg/in/cms/F35A5694-B3FF-6ABF-BAF8-F1C749509D5B.jpg",

    features: {
      first: "Touchscreen",
      second: "Fitness & Outdoor",
      third: "Battery Runtime: Upto 8 days",
      forth: "6 Months | Manufacturing Defects",
      fifth: "STORM M5 With Heart Rate, SPO2 & BP Monitor 35 mm Screen Blue",
    },
  },
  {
    id: "5",
    ProductName: "philips  Hair dryer",
    description:
      "Movable, detachable narrow concentrator for desired styling · Two speed/heat setting · Foldable comfigrip handle · Cord guard with handing loop · ",
    price: "2999",
    discount: "5%",
    Pimage:
      "https://www.suryaelectronics.in/CommonImageHandler/ImageHandler.ashx?imagepath=~/img/Product/Main/PhilipsGroomingandPersonalcareDCDryer11.jpg&width=1080",

    features: {
      first: "2 heat settings",
      second: "1 speed settings",
      third: "Wattage: 1200 W",
      forth: "1.8 m cord length",
      fifth: "1 year brand Warranty",
    },
  },
  {
    id: "6",
    ProductName: "Hero Cycle",
    description:
      "Established in 1956 in Ludhiana, Hero Cycles started with manufacturing cycle components slowly paving its way onto becoming the one of the 'Best Cycle Brand' in India.",
    price: "9999",
    discount: "35%",
    Pimage:
      "https://cdn.shopify.com/s/files/1/0524/1346/4726/products/Desktop-1.jpg?v=1641202840",

    features: {
      first: "Age Group: 15+ Years",
      second: "Ideal For: Men",
      third: "Front Brake: Wire Brake | Rear Brake: Wire Brake",
      forth: "Frame Material: Steel Cycle/Mild steel Cycle",
      fifth: "Tire Size: 27.5 inches | Frame Size:18 inch",
    },
  },
];

const indexData = () => {
  data = "";
  ProductData.map((item) => {
    console.log(item, "items");

    data += ` <div class="card main_parent col-4">
  <img src=${item.Pimage} class="card-img-top" alt="...">
  <div class="CardText">
    <h5 class="Main_Heading mt-3">${item.ProductName}</h5>
    <p class="Describe mt-3">${item.description}</p>
    <a href="product.html" class="btn btn-primary" onClick="ViewDetails(${item.id})">View More</a>

  </div>

</div>`;
  });

  let innerCartData = document.getElementById("card_area");
  console.log(innerCartData, "yyyy");
  innerCartData.innerHTML = data;
};

const ViewDetails = (id) => {
  console.log(id, "iddd");
  arr = [];
  ProductData.map((data) => {
    console.log(data.id, "iddd");
    if (data.id == id) {
      arr.push(data);
      localStorage.setItem("productdetails", JSON.stringify(data));
    }
  });
};

const productDetails = () => {
  let x = document.getElementById("PJ");

  let pData = localStorage.getItem("productdetails");
  let parsedData = JSON.parse(pData);


  x.innerHTML = `<div class="row align-items-start" id=${parsedData.id}>
    <div class="col-6 mainInnerImg">
    
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src=${parsedData.Pimage}
                        class="d-block w-100" alt="...">
                </div>
    
                <div class="carousel-item">
                <img src=${parsedData.PImageFirst}
                        class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <a  class="btn btn-success" onClick="Itemadd(${parsedData.id})">Add To Cart</a>
        <a href=""  class="btn btn-secondary">Buy Now</a>

    </div>
    <div class="col-6 mainImageLogo">
        <h1>${parsedData.ProductName}</h2>
            <h4>Extra ${parsedData.discount} off</h4>
            <h3> &#8377; ${parsedData.price}</h3>
            <h5>${parsedData.features.first}</h5>
            <h5>${parsedData.features.second}</h5>
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle mt-3" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    View More Features
                </button>
                <ul class="dropdown-menu">
                    <h6>${parsedData.features.third}</h6>
                    <h6>${parsedData.features.forth}</h6>
                    <h6>${parsedData.features.fifth}</h6>
                </ul>
            </div>
    
            <p class="mt-5"> <img class="paragraphLogo "
                    src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                    alt="">Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth up to
                ₹500</p>
            <div class="accordion" id="accordionExample">
               
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Read More Offer Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Special PriceGet extra ₹10901 off (price inclusive of
                        cashback/coupon)</p>
                    <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Bank Offer5% Cashback on Flipkart Axis Bank Card</p>
                    <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Bank Offer₹1000 off on Axis Credit Card Transactions</p>
                    <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Bank Offer₹1000 off on Flipkart Axis Credit Card EMI Transactions</p>
                    <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift
                        Card worth up to
                        ₹500</p>
                    <p> <img class="paragraphLogo"
                            src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                            alt="">Partner OfferPurchase now & get 1 surprise cashback coupon till
                        November 2023</p>                            </div>
                  </div>
                </div>
          
              </div>
    </div>
    
    </div>`;
};

// adding data in localStorage onclick button section started here

const Itemadd = (id) => {
  console.log(id, "===========");
  let newItems = localStorage.getItem("newArryCreated");
  let allitems = JSON.parse(newItems);

  if (allitems == null) {
    let cartArr = [];

    ProductData.map((cartAllItem) => {
      if (cartAllItem.id == id) {
        cartArr.push(cartAllItem);
        localStorage.setItem("newArryCreated", JSON.stringify(cartArr));
      }
    });
  } else {
    ProductData.map((cartAllItem) => {
      if (cartAllItem.id == id) {
        allitems.push(cartAllItem);
        localStorage.setItem("newArryCreated", JSON.stringify(allitems));
      }
    });
  }
};

// adding data in localStorage onclick button section ended here


// display all cart product on ui section started here 

// const viewAllproduct = () =>{

//   const ViewLocalStorageData = document.getElementById("allProductData");

//   console.log("dagta", ViewLocalStorageData);

//   let viewData = localStorage.getItem("newArryCreated")
//   let storageData = JSON.parse(viewData)
//   console.log(storageData);


//   ViewLocalStorageData.innerHTML = `<div class="row">
//             <div class="col-7">
//                 <div class="card mb-3">
//                     <div class="row g-0">
//                       <div class="col-md-4">
//                         <img src="https://cdn.pixabay.com/photo/2017/03/19/20/19/ball-2157465__340.png" class="img-fluid rounded-start" alt="...">
//                          </div>
//                       <div class="col-md-8">
//                         <div class="card-body_text">
//                             <h5>${storageData.ProductName}</h5>
//                             <h5>₹18,999₹11,51539% Off</h5>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//             </div>
           
//             <div class="col-5">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">PRICE DETAILS</h5>
//                         <h5>Price (1 item)
//                             ₹18,999</h5>
//                         <h5>Discount − ₹7,484</h5>
//                         <h5>Delivery Charges Free</h5>
//                         <h5>Total Amount ₹11,515</h5>
//                         <h5>You will save ₹7,484 on this order</h5>
//                     </div>
//                 </div>
//             </div>
//         </div>

//   `

// }

// display all cart product on ui section started here 



// mine code for practice 


const viewAllproduct = () =>{

  const ViewLocalStorageData = document.getElementById("allProductData");

  console.log("data", ViewLocalStorageData);

  let viewData = localStorage.getItem("newArryCreated")
  let storageData = JSON.parse(viewData)
  console.log(storageData);


  storageData.map((item)=>{

    console.log("jkhsdjkfjkhsd", item);
 


  ViewLocalStorageData.innerHTML += `<div class="row">
            <div class="col-7">
                <div class="card mb-3">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${item.Pimage}" class="img-fluid rounded-start" alt="...">
                         </div>
                      <div class="col-md-8">
                        <div class="card-body_text mt-3">
                            <h5 class="mt-2">${item.ProductName}</h5>
                            <h5>₹${item.discount} off</h5>
                            <h5>₹${item.price}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
           
            <div class="col-5">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">PRICE DETAILS</h5>
                        <h5>Price (1 item)
                            ₹18,999</h5>
                        <h5>Discount − ₹7,484</h5>
                        <h5>Delivery Charges Free</h5>
                        <h5>Total Amount ₹11,515</h5>
                        <h5>You will save ₹7,484 on this order</h5>
                    </div>
                </div>
            </div>
        </div>

  `

   })

}


// mine code for practice 