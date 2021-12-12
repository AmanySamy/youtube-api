import { CircularProgress, Paper, Typography } from '@material-ui/core'
import React from 'react'

export default function VideoDetails({ video }) { 
    console.log(video)
    if (!video) return <CircularProgress />

    return (
        <React.Fragment>
            <Paper elevation={6} style={{height : '70%'}}>
                <iframe height='100%' width='100%' src={`https://www.youtube.com/embed/${video.id.videoId}`} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography></Typography>
            </Paper>

        </React.Fragment>
    )
}
