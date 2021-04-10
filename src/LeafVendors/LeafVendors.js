import React, { Component } from 'react';
import '../App/App.css';
import Logo from '../Images/logo.png';
import Addition from '../Images/addition.png';
//import Arrow from '../Images/arrow.webp';
import ArrowFlip from '../Images/arrowflip.png';
import X from '../Images/x.png';
import Context from '../Context';


export default class LeafVendors extends Component {
  static contextType = Context;

  render() { 

    const addOrNote = (this.context.vendorAdded === true) ? (
      <div>
        <p className='notetext'>Note: To add more vendors to compare you need to first remove one or more vendors. At a time maximum 4 vendors are allowed to compare.</p>
      </div>
    ) : (
      <div onClick={() => this.context.addVendor()} className='adddiv'>
        <img src={Addition} alt='add' id='add'></img><br />Add New Vendor
      </div>
    )
    
    console.log(this.context.vendorAdded, 'from leaf')
      return (
        <main className='App'> 
        <section className='wrapper'>
          <div className='criteria' onClick={() => this.addCriteria()}>Add Criteria +</div>
          {addOrNote}
          <div className='noncentered' style={{ visibility: this.context.vendorAdded === true ? 'hidden': 'visible'}}><img src={X} alt='x' id='x' onClick={() => this.context.deleteBox()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />Box</div></div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteDrop()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />Dropbox</div></div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteGoogle()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />Google Drive</div></div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteSales()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />SalesForce</div></div>
          
          <div className='leftalign'>Overall Score</div>
          <div style={{ visibility: this.context.vendorAdded === true ? 'hidden': 'visible'}}>6.1</div>
          <div>6</div>
          <div>4.5</div>
          <div>6.2</div>   

          <div className='leftalign'>Production Description</div>
          <div className='leftalign' style={{ visibility: this.context.vendorAdded === true ? 'hidden': 'visible'}}>Box is a content management system</div>
          <div className='leftalign'>Dropbox is a cloud based file management</div>
          <div className='leftalign'>Store, sync, and share files easily</div>
          <div className='leftalign'>SalesForce is a cloud based file storage</div>
 
          <div className='leftalign' onClick={() => this.context.isHidden === true ? this.context.expandLeaf() : this.context.hideLeaf() }><img src={ArrowFlip} alt='arrow' id='arrowflip'></img>Funding History</div>
          <div className='leftalign' style={{ visibility: this.context.vendorAdded === true ? 'hidden': 'visible'}}>Total funding $150M</div>
          <div className='leftalign'>Total funding $170M</div>
          <div className='leftalign'>Total funding $36.1M</div>
          <div className='leftalign'>Total funding $756.1M</div>

          <div className='newalign' id='hiddenclass1' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}} >Founded</div>
          <div className='leftalign' id='hiddenclass1' style={{ visibility: this.context.isHidden === true && this.context.vendorAdded === true ? 'hidden' : 'visible'}}>2021</div>
          <div className='leftalign' id='hiddenclass1' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>2007</div>
          <div className='leftalign' id='hiddenclass1' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>1998</div>
          <div className='leftalign' id='hiddenclas1s' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>2002</div>

          <div className='newalign' id='hiddenclass2' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible' }}>Key Investors</div>
          <div className='leftalign' id='hiddenclass2' style={{ visibility: this.context.isHidden === true && this.context.vendorAdded === true ? 'hidden': 'visible'}}>Box Investors</div>
          <div className='leftalign' id='hiddenclass2' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Index Ventures, Sequioa</div>
          <div className='leftalign' id='hiddenclass2' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Sequia, Kleiner, Index Ventures</div>
          <div className='leftalign' id='hiddenclass2' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Sequia, Larry Page</div>

          <div className='newalign' id='hiddenclass3' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Founders</div>
          <div className='leftalign' id='hiddenclass3' style={{ visibility: this.context.isHidden === true && this.context.vendorAdded === true ? 'hidden': 'visible'}}>Box founders</div>
          <div className='leftalign' id='hiddenclass3' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Arash Ferdoswi</div>
          <div className='leftalign' id='hiddenclass3' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Larry Page, Sergey Bin</div>
          <div className='leftalign' id='hiddenclass3' style={{ visibility: this.context.isHidden === true ? 'hidden': 'visible'}}>Kleiner, Sergey Bin</div>

          <div className='leftalign' id='bottominfo' style={{ 'grid-row-start': this.context.isHidden === true ? '6' : '9'}}>Pricing</div>
          <div className='leftalign' id='bottominfo' style={{ 'grid-row-start': this.context.isHidden === true && this.context.vendorAdded === true ? '6' : '9'}}>www.box.com/pricing</div>
          <div className='leftalign' id='bottominfo' style={{ 'grid-row-start': this.context.isHidden === true ? '6' : '9'}}>www.dropbox.com/pricing</div>
          <div className='leftalign' id='bottominfo' style={{ 'grid-row-start': this.context.isHidden === true ? '6' : '9'}}>www.drive.google.com/pricing</div>
          <div className='leftalign' id='bottominfo' style={{ 'grid-row-start': this.context.isHidden === true ? '6' : '9'}}>www.salesforce.com/pricing</div>

          <div className='leftalign' id='featureinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '7' : '10'}}>Features</div>
          <div className='leftalign' id='featureinfo' style={{ 'grid-row-start': this.context.isHidden === true && this.context.vendorAdded === true ? '7' : '10'}}>2 different features present</div>
          <div className='leftalign' id='featureinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '7' : '10'}}>5 different features present</div>
          <div className='leftalign' id='featureinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '7' : '10'}}>4 different features present</div>
          <div className='leftalign' id='featureinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '7' : '10'}}>6 different features present</div> 

          <div className='leftalign' id='caseinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '8' : '11'}}>Customer Case Studies</div>
          <div className='leftalign' id='caseinfo' style={{ 'grid-row-start': this.context.isHidden === true && this.context.vendorAdded === true ? '8' : '11'}}>3 customer case studies found</div>
          <div className='leftalign' id='caseinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '8' : '11'}}>4 customer case studies found</div>
          <div className='leftalign' id='caseinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '8' : '11'}}>6 customer case studies found</div>
          <div className='leftalign' id='caseinfo' style={{ 'grid-row-start': this.context.isHidden === true ? '8' : '11'}}>1 customer case studies found</div>
        </section>
      </main>
      )
    }
}