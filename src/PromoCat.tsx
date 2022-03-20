import { FC } from "react";
import React,{useState,useEffect} from "react";

const PromoCat: FC = () => {
  //sample data
  const initCategory = [
    { "id": 1, "name": "Best Offer", "url": "/promo-detail?from=best_offer" }
  ];
  
  const initPromotion = [
    {
      "promoName": "Best Offer 1",
      "promoUrl": "/promo-detail?from=best_offer_1",
      "productImageUrls": ["https://dummyimage.com/500x500/86d4f8/fff.jpg&text=A"]
    }
    
  ]
  const catInfo = 
    {
      "promoName": "Best Offer 1",
      "promoUrl": "/promo-detail?from=best_offer_1",
    }

  //save category list fetch from json
  const [categoryList , setCategory]=useState(initCategory);
  //save promotion list fetch from json
  const [promotionList , setDataPromotion]=useState(initPromotion);
  const [tabOnSelected, setTabOnSelected] = useState(1);
  //save current Category info
  const [currentCatInfo, setCurrentCatInfo] = useState(catInfo);

  //load catgeory info and promotion once
  useEffect(() => {
      //fetch category info from json
      fetch(`data/categories.json`).then(
        function(res){
        return res.json()
      }).then(function(data){
      // store Data in State Data Variable
        setCategory(data)
        //set current category info
        setCurrentCatInfo(
          {
            "promoName": categoryList[0].name,
            "promoUrl": categoryList[0].url,
          }
        );
      }).catch(
        function(err){
          console.log(err, ' error')
        }
      )
      //fetch promotion info info from json
      fetch(`data/content-1.json`).then(
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
    
  },[categoryList.length]);

  //get promotion info when category tab selected
 function getPromtionInfo (id: number, categoryName: string, catUrl: string) {
  //not allow clicked the slected tab
  if(tabOnSelected==id){
    console.log("only allow fetch data when the tab are not selected");
    return;
  } 
  let promotionFileName = "data/content-"+id+".json"
  fetch(promotionFileName).then(
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
    //set which tab
    setTabOnSelected(id);
    setCurrentCatInfo(
      {
        "promoName": categoryName,
        "promoUrl": catUrl,
      }
    );
    
}
function openUrl(url:string){
  window.open(url);
}
  
  return (
    <div className="PromoCat">
      <div className="categoryTab">
        {
          categoryList.map((category) => (
            <button className={tabOnSelected==category.id?"tabSelected":"tabNormal"} onClick={()=>getPromtionInfo(category.id,category.name,category.url)}>{category.name}</button>

          ))
        }
      
      </div>
      <div className="promotionCat">
        {
          promotionList.map((promotion) => (
            <div className="promotion" >
              <div className="promotionImg">
                
              {
                
                 promotion.productImageUrls.map((imageUrl) =>(
                  <div className={'promotionImg'+Math.ceil(Math.sqrt(promotion.productImageUrls.length))}
                    style={{
                    float: promotion.productImageUrls.length>1?"left":"none",
                    width: (100.0/ Number(Math.ceil(Math.sqrt(promotion.productImageUrls.length)))) +"%" ,
                    height: (100.0/ Number(Math.ceil(Math.sqrt(promotion.productImageUrls.length)))) +"%"
                    
                  }}
                  onClick={()=>openUrl(promotion.promoUrl)}>
                  <img src={imageUrl} alt="" />
                  </div>
                 ))
              }
              </div>
              <div className="promotionName">{promotion.promoName}</div>
            </div>
            ))
        }
        
        <div className="promotionsMore"><button className="btnMore" onClick={()=>openUrl(currentCatInfo.promoUrl)}>More {currentCatInfo.promoName} {">"} </button></div>
      </div>
    </div>
  );
};

export default PromoCat;
