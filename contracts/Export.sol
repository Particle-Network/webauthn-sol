// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./WebAuthn.sol";

contract Export {
    function verify(bytes calldata challenge, bool requireUV, WebAuthn.WebAuthnAuth calldata webAuthnAuth, uint256 x, uint256 y) external view returns (bool) {
        return WebAuthn.verify(challenge, requireUV, webAuthnAuth, x, y);
    }
}