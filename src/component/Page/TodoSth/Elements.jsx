import React, {useState} from 'react';
import BtnClick from './BtnClick';
import './Elements.css'

const Elements = ({id, key, value, ilClass, clickEdit, clickDelete}) => {

    const [newValue, setNewValue] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const onClickSDelete = () => {
        clickDelete(id)
    }

    const onClickSave = () => {
        clickEdit(id, newValue)
        setIsEdit(false);
    }


    return (
        <div key={key} style={{display: 'flex', justifyContent: 'space-between', gap: "20px"}}>
            {   !isEdit 
                ? <li className={ilClass}>{value}</li> 
                : <li className={ilClass}>
                    <input
                        type="text"
                        value={newValue}
                        onChange={(e) => setNewValue(e.target.value)}
                    />
                </li>
            }
            <div className='btn-container'>
                {   !isEdit
                    ? <BtnClick type='primary' text="Edit" onClick={() => setIsEdit(true)}/>
                    : <BtnClick type='primary' text="Save" onClick={onClickSave}/>
                }
                <BtnClick type='danger' text="Delete" onClick={onClickSDelete}/>
            </div>
        </div>
    );
}

export default Elements;
