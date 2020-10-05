import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem } from '../../actions';

const Forms = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`;

const Form = ({add}) => (
    <Forms>
        <div>
        <input 
            id="links"
            type="radio"
            name="type"
           // checked={this.state.activeOption === types.twitter}
            //onChange={() => this.handleRadioButtonChange(types.twitter)} 
        />
        <label htmlFor="links">Link</label>
        <input 
            id="notes"
            type="radio"
            name="type"
           // checked={this.state.activeOption === types.twitter}
            //onChange={() => this.handleRadioButtonChange(types.twitter)} 
        />
        <label htmlFor="notes">Notatka</label>
        </div>
        <input type="text" placeholder="Tytuł" />
        <input type="text" placeholder="Link" />
        <textarea placeholder="Tekst"/>
        <button onClick={() => add('notes', {title: 'Trzecia notatka', desc: 'To jest treść trzeciej notatki.'})}>Dodaj</button>
    </Forms>
)

const mapDispatchToProps = dispatch => ({
    add: (itemType, content) => dispatch(addItem(itemType, content)),
})

export default connect(null, mapDispatchToProps)(Form);