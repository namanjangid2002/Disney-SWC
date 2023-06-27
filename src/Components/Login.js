import React from "react";
import Banner from "./Login/Banner";
import styled from 'styled-components';
// import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
// import Home from "./Home";
const Login = (props)=>{
    return (
        <div>
            <Main>
                <Banner></Banner>
            </Main>
        </div>
    );

};

const Main = styled.main`
    width: auto;
    height: auto;
    overflow: auto;
    background-color: #040714;

`;

export default Login