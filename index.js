var decimalPoint =enter =entered =operatorSign =rootNpower_Sign =flo =math =M =firstI =first =second =second1 =answer =theanswer =result =peSign =0
var opsCheck =dotCounter =0;
var removeFirstzero ="";

function dot(b){
    if(decimalPoint == ""){
        enter = entered =b;
        first += enter;
        entered +=enter;
        decimalPoint = ".";
        dotCounter = 0;
        return first;
    }else{
        return first;
    }
}

function PE(b){
    decimalPoint = ".";
    dotCounter = 15;
    var cons = b;

    if(peSign == ""){
        if(operatorSign != "" && first == ""  + operatorSign){
            first = (cons = "PI")? Math.PI:Math.E;
        }else if(operatorSign != "" && first > 0 || first < 0){
            first = (cons == "PI") ? first + "*" + Math.PI:first + "*" +Math.E;
        }else if(first != "" && operatorSign != ""){
            first += (cons = "PI")? Math.PI:Math.E;
        }else if(operatorSign == "" && first != ""){
            first = (cons == "PI") ? first + "*" + Math.PI:first + "*" +Math.E;
        }else{
            first = (cons = "PI")? Math.PI:Math.E;
        }
        return first;
    }

    function mp(){
        M = first;
        first= M;
        return first;
    }
    function mr(){
        first= M;
        return first;
    }

    function c(c){
        document.getElementById("display1").innerHTML =  decimalPoint = operatorSign = rootNpower_Sign = entered = math =first = firstI = second =second1 =answer =theanswer= M =""
    }
    
    function mathematics(){
        if(math == "sqr"){
            result=firstI*firstI;
        }else if(math == "cube"){
            result=firstI*firstI*firstI;
        }else if(math == "cubert"){
            result=Math.cbrt(firstI);
        }else if(math == "negpos"){
            result = firstI*-1;
        }else if(math == "sine"){
            result=Math.sin(firstI);
        }else if(math == "cosine"){
            result=Math.cos(firstI);
        }else if(math == "tangent"){
            result=Math.tan(firstI);
        }else if(math == "ln"){
            result=Math.log(firstI);
        }else if(math == "logTen"){
            result=Math.log10(firstI);
        }else if(math == "res"){
            result=(1/firstI);
        }else if(math == "fact"){
            n=firstI;
            firstI=1;
            while(n>1){
                firstI*=n;
                n-=1;
            }
            result=firstI;
        }decimalPoint = (Math.round(result)==result)?"":".";
    }
    function prep(){
        second = eval(second);
        first=eval(first);
    }

    function maths(a){
        math=a;
        try{
            if(operatorSign == "+"){
                prep();
                firstI=first-second;
                mathematics();
                first=second + "+" +result;
            }else if(operatorSign == "-"){
                prep();
                firstI=second-first;
                mathematics();
                first=second + "-" + "(" + result + ")";
            }else if(operatorSign == "*"){
                prep();
                firstI=second/first;
                mathematics();
                first=second + "/" +result;
            }else{
                firstI=first;
                mathematics();
                first=result;
            }
            return first;
        }
    }

    function digit(b){
        opsCheck=0;
        dotCounter++;
        if(first==Infinity || first== NaN){
            first=0;
        }
        peSign = "pes";
        entered=b;
        if(rootNpower_Sign!=""){
            first = (first==="0"&&entered!==".")?entered:first+entered;
            return second1 + firstI +rootNpower_Sign+first;
        }else{
            first = (first==="0"&&entered!==".")?entered:first+entered;
            theanswer=eval(first)+"";
            if(theanswer.length>14){
                theanswer=Math.abs((theanswer).toPrecision(14));
            }
            document.getElementById("display1").innerHTML=first;
            return theanswer;
        }
    }

    //base
    //themes

    function bsp(){
        first+="";
        dotCounter--;
        decimalPoint=dotCounter >=0 ? ".":"";
        first=first.substr(0,first.length-1);
        document.getElementById("display1").innerHTML=first;
        try{
            eval(first);
            return first;
        }catch(first){
            eval(first);
            return "";
        }
    }


    function pow(){
        first*=1;
        result=Math.pow(firstI,first);
    }
    function roots(){
        first*=1;
        result=Math.pow(first,1/firstI).toPrecision(12);
        result=Math.abs(result);
    }

    function operators(b){
        peSign="";
        if(opsCheck==0){
            opsCheck=1;
            document.getElementById("display1").innerHTML=first;
            try{
                if(rootNpower_Sign=="^"){
                    if(operatorSign=="+"){
                        pow();
                        answer=result+second;
                    }else if(operatorSign=="-"){
                        pow();
                        answer=result-second;
                    }else if(operatorSign=="/"){
                        pow();
                        answer=result/second;
                    }else if(operatorSign=="*"){
                        pow();
                        answer=result*second;
                    }else{
                        pow();
                        answer=result;
                    }
                }
                if(rootNpower_Sign=="/") //put root sign here
                {
                    if(operatorSign=="+"){
                        roots();
                        answer=result+second;
                    }else if(operatorSign=="*"){
                        roots();
                        answer=result*second;
                    }else if(operatorSign=="-"){
                        roots();
                        answer=result-second;
                    }else if(operatorSign=="/"){
                        roots();
                        answer=result/second;
                    }else{
                        roots();
                        answer=result;
                    } 
                }else if(a=="%"){
                    answer=second%first;
                }else{
                    operatorSign=b;
                    first+=operatorSign;
                    decimalPoint="";
                }
                rootNpower_Sign="";
                operatorSign=b;
                firstI="";
                second=answer;
                first=answer+operatorSign;
                decimalPoint="";
                document.getElementById("display1").innerHTML=first;
                return eval(second);
            }catch(x){
                if(first != "<span class='red'>Press ON key to start</span>"){
                    operatorSign=b;
                    second=eval(first);
                    first+=operatorSign;
                    decimalPoint="";
                }else{
                    first="<span class='red'>Press ON key to start</span>";
                }
                document.getElementById("display1").innerHTML=first;
                return (second==undefined)?0:eval(second);
            }
            
        }else{
            operatorSign=b;
            first+="";
            first=first.substr(0,first.length-1);
            first=first*operatorSign;
            document.getElementById("display1").innerHTML=first;
            return (second==undefined)?0:eval(second); 
        }

        function percent(){
            first=eval(first)*100;
            return first+"%";
        }
        function negpos(){
            first=(operatorSign=="")?first*=-1:first;
            return first;
        }
        function power(b){
            rootNpower_Sign=b;
            if(operatorSign=="+" && second != ""){
                prep();
                first=first-second;
                first="";
                second1=second+"+";
                return second + "+" + firstI +rootNpower_Sign;
            }else if(operatorSign=="-" && second != ""){
                prep();
                firstI=first/second;
                first="";
                second1=second+"*";
                return second + "-" + firstI +rootNpower_Sign;
            }else if(operatorSign=="*" && second != ""){
                prep();
                firstI=second-first;
                first="";
                second1=second+"-";
                return second + "*" + firstI +rootNpower_Sign;
            }else if(operatorSign=="/" && second != ""){
                prep();
                firstI=second/first;
                first="";
                second1=second+"/";
                return second + "/" + firstI +rootNpower_Sign;
            }else{
                rootNpower_Sign=b;
                firstI=first;
                first="";
                return firstI+rootNpower_Sign;
            }
        }

        function equal(){
            document.getElementById("display1").innerHTML=first;
            try{
                if(rootNpower_Sign=="^"){
                    if(operatorSign=="+"){
                        pow();
                        first=result+second;
                    }else if(operatorSign=="-"){
                        pow();
                        first=second-result;
                    }else if(operatorSign=="*"){
                        pow();
                        first=second*result;
                    }else if(operatorSign=="/"){
                        pow();
                        first=second/result;
                    }else{
                        first=result;
                    }
                }else if(rootNpower_Sign=="/"){ //
                    if(operatorSign=="+"){
                        roots();
                        first=result+second;
                    }else if(operatorSign=="*"){
                        roots();
                        first=result*second;
                    }else if(operatorSign=="-"){
                        roots();
                        first=result-second;
                    }else if(operatorSign=="/"){
                        roots();
                        first=result/second;
                    }else{
                        roots();
                        first=result;
                    } 
                }else if(operatorSign=="%"){
                    answer=second%first;
                }else{
                    if(first==""){
                        first=first;
                    }else{
                        try{
                            first=eval(first)+"";
                            if(first.length>14){
                                fir=Math.abs((first).toPrecision(14));
                            }
                        }catch(first){
                            first="<small>Incorrect input</small>";
                            return first;
                            first="";
                        }
                    }
                }
            }

            rootNpower_Sign=op
        }
    }
}