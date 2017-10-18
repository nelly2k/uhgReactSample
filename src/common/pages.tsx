
import * as React from "react";
import { IChildrenProps, IActionProps, Container, Row, Col, ButtonPrimary, Button, H1, Icon, IconType, Left, Right } from "../common";


interface IWizardProps extends IChildrenProps {
    nextTitle?: string;
    onNext?: () => void,

    prevTitle?: string;
    onPrev?: () => void

    additionActions?: IActionProps[];

    title: string;
}

export const WizardPage = (props: IWizardProps) => <Container>

    <Row style={{ marginTop: "10%" }}>
        <Col sm="12"><H1>{props.title}</H1></Col>
    </Row>
    {props.children}
    <Row style={{ marginTop: "3em" }}>
        <Col sm="2">
            {props.onPrev && <Left>
                <ButtonPrimary onClick={props.onPrev}>
                    <Icon type={IconType.prev} color="white" size="18" />&nbsp;{props.prevTitle || "Previous"}
                </ButtonPrimary>
            </Left>}
        </Col>
        <Col sm="8">
            {props.additionActions && props.additionActions.map(act =>
                <Button key={act.title} onClick={act.onClick}>{act.title}
                    {act.icon && <Icon type={act.icon} color="white" size="18" />}
                </Button>
            )}
        </Col>
        <Col sm="2">
            {props.onNext && <Right>
                <ButtonPrimary onClick={props.onNext}>{props.nextTitle || "Next"}
                    <Icon type={IconType.next} color="white" size="18" />
                </ButtonPrimary>
            </Right>}
        </Col>
    </Row>
</Container>
