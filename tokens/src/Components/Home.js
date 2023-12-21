import React from "react"
import "../CSS/Home.css"
import { useState } from "react"

export const Home = ({ totalRegistrations, see, registrations, registerAddress }) => {
    const [clickCount, setClickCount] = useState(0)

    const mint = () => {
        setClickCount((prevClickCount) => prevClickCount + 1)

        // Check if the clickCount is a multiple of 6-10
        if (clickCount > 0 && clickCount % getRandomInt(6, 10) === 0) {
            alert("NFT Minted Successfully...")
        }
    }

    // Function to get a random integer between min and max (inclusive)
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <>
            <div className="development">
                <h2 className="h2"> NFTs, explained</h2>
            </div>
            <img
                className="imgg"
                src="https://www.antiersolutions.com/wp-content/uploads/2022/08/nft.jpg"
                alt="Photo"
            />

            <button className="mint" onClick={mint}>
                Mint tokens
            </button>

            <h3> What is an NFT? What does NFT stand for?</h3>

            <p className="p">
                <b>NFT stands for - Non-fungible token.</b> <br />
                That doesn’t make it any clearer. Right, sorry. “Non-fungible” more or less means
                that it’s unique and can’t be replaced with something else. For example, a bitcoin
                is fungible — trade one for another bitcoin, and you’ll have exactly the same thing.
                A one-of-a-kind trading card, however, is non-fungible. If you traded it for a
                different card, you’d have something completely different. You gave up a Squirtle,
                and got a 1909 T206 Honus Wagner, which StadiumTalk calls “the Mona Lisa of baseball
                cards.” (I’ll take their word for it.)
            </p>

            <p className="p">
                <b>How do NFTs work?</b> <br />
                At a very high level, most NFTs are part of the Ethereum blockchain, though other
                blockchains have implemented their own version of NFTs. Ethereum is a
                cryptocurrency, like bitcoin or dogecoin, but its blockchain also keeps track of
                who’s holding and trading NFTs.
            </p>

            <p className="p">
                <b> How do you pronounce NFT?</b> <br />
                Almost everyone spells it out, saying “en eff tee.” The brave call them “nefts.” The
                enlightened have never had the word cross their lips.
            </p>
            <hr />

            <img
                className="img-opensea"
                src="https://images.ctfassets.net/2chiqpnroeav/3dBkfQqRZtmBvZ1S2GfPM0/33e47d81cf2fa86691f389e6173ba35d/article8688-nft-boom-apes-opensea-to-13bn-valuation.jpg?fm=avif&w=1536"
                alt="Opensea_Image"
            />

            <button type="button" onClick={totalRegistrations} className="seeBotton">
                <b>{see}</b>
            </button>

            <div className="container-fluid">
                <table>
                    <tbody>
                        {/* <tr className="row_heading">
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Address</th>
                        </tr> */}
                        {registrations.map((memo, index) => {
                            return (
                                <tr key={index}>
                                    <td className="td_name">{memo.name}</td>

                                    <td className="td_email">{memo.email}</td>
                                    <td className="td_mobile">{registerAddress}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
