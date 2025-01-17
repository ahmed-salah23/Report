let options=document.getElementsByClassName("option");
let activeHours=document.getElementsByClassName("this-week-hours");
let lastPeriod=document.getElementsByClassName("last-period");
let lastHours=document.getElementsByClassName("last-week-hours")
let activeHoursNums=[];
let lastHoursNums=[];
let iconMenuDiv=document.getElementsByClassName("icon-menu-div");
let iconCaptions=document.getElementsByClassName("caption");
let iconMenuControlle=document.getElementsByClassName("icon-menu-controlle")
let iconMenuList=document.getElementsByClassName("icon-menu");

// convert all str hours into nums hours

for(let i=0;i<activeHours.length;i++){
  activeHoursNums.push(Number(activeHours[i].innerHTML))
  lastHoursNums.push(Number(lastHours[i].innerHTML))
  
}

// on clicking the options

for (let i=0; i<options.length;i++){
  options[i].onclick=function (){
  
    // changing the active option
    
    document.getElementsByClassName("clicked")[0].classList.remove("clicked");
    options[i].classList.add("clicked");
    
    // changing the hours after clicking the options 
    
      for(let j=0;j<activeHours.length;j++){
     if(options[i].innerHTML==="Daily"){ 
                activeHours[j].innerHTML=activeHoursNums[j]*.25;
                lastHours[j].innerHTML=lastHoursNums[j]*.25;
                lastPeriod[j].innerHTML="Yesterday"
            }else if(options[i].innerHTML==="Weekly"){ 
                activeHours[j].innerHTML=activeHoursNums[j]*1;
                lastHours[j].innerHTML=lastHoursNums[j]*1;
                lastPeriod[j].innerHTML="Last Week"
            }else if(options[i].innerHTML==="Monthly"){ 
                activeHours[j].innerHTML=activeHoursNums[j]*3;
                lastHours[j].innerHTML=lastHoursNums[j]*3;
                lastPeriod[j].innerHTML="Last Month"
            }

        iconMenuDiv[j].style.display="none";
        iconCaptions[j].style.display="";
    } 
  }
}


// on clicking the icon menu controlle

for(let i=0;i<iconMenuDiv.length;i++){
 iconMenuControlle[i].onclick=function(){
       if (iconMenuDiv[i].style.display==="none"){
         iconMenuDiv[i].style.display="";
        iconCaptions[i].style.display="none";}else{
         iconMenuDiv[i].style.display="none";
        iconCaptions[i].style.display="";
        }
   
 }
  
}

// on clicking the icons options 

for(let i=0;i<iconMenuList.length;i++){
  for(let j=0;j<iconMenuList[i].children.length;j++){
    iconMenuList[i].children[j].onclick=function(){
      
       if(iconMenuList[i].children[j].innerHTML==="Daily") {activeHours[i].innerHTML=activeHoursNums[i]*.25;
        lastHours[i].innerHTML=lastHoursNums[i]*.25;
        lastPeriod[i].innerHTML="Yesterday"}else if(iconMenuList[i].children[j].innerHTML==="Weekly"){
         activeHours[i].innerHTML=activeHoursNums[i]*1;
        lastHours[i].innerHTML=lastHoursNums[i]*1;
         lastPeriod[i].innerHTML="Last Week"
        }else if(iconMenuList[i].children[j].innerHTML==="Monthly"){
         activeHours[i].innerHTML=activeHoursNums[i]*3;
        lastHours[i].innerHTML=lastHoursNums[i]*3;
         lastPeriod[i].innerHTML="lastmonth"
        }
      
      iconMenuDiv[i].style.display="none"
      iconCaptions[i].style.display=""
  }
 }
}
