import React from 'react'
import styled from 'styled-components'

import {
    Route,
    Switch,
    Redirect,
    BrowserRouter
} from "react-router-dom";

import Navbar from '../pages/gui/Navbar'
import Main from './HomePage';
import Service from './ServicePage'
import PromoDetail from '../pages/PromotionBuy'
import ContextContainer from '../components/contextContainer';
import WebpaySuccess from '../pages/Webpay-ok';
import WebpayCancel from '../pages/Webpay-cancel';
import WebpayError from '../pages/Webpay-error';

function RouterApp() {


    return (
        <ContextContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/servicio/:id" component={Service} />
                    <Route exact path="/promocion/:id" component={PromoDetail} />
                    <Route exact path="/webpay-success" component={WebpaySuccess} />
                    <Route exact path="/webpay-cancel" component={WebpayCancel} />
                    <Route exact path="/webpay-error" component={WebpayError} />
                </Switch>
            </BrowserRouter>
        </ContextContainer>
    )
}

export default RouterApp
