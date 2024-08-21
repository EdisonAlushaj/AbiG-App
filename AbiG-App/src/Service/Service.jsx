import coverImg from '../assets/cover4.jpg';
import icon1 from '../assets/Icon/truck_6424440.png'
import icon2 from '../assets/Icon/insurance-policy_12477023.png'
import icon3 from '../assets/Icon/insurance-policy_12477023.png'
import icon4 from '../assets/Icon/banking-service_15546762.png'
import icon5 from '../assets/Icon/package_969259.png'

function Service() {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: '1', position: 'relative', backgroundColor: '' }}>
                <div className='position-relative' style={{ width: '100%', height: '20em' }}>
                    {/* Triangle overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        borderLeft: '47em solid #3b5d4f',
                        borderRight: '10em solid  transparent',
                        borderBottom: '20em solid #3b5d4f',
                        borderTop: '0 solid transparent',
                        zIndex: 2
                    }}></div>
                    <div className="position-absolute text-start" style={{ zIndex: 2, top: '50%', transform: 'translateY(-50%)', color: '#ffffff', marginLeft: '10em', marginTop: '2em' }}>
                        <h1 style={{
                            fontSize: '7em',
                            color: '#FAF9F6',
                            fontFamily: 'MyCustomFont, "Ysabeau SC"',
                            fontOpticalSizing: 'auto',
                            fontWeight: '<weight>', // Replace <weight> with the desired font weight, e.g., 400 or 700
                            fontStyle: 'normal'
                        }}>
                            Shërbimet
                        </h1>
                    </div>
                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                        <img src={coverImg} alt="Cover Image" className="img-fluid w-100" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(211, 236, 167, 0.3)', // #D3ECA7 with 40% opacity
                            zIndex: 1
                        }}></div>
                    </div>
                </div>
            </div>

            <div className="d-flex flex-column align-items-center justify-content-center gap-5" style={{ width: '100%', height: '50em' }} >
                <div className='d-flex flex-row justify-content-center align-items-center w-100 gap-5'>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '25%', backgroundColor: '#ececec', height: '18em', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#3b5d4f'; e.currentTarget.style.color = '#FAF9F6';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#ececec'; e.currentTarget.style.color = 'initial';}}>
                        <img src={icon1} alt="" style={{ width: '2em', height: '2em' }} />
                        <p style={{margin: '1em'}}><b>Transportin Organizim</b></p>
                        <p style={{ width: '75%', textAlign: 'center' }}>Ne organizojmë dhe menaxhojmë me përpikëri të gjitha aspektet e udhëtimit të ngarkesës suaj, duke siguruar një transport të qetë dhe efikas nga origjina deri në destinacion.</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '25%', backgroundColor: '#ececec', height: '18em', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#3b5d4f'; e.currentTarget.style.color = '#FAF9F6';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#ececec'; e.currentTarget.style.color = 'initial';}}>
                        <img src={icon2} alt="" style={{ width: '2em', height: '2em' }} />
                        <p style={{margin: '1em'}}><b>⁠Zhdoganimin e Mallit </b></p>
                        <p style={{ width: '75%', textAlign: 'center' }}>Ne ofrojmë shërbime profesionale për zhdoganimin e mallrave, duke siguruar që procesi të jetë i shpejtë dhe pa komplikime.</p>
                    </div>
                </div>

                <div className='d-flex flex-row justify-content-center align-items-center w-100 gap-5' >
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '25%', backgroundColor: '#ececec', height: '18em', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#3b5d4f'; e.currentTarget.style.color = '#FAF9F6';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#ececec'; e.currentTarget.style.color = 'initial';}}>
                        <img src={icon3} alt="" style={{ width: '2em', height: '2em' }} />
                        <p style={{margin: '1em'}}><b>Logistiken e Mallit</b></p>
                        <p style={{ width: '75%', textAlign: 'center' }}>Ne ofrojmë zgjidhje të avancuara për logjistikën e mallrave, duke garantuar që çdo dërgesë të menaxhohet me efikasitet dhe saktësi.</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '25%', backgroundColor: '#ececec', height: '18em', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#3b5d4f'; e.currentTarget.style.color = '#FAF9F6';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#ececec'; e.currentTarget.style.color = 'initial';}}>
                        <img src={icon4} alt="" style={{ width: '2em', height: '2em' }} />
                        <p style={{margin: '1em'}}><b>Sherbimet Bankare</b></p>
                        <p style={{width: '75%', textAlign: 'center'}}>Ne ofrojmë shërbime bankare të sigurta dhe të besueshme për të mbështetur transaksionet tuaja financiare në mënyrë të lehtë dhe të sigurt.</p>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '25%', backgroundColor: '#ececec', height: '18em', transition: 'background-color 0.3s, color 0.3s' }} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#3b5d4f'; e.currentTarget.style.color = '#FAF9F6';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#ececec'; e.currentTarget.style.color = 'initial';}}>
                        <img src={icon5} alt="" style={{ width: '2em', height: '2em' }} />
                        <p style={{margin: '1em'}}><b>Pagesat e Mallit</b></p>
                        <p style={{width: '75%', textAlign: 'center'}}>Ne ofrojmë mënyra të sigurta dhe të përshtatshme për pagesat e mallrave, duke lehtësuar transaksionet tuaja financiare.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service