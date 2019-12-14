import React, { Component } from 'react'
import api from '../api'

class BooksInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            author: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputAuthor = async event => {
        const author = event.target.value

        this.setState({ author })
    }

    handleIncludeBook = async (event) => {
        event.preventDefault();
        const { title, author } = this.state
        const payload = { title, author }

        await api.insertBook(payload).then(res => {
            window.alert(`Book inserted successfully`)
            this.setState({
                title: '',
                author: '',
            })
        })
    }

    render() {
        const { title, author } = this.state
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <h2 className='m-4'>Add a book</h2>
                        <form className='ml-4 mr-4' onSubmit={this.handleIncludeBook}>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text"
                                    value={title}
                                    onChange={this.handleChangeInputTitle}
                                    className="form-control"
                                    placeholder="Enter title" />
                            </div>
                            <div className="form-group">
                                <label>Author</label>
                                <input type="text"
                                    value={author}
                                    onChange={this.handleChangeInputAuthor}
                                    className="form-control"
                                    placeholder="Enter author" />
                            </div>
                            <button type="submit" className="btn btn-primary mr-3">Submit</button>                            
                        </form>
                    </div>
                    <div className="col-md-1"></div>

                </div>
            </div>
        )
    }
}

export default BooksInsert