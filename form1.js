function validation() {
var result =true;
 
 i=document.getElementsByTagName("input");
 if(i[0].value.lenght==0)
    result =false;
    return(result); 

}