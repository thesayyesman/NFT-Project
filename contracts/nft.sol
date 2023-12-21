// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract nft {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    struct Details {
        address sender;
        string name;
        string email;
        string password;
        uint256 mobile;
    }

    Details[] public enterDetails;

    function register(
        string calldata name,
        string calldata email,
        string calldata password,
        uint256 mobile
    ) public {
        enterDetails.push(Details(msg.sender, name, email, password, mobile));
    }

    function getDetails() public view returns (Details[] memory) {
        return enterDetails;
    }
}
