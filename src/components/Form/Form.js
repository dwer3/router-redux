import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

const Forms = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

const items = {
    links: 'links',
    notes: 'notes',
}




const Form = ({add}) => {
    const [selectedItem, setSelectedItem] = useState(items.links);

    const [itemToAdd, setItemToAdd] = useState({
        title: '',
        link: '',
        note: ''
    });


    const changeType = (selected) => {
        setSelectedItem(selected);
        setItemToAdd({
            title: '',
            link: '',
            note: ''
        })
    }

    return (
    <Forms>
        <div>
        <input 
            id="links"
            type="radio"
            name="type"
            checked={selectedItem === items.links}
            onChange={() => changeType(items.links)} 
        />
        <label htmlFor="links">Link</label>
        <input 
            id="notes"
            type="radio"
            name="type"
            checked={selectedItem === items.notes}
            onChange={() => changeType(items.notes)}  
        />
        <label htmlFor="notes">Notatka</label>
        </div>
        <input type="text" placeholder="Tytuł" value={itemToAdd.title} onChange={e => setItemToAdd({...itemToAdd, title: e.target.value})} />
        {selectedItem === items.links && <input type="text" placeholder="Link" value={itemToAdd.link} onChange={e => setItemToAdd({...itemToAdd, link: e.target.value})} />}
        {selectedItem === items.notes && <textarea placeholder="Tekst" value={itemToAdd.note} onChange={e => setItemToAdd({...itemToAdd, note: e.target.value})} />}
        <button onClick={() => add(selectedItem, {title: itemToAdd.title, desc: itemToAdd.note, link: itemToAdd.link})}>Dodaj</button>
    </Forms>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (itemType, content) => dispatch(addItem(itemType, content)),
})

export default connect(null, mapDispatchToProps)(Form);