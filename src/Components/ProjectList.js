
import React from "react";

export default function ProjectList(props) {
    return (
        <div className="projects">
            {props.projects.map((item, index) => (
                <div className="item" key={index}><img src={item.img} alt="" /></div>
            ))}
        </div>
    );
}