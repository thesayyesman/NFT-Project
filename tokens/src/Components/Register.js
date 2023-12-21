import React, { useState } from "react"
import "../CSS/components.css"

export const Register = ({ account, provider, contract, setAccount, onFormSwitch }) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")

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

    const send = async () => {
        const signer = await provider.getSigner()
        console.log(signer)

        // const registerData = contract.interface.encodeFunctionData("register", [
        //     "John Doe", // Replace with the actual values
        //     "john@example.com",
        //     "password123",
        //     1234567890,
        // ])

        // Register...
        let transaction = await contract.connect(signer).register(name, email, pass, mobile)
        await transaction.wait()
        alert("Success !!")
    }

    return (
        <div className="top">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input
                        type="text"
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        placeholder="full Name"
                        required
                    />
                    <label htmlFor="email">email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email"
                        name="email"
                        required
                    />
                    <label htmlFor="password">password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="********"
                        id="password"
                        name="password"
                        required
                    />
                    <label htmlFor="email">Mob No.:</label>
                    <input
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        type="text"
                        placeholder="012-345-6789"
                        required
                        id="mobile"
                        name="mobile"
                    />

                    <button type="submit" onClick={connectHandler}>
                        Connect with MetaMask
                    </button>
                    {/* <button type="button" onClick={success}>
                        Click
                    </button> */}
                    <button type="button" onClick={send}>
                        Send
                    </button>
                </form>
                <button className="link-btn" onClick={() => onFormSwitch("login")}>
                    Already have an account? Login here.
                </button>
            </div>
        </div>
    )
}
