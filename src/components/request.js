import React from 'react';
import PrettyPrint from './prettyprint';

class Request extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            body: '',
        };
    }

    // { "id": 2 }
    handleSubmit = (e) => {
        e.preventDefault();

        if (!isJsonString(this.state.body)) {
            this.setState({ data: 'The json string is invalid' });
            return;
        }

        const obj = JSON.parse(this.state.body);
        const id = obj.id;

        fetch('https://jsonplaceholder.typicode.com/todos/' + id)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    data: json,
                });
            });
    };

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            // body: e.target.value
            [name]: value,
        });
    };

    render() {
        return (
            <div className="request-wrap">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="body">
                            <h2>Request Body</h2>
                        </label>
                        <textarea
                            id="body"
                            className="form-control"
                            rows="6"
                            cols="50"
                            name="body"
                            value={this.state.body}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-enablehr">
                        Send Request
                    </button>
                </form>

                <div className="mt-4">
                    <h2>Response</h2>
                    {this.state.data && (
                        <div>
                            <PrettyPrint jsonObj={this.state.data}></PrettyPrint>
                            <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const isJsonString = (str) => {
    try {
        const o = JSON.parse(str);
        // Handle non-exception-throwing cases: neither JSON.parse(false) or JSON.parse(1234) throw errors
        // but JSON.parse(null) returns null, and typeof null === "object", so we have to check for that too.
        if (o && typeof o === 'object') {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }
};

export default Request;
