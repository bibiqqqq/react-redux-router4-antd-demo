import React from 'react'
import PropTypes from 'prop-types'
import {Card, Button} from 'antd'
export default class CommentList extends React.Component{
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    handleDeleteComment(index) {
        const comments = this.props.comments
        comments.splice(index, 1)
        this.setState({comments})
    }
    render() {
        return (
            <Card title="Comment List">
                {this.props.comments.map((comment, i) => (
                    <div className="list" key={i} >
                        <span className="list-name">{comment.nickName} :</span>
                        <span className="list-content">{comment.content}</span>
                        <Button shape="circle" icon="close" className="list-close" size="small" onClick={this.handleDeleteComment.bind(this)}></Button>
                    </div>
                ))}
            </Card>
        )
    }
}