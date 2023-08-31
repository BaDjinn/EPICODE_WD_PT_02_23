import React, {Component} from "react";

class ListItem extends Component {
    render() {
        const { text } = this.props
        return(
            <li>{text}</li>
        )
    }
}

export default ListItem;