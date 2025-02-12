import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Todoitem  extends Component {
    getStyle=()=>{
        return{
            backgroundColor:'none',
            padding:'15px 0px',
            borderBottom: '1px #fff dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none',
            color:'#000000'
            
        }
        
    }
    /*or, we can also use the following,
    getstyle=()=>{
        if(this.props.todo.completed){
            return{
                textDecoration:'line-through'
            }
        }else{
            return{
                textDecoration:'none'
            }
        }
    }
    */
    render() {
        const { id,title} = this.props.todo;
        return (
            <div className="text" style={this.getStyle()}>
               <p>
                   <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
               {title}
               <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
                x
               </button>
    
               </p> 
            </div>
        )
    }
}
//proptypes
Todoitem.propTypes={
    todo: PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,}
/*const itemStyle = {
    backgroundColor:'#f4f4f4'
}*/
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }
export default Todoitem;