const caculator = {
    add : function(a,b){
        return a + b;
    },
    minus : function(a,b){
        return a - b;
    },
    got : function(a,b){
        return a * b;
    },
    div : function(a,b){
        return a / b;
    },
    squ : function(a,b){
        return a ** b;
    }
    
    };
    //calNum
    //calOption
    //calResult
    const clickResultReset=document.querySelector("div#calResult button:first-child");
    const clickResultFirst=document.querySelector("div#calResult span:nth-child(2)");
    const clickResultOption=document.querySelector("div#calResult span:nth-child(3)");
    const clickResultSecond=document.querySelector("div#calResult span:nth-child(4)");
    const clickResultequal=document.querySelector("div#calResult span:nth-child(5)");
    const clickResult=document.querySelector("div#calResult span:last-child");
    const clickNumber=document.querySelectorAll("button.calNum");
    const clickOption=document.querySelectorAll("button.calOption");
    

    function resultCalulation(){
        let calResult="";
        let calEquals="";
        if(clickResultFirst.innerText!="" && clickResultSecond.innerText!="" && clickResultOption.innerText!=""){
            const a=parseInt(clickResultFirst.innerText);
            const b=parseInt(clickResultSecond.innerText);
            const cal_option=clickResultOption.innerText;
            if(cal_option==="+"){
                    calResult = caculator.add(a,b);
            }else if(cal_option==="-"){
                    calResult = caculator.minus(a,b);
            }else if(cal_option==="*"){
                    calResult = caculator.got(a,b);  
            }else if(cal_option==="/"){
                    calResult = caculator.div(a,b); 
            }else if(cal_option==="**"){
                    calResult = caculator.squ(a,b);  
            }else{
                    calResult=0;
                    
            }
            calEquals="=";
            
        }else{
            calResult="";
            calEquals="";
        }
        
        clickResult.innerText= calResult;
        clickResultequal.innerText=calEquals;
    }

    function handleCalulatorNumber(item){
        const itemVar=item.target.innerText;
       
        
        if(clickResultOption.innerText===""){
           //alert("Please select an operator! ");
           clickResultFirst.innerText+=itemVar;
        }else{
            clickResultSecond.innerText+=itemVar;
        }
            resultCalulation();
        
    }
    function handleCalulatorReset(item){
        const itemVar=item.target.innerText;
       
        clickResultFirst.innerText="";
        clickResultSecond.innerText="";
        clickResultOption.innerText="";
        
        
        resultCalulation();

    }
    function handleCalulatorOption(item){
        const itemVar=item.target.innerText;
        if(clickResultFirst.innerText===""){
            alert("please select first number!");
        }else{
            clickResultOption.innerText=itemVar;
        }
        
        resultCalulation();

    }

    clickNumber.forEach (function (element) {
        
        element.addEventListener("click",handleCalulatorNumber);
    });

    clickOption.forEach (function (element) {
        
        element.addEventListener("click",handleCalulatorOption);
    });

    clickResultReset.addEventListener("click",handleCalulatorReset);