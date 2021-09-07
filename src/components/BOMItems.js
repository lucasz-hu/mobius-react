import React from "react";
import BomItemRow from "./BOMItemRow";

class BOMItems extends React.Component {
    /*This component contains the BOM items that need to be rendered within App's rendered table (aka: the body of the table) */
    constructor(props) {
        super(props);
        this.state = {
            bomItems: [],
            bomId: this.props.bomId,
            url_template: this.props.url_template,
            url: this.props.url,
        };
    }

    /*Fetches BOM items to be rendered by calling API with bomID passed in and stores it in this.state.bomItems*/
    componentDidMount() {
        fetch(`${this.state.url}${this.state.bomId}${this.state.url_template}`)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((bomItemData) => {
                this.setState({
                    bomItems: bomItemData,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        /*Renders out table row by row with each item in this.state.bomItems */
        return (
            <>
                {this.state.bomItems.map((items, index) => {
                    return (
                        <tr key={items.id}>
                            <BomItemRow
                                item={items}
                                url={this.state.url}
                                url_template={this.state.url_template}
                            />
                        </tr>
                    );
                })}
            </>
        );
    }
}

export default BOMItems;
