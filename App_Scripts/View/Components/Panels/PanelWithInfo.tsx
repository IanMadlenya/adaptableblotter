import * as React from "react";
import { PanelProps, Panel, Row, Col } from 'react-bootstrap';
import { AdaptablePopover } from './../../AdaptablePopover';
import { PopoverType } from '../../../Core/Enums';
import { AdaptableBlotterForm } from "../Forms/AdaptableBlotterForm";

export interface PanelWithInfoProps extends PanelProps {
    infoBody: any[]
}

export class PanelWithInfo extends React.Component<PanelWithInfoProps, {}> {
    render() {
        let className = "panel-with-info"
        if (this.props.className) {
            className += " " + this.props.className
        }

        let headerRow = <AdaptableBlotterForm inline>
            <Row style={{ display: "flex", alignItems: "center" }}>
                <Col xs={12}>
                    {this.props.header}
                    <span>
                        {' '}
                        <AdaptablePopover headerText="" bodyText={this.props.infoBody} popoverType={PopoverType.Info} />
                    </span>

                </Col>
            </Row>
        </AdaptableBlotterForm>;
        return <Panel header={headerRow} className={className} style={this.props.style} bsSize={this.props.bsSize} bsStyle={this.props.bsStyle}>
            {this.props.children}
        </Panel>;
    }
}

