import React from 'react';

interface FormButtonProps {
    children: React.ReactNode;
}

const FormButton = (props: FormButtonProps) => {
    return (
        <button className="form-button" type="submit">
            {props.children}
        </button>
    );
};

export default FormButton