import coverImg from '../assets/cover3.jpg';


function Home() {
    return (
        <>
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ zIndex: '1', position: 'relative', backgroundColor: '' }}>
                <div className='position-relative' style={{ width: '100%', height: '40em' }}>
                    <div className="position-absolute text-start" style={{ zIndex: 1, top: '50%', transform: 'translateY(-50%)', color: '#ffffff', marginLeft: '10em' }}>
                        <h1 style={{ fontSize: '4em', width: '8em' }}>Abi G</h1>
                        <p className="lead">Shpedicion Ndërkombëzar - International Spedicion</p>
                        <p style={{ width: '35em' }}></p>
                    </div>
                    {/* Opsionale: Video ne background ne vend te Images */}
                    <img src={coverImg} alt="Cover Image" className="img-fluid w-100" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </>
    );
}

export default Home