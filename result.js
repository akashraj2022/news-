document.addEventListener("DOMContentLoaded",()=>{   //DOM Content to Load
    let all=document.getElementById("a")                //Element Selection by ID
    let business=document.getElementById("b")
    let sports=document.getElementById("c")
    let technology=document.getElementById("d")
    let entertainment=document.getElementById("e")
    let health=document.getElementById("f")
    let science=document.getElementById("g")
    let general=document.getElementById("h")


    all.addEventListener("click",()=>{              //Adding Click Event Listeners
     fetchdata('all')                               // fetchdata function with the corresponding category:
    })
    business.addEventListener("click",()=>{
        fetchdata('business')
    })
    sports.addEventListener("click",()=>{
        fetchdata("sports")
    })
    technology.addEventListener("click",()=>{
        fetchdata("technology")
    })
    entertainment.addEventListener("click",()=>{
        fetchdata("entertainment")
    })
    health.addEventListener("click",()=>{
        fetchdata("health")
    })
    science.addEventListener("click",()=>{
        fetchdata("science")
    })
    general.addEventListener("click",()=>{
        fetchdata("general")
    })
})

async function fetchdata(cat){      //Definition of the fetchdata Function
if(cat){
    let result=await fetch(`https://newsapi.org/v2/everything?q=${cat}&language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
    let res=await result.json()
    // console.log(res.articles);
    let totaldata=res.articles.map((pro)=>{      //Definition of the fetchdata Function
     
    
return(
    `
    <div class="news">
    <img src=${pro.urlToImage}>
    <div class="content">
    <h2>${pro.title}  </h2>
    <p>${pro.description}  </p>
    </div>
    </div>
    `
)
    })
   document.getElementById("mydiv").innerHTML=totaldata.join('');   // put in content to div
}
else{
    let result=await fetch(`https://newsapi.org/v2/everything?q=all&language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
    let res=await result.json()
    // console.log(res.articles);
    let totaldata=res.articles.map((pro)=>{  
        return(       
    `
    <div class="news">
    <img src=${pro.urlToImage}>
    <div class="content">
    <h2>${pro.title}  </h2>
    <p>${pro.description}  </p>
    </div>
    </div>
    `
)
    })
   document.getElementById("mydiv").innerHTML=totaldata.join('');
    
}

}
fetchdata()     //Default Call to fetchdata
