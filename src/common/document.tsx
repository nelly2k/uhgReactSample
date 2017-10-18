import * as React from "react";
import { APP_NAME } from "../components"

interface IDocumentProps {
    title?: string;
}
export class Document extends React.Component<IDocumentProps>{

    componentDidMount() {
        const { title } = this.props;

        document.title = APP_NAME + (title ? ". " + title : "");
    }

    render(){
        return <div>{this.props.children}</div>;
    }

}
