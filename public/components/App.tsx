import * as React from 'react';

interface IProps {
    name:String
}

class Hello extends React.Component <IProps, any>{
    render(){
        return (<h1>Hello {this.props.name}! </h1>);
    }
}
export default Hello;