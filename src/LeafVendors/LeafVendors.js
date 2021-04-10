import React, { Component } from 'react';
import '../App/App.css';
import Logo from '../Images/logo.png';
import Addition from '../Images/addition.png';
//import Arrow from '../Images/arrow.webp';
import ArrowFlip from '../Images/arrowflip.png';
import X from '../Images/x.png';
//import App from '../App/App';
import Context from '../Context';


export default class LeafVendors extends Component {
  static contextType = Context;

  render() {  
      return (
        <main className='App'> 
        <section className='wrapper'>
          <div className='criteria' onClick={() => this.addCriteria()}>Add Criteria +</div>
          <div onClick={() => this.context.addVendor()}><img src={Addition} alt='add' id='add'></img><br />Add New Vendor</div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteDrop()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />Dropbox</div></div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteGoogle()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />Google Drive</div></div>
          <div className='noncentered'><img src={X} alt='x' id='x' onClick={() => this.context.deleteSales()}></img><div className='logoname'><img src={Logo} alt='logo' id='icon'></img><br />SalesForce</div></div>
          <div className='leftalign'>Overall Score</div>
          <div>6</div>
          <div>4.5</div>
          <div>6.2</div>        
          <div className='leftalign'>Production Description</div>
          <div className='leftalign'>Dropbox is a cloud based file management</div>
          <div className='leftalign'>Store, sync, and share files easily</div>
          <div className='leftalign'>SalesForce is a cloud based file storage</div>
          <div className='leftalign' onClick={() => this.context.hideLeaf()}><img src={ArrowFlip} alt='arrow' id='arrowflip'></img>Funding History</div>
          <div className='leftalign'>Total funding $170M</div>
          <div className='leftalign'>Total funding $36.1M</div>
          <div className='leftalign'>Total funding $756.1M</div>
          <div className='newalign'>Founded</div>
          <div className='leftalign'>2007</div>
          <div className='leftalign'>1998</div>
          <div className='leftalign'>2002</div>
          <div className='newalign'>Key Investors</div>
          <div className='leftalign'>Index Ventures, Sequioa</div>
          <div className='leftalign'>Sequia, Kleiner, Index Ventures</div>
          <div className='leftalign'>Sequia, Larry Page</div>
          <div className='newalign'>Founders</div>
          <div className='leftalign'>Arash Ferdoswi</div>
          <div className='leftalign'>Larry Page, Sergey Bin</div>
          <div className='leftalign'>Kleiner, Sergey Bin</div>
          <div className='leftalign'>Pricing</div>
          <div className='leftalign'>www.dropbox.com/pricing</div>
          <div className='leftalign'>www.drive.google.com/pricing</div>
          <div className='leftalign'>www.salesforce.com/pricing</div>
          <div className='leftalign'>Features</div>
          <div className='leftalign'>5 different features present</div>
          <div className='leftalign'>4 different features present</div>
          <div className='leftalign'>6 different features present</div>
          <div className='leftalign'>Customer Case Studies</div>
          <div className='leftalign'>4 customer case studies found</div>
          <div className='leftalign'>6 customer case studies found</div>
          <div className='leftalign'>1 customer case studies found</div>
        </section>
      </main>
      )
    }
}