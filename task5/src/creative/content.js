import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';

const Creatives = ({match}) => <p>{match.params.id}</p>

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className='content-header'>
                    <Route path='/creative/:id'  component={Creatives}/>
                </div>
                <div>
                    <Route path='/creative/page1' component={Page1}/>
                    <Route path='/creative/page2' component={Page2}/>
                    <Route path='/creative/page3' component={Page3}/>
                </div>
            </div>
        );
    }
}

export default Content;