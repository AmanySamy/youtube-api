import { Grid } from '@material-ui/core';
import { useState } from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoDetails, VideoList } from './components';


function App() {
  const [Videos, setVideos] = useState([])
  const [SelectedVideo, setSelectedVideo] = useState(null)
  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 50,
        key: 'AIzaSyAJp4vUcNV0oWeejp_rYDSr-Hkq1z6xBZo',
        q: searchTerm,

      }
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])

  }
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            {/* Search BAr  */}
            <SearchBar onSubmitForm={handleSubmit} />

          </Grid>
          <Grid item xs={8}>
            {/* Video Details  */}
            <VideoDetails video={SelectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            {/* Video List  */}
            <VideoList videos={ Videos}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
