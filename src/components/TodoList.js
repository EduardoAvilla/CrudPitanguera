import React from 'react'

class TodoList extends React.Component {
  render() {
    return (
      <ul class="  justify-content-center flex-wrap">
        {this.props.items.map(item => (
          <li className="bg-danger text-dark rounded"  key={item.id}>{item.text}</li>
        
        ))}
      </ul>
    );
  }
}

 

export default TodoList;