import React, { Component } from 'react';
import { Container, ListGroupItem, Button, ListGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItems} from '../Actions/itemAction';
import PropTypes from 'prop-types';


class shoppingList extends Component {

onDeleteClick =(id)=>{
    this.props.deleteItems(id);
}
componentDidMount(){
    this.props.getItems();
}
render() {
const {items} = this.props.item;

return (
<Container>
        
 <ListGroup>

{items.map(item => {

 return <ListGroupItem key={item._id}>

   <Button
  color="red"
  onClick={this.onDeleteClick.bind(this,item._id)}

 >&times;</Button>
{item.name}</ListGroupItem>
     })}

 </ListGroup>

  </Container>
        );
    }


}
shoppingList.propTypes ={
    getItems:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}


const mapStateTpProps = (state) => {
    return {
        item: state.item
    }
}

export default connect(mapStateTpProps, { getItems,deleteItems })(shoppingList);