// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Client4} from 'mattermost-redux/client';

import ProfilePicture from 'components/profile_picture.jsx';

const WrapperDiv = styled.div`
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
    margin: 2em 0 1em;
    padding: 0;
`;

const HeaderDiv = styled.div`
    align-items: flex-start;
    background-color: #295EB9;
    display: flex;
    flex-direction: row;
    padding: 30px 20px 12px 30px;
    height: 92px;
`;

const BodyDiv = styled.div`
    padding: 20px 20px 20px 184px;
    background-color: #fff;
`;

const FooterDiv = styled.div`
    padding: 20px;
    background-color: #fff;
    border-top: solid 1px rgba(0,0,0,0.2);
`;

const UserInfo = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: normal;
    margin-left: 20px;
    padding: 0;
    align-self: flex-end;
`;

const Nickname = styled.span`
    opacity: .5;
`;

const Bullet = (props) => {
    if ((props.user.first_name || props.user.last_name) && props.user.nickname) {
        return (<span>{' • '}</span>);
    }
    return null;
};

const AdminUserCard = (props) => (
    <WrapperDiv>
        <HeaderDiv>
            <ProfilePicture
                src={Client4.getProfilePictureUrl(props.user.id, props.user.last_picture_update)}
                width='134'
                height='134'
                helperClass='admin-user-card'
                userId={props.user.id}
            />
            <UserInfo>
                <span>{props.user.first_name} {props.user.last_name}</span>
                <Bullet user={props.user}/>
                <Nickname>{props.user.nickname}</Nickname>
            </UserInfo>
        </HeaderDiv>
        <BodyDiv>
            {props.body}
        </BodyDiv>
        <FooterDiv>
            {props.footer}
        </FooterDiv>
    </WrapperDiv>
);

Bullet.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        nickname: PropTypes.string,
        last_picture_update: PropTypes.number,
    }),
};

AdminUserCard.propTypes = {
    user: PropTypes.shape({
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        nickname: PropTypes.string,
        last_picture_update: PropTypes.number,
        id: PropTypes.string,
    }),
    body: PropTypes.element,
    footer: PropTypes.element,
};

export default AdminUserCard;
