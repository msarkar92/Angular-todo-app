import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos : Todo[];

  constructor() {
    this.todos = [
      {
        id:"111",
        title:"Learn Java",
        isComplete:true,
        date:new Date()
      },
      {
        id:"112",
        title:"Learn Angular",
        isComplete:true,
        date:new Date()
      },
      {
        id:"113",
        title:"Learn C++",
        isComplete:false,
        date:new Date()
      }
    ]
   }

   getTodos = () =>{
     return of(this.todos);
   }

   addTodo = (todo:Todo) =>{
     this.todos.push(todo);
   }

   changeStatus = (todo:Todo) =>{
     this.todos.map((singleTodo)=>{
       if(singleTodo.id == todo.id)
        singleTodo.isComplete =  !singleTodo.isComplete;
     });
   }

   deleteTodo(todo:Todo){
     const indexOfTodo =  this.todos.findIndex(
       (currentObj) => currentObj.id === todo.id
     );
     console.log(indexOfTodo);
     this.todos.splice(indexOfTodo,1);
   }

}
