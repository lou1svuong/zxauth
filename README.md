# zxauth

**zxauth** is a minimal authentication SDK that enables **Sign-in with Ethereum** using just a wallet.
It's framework-agnostic, backend-optional, and can be integrated with **BetterAuth** or self-hosted logic.

---

## Tech Stack

* **EVM-compatible wallets** (e.g. MetaMask)
* **EIP-4361** (Sign-In With Ethereum)
* **EIP-191** (Signed messages)
* [**ethers.js**](https://docs.ethers.org/) & [**siwe**](https://login.xyz/)
* Optional integration with [**betterauth**](https://www.better-auth.com/)

---

## 🧩 How it works

```mermaid
sequenceDiagram
  participant Client
  participant Server

  Client->>Server: GET /nonce/:wallet_address
  Server-->>Client: { nonce }

  Client->>Client: sign(nonce) → signature
  Client->>Server: POST /verify
  Note right of Client: Body:{ wallet_address, signature }

  Server->>Server: validate signature with nonce
  alt Signature valid
    Server-->>Client: { token (session, access, refresh, ...) }
  else Signature invalid
    Server-->>Client: 401 Unauthorized
  end
```
