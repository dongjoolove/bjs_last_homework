const imageList=["main1.jpg","main2.jpg","main3.jpg","main4.jpg","main5.jpg"];
const selectImageName=imageList[Math.floor(Math.random()*imageList.length)];
document.body.style.background = `url(./img/${selectImageName}) no-repeat 0 0`;//no-repeat 0 0
document.body.style.backgroundSize="100% 100%";
function changeBackground(){
  
    const selectImageName=imageList[Math.floor(Math.random()*imageList.length)];
   
    document.body.style.background = `url(./img/${selectImageName}) no-repeat 0 0`;
    document.body.style.backgroundSize="100% 100%";
    
}


setInterval(changeBackground, 5000);
// const bgImg=document.createElement("img");
// bgImg.src=`./img/${selectImageName}`;