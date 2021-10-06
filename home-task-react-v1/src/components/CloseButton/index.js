import React from "react";

const CloseButton = (props) => {
    return (
        <svg width={props?.width ?? "23"} height={props?.height ?? "24"} viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.47099 2.15426L21.529 22.2122" stroke="white" stroke-width="2" stroke-linecap="round"/>
            <path d="M21.529 2.15426L1.47103 22.2122" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
    );
}

export default CloseButton;
