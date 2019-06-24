import React, { Component } from 'react';
import  {Route} from 'react-router-dom';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import './technical.css'

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div>
                    <Route path='/technical/page1' component={Page1}/>
                    <Route path='/technical/page2' component={Page2}/>
                    <Route path='/technical/page3' component={Page3}/>
                </div>
            </div>
        );
    }
}
export default Content;