import React, { useState,useRef,useEffect, Fragment } from 'react'
import NET from 'vanta/dist/vanta.net.min';

const VantaNet = () => {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
        setVantaEffect(NET({
            el: myRef.current
        }))
        }
        return () => {
        if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (
        <Fragment>
            <div ref={myRef}>
                <h1 style={{color:"white"}}>Hello Alien</h1>
            </div>
        </Fragment>
    )
}

export default VantaNet
