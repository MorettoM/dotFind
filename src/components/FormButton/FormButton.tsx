import React from 'react';
import './FormButton.scss'

interface FormButtonProps {
    children?: React.ReactNode;
}

const FormButton = (props: FormButtonProps) => {
    return (
        <div className='form-button'>
            <button>
                {props.children}
            </button>
        </div>
    );
};

export default FormButton