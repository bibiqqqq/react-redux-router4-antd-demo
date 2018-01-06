import React from 'react'
import PropTypes from 'prop-types'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import {Row, Col} from 'antd'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logout} from '../store/auth.redux'
class Comment extends React.Component{
    static propTypes = {
        auth: PropTypes.any,
        logout: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            comments: [
                {nickName: 'Jerry', content: 'hahahah'},
                {nickName: 'kuqi', content: 'very good'},
                {nickName: 'Slice', content: 'hello world'}
            ]
        }
    }
    handleSubmit(comment) {
        const comments = this.state.comments
        comments.push(comment)
        this.setState({comments})
    }
    render() {
        const redirectToLogin = (<Redirect to='/login' />)
        const app = (
            <div>
                <Row>
                    <Col span={6}></Col>
                    <Col span={12}>
                        <CommentInput logout={this.props.logout} onSubmit={this.handleSubmit.bind(this)}/>
                        <CommentList comments={this.state.comments}/>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
        )
        return (
            <div>
                {this.props.auth.isAuth ? app : redirectToLogin}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({auth: state.auth})
const actionCreators = {logout}
Comment = connect(mapStateToProps, actionCreators)(Comment)
export default Comment