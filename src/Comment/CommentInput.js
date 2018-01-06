import React from 'react'
import  {Card, Input, Icon, Button} from 'antd'
import PropTypes from 'prop-types'
const {TextArea} = Input
export default class CommentInput extends React.Component{
    static propTypes = {
        logout:PropTypes.func
    }
    constructor() {
        super()
        this.state={
            nickName: '',
            content: ''
        }
    }
    componentDidMount() {
        this.text.focus()
    }
    handleNickName(e) {
        this.setState({
            nickName: e.target.value
        })
    }
    handleComment(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit(props) {
        this.props.onSubmit({
            nickName: this.state.nickName,
            content: this.state.content
        })
        this.setState({
            content: ''
        })
        this.p.focus()
    }
    handleClear() {
        this.setState({
            nickName: '',
            content: ''
        }) 
        this.text.focus()
    }
    render() {
        return (
        <Card title="Comment app" extra={<a onClick={this.props.logout}>logout</a>}>
                <div className="input-name">
                    <span className="name">nickName:</span>
                    <Input ref={(text) => this.text = text} value={this.state.nickName} onChange={this.handleNickName.bind(this)} style={{width:'280px', marginLeft: '20px'}} placeholder="Enter your username" 
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                </div>
                <div className="input-textarea">
                    <span className="comment">comment:</span>
                    <TextArea ref={(p) => this.p = p} value={this.state.content} onChange={this.handleComment.bind(this)} style={{marginTop: '10px'}} rows={4}/>
                </div>
                <div style={{marginTop: '10px', float: 'right'}}>
                    <Button type="default" onClick={this.handleClear.bind(this)}>清空</Button>
                    <Button onClick={this.handleSubmit.bind(this)} style={{marginLeft: '10px'}} type="primary">提交</Button>
                </div>
            </Card>
        )
    }
}