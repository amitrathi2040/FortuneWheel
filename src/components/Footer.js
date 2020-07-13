import React from "react";
import styled from 'styled-components';
import {Home} from '@styled-icons/fa-solid/Home';
import {GitHub} from '@styled-icons/fa-brands/Github';

const OrangeHome =styled(Home)`
    color: #FF7502;
    vertical-align: sub;
`;

const Container = styled.footer`
    background: #222124;
    border-top: 1px solid #F7F7F5;
    display: flex;
    padding: 3.2375rem 0;
    text-align: center;
`;

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    color: #F0CCAA;
`;

function Footer() {
    return (
        <Container>
            <Wrapper>Stay <OrangeHome size="24" /> Stay Safe.</Wrapper>                      
        </Container>
    );
}

export default Footer;