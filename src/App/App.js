import React, { Component } from 'react';
import './App.css';
import LeafVendors from '../LeafVendors/LeafVendors';
// import AddedVendor from '../AddedVendor/addedvendor';
// import MainVendors from '../MainVendor/mainvendor';
import Context from '../Context';
// import AddedVendorExpandLeaf from '../AddedVendorExpandLeaf/addedvendorexpandleaf';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true,
      vendorAdded: false,
      criteriaAdded: false,
      boxDeleted: false,
      googleDeleted: false,
      dropboxDeleted: false,
      salesDeleted: false,
    }
  }

  static contextType = Context;

  expandLeaf = () => {
    this.setState({ isHidden: false })
  }

  hideLeaf = () => {
    this.setState({ isHidden: true })
  }
  
  addCriteria = () => {
    console.log('add new box')
  }
  
  addVendor = () => {
    this.setState({ vendorAdded: true });
    console.log(this.context.vendorAdded, 'from app')
  }

  deleteBox = () => {
    this.setState({ vendorAdded: false })
    console.log(this.context.vendorAdded, 'from app')
  }

  deleteDrop = () => {
    this.setState({ dropboxDeleted: true })
  }

  deleteGoogle = () => {
    this.setState({ googleDeleted: true })
  }

  deleteSales = () => {
    this.setState({ salesDeleted: true })
  }

  render() {
   // console.log(this.context)
    // const decider = () => {
    //   if (this.state.isHidden === true && this.state.vendorAdded === false && this.state.criteriaAdded === false && this.state.boxDeleted === false && this.state.googleDeleted === false && this.state.dropboxDeleted === false) {
    //     return <MainVendors />
    //   } else if (this.state.isHidden === true && this.state.vendorAdded === true) {
    //     return <AddedVendor />
    //   } else if (this.state.isHidden === false && this.state.vendorAdded === false ) {
    //     return <LeafVendors />
    //   } else if (this.state.isHidden === false && this.state.vendorAdded === true) {
    //     return <AddedVendorExpandLeaf />
    //   }
    // }
  
    const value = {
      isHidden: this.state.isHidden,
      vendorAdded: this.state.vendorAdded,
      criteriaAdded: this.state.criteriaAdded,
      boxDeleted: this.state.boxDeleted,
      googleDeleted: this.state.googleDeleted,
      dropboxDeleted: this.state.dropboxDeleted,
      expandLeaf: this.expandLeaf,
      addCriteria: this.addCriteria,
      addVendor: this.addVendor,
      hideLeaf: this.hideLeaf,
      deleteBox: this.deleteBox,
      deleteDrop: this.deleteDrop,
      deleteGoogle: this.deleteGoogle,
      deleteSales: this.deleteSales,
    }
    return (
      <Context.Provider value={value}>
        {/* {decider()} */}
        <LeafVendors />
      </Context.Provider>
    );
  }
}

export default App;