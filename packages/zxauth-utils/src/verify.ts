// packages/zxauth-utils/src/verify.ts

import { ethers } from 'ethers'

/**
 * Verify a signed Ethereum message
 * @param address Wallet address claimed by the user
 * @param message The message that was signed (e.g. SIWE message or raw nonce)
 * @param signature The signature returned by the wallet
 * @returns true if valid
 */
export function verifySignature(address: string, message: string, signature: string): boolean {
  try {
    const recoveredAddress = ethers.verifyMessage(message, signature)
    return recoveredAddress.toLowerCase() === address.toLowerCase()
  } catch (err) {
    return false
  }
}
