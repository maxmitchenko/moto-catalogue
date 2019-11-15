import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MotosInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mark: '',
            model: '',
            price: '',
        }
    }

    handleChangeInputMark = async event => {
        const mark = event.target.value
        this.setState({ mark })
    }

    handleChangeInputModel = async event => {
        const model = event.target.validity.valid
            ? event.target.value
            : this.state.model

        this.setState({ model })
    }

    handleChangeInputPrice = async event => {
        const price = event.target.value
        this.setState({ price })
    }

    handleIncludeMoto = async () => {
        const { mark, model, price } = this.state
        // const arrayTime = time.split('/')
        const payload = { mark, model, price }

        await api.insertMoto(payload).then(res => {
            window.alert(`Motorcycle inserted successfully`)
            this.setState({
                mark: '',
                model: '',
                price: '',
            })
        })
    }

    render() {
        const { mark, model, price } = this.state
        return (
            <Wrapper>
                <Title>Add motorcycle</Title>

                <Label>Mark: </Label>
                <InputText
                    type="text"
                    value={mark}
                    onChange={this.handleChangeInputMark}
                />

                <Label>Model: </Label>
                <InputText
                    type="string"                    
                    lang="en-US"                    
                    value={model}
                    onChange={this.handleChangeInputModel}
                />

                <Label>Price: </Label>
                <InputText
                    type="number"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />

                <Button onClick={this.handleIncludeMoto}>Add</Button>
                <CancelButton href={'/motos/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MotosInsert