import React from "react";


export default function Nav() {

    return(
        <>
        <div className="sticky">
            <div className="navBarContainer">
                <div className="navBar">
                    <ul>
                        <div className="left">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Transactions</li>
                        </div>
                        <div className="right">
                            {/* <li>Record Now</li> */}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )

} 