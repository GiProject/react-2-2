const { Component, useState } = require("react");

function Toolbar(props) {

    return (
        <ul className="filter">
            {props.filter.map((value, index) => (
                <li 
                    className={index == props.state ? 'selected' : ''}
                    onClick={e => props.setState(e.target.dataset.index)}
                    data-index={index}
                    key={index}
                >{value}</li>
            ))}
        </ul>
    );
}

export default Toolbar;