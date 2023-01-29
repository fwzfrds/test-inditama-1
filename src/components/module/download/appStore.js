import React from 'react'

const AppStore = () => {
    return (
        <div
            style={{
                position: 'relative',
                width: 200,
                cursor: 'pointer'
            }}
        >
            <img
                src='/assets/img/app-store.png'
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

export default AppStore