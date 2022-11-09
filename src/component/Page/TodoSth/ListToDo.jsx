import React from 'react';
import Elements from './Elements';


const ListToDo = ({array, ilClass, ulClass, clickEdit, clickDelete}) => {
    return (
        <ul className={ulClass}>
            {
            array.map(( value, index) => <Elements
                                            id={index}
                                            key={index}
                                            value={value}
                                            ilClass={ilClass}
                                            clickEdit={clickEdit}
                                            clickDelete={clickDelete}
                                        />)
            }
        </ul>
    );
}

export default ListToDo;
