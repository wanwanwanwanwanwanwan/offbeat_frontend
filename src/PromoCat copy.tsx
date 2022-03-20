import { FC } from "react";
import React,{useState,useEffect} from "react";

const PromoCat: FC = () => {
  let aa = 0;
  let bb = 1;
  const initCategory = [
    { "id": 1, "name": "Best Offer", "url": "/promo-detail?from=best_offer" },
    { "id": 2, "name": "New Arrivial", "url": "/promo-detail?from=new_arrivial" },
    { "id": 3, "name": "Flash Sale", "url": "/promo-detail?from=flash_sale" }
  ];
  
  const initPromotion = [
    {
      "promoName": "Best Offer 1",
      "promoUrl": "/promo-detail?from=best_offer_1",
      "productImageUrls": ["https://dummyimage.com/500x500/86d4f8/fff.jpg&text=A"]
    },
    {
      "promoName": "Best Offer 2",
      "promoUrl": "/promo-detail?from=best_offer_2",
      "productImageUrls": [
        "https://dummyimage.com/400x300/86d4f8/fff.jpg&text=A",
        "https://dummyimage.com/50x50/86d4f8/fff.jpg&text=B",
        "https://dummyimage.com/200x600/86d4f8/fff.jpg&text=C"
        
      ]
    },
    {
      "promoName": "Best Offer 2",
      "promoUrl": "/promo-detail?from=best_offer_2",
      "productImageUrls": [
        "https://dummyimage.com/400x300/86d4f8/fff.jpg&text=A",
        "https://dummyimage.com/50x50/86d4f8/fff.jpg&text=B",
        "https://dummyimage.com/200x600/86d4f8/fff.jpg&text=C",
        "https://dummyimage.com/500x500/86d4f8/fff.jpg&text=D",
        "https://dummyimage.com/400x300/86d4f8/fff.jpg&text=A",
        "https://dummyimage.com/50x50/86d4f8/fff.jpg&text=B",
        "https://dummyimage.com/200x600/86d4f8/fff.jpg&text=C",
        "https://dummyimage.com/500x500/86d4f8/fff.jpg&text=D"
      ]
    }
  ]
  
  

  const [categoryList , setCategory]=useState(initCategory);
  const [promotionList , setDataPromotion]=useState(initPromotion);
  const [btnClass, setBtnClass] = useState(false);

  const [btnColor, setBtnColor] = useState("red");  


  useEffect(() => {
    // fetch(`data/categories.json`).then(
    //   function(res){
    //   return res.json()
    // }).then(function(data){
    // // store Data in State Data Variable
    //   setCategory(data)
    //   console.log("zzz",data)
    // }).catch(
    //   function(err){
    //     console.log(err, ' error')
    //   }
    // )
  
    // fetch(`data/content-1.json`).then(
    //   function(res){
    //   return res.json()
    // }).then(function(data){
    // // store Data in State Data Variable
    //   setDataPromotion(data)
    //   console.log("xxxx",data)
    // }).catch(
    //   function(err){
    //     console.log(err, ' error')
    //   }
    // )
  });
  
 function getPromtionInfo (id: number) {
  let a = "data/content-"+id+".json"
  fetch(a).then(
      function(res){
      return res.json()
    }).then(function(data){
    // store Data in State Data Variable
      setDataPromotion(data)
    }).catch(
      function(err){
        console.log(err, ' error')
      }
    )
    

    btnClass ? setBtnClass(false) : setBtnClass(true);
}
 
  
  return (
    <div className="PromoCat">
      <div className="tab">
        <button onClick={()=>getPromtionInfo(1)}>1</button>
        <button onClick={()=>getPromtionInfo(2)}>2</button>
        <button onClick={()=>getPromtionInfo(3)}>3</button>
      
      </div>
      <div className="promotionCat">
        {
          promotionList.map((promotion) => (
            <div className="promotion">
              <div className="promotionImg">
              {
                 promotion.productImageUrls.map((imageUrl) =>(
                  <div className={'promotionImg'+promotion.productImageUrls.length}>
                  <img src={imageUrl} alt="" />
                  </div>
                 ))
              }
              </div>
              <div className="promotionName">{promotion.promoName}</div>
            </div>
            ))
        }
        
        <div className="promotionsMore"><button>more</button></div>
      </div>
      {/* <div id="London" className="promotionList">
        
      {
        
        promotionList.map((promotion) => (
          <div className="promotion">
            <div className ="promotionImg1">
            {
              promotion.productImageUrls.map((imageUrl) =>(
                <div className="promotionImg">
                <img src={imageUrl} alt="" />
                </div>
              ))
            }
            </div>
            <div className="promotionName">
              {promotion.promoName}
              </div>
          </div>

          
        ))
      }
      </div> */}


    </div>
  );
};

export default PromoCat;
