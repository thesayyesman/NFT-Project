import { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { ethers } from "ethers"

//Components
import { Login } from "./Components/Login"
import { Home } from "./Components/Home"
import { Header } from "./Components/Header"
import { Footer } from "./Components/Footer"
import { Register } from "./Components/Register"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

// ABIs
import nft from "./abi/nft.json"

function App() {
    const [currentForm, setCurrentForm] = useState("login")
    const onFormSwitch = "login"

    const toggleForm = (formName) => {
        setCurrentForm(formName)
    }

    const [registrations, setRegistrations] = useState([])
    const [registerAddress, setRegisterAddress] = useState(null)
    const [see, setSee] = useState("See Registrations")

    const [account, setAccount] = useState(null)
    const [provider, setProvider] = useState(null)
    const [contract, setContract] = useState(null)

    const loadBlockchainData = async () => {
        const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

        //Connect to Blockchain
        const provider = new ethers.BrowserProvider(window.ethereum)
        setProvider(provider)
        const network = await provider.getNetwork()
        console.log(network)

        //Connect to Smart Contract
        const contract = new ethers.Contract(contractAddress, nft, provider)
        setContract(contract)
    }

    const totalRegistrations = async () => {
        const signer = await provider.getSigner()

        // getDetails...
        let registrations = await contract.connect(signer).getDetails()
        setRegistrations(registrations)
        setRegisterAddress(signer.address)
        setSee(`Total Registrations : ${registrations.length}`)
        console.log(registrations.length)
    }

    useEffect(() => {
        loadBlockchainData()
    }, [])

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Home
                                totalRegistrations={totalRegistrations}
                                see={see}
                                registrations={registrations}
                                registerAddress={registerAddress}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/register"
                        element={
                            <Register
                                account={account}
                                contract={contract}
                                provider={provider}
                                setAccount={setAccount}
                                onFormSwitch={onFormSwitch}
                            />
                        }
                    />
                    <Route
                        exact
                        path="/login"
                        element={
                            <Login
                                account={account}
                                contract={contract}
                                provider={provider}
                                setAccount={setAccount}
                            />
                        }
                    />
                </Routes>
            </Router>

            <Footer />

            {/* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )} */}
        </div>
    )
}

export default App
