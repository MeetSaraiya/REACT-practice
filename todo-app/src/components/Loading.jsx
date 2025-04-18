import React from 'react'

import { CircularProgress } from '@mui/material';
export const Loading = ({isLoading}) => {
    return <>{isLoading ? (<CircularProgress />) : null}</>
}
/*

function demo({temp}){
return <> 
{temp ? (<Component/>>) : null}
</>
}

*/