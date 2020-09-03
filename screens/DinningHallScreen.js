import * as React from 'react';
import { Menu } from "../components/Menu";
import { getDatabase } from "../model/data";
import { View } from 'react-native';
import Covel from './Covel';
import DeNeve from './DeNeve';
import BPlate from './BPlate';
import Feast from './Feast';

export default class DiningHallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: {} };
    }

    updateData = (data) => {
        const json = data.toJSON();
        const a = Object.keys(json).map(key => json[key]);
        this.setState({ data: a.filter(item => item.location === this.props.route.name && item.time === "dinner") });
        this.forceUpdate();
    }

    componentDidMount = () => {
        getDatabase().ref("/menus").on("value", this.updateData);
    }

    render = () => {
        if (this.props.route.name === "Covel") {
            return (<Covel><Menu data={this.state.data} /></Covel>)
        } else if (this.props.route.name === "De Neve") {
            return (<DeNeve><Menu data={this.state.data} /></DeNeve>)
        } else if (this.props.route.name === "Feast") {
            return (<Feast><Menu data={this.state.data} /></Feast>)
        } else {
            return (<BPlate><Menu data={this.state.data} /></BPlate>)
        }
    }
}