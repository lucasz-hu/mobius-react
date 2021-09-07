import React from "react";

class BOMHeader extends React.Component {
    /* Renders out table heading, which includes heading and bom ID*/
    render() {
        return (
            <>
                <tr>
                    <th>BOM: {this.props.id}</th>
                </tr>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">bomId</th>
                    <th scope="col">id</th>
                    <th scope="col">Item Unit Cost</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total Cost</th>
                    <th scope="col">Specific Part</th>
                    <th scope="col">Created at</th>
                    <th scope="col">Updated at</th>
                </tr>
            </>
        );
    }
}

export default BOMHeader;
