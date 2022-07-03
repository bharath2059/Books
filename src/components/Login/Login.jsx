import "./Login.css";

const Login = () => {
    return (
        <div>
            <view className="login">
                <h1>Login</h1>
                <form>
                    <input type={'email'} placeholder={'Email'} />
                    <input type={'password'} placeholder={'password'} />
                    <button type={'submit'}>Login</button>
                </form>
                <br />
                <div>
                    <a href="#">Don't have an account?</a>
                </div>
                <br />
                <div>
                    <a href="#">Forgot password?</a>
                </div>
                <br/>
            </view>
        </div>
    );
}


export default Login;
