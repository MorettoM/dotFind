import React from 'react';

interface FormButtonProps {
    children: React.ReactNode;
}

const FormButton = (props: FormButtonProps) => {
    return (
        <button className="form-button" type="submit">
            TESTING BUTTON
        </button>
    );
};

export default FormButton