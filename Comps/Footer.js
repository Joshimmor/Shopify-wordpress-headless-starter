import React from 'react'

const headline = {
    display: "block",
    height: "2px",
    width: "85vw",
    backgroundColor: "grey"
}
const footerCol = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom:"10vh",
    width: "100vw"
}
const text = {
    fontWeight: "lighter",
    fontSize: ".5rem"
}

export default function Footer() {
    return (
        <div style={footerCol}>
            <hr style={headline}/>
                <p style={text}>Joshua Immordino Templates</p>
        </div>
    )
}
