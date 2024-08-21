import coverImg from '../assets/cover4.jpg';

function Contact() {
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
                            Kontakti
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

            <div className='d-flex flex-row align-items-center' style={{ width: '100%', height: '27em', justifyContent: 'space-evenly' }}>
                <div className='d-flex flex-column justify-content-center align-items-start' style={{ fontSize: '1.3em' }}>
                    <p><b>Lokacioni</b></p>

                    <p style={{ margin: '0' }}>Qyshk - Pejë, Kosovë</p>
                    <p style={{ margin: '0' }}>Prishtinë, Kosovë</p>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-start' style={{ fontSize: '1.3em' }}>
                    <p><b>Numrat e Tel</b></p>

                    <p style={{ margin: '0' }}>00383(0)49 117 999</p>
                    <p style={{ margin: '0' }}>00383(0)49 200 092</p>
                </div>

                <div className='d-flex flex-column justify-content-center align-items-start' style={{ fontSize: '1.3em' }}>
                    <p><b>Email</b></p>

                    <p style={{ margin: '0' }}>info@abi-g.com</p>
                    <p></p>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d331.91460463472765!2d20.323176877850752!3d42.65667998983095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352fd8d17918801%3A0x9ee38a6256f54ba0!2sDevolli%20Corporation!5e1!3m2!1sen!2s!4v1724185215596!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </>
    );
}

export default Contact