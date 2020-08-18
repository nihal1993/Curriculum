import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
const itemsArray = [];


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

class ItemList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      error : null,
      itemsArray,
      value:'',
      parent:false,
      child:false,
    }

    this.standard = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upItem = this.upItem.bind(this);
    this.downItem = this.downItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this);

  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(this.standard.current.value.length);
     if(this.standard.current.value.replace(/\s+/, "").length === 0){
       this.setState({error:'null'}); 
     }else{
       this.setState({error:null}); 
       this.setState({value:this.standard.current.value}); 
       this.setState(state => {
        const itemsArray = state.itemsArray.concat(state.value);
        return {
          itemsArray,
          value: '',
        };
      });
    }
    this.standard.current.value = null;
  };

  upItem(param){

    if(this.state.itemsArray.indexOf(param)>0){
      var update = this.state.itemsArray;
      var to = update.indexOf(param);
      var from = update.indexOf(param)-1;
      var target = update[from];                        
      var increment = to < from ? -1 : 1;
      for(var k = from; k != to; k += increment){
        update[k] = update[k + increment];
      }
      update[to] = target;
      this.setState({itemsArray:update});

    } 
        
  }
  downItem(param){
    if(this.state.itemsArray.indexOf(param) < this.state.itemsArray.length){
      var update = this.state.itemsArray;
      var to = update.indexOf(param);
      var from = update.indexOf(param)+1;
      var target = update[from];                        
      var increment = to < from ? -1 : 1;
      for(var k = from; k != to; k += increment){
        update[k] = update[k + increment];
      }
      update[to] = target;
      this.setState({itemsArray:update});
    } 
  }

  

  deleteItem(param){
   
     let filteredArray = this.state.itemsArray.filter(item => item !== param);
     this.setState({itemsArray: filteredArray});
  }
 


  render() {
    
    console.log(this.state.itemsArray);
return (
        <div className="MainContainer">
      <h4 className="heading">MATHEMATICS</h4>
      <table>
            <thead>
              <tr>
              <th >Action <br /> 
              <span >Up,Down,Outdent,Indent,Delete</span>
              </th>
              <th className="LeftHead">Standard <br /> 
                <span >The text of the standard</span>
              </th>
              </tr>
              
            </thead>
           
                
            
            <tbody>
            {this.state.itemsArray.map(item => (
              <Tab 
              content={item}
              upItem={() => this.upItem(item)}
              downItem={() => this.downItem(item)}
              deleteItem={() => this.deleteItem(item)}
            />
              
            //   <tr>
            //   <td>
                
            //     <i onClick={()=>{this.upItem(item)}}  class="fa fa-arrow-circle-up	 fa-3x"></i>
            //     <i onClick={()=>{this.downItem(item)}}  class="fa fa-arrow-circle-down fa-3x"></i>
            //     <i onClick={() => this.leftItem(item)}  class="fa fa-arrow-circle-left fa-3x"></i>
            //     <i onClick={() => this.rightItem(item)}  class="fa fa-arrow-circle-right fa-3x"></i>
            //     <i onClick={() => this.deleteItem(item)} class="fa fa-trash-o fa-3x"></i>
                
            //   </td>
            //   <td className={ `list-item ${this.state.parent ? "shiftInside" : ""} ${this.state.child ? "shiftDeepInside" : ""}` }> {item} </td>
            // </tr>
             ))}

              <tr>
                <td colspan = "4"> 
                    <input type="text" ref={this.standard} placeholder="Type Standard here"/>
                </td>
              </tr>
              <tr>
                <td className="Button" colspan = "4" >
                    <button onClick={this.handleSubmit}><i class="fa fa-plus-circle"></i> Add a Standard
                    </button>
                </td>
              </tr>
              
          </tbody>
          </table>
          <div>

          </div>
        </div>

    );
  }
}

function App() {
  return (
    <div>
        <ItemList/>
    </div>
   
  );
}

export default App;
