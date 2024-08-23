import React from 'react'

const Dash = () => {
  return (
    <div className="dash">
                <p>My Dashboard.</p>
                <h1>This is the dashboard after login.</h1>
                <div>
                    <Link to="/dashboard" className="dash">Dashboard</Link>
                </div>
            </div>
  )
}

export default Dash