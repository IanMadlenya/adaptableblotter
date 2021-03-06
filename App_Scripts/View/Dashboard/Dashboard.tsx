﻿import * as React from "react";
import { connect } from 'react-redux';
import * as Redux from "redux";
import { Navbar, Nav, Panel, Button, Glyphicon, OverlayTrigger, ButtonToolbar, Tooltip, NavItem } from 'react-bootstrap';
import { StrategyViewPopupProps } from '../Components/SharedProps/StrategyViewPopupProps'
import { EntitlementsState, DashboardState } from '../../Redux/ActionsReducers/Interface/IState';
import { AdaptableDashboardViewFactory, AdaptableDashboardPermanentToolbarFactory } from '../AdaptableViewFactory'
import { AdaptableBlotterState } from '../../Redux/Store/Interface/IAdaptableStore'
import { DefaultAdaptableBlotterOptions } from "../../Core/DefaultAdaptableBlotterOptions";
import * as GeneralConstants from '../../Core/Constants/GeneralConstants'
import * as StrategyIds from '../../Core/Constants/StrategyIds'
import * as DashboardRedux from '../../Redux/ActionsReducers/DashboardRedux'
import { HomeToolbarControl } from '../Home/HomeToolbarControl'
import { IAdaptableBlotter } from "../../Core/Interface/IAdaptableBlotter";


interface DashboardComponentProps extends StrategyViewPopupProps<DashboardComponent> {
    DashboardState: DashboardState
    EntitlementsState: EntitlementsState
    AdaptableBlotter: IAdaptableBlotter
    onClick: (action: Redux.Action) => Redux.Action
    onSetDashboardMinimised: (isMinimised: boolean) => DashboardRedux.DashboardSetIsMinimisedAction
}

class DashboardComponent extends React.Component<DashboardComponentProps, {}> {

    render() {

      let optionsBlotterName: string =this.props.AdaptableBlotter.BlotterOptions.blotterId;
        let blotterName: string = (optionsBlotterName == GeneralConstants.USER_NAME) ? "Blotter " : optionsBlotterName;
        let showBlotterName: string = "Show " + blotterName + " Toolbars"
        let visibleDashboardControls = this.props.DashboardState.DashboardFunctionToolbars//.filter(dc => dc.IsVisible);
        let visibleDashboardElements = visibleDashboardControls.map((control, idx) => {
            //here we use the strategy id but if we start to have multiple dashboard control per strategy (which I doubt)
            //we'll need to use the name or something else
            let dashboardControl = AdaptableDashboardViewFactory.get(control);
            if (dashboardControl) {
                let isReadOnly = this.props.EntitlementsState.FunctionEntitlements.findIndex(x => x.FunctionName == control && x.AccessLevel == "ReadOnly") > -1
                let dashboardElememt = React.createElement(dashboardControl, { AdaptableBlotter: this.props.AdaptableBlotter, IsReadOnly: isReadOnly });
                return <Nav key={control} style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }} >
                    {dashboardElememt}
                </Nav>
            }
            else {
                console.error("Cannot find Dashboard Control for " + control)
            }
        })

        let homeToolbar = AdaptableDashboardPermanentToolbarFactory.get(StrategyIds.HomeStrategyId)
        let homeToolbarElement = <Nav key={"home"} style={{ marginRight: "5px", marginTop: "3px", marginBottom: "3px" }} >
            {React.createElement(homeToolbar, {AdaptableBlotter: this.props.AdaptableBlotter})}
        </Nav>


        return <div className="adaptable_blotter_style_base">
            <div className="no_margin_style">
                {this.props.DashboardState.IsDashboardMinimised ?

                    <ButtonToolbar bsSize={"small"} bsStyle={"primary"} className="no_padding_no_margin_style" >
                        <OverlayTrigger overlay={<Tooltip id="tooltipShowButton">{showBlotterName} </Tooltip>}>
                            <Button bsSize={"small"} bsStyle={"primary"} onClick={() => this.props.onSetDashboardMinimised(false)}>
                                {blotterName} <Glyphicon glyph={"chevron-down"} />
                            </Button>
                        </OverlayTrigger>
                    </ButtonToolbar> :
                    <Navbar key={"mainnavbar"} fluid style={{ zoom: this.props.DashboardState.DashboardZoom }}>
                        <div className="adaptable_blotter_style_dashboard_base" >
                            <div className="no_margin_style">
                                {homeToolbarElement}
                                {visibleDashboardElements}
                            </div>
                        </div>
                    </Navbar>
                }
            </div>
        </div>
    }


}

function mapStateToProps(state: AdaptableBlotterState, ownProps: any) {
    return {
        DashboardState: state.Dashboard,
        EntitlementsState: state.Entitlements,
    };
}

function mapDispatchToProps(dispatch: Redux.Dispatch<AdaptableBlotterState>) {
    return {
        onClick: (action: Redux.Action) => dispatch(action),
        onSetDashboardMinimised: (isMinimised: boolean) => dispatch(DashboardRedux.DashboardSetIsMinimised(isMinimised)),

    };
}

export let Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);

