const initailState = {
    links: [
        {
            id: 1,
            title: 'Google',
            link: 'https://www.google.pl/'
        },
        {
            id: 2,
            title: 'WP',
            link: 'https://www.wp.pl/'
        },
    ],
    notes: [
        {
            id: 3,
            title: 'Pierwsza notatka',
            desc: 'To jest treść pierwszej notatki.'
        },
        {
            id: 4,
            title: 'Druga notatka',
            desc: 'To jest treść drugiej notatki.'
        },
    ],
}

const rootReducer = (state = initailState, action) => {
    switch (action.type) {
        case ('ADD_ITEM'):
            return {
                ...state,
                [action.payload.itemType]: [...state[action.payload.itemType],action.payload.item]
            }
        case ('REMOVE_ITEM'):
            return {
                ...state,
                [action.payload.itemType]: [...state[action.payload.itemType].filter(item => item.id !== action.payload.id)]
            }
        default: 
            return state;
    }
    
};

export default rootReducer;