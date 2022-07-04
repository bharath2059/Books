import "./Signup.css";

const Signup = () => {
    return (
        <div className="signup" >
            <h2>Create An Account</h2>
            <form>
                <input type={'email'} placeholder={'Email'} />
                <input type={'password'} placeholder={'password'} />
                <input type={'password'} placeholder={'Confirm password'} />
                <button type={'submit'}>SignUp</button>
            </form>
            <br />
            <div>
                <a href="#">Already have an account?</a>
            </div>
            <br/>
        </div >
    );
};

export default Signup;