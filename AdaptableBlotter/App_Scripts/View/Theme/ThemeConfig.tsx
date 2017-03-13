/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import { Provider, connect } from 'react-redux';
import { Panel, Form, FormControl, ControlLabel, Col, FormGroup } from 'react-bootstrap';
import { AdaptableBlotterState } from '../../Redux/Store/Interface/IAdaptableStore'
import * as ThemeRedux from '../../Redux/ActionsReducers/ThemeRedux'
import { IStrategyViewPopupProps } from '../../Core/Interface/IStrategyView'
import { PanelWithButton } from '../PanelWithButton';
import { AdaptableBlotterForm } from '../AdaptableBlotterForm'


interface ThemeConfigProps extends IStrategyViewPopupProps<ThemeConfigComponent> {
    AvailableThemes: Array<string>;
    CurrentTheme: string;
    SelectTheme: (newTheme: string) => ThemeRedux.ThemeSelectAction;
}

class ThemeConfigComponent extends React.Component<ThemeConfigProps, {}> {
    render() {
        let infoBody: string = "Choose a theme to change the look & feel of the Adaptable Blotter screens.\n\n" +
            "Select 'none' if you prefer to upload your own custom theme or 'default' to use the standard Bootstrap theme."

  let optionThemes = this.props.AvailableThemes.map(x => {
            return <option value={x} key={x}>{x}</option>
        })
        return (
            <PanelWithButton headerText="Theme Picker" bsStyle="primary" glyphicon="leaf" infoBody={infoBody}>
                <AdaptableBlotterForm horizontal>
                    <FormGroup controlId="themepicker">
                        <Col xs={2} >
                            <ControlLabel >Current</ControlLabel>
                        </Col>
                        <Col xs={7}>
                            <FormControl componentClass="select" placeholder="select" value={this.props.CurrentTheme} onChange={(x) => this.onChangeTheme(x)} >
                                {optionThemes}
                            </FormControl>
                        </Col>
                    </FormGroup>
                </AdaptableBlotterForm>
            </PanelWithButton>
        );
    }

    onChangeTheme(event: React.FormEvent) {
        let e = event.target as HTMLInputElement;
        this.props.SelectTheme(e.value);
    }
}
function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        AvailableThemes: state.Theme.AvailableThemes,
        CurrentTheme: state.Theme.CurrentTheme
    };
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        SelectTheme: (newTheme: string) => dispatch(ThemeRedux.ThemeSelect(newTheme))
    };
}

export let ThemeConfig = connect(mapStateToProps, mapDispatchToProps)(ThemeConfigComponent);
