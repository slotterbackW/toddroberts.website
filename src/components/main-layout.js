import React from 'react'

import './../styles/style.css'

/* MainLayout is a two-column layout with space for a navbar on the left,
the main content on the right, and a footer on the bottom */

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        {this.props.children[0]}
                    </div>
                    <div className="col-9">
                        {this.props.children[1]}
                    </div>
                </div>
                {this.props.children[2]}
            </div>
        )
    }
}