import React, { Component } from "react";

class TodoItems extends Component{
  createTasks(item){
    return <li key={item.key}>{item.text}</li>
  }
}
