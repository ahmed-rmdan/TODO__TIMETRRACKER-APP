
export class todo{
    id:string;
    task:string;
    date:Date;
   
    constructor(task:string,date:Date){
      this.task=task;
      this.id=new Date().toString();
      this.date=date
      
    }

}