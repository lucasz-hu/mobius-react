import React from "react";
import DeleteBOM from "./DeleteBOM";

class BomItemRow extends React.Component {
    /*This component contains everything in the table's row*/
    constructor(props) {
        super(props);
        this.state = {
            showItem: true,
            bomItem: this.props.item,
        };
        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem() {
        this.setState({
            showItem: false,
        });
    }

    render() {
        /*Renders out buttons and contents of bom item passed in */
        return (
            <>
                {this.state.showItem ? (
                    <>
                        <td>
                            <DeleteBOM
                                id={this.state.bomItem.id}
                                bomId={this.state.bomItem.bomId}
                                url={this.props.url}
                                url_template={this.props.url_template}
                                parentMethod={this.toggleItem}
                            />
                        </td>
                        <td>{this.state.bomItem.bomId}</td>
                        <td>{this.state.bomItem.id}</td>
                        <td>{this.state.bomItem.item_unit_cost}</td>
                        <td>{this.state.bomItem.quantity}</td>
                        <td>
                            {this.state.bomItem.item_unit_cost *
                                this.state.bomItem.quantity}
                        </td>
                        <td>{this.state.bomItem.specific_part}</td>
                        <td>
                            {new Date(
                                this.state.bomItem.created_at * 1000
                            ).toLocaleString()}
                        </td>
                        <td>
                            {new Date(
                                this.state.bomItem.updated_at * 1000
                            ).toLocaleString()}
                        </td>
                    </>
                ) : null}
            </>
        );
    }
}

export default BomItemRow;
