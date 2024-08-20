import coverImg from '../assets/cover4.jpg';
import { NavLink } from "react-router-dom";
import partner1 from '../assets/Partneret/Albaelktrika.png'
import partner2 from '../assets/Partneret/alxedrix-logo.png'
import partner3 from '../assets/Partneret/ASGETO.png'
import partner4 from '../assets/Partneret/bechtel-enka-logo.png'
import partner5 from '../assets/Partneret/emona.jpg'
import partner6 from '../assets/Partneret/Jusaj.png'
import partner7 from '../assets/Partneret/siemens-logo-big.png'

function Home() {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: '1', position: 'relative', backgroundColor: '' }}>
                <div className='position-relative' style={{ width: '100%', height: '40em' }}>
                    {/* Triangle overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        borderLeft: '39em solid #3b5d4f',
                        borderRight: '20em solid  transparent',
                        borderBottom: '40em solid #3b5d4f',
                        borderTop: '0 solid transparent',
                        zIndex: 2
                    }}></div>
                    <div className="position-absolute text-start" style={{ zIndex: 2, top: '50%', transform: 'translateY(-50%)', color: '#ffffff', marginLeft: '10em' }}>
                        <h1 style={{
                            fontSize: '7em',
                            color: '#eb1c26',
                            fontFamily: 'MyCustomFont, "Ysabeau SC"',
                            fontOpticalSizing: 'auto',
                            fontWeight: '<weight>', // Replace <weight> with the desired font weight, e.g., 400 or 700
                            fontStyle: 'normal'
                        }}>
                            ABI-G
                        </h1>
                        <h4 style={{ fontSize: '2em', color: '#FAF9F6' }}>Shpedicion Ndërkombëtar</h4>
                        <h4 style={{ fontSize: '2em', color: '#FAF9F6' }}>Internationl Spedicion</h4>
                        <p style={{ width: '35em', color: '#ffffff' }}>Delivery Co. provides international express delivery of documents, parcels, and freight to more than 150 countries around the world within 1 to 7 business days.</p>
                        <NavLink to="/app/about" style={{ color: '#19282F', textDecoration: 'none' }}>
                            <button style={{ padding: '0.5em 1em', backgroundColor: '#ffbb27', color: '#19282F', border: 'none', borderRadius: '5px' }}>READ MORE</button>
                        </NavLink>
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

            <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '100%', height: '20em' }}>
                <h1>HEADLINE</h1>
                <p>TextTextTextText</p>
                <p>Adipisicing amet labore proident irure Lorem.</p>
            </div>

            <div className='d-flex flex-row w-100 justify-content-center align-items-center' style={{ height: '40em' }}>
                <div className='d-flex flex-column justify-content-center align-items-center w-50'>
                    <div className='d-flex flex-column justify-content-center align-items-start w-75' style={{ marginLeft: '11em' }}>
                        <h1>Pse Të Na Zgjidhni</h1>

                        <p>Sint exercitation minim in ea do quis dolor veniam dolore dolor qui magna. Voluptate est reprehenderit laborum fugiat laboris.</p>

                        <div className='d-flex flex-column justify-content-center align-items-start w-100'>
                            <div className='d-flex flex-row justify-content-start align-items-start w-100' >
                                <div className='d-flex flex-column justify-content-cemter align-items-start' style={{ width: '40%' }}>
                                    <img src={coverImg} alt="" style={{ width: '25px', height: '25px' }} />
                                    <p><b>Short Title</b></p>
                                    <p>Est dolor cupidatat excepteur irure sint elit velit esse occaecat deserunt nulla officia.</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-start' style={{ width: '40%' }}>
                                    <img src={coverImg} alt="" style={{ width: '25px', height: '25px' }} />
                                    <p><b>Short Title</b></p>
                                    <p>Nostrud exercitation sunt culpa aute sit excepteur laborum et exercitation.</p>
                                </div>
                            </div>

                            <div className='d-flex flex-row justify-content-start align-items-start w-100' >
                                <div className='d-flex flex-column justify-content-center align-items-start' style={{ width: '40%' }}>
                                    <img src={coverImg} alt="" style={{ width: '25px', height: '25px' }} />
                                    <p><b>Short Title</b></p>
                                    <p>Ea nisi laborum enim deserunt enim non adipisicing incididunt quis magna id dolore.</p>
                                </div>
                                <div className='d-flex flex-column justify-content-center align-items-start' style={{ width: '40%' }}>
                                    <img src={coverImg} alt="" style={{ width: '25px', height: '25px' }} />
                                    <p><b>Short Title</b></p>
                                    <p>Reprehenderit aute elit magna ipsum occaecat enim anim laboris nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-center w-50'>
                    <img src={coverImg} alt="" style={{ width: '70%', height: '35em', objectFit: 'cover', marginLeft: '0', marginRight: '7em' }} />
                </div>
            </div>

            <div className='d-flex flex-row w-100 justify-content-center align-items-center' style={{ height: '40em' }}>
                <div className='d-flex flex-column justify-content-center align-items-center w-50'>
                    <img src={coverImg} alt="" style={{ width: '70%', height: '35em', objectFit: 'cover', marginLeft: '9em' }} />
                </div>

                <div className='d-flex flex-column justify-content-center align-items-end w-50'>
                    <div className='d-flex flex-column justify-content-center align-items-end w-75' style={{ marginRight: '10em' }}>
                        <h1>Ne ju ndihmojmë të bëni...</h1>

                        <p style={{ textAlign: 'end' }}>Veniam aliqua enim magna in qui tempor labore non esse. Esse consectetur dolore minim aute. Cillum veniam ipsum aute aliquip. Aliqua veniam fugiat ipsum cupidatat ut anim enim qui cupidatat proident sunt. Adipisicing ea dolor exercitation dolore. Nostrud sit veniam et cupidatat ad proident non culpa anim. Lorem adipisicing et nisi dolor pariatur.</p>

                        <p style={{ textAlign: 'end' }}>Tempor enim officia ex Lorem nisi fugiat occaecat do nostrud anim. Ea quis officia ad et nostrud voluptate pariatur eu exercitation in proident deserunt minim. Nostrud fugiat Lorem non mollit. Ullamco sint qui sint deserunt. Esse et nostrud incididunt mollit. Quis laborum aliqua anim esse duis fugiat est elit in magna aliquip ex. Ut amet officia velit in enim pariatur minim aute nostrud cillum qui voluptate nisi sint.</p>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '25em', marginTop: '3em' }}>
                <img src={coverImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center gap-4' style={{width: '100%', height: '22em'}}>
                <p style={{fontSize: '3em'}}>Partnerët Tanë</p>

                <div className='d-flex justify-content-center align-items-center gap-4' style={{flexWrap: 'wrap', width: '90%'}}>
                    <img src={partner1} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner2} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner3} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner4} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner5} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner6} alt="" style={{width: '9em', objectFit: 'contain'}} />
                    <img src={partner7} alt="" style={{width: '9em', objectFit: 'contain'}} />
                </div>
            </div>
        </>
    );
}

export default Home