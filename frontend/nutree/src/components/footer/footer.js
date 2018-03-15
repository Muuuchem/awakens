import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="App-footer">
                <div className="App-disclaimer">
                    Information and statements regarding dietary supplements have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease.
                </div>
                <GreetingContainer />
            </header>
        );
    }
}

export default Header;
