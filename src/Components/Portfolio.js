import { Component, useState } from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

function Portfolio(props) {
    const initialState = 0;
    const [state, setState] = useState(initialState);
    const items = props.filter[state] === 'All' ? props.projects : props.projects.filter(item => item.category === props.filter[state]);

    return (
        <div className="container">
            <Toolbar
                filter = { props.filter }
                state = { state }
                setState = { setState }
            />
            <ProjectList projects = {items}/>
        </div>
    );
}

export default Portfolio;