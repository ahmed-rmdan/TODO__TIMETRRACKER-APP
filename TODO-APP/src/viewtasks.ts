import { todo } from "./todo";
const items=document.querySelector<HTMLDivElement>('.items')
import { handleremove } from "./main";
export class Viewtasks{

tasks:todo[];


constructor(tasks:todo[]){
this.tasks=tasks
}

render(){
    let year:number;
    let months:number;
    let days:number;
    let hours:number;
    let minutes:number
    let seconds:number;
    let currdate=new Date()
    let html=this.tasks.map((task,index)=>{
        year=task.date.getFullYear()-currdate.getFullYear()
        months=task.date.getMonth()-currdate.getMonth()
        days=task.date.getDate()-currdate.getDate()
        hours=task.date.getHours()-currdate.getHours()
        minutes=task.date.getMinutes()-currdate.getMinutes()
       seconds=task.date.getSeconds()-currdate.getSeconds()
    return `<div class="card">
                <div class="exit">
                      <button class="x" data-set=${index}>
                        x
                      </button>

                </div>
                <div class="task">
                  ${task.task}
                </div>
                <div class="taskdate">
                        <div class="date">
                             ${task.date.getDate()}/${task.date.getMonth()+1}/${task.date.getFullYear()}
                        </div>
                        <div class="time">
                                ${task.date.getHours()}:${task.date.getMinutes()}
                        </div>
                </div>
                <div class="remaining">
                       
                         <p>  ${year<0?'0':year} Y :  ${months<0?'0':months} M :  ${days<0?'0':days} D : ${Math.abs(hours)} h : ${Math.abs(minutes)} m : ${Math.abs(seconds)} s  </p>
                </div>
          </div>`
    }   
    ).join()
    items!.innerHTML=html
    handleremove()
}



}