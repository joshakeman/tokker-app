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
        // const baseUrl = 'https://us-central1-tokker.cloudfunctions.net/api'
        // axios.get('https://us-central1-tokker.cloudfunctions.net/api/toks')
        //     .then(res => {
        //         this.setState({
        //             toks: res.data
        //         })
        //     })
        //     .catch(err => console.log(err))

        this.setState({
            toks: 
                [
                {
                    "tokId": "MgyFLw0U5otU1F83ZOCy",
                    "body": "Hello hello hello",
                    "userHandle": "user3",
                    "createdAt": "2019-08-11T19:13:07.990Z",
                    "commentCount": 0,
                    "likeCount": 0,
                    "userImage": "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4057996.jpg"
                },
                {
                    "tokId": "MgyFLw0U5otU1F83ZOCy",
                    "body": "Hello hello hello",
                    "userHandle": "user3",
                    "createdAt": "2019-08-11T19:13:07.990Z",
                    "commentCount": 0,
                    "likeCount": 0,
                    "userImage": "https://st2.depositphotos.com/3662505/6313/i/950/depositphotos_63136927-stock-photo-man-with-gun.jpg"
                },
            ] 
        })
    }

    render() {
        const { toks } = this.state

        let recentToksMarkup = toks  ? (
        toks.map(tok => <Tok key={tok.tokId} tok={tok} />)
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
