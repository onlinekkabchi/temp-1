function WebButton(props) {
    const buttonStyle = {
        height: "100px",
        width: "100px",
        background: "#CCD5AE",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "-webkit-grabbing",
        left: `${props.buttonstart}`,
        visibility: `${props.showWebButtonTag}`,
        position: "absolute",
        zIndex: 1,
        borderRadius: "25px",
        fontSize: "18px",
    };

    return (
        <div style={buttonStyle} onClick={props.removeButton}>
            {props.children}
        </div>
    );
}

export { WebButton };
