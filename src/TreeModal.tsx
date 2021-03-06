import * as React from "react";

import TreeModalPortal from "./TreeModalPortal";
interface PropsType {
    isOpen: boolean;
    children: React.ReactChild;
    onClose: () => void;
    overlayColor?: string;
}

const createStyles = (obj: React.CSSProperties): React.CSSProperties => obj;

const outerStyles = createStyles({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, .5)",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    overflowY: "scroll",
    visibility: "hidden",
    opacity: 0,
    transition: "350ms ease opacity, 350ms ease visibility",
    zIndex: 1000,
});

const outerActiveStyles = createStyles({
    visibility: "visible",
    opacity: 1,
});

const innerStyles = createStyles({
    margin: "auto 0",
    padding: 30,
    transform: "translateY(20px)",
    transition: "350ms ease all",
    opacity: 0,
});

const innerActiveStyles = createStyles({
    opacity: 1,
    transform: "translateY(0)",
});

const TreeModal: React.FC<PropsType> = (props) => {
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose();
            }
        };
        const handleWindowClick = (event: MouseEvent) => {
            if (event.target instanceof HTMLElement) {
                if (!event.target.matches(".react-treemodal__inner *")) {
                    props.onClose();
                }
            }
        };
        if (props.isOpen) {
            window.addEventListener("click", handleWindowClick);
            window.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            if (props.isOpen) {
                window.removeEventListener("click", handleWindowClick);
                window.removeEventListener("keydown", handleKeyDown);
            }
        };
    }, [props]);

    const classes = ["react-treemodal"];
    if (props.isOpen) {
        classes.push("is-open");
    }

    let joinedOuterStyles = outerStyles;
    let joinedInnerStyles = innerStyles;
    if (props.overlayColor) {
        joinedOuterStyles = {
            ...joinedOuterStyles,
            ...{ backgroundColor: props.overlayColor },
        };
    }
    if (props.isOpen) {
        joinedOuterStyles = { ...joinedOuterStyles, ...outerActiveStyles };
        joinedInnerStyles = { ...joinedInnerStyles, ...innerActiveStyles };
    }

    return (
        <TreeModalPortal>
            <div className={classes.join(" ")} style={joinedOuterStyles}>
                <div
                    className="react-treemodal__inner"
                    style={joinedInnerStyles}
                >
                    {props.children}
                </div>
            </div>
        </TreeModalPortal>
    );
};

export { TreeModal };

export default TreeModal;
