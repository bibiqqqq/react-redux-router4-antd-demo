import React from 'react'
import {Row, Col, Avatar, Button} from 'antd'
import {connect} from 'react-redux'
import {login} from './store/auth.redux'
import PropTypes from 'prop-types'
import {Redirect} from 'react-router-dom'
class Auth extends React.Component{
    static propTypes = {
        auth: PropTypes.any,
        login: PropTypes.func
    }
    render() {
        const redirectToComment = (<Redirect to='/comment' />)
        return (
            <div className="auth">
                {this.props.auth.isAuth ? redirectToComment : null}
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <Avatar className="avatar" size="large" icon="user" />
                        <Button onClick={this.props.login} className="login" type="Primary" size="large">登入</Button>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({auth: state.auth})
const actionCreators = {login}
Auth = connect(mapStateToProps, actionCreators)(Auth)
export default Auth