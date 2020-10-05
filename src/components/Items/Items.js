import React from 'react';
import Item from './Item';

import { connect } from 'react-redux';

/*
class Items extends React.Component {

    state = {
        links: [
            {
                title: 'Google',
                link: 'https://www.google.pl/'
            },
            {
                title: 'WP',
                link: 'https://www.wp.pl/'
            },
        ],
        notes: [
            {
                title: 'Pierwsza notatka',
                desc: 'To jest treść pierwszej notatki.'
            },
            {
                title: 'Druga notatka',
                desc: 'To jest treść drugiej notatki.'
            },
        ],
    }

    render() {
        return (
            <div>
                {this.props.type === "links" ? this.state.links.map(item => (<Item title={item.title} value={item.link}/>)) : ''}
                {this.props.type === "notes" ? this.state.notes.map(item => (<Item title={item.title} value={item.desc}/>)) : ''}
            </div>
            
        )
    }
}
*/

const Items = props => (
    <div>
        {props.type === "links" ? props.links.map(item => (<Item title={item.title} value={item.link} key={item.title} id={item.id} type="links"/>)) : ''}
        {props.type === "notes" ? props.notes.map(item => (<Item title={item.title} value={item.desc} key={item.title} id={item.id} type="notes"/>)) : ''}
    </div>
)

const mapStateToProps = state => {
    //Część state \/
    // const { links } = state
    // return { links };
    return state;
}

export default connect(mapStateToProps)(Items);