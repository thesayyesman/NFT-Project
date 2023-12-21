import React, { useState } from "react"
import "../CSS/components.css"

export const Login = ({ account, provider, contract, setAccount, onFormSwitch }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email)
    }

    const connectHandler = async () => {
        const account = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        // const account = ethers.utils.getAddress(accounts[0])
        window.ethereum.on("accountsChanged", () => {
            window.location.reload()
        })
        setAccount(account)
    }
    return (
        <div className="top">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                    />
                    <label htmlFor="password">password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                    />
                    <button type="submit" onClick={connectHandler}>
                        Log In with MetaMask
                    </button>
                </form>
                <button className="link-btn" onClick={() => onFormSwitch("register")}>
                    Don't have an account? Register here.
                </button>
            </div>
        </div>
    )
}
