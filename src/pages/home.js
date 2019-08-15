import React, { Component } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'

import Tok from '../components/Tok'

export class home extends Component {
    state= {
        toks: null
    }

    componentDidMount(){

    /* !!!!!!!!!!!!!!!!! WARNING !!!!!!!!!!!!!!!!! */
    /* Every reload is another DB call to Firebase! */
        const baseUrl = 'https://us-central1-tokker.cloudfunctions.net/api'
        axios.get('https://us-central1-tokker.cloudfunctions.net/api/toks')
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
        toks.map(tok => <Tok tok={tok} />)
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
