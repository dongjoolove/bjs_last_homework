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
    const a = parseInt(prompt("input a?"));
    const b = parseInt(prompt("input b?"));
    const cal_option=prompt("please input one of these +, -, *, **, /");
    let cal_dap=0;
    let cal_text=null;
    if(cal_option==="+"){
         cal_dap = caculator.add(a,b);
    }else if(cal_option==="-"){
         cal_dap = caculator.minus(a,b);
    }else if(cal_option==="*"){
         cal_dap = caculator.got(a,b);  
    }else if(cal_option==="/"){
         cal_dap = caculator.div(a,b); 
    }else if(cal_option==="**"){
         cal_dap = caculator.squ(a,b);  

    }else{
        cal_dap=0;
        cal_text="oh my god!!";
    }

   
    if(cal_text===null){     
        alert(cal_dap);
    }else{
        alert(cal_text);
    }