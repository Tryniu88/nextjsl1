export default function Namelist({imie, color, ok}) {

// if(!ok) return null;
var classnames = ""

if(ok){
    classnames="border w-1/2 bg-green-700"
}else{
    classnames="border w-1/2"
}


return(

<div className={classnames}>
<h1 className={color}>{imie}</h1>


</div>

)

}