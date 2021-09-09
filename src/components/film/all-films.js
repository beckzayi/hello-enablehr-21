import React from 'react';
import GraphiQLEditor from '../../utils/graphiql/editor';
import queryString from './all-films-query';
import Options from '../option/options';
import SwaggerEditor from '../../utils/swagger-ui/editor';
import schema from '../../data/schema/film/all-films.json';

class Films extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphql: true, // query GraphQL API endpoint or REST API endpoint
        };
    }

    updateApiOption = (option) => {
        this.setState(() => ({
            graphql: option,
        }));
    };

    renderContent() {
        if (this.state.graphql) {
            return <GraphiQLEditor query={queryString} variables={null} />;
        } else {
            return <SwaggerEditor url="https://petstore.swagger.io/v2/swagger.json" />;
        }
    }

    renderOptions() {
        return <Options onOptionClick={this.updateApiOption} graphql={this.state.graphql} />;
    }

    renderSchema() {
        const elements = JSON.parse(JSON.stringify(schema, null));
        return (
            <table className="table col-md-6">
                <tbody>
                    {Object.keys(elements).map((key) => (
                        <tr key={key}>
                            <td style={{ fontWeight: 600 }}>{key}</td>
                            <td style={{ fontWeight: 300 }}>{elements[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <div className="mb-4">{this.renderSchema()}</div>
                <div className="mb-4">{this.renderOptions()}</div>
                <div>{this.renderContent()}</div>
            </div>
        );
    }
}

export default Films;
