import React, { useEffect, useState } from 'react'
import './ScrollToTop.css'
import { useWindowScroll } from 'react-use'

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visibility, setvisibility] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400)
            setvisibility(true)
        else
            setvisibility(false)
    }, [pageYOffset])

    if (!visibility) {
        return false;
    }

    const scrollTop = () => window.scrollTo({ top: 0 })

    return (
        <div className="scrollTop" onClick={scrollTop}>
            <i className="fa fa-chevron-up scroll-icon" aria-hidden="true"></i>
        </div>
    )
}

export default ScrollToTop
