const date=new Date()
const myMonth=[1,2,3,4,5,6,7,8,9,10,11,12]
const myDays=['Sun','Mon','Tue','Wed','Thus','Fri','Sat']
const myFulday=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saturday']
const myhours=[12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11]
const monthName= ["January","February","March","April","May","June","July","August","September","October","November","December"];

const hoursfunc=()=>{
    if (myhours[date.getHours()].lenght>13) {
        return `${myhours[date.getHours()]}:${date.getMinutes()} PM`
    }
    else{
       return `  ${myhours[date.getHours()]}:${date.getMinutes()} AM`
    }

}
const date1=()=>{
    
   return `(01)  ${ date.getDate()}/${ myMonth[date.getMonth()] }/${ date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}<br><br>`

}

const date2=()=>{
    
return `(02)  ${myDays[date.getDay()] }/${ myMonth[date.getMonth()] }/${ date.getDate()}/${ date.getFullYear()}  ${date.getHours()}.${date.getMinutes()}<br><br>
` 
 }


const date3=()=>{
    
return `(03)  ${ date.getFullYear()}-${ myMonth[date.getMonth()]}-${ date.getDate()} ${myhours[date.getHours()]}:${date.getMinutes()}:${myFulday[date.getDay()]}<br><br>
` 
 }
 const date4=()=>{
    
    return `(04)  ${ monthName[date.getMonth()]} ${ date.getDate()}, ${ date.getFullYear()}   ${hoursfunc()}<br><br>
`
     }

     const date5=()=>{
    
    return `(05)  ${date.getDate()} ${monthName[date.getMonth()]} ${date.getFullYear()} at ${hoursfunc()}
`
         }
document.write(

         date1(),
         date2(),
         date3(),
         date4(),
         date5(),
    
        )

    
