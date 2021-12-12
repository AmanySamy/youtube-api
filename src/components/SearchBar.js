import { Paper, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function SearchBar(props) {
    const [SearchValue, setSearchValue] = useState('')
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmitForm(SearchValue);
    }
    function handleChange(e) { setSearchValue(e.target.value) }
    return (
        <div>
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="search..." onChange={handleChange} />
                </form>
            </Paper>
        </div>
    )
}

