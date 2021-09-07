import React from "react";
import BOMItems from "./components/BOMItems";
import BOMHeader from "./components/BOMHeader";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            bomList: [],
            bomItems: [],
            url: "https://6137036b8700c50017ef573d.mockapi.io/api/v1/bom/", //be sure to include a trailing /
            url_template: "/bomitem/",
        };
    }

    componentDidMount() {
        /*Grabs all the BOM ID's and places it into this.state.bomList*/
        fetch(this.state.url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then((data) => {
                this.setState({ bomList: data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        /* Renders a table for every item in this.state.bomList.
      BomHeader component is table's heading, which includes column headings and bom id of table
      BomItems is the actual bom items being rendered. 
      Also includes a check if bomID table has any bomItems in it as to not render an empty table*/
        return (
            <>
                {this.state.bomList.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.length !== 0 ? (
                                <table
                                    className="table table-striped table-hover"
                                    key={item.id}
                                >
                                    <thead>
                                        <BOMHeader id={item.id} />
                                    </thead>
                                    <tbody>
                                        <BOMItems
                                            bomId={item.id}
                                            url={this.state.url}
                                            url_template={
                                                this.state.url_template
                                            }
                                        />
                                    </tbody>
                                </table>
                            ) : (
                                <div key={index}></div>
                            )}
                        </div>
                    );
                })}
            </>
        );
    }
}

export default App;
