import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

export class home extends Component {
    state= {
        toks: null
    }

    componentDidMount(){
        axios.get('/toks')
            .then(res => {
                console.log(res.data)
                this.setState({
                    toks: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        const { toks } = this.state

        let recentToksMarkup = toks  ? (
        toks.map(tok => <p>{tok.body}</p>)
        ) : <p>Loading...</p>

        return (
        <Grid container spacing={2}>
            <Grid item sm={8} xs={12}>
                {recentToksMarkup}
            </Grid>
            <Grid item sm={4} xs={12}>
                <p>Profile...</p>
            </Grid>
        </Grid>
        )
    }
}

export default home
