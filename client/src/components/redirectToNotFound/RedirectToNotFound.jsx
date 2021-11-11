import React from 'react'
import { Redirect } from "react-router-dom";

function RedirectToNotFound() {
    return (
        <Redirect to="/notfound" />
    )
}

export default RedirectToNotFound
