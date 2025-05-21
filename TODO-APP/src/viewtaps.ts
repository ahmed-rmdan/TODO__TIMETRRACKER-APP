
const taps=document.querySelector<HTMLDivElement>('.taps')

export class Viewtaps{
    numtaps:number;
    activepage:number;
constructor(maxpage:number,activepage:number){
this.numtaps=maxpage
this.activepage=activepage
}
render(){
    let html:string=``;
    console.log(this.numtaps)
    for(let i=1;i<=this.numtaps;i++){
        if(i===this.activepage){
           html=html+`<div class="tap-container">
             <button class="tap-fill">
           
             </button>

        </div>`
        }else{

           html=html+ `<div class="tap-container">
             <button class="tap">
           
             </button>

        </div>`
        }
       
       
    }
     console.log(html)
    taps!.innerHTML=html
}

}