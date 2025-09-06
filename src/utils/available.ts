import { validateName } from '@ensdomains/ensjs/utils'

// OrbitID API base URL
const ORBITID_API_BASE = 'https://api.orbitid.domains'

// Helper function to check OrbitID domain availability via API
const checkOrbitIdAvailability = async (name: string, tld: string): Promise<boolean> => {
  try {
    validateName(`${name}.${tld}`)

    // For now, return a mock response since we don't have the actual OrbitID API endpoints
    // TODO: Replace with actual OrbitID API calls when available
    // const response = await fetch(`${ORBITID_API_BASE}/available?name=${name}&tld=${tld}`)
    // const data = await response.json()
    // return data.available

    // Mock implementation: simulate availability based on name length and common patterns
    if (name.length < 3) return false // Short names typically taken
    if (['test', 'admin', 'www', 'api', 'app'].includes(name.toLowerCase())) return false // Common reserved names

    // Simulate some randomness for demo purposes
    const hash = name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0)
      return a & a
    }, 0)

    return Math.abs(hash) % 3 !== 0 // ~66% availability rate for demo
  } catch (error) {
    console.warn(`Error checking availability for ${name}.${tld}:`, error)
    return false
  }
}

export const checkFoxAvailable = async (name: string): Promise<boolean> => {
  return checkOrbitIdAvailability(name, 'fox')
}

export const checkVvsAvailable = async (name: string): Promise<boolean> => {
  return checkOrbitIdAvailability(name, 'vvs')
}

export const checkCronosAvailable = async (name: string): Promise<boolean> => {
  return checkOrbitIdAvailability(name, 'cronos')
}
