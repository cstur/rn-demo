import React, { PropTypes, Component } from 'react';
import { ScrollView, StyleSheet,View,Text,TouchableHighlight,Image } from 'react-native';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';


class SideMenu extends Component {

  componentWillMount() {
    const { dispatch } =this.props;
  }

  loadService(service) {
    const drawer = this.context.drawer;
    drawer.close();
  }

  render(){
    const drawer = this.context.drawer;
    const { services } = this.props;
    return (
      <Text></Text>
    );
  }
}

SideMenu.contextTypes = {
  drawer: React.PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    padding:10,
  },
  closeButton:{
    width:20,
    height:20,
    alignSelf:'flex-end'
  },
  list:{
    paddingTop:20,
    flexDirection:'row',
    alignItems:'center',
  },
  titleWrapper:{
    flex:3,
    flexDirection:'row',
    alignItems:'center'
  },
  title: {
    color:'#ecf2f9',
    fontSize:20,
    paddingLeft:5
  },
  arrowWrapper: {
    flex:1,
    alignItems:'flex-end',
  },
  rightArrow: {
    height:20,
    width:20,
  },
  seperator:{
    marginTop:10,
    marginBottom:10,
    backgroundColor:'#204060',
    height:0.5
  },

  serviceListWrapper: {
  }
});


function mapStateToProps(state,ownProps) {
  const { entities } = state;
  const services = entities.services ? entities.services : [];
  return {
    userReducer:state.userReducer,
    services:services
  }
}

export default connect(mapStateToProps)(SideMenu)
