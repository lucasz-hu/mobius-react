import React from "react";
import axios from "axios";

class DeleteBom extends React.Component {
    /*This component contains the delete button found on every table row*/
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            bomId: this.props.bomId,
            url: this.props.url,
            url_template: this.props.url_template,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        /*When button is clicked, sends a request to delete from api*/

        /*To prevent actually calling api and delete bomItem, comment out this block */
        axios
            .delete(
                `${this.state.url}${this.state.bomId}${this.state.url_template}${this.state.id}`
            )
            .catch((error) => {
                console.error(error);
            });

        this.props.parentMethod();
        console.log(this.state.showItem);
        // axios.put(
        //     `${this.state.url}${this.state.bomId}${this.state.url_template}${this.state.id}`,
        //     { quantity: 5 }
        // );
    }

    render() {
        return (
            <button
                onClick={this.onClick}
                type="button"
                className="btn btn-sm btn-danger"
            >
                Delete
            </button>
        );
    }
}

export default DeleteBom;
