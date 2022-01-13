import './index.css'
const Login = () => {
  return (
    <div
      className='container border border-black mt-3 justify-content-center background'
      style={{ width: '50%', backgroundColor: '#dae0b4', borderRadius: '5px' }}
    >
      <center style={{ marginTop: '15px', marginBottom: '15px' }}>
        <img
          src='https://www.putatoe.com/img/logo.png'
          style={{ width: '200px', height: '160px', fontWeight: 'bold' }}
        />
        <h2
          style={{
            color: '#00838f'
          }}
        >
          Login or Signup
        </h2>
        <hr style={{ width: '32%', height: '3px', color: '#0c0d0c' }} />
        <div
          className='input-group mb-3'
          style={{
            width: '70%'
          }}
        >
          <span className='input-group-text' id='basic-addon1'>
            +91 |
          </span>
          <input
            type='text'
            className='form-control'
            placeholder='Mobile Number*'
            aria-describedby='basic-addon1'
          />
        </div>
        <div
          class='input-group mb-3'
          style={{
            width: '70%'
          }}
        >
          <input
            type='text'
            class='form-control'
            placeholder='Password'
            aria-describedby='basic-addon1'
          />
        </div>
        <h5 style={{ fontSize: 'bold', color: '#00838f', float: 'right' }}>
          Forgot Password?
        </h5>
        <p style={{ fontWeight: 'light', marginLeft: '13%', fontSize: '18px' }}>
          Information remain confidential
        </p>
        <div className='d-flex justify-content-center'>
          <input
            type='checkbox'
            style={{
              width: '20px',
              height: '17px',
              marginRight: '10px',
              fontSize: '20px'
            }}
          />
          <label
            style={{
              fontSize: '20px'
            }}
          >
            I agree to all the{' '}
            <u style={{ color: '#00838f' }}>Terms & Conditions</u>
          </label>
        </div>
        <button
          className='btn'
          style={{
            backgroundColor: '#00838f',
            marginTop: '30px',
            width: '60%',
            color: 'white',
            fontWeight: 'bold',
            height: '40px'
          }}
        >
          LOGIN
        </button>
        <div
          className='d-flex justify-content-center'
          style={{ marginTop: '5px' }}
        >
          <hr style={{ width: '24%', color: 'black' }} />
          <h4 style={{ marginRight: '10px', marginLeft: '10px' }}> OR </h4>
          <hr style={{ width: '24%', color: 'black' }} />
        </div>
        <button
          className='btn'
          style={{
            border: '1px solid black',
            marginTop: '30px',
            width: '60%',
            color: 'gray',
            fontWeight: 'bold',
            height: '40px'
          }}
        >
          Login with OTP
        </button>
        <div className='d-flex justify-content-center'>
          <hr style={{ width: '24%', color: 'black' }} />
          <h4 style={{ marginRight: '40px', marginLeft: '40px' }}> OR </h4>
          <hr style={{ width: '24%', color: 'black' }} />
        </div>
        <h4 style={{ marginRight: '10px', marginLeft: '10px' }}>
          Continue with
        </h4>
        <img
          src='https://blog.hubspot.com/hubfs/image8-2.jpg'
          style={{
            width: '100px',
            height: '80px',
            fontWeight: 'bold'
          }}
        />
        <p style={{ fontSize: '15px' }}>
          Not having and account?{' '}
          <span style={{ color: '#00838f' }}>Create Account</span>
        </p>
      </center>
    </div>
  )
}

export default Login
