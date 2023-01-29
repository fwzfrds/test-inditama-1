import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../base/button/button'
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className="container navbar navbar-expand-lg bg-light">
            <div className={`${styles['navs-container']}`}>
                <Link className="navbar-brand" to="/">
                    <p className='text-primary m-0'>
                        Toko Ikan
                    </p>
                </Link>
                <div className={`${styles.navs}`} >
                    <div className={`${styles['nav-items']}`}>
                        <Link to="/" className="nav-link active" aria-current="page">
                            Beranda
                        </Link>
                        <Link className="nav-link" to="/">
                            Keunggulan
                        </Link>
                        <Link className="nav-link" to="/">
                            Fitur Aplikasi
                        </Link>
                        <Link className="nav-link" to="/">
                            Testimonial
                        </Link>
                    </div>
                </div>
                <div>
                    <Button>
                        Download
                    </Button>
                </div>


            </div>
        </nav>
    )
}

export default Navbar