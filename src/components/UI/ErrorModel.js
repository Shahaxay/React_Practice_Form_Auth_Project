import React from "react";
import ReactDOM from "react-dom";

import './ErrorModel.css'
import Button from "./Button";
import Card from "./Card";

const ErrorModel = props => {
    /*Note we should keep backfrop as seperate component if used with multiple overlay, here we used with only this so we defined there only */
    const Backdrop = props => {
        return <div className="backdrop" onClick={props.onConfirm} />
    }
    const ModelOverlay = props => {
        return (
            <Card errorModel={true}>
                <div>
                    <header className="error-model__header">{props.errObj.title}</header>
                    <p>{props.errObj.message}</p>
                    <footer className="error-model__footer">
                        <Button value="okay" onClick={props.onConfirm} />
                    </footer>
                </div>
            </Card>
        );
    }
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModelOverlay errObj={props.errObj} onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    );
}

export default ErrorModel;