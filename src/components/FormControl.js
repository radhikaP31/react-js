import React, { Component } from 'react'

export class FormControl extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username:event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Form Component Example</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            value={this.username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea
                            value={this.comments}
                            onChange={this.handleCommentsChange}
                        />
                    </div>
                    <div>
                        <label>Topic</label>
                        <select
                            value={this.topic}
                            onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default FormControl
