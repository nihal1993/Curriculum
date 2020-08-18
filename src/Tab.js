import React from 'react';

class Tab extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        parent:false,
        child:false,
      }
      this.leftItem = this.leftItem.bind(this);
      this.rightItem = this.rightItem.bind(this);
    }
  
    leftItem(e){
      console.log("left",e);
      if(this.state.child === true){
        this.setState({child: false});
      }else{
        if(this.state.parent === true){
        this.setState({parent: false});
      }}
    }
  
    rightItem(e){
      console.log("right",e);
      if(this.state.parent === true){
        this.setState({child: true});
      }else{
        if(this.state.parent === false){
         this.setState({parent: true});
        } 
      }
    }
  
    render() {
      return(
      <tr>
        <td>
          
          <i onClick={this.props.upItem }  class="fa fa-arrow-circle-up	 fa-3x"></i>
          <i onClick={this.props.downItem }  class="fa fa-arrow-circle-down fa-3x"></i>
          <i onClick={(e)=>{this.leftItem(e)}} class="fa fa-arrow-circle-left fa-3x"></i>
          <i onClick={(e)=>{this.rightItem(e)}}  class="fa fa-arrow-circle-right fa-3x"></i>
          <i onClick={this.props.deleteItem } class="fa fa-trash-o fa-3x"></i>
          
        </td>
        <td className={ `list-item ${this.state.parent ? "shiftInside" : ""} ${this.state.child ? "shiftDeepInside" : ""}` }>   { this.props.content }
        </td>
     </tr>);
    }
  }

  export default Tab;