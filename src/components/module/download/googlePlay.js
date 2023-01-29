import React from 'react'

const GooglePlay = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 200,
                cursor: 'pointer'
            }}
        >
            <img
                src='/assets/img/google-play.png'
                alt='google-play'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </div>
    )
}

export default GooglePlay