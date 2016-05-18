import React from 'react';

class PageNotFound extends React.Component {

    render() {
        return (
            <div className="pagenotfound__container">
                <p>Woopsy, this page doesn't exist!</p>
                <p>I'll help you get <a href="/"> home</a>.</p>
            </div>
        );
    }
}


export default PageNotFound;