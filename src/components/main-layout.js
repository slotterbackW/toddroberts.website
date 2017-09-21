import React from 'react'

import './../styles/style.css'

/* MainLayout is a two-column layout with space for a navbar on the left,
the main content on the right, and a footer on the bottom */

export default class MainLayout extends React.Component {
    render() {
        return (
            <div id="outer-container">
                {/* NavBar */}
                {this.props.children[0]}
                <div className="container" id="page-wrap">
                    {/* Main Content */}
                    {this.props.children[1]}
                </div>
                {/* Footer */}
                {this.props.children[2]}
            </div>
        )
    }
}