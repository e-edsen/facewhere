import React from "react";
import './ImgLinkForm.css';

const ImgLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'Detect face that exist on a photo'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' 
                    onChange={ onInputChange }/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                    onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImgLinkForm;