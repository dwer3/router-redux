import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../actions';

const Item = ({title, value, id, type, remove}) => (
    <>
        <h3>{title}</h3>
        <p>{value}</p>
        <button onClick={() => remove(type, id)}>Usuń</button>
        <p>----------------------</p>
    </>
)

const mapDispatchToProps = dispatch => ({
    remove: (itemType, id) => dispatch(removeItem(itemType, id)),
})

export default connect(null, mapDispatchToProps)(Item);