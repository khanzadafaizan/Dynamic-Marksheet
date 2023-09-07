
function function1(a, b){
return a + b;
}

function function2(a, b){
return a * b;
}
        
function function3(a, b){
return a - b;
 }

function function4(a, b){
return a / b;
}

function function5(a, b){
return a * b;
}

function function6(a, b){
return a < b;
}
                    
function function7(a, b){
return a > b;
}
                            
function function8(a, b){
return a * b;
 }
                    
function function9(a, b){
return a * b;
}
         
function function10(a, b){
    return a * b;
}

function function11(a, b){
    return a + b;
    }
    
    function function12(a, b){
    return a * b;
    }
            
    function function13(a, b){
    return a * b;
     }
    
    function function14(a, b){
    return a * b;
    }
    
    function function15(a, b){
    return a * b;
    }
    
    function function16(a, b){
    return a + b;
    }
                        
    function function17(a, b){
    return a * b;
    }
                                
    function function18(a, b){
    return a * b;
     }
                        
    function function19(a, b){
    return a * b;
    }
             
    function function20(a, b){
        return a * b;
    }
    
const containerDiv =document.getElementById('container');
const mainDiv =document.createElement('div');
mainDiv.className='justify-row flex gap-2'
const mainDiv2 =document.createElement('div');
mainDiv2.className='mt-2 justify-row flex gap-2'

containerDiv.append(mainDiv, mainDiv2);

const div1 =document.createElement('div');
div1.className='border-2 border-black w-1/4'
div1.innerText= function1(2,2);

const div2 =document.createElement('div');
div2.className='border-2 border-black w-1/4'
div2.innerText= function2(2,5);

const div3 =document.createElement('div');
div3.className='border-2 border-black w-1/4'
div3.innerText= function3(75,5);

const div4 =document.createElement('div');
div4.className='border-2 border-black w-1/4'
div4.innerText= function4(2,75);

const div5 =document.createElement('div');
div5.className='border-2 border-black w-1/4'
div5.innerText= function5(2,75);

const div6 =document.createElement('div');
div6.className='border-2 border-black w-1/4'
div6.innerText= function6(3,5);

const div7 =document.createElement('div');
div7.className='border-2 border-black w-1/4'
div7.innerText= function7(3,5);

const div8 =document.createElement('div');
div8.className='border-2 border-black w-1/4'
div8.innerText= function8(2,75);

const div9 =document.createElement('div');
div9.className='border-2 border-black w-1/4'
div9.innerText= function9(2,75);

const div10 =document.createElement('div');
div10.className='border-2 border-black w-1/4'
div10.innerText= function10(2,75);

const div11 =document.createElement('div');
div11.className='border-2 border-black w-1/4'
div11.innerText= function11(2,2);

const div12 =document.createElement('div');
div12.className='border-2 border-black w-1/4'
div12.innerText= function12(2,5);

const div13 =document.createElement('div');
div13.className='border-2 border-black w-1/4'
div13.innerText= function13(2,75);

const div14 =document.createElement('div');
div14.className='border-2 border-black w-1/4'
div14.innerText= function14(2,75);

const div15 =document.createElement('div');
div15.className='border-2 border-black w-1/4'
div15.innerText= function15(2,75);

const div16 =document.createElement('div');
div16.className='border-2 border-black w-1/4'
div16.innerText= function16(2,2);

const div17 =document.createElement('div');
div17.className='border-2 border-black w-1/4'
div17.innerText= function17(2,5);

const div18 =document.createElement('div');
div18.className='border-2 border-black w-1/4'
div18.innerText= function18(2,75);

const div19 =document.createElement('div');
div19.className='border-2 border-black w-1/4'
div19.innerText= function19(2,75);

const div20 =document.createElement('div');
div20.className='border-2 border-black w-1/4'
div20.innerText= function20(2,75);

mainDiv.append(div1, div2, div3, div4, div5, div6, div7, div8, div9, div10);
mainDiv2.append(div11, div12, div13, div14, div15, div16, div17, div18, div19, div20);
