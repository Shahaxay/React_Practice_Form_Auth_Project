import React from "react";

import './ErrorModel.css'
import Button from "./Button";
import Card from "./Card";

const ErrorModel = props => {
    return (
        <React.Fragment>
            <div className="backdrop" onClick={props.onConfirm}>
            </div>
            <Card errorModel={true}>
                <div>
                    <header className="error-model__header">{props.errObj.title}</header>
                    <p>{props.errObj.message}</p>
                    <footer className="error-model__footer">
                        <Button value="okay" onClick={props.onConfirm} />
                    </footer>
                </div>
            </Card>
        </React.Fragment>
    );
}

export default ErrorModel;