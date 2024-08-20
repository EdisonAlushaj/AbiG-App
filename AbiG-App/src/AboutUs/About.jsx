import coverImg from '../assets/cover4.jpg';
import { NavLink } from "react-router-dom";
import image from '../assets/cover2.jpg'
import certificate1 from '../assets/Certificate/202312301434-1.png'
import certificate2 from '../assets/Certificate/202312301435-1-1.png'
import certificate3 from '../assets/Certificate/202312301435-1.png'
import certificate4 from '../assets/Certificate/202312301435-2-1.png'

function About() {
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
                            Rreth Nesh
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

            <div className='d-flex flex-row justify-content-center align-items-center' style={{ width: '100%', height: '45em' }}>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{ width: '45%', height: '100%', marginLeft: '5em' }}>
                    <h1>Historia Jonë</h1>

                    <p style={{ width: '70%' }}>Abi-G Shpedicion Ndërkombëtar është një kompani e suksesshme në logjistikë dhe transport mallrash, me bazë në Qyshk, Pejë, Republika e Kosovës. E themeluar në vitin 2003, Abi-G ka zgjeruar shërbimet e saj me zyra në qytetet kryesore të Kosovës, si Peja, Prishtina, Hani i Elezit, Mitrovica dhe Prizreni.</p>
                
                    <p style={{ width: '70%' }}>Ne ofrojmë zgjidhje të besueshme për transportin e mallrave, brenda dhe jashtë vendit. Me një ekip të përkushtuar dhe një rrjet të gjerë, ne sigurohemi që çdo ngarkesë të arrijë në destinacionin e saj me siguri dhe në kohë.</p>
                    
                    <p style={{ width: '70%' }}>Abi-G është i përkushtuar ndaj ekselencës dhe kënaqësisë së klientit, duke ofruar shërbime të personalizuara për nevojat e biznesit tuaj.</p>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-start' style={{ width: '50%', height: '100%'}} >
                    <img src={image} alt="" style={{width: '70%', height: '80%', objectFit: 'cover'}} />
                </div>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center gap-5' style={{ width: '100%', height: '60em'}} >
                <h1>Certifikata të Arritjes</h1>

                <div className='d-flex justify-content-center align-items-center gap-5' style={{width: '80%', flexWrap: 'wrap'}} >
                    <img src={certificate1} alt="Certifikata 1" style={{width: '30em', objectFit: 'contain'}}/>
                    <img src={certificate2} alt="Certifikata 2" style={{width: '30em', objectFit: 'contain'}}/>
                    <img src={certificate3} alt="Certifikata 3" style={{width: '30em', objectFit: 'contain'}}/>
                    <img src={certificate4} alt="Certifikata 4" style={{width: '30em', objectFit: 'contain'}}/>
                </div>
            </div>
        </>
    );
}

export default About