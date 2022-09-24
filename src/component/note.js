import { useState, useRef } from "react";
import { WebButton } from "./button";
import NoteNameTag from "./changeName";

function WebNote(props) {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timerRef = useRef(null);
    const [showWebButton, setShowWebButton] = useState("hidden");

    const startMouseTragger = (event) => {
        switch (event.detail) {
            case 1: {
                pressTimer();
                break;
            }
            case 2: {
                setShowWebButton("visible");
                setTimeout(() => {
                    setShowWebButton("hidden");
                }, 5000);
                console.log("double click!");
                break;
            }
            default:
                break;
        }
    };

    const pressTimer = () => {
        console.log("presstimer");
        timerRef.current = setTimeout(() => {
            console.log("presstimer inside");
            longPressTriggered
                ? setLongPressTriggered(false)
                : setLongPressTriggered(true);
        }, 1000);
    };

    const removePressTimer = () => {
        if (timerRef.current) {
            console.log("removepresstimer");
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const removeThisNote = () => {
        props.removeNote(props.id);
    };

    const noteStyle = {
        height: "100px",
        background: longPressTriggered ? "#CCD5AE" : "#E9EDC9",
        display: "flex",
        alignItems: "center",
        borderRadius: "25px",
        padding: "0 0 0 25px",
        marginBottom: "25px",
    };

    return (
        <li
            style={noteStyle}
            key={props}
            className="note"
            onMouseDown={startMouseTragger}
            onMouseUp={removePressTimer}
        >
            <NoteNameTag
                decidedNewName={true}
                nameTag={longPressTriggered}
                initialnotename={props.name}
            />
            {longPressTriggered ? (
                <></>
            ) : (
                <WebButton
                    showWebButtonTag={showWebButton}
                    buttonstart={"250px"}
                    removeButton={removeThisNote}
                >
                    이 삭제버튼은 5초 후 사라집니다. 짜잔.
                </WebButton>
            )}
        </li>
    );
}

export { WebNote };
