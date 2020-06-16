class Header extends React.Components {
    render() {
        return (
            <div>
                <h1>This is a header element</h1>
                <h3>This is a sub-header element</h3>
            </div>
        );
    }
}

class Decision extends React.Components {
    render() {
        return (
            <div>
                <h4>Thing should go there in decision application.</h4>
            </div>
        );
    }
}

class Options extends React.Components {
    render() {
        return (
            <div>
                <ol>
                    <li>This is list one</li>
                    <li>This is list two</li>
                    <li>This is list three</li>
                    <li>This is list four</li>
                    <li>This is list five</li>
                </ol>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Decision />
        <Options />
    </div>
);

React.render(jsx, document.getElementById('appRoot'));
