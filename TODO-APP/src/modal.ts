import { todo } from "./todo"

export const modal:{todos:todo[],length:number,start:number,end:number,page:number}={
todos:[],
length:0,
start:0,
end:2,
page:1
}
function pushtask(todo:todo){
    modal.todos.push(todo)
    modal.length++;
    modal.page=Number((modal.length/3).toFixed())
}
function removetask(id:string){
modal.todos.filter(to=>
    to.id!==id
)
 length--;   
 modal.page=Number((modal.length/3).toFixed())

}



export const modalview={
    pushtask,
    removetask,

}
