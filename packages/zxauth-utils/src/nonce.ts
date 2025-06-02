
const nonces: Record<string, string> = {}

/**
 * Generate a nonce (random hex string)
 * @param walletAddress - Ethereum wallet address
 * @returns nonce
 */
export function generateNonce(walletAddress: string): string {
  const nonce = crypto.getRandomValues(new Uint8Array(16)).reduce((acc, val) => acc + val.toString(16).padStart(2, '0'), '') 
  nonces[walletAddress.toLowerCase()] = nonce
  return nonce
}

/**
 * Get existing nonce (if any)
 */
export function getNonce(walletAddress: string): string | undefined {
  return nonces[walletAddress.toLowerCase()]
}

/**
 * Verify nonce and clear it if matched
 */
export function verifyNonce(walletAddress: string, inputNonce: string): boolean {
  const expected = nonces[walletAddress.toLowerCase()]
  const isValid = expected === inputNonce
  if (isValid) {
    delete nonces[walletAddress.toLowerCase()]
  }
  return isValid
}
