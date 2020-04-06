import * as React from "react";
import * as ReactDOM from "react-dom";

const createElement = (type: any, classes?: string) => {
    const el = document.createElement(type);
    if (classes) {
        el.classList.add(classes);
    }
    return el;
};

const TreeModalPortal: React.FC<{ children: React.ReactChild }> = (props) => {
    let el = React.useRef(createElement("div", "treemodal-portal")).current;
    React.useEffect(() => {
        const body = document.body;
        body.append(el);
        return () => {
            el.remove();
        };
    }, []);
    if (!el) {
        return null;
    }
    return ReactDOM.createPortal(props.children, el);
};

export default TreeModalPortal;
