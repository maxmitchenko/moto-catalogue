import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MotosList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            motos: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMotos().then(motos => {
            this.setState({
                motos: motos.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { motos, isLoading } = this.state
        console.log('TCL: MotosList -> render -> motos', motos)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Mark',
                accessor: 'mark',
                filterable: true,
            },
            {
                Header: 'Model',
                accessor: 'model',
                filterable: true,
            },
            {
                Header: 'Price',
                accessor: 'price',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!motos.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={motos}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default MotosList