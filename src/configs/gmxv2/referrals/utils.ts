import { ethers } from 'ethers'

import { MAX_REFERRAL_CODE_LENGTH } from '../../gmx/tokens'

export function decodeReferralCode(hexCode?: string) {
  if (!hexCode || hexCode === ethers.constants.HashZero) return ''
  try {
    return ethers.utils.parseBytes32String(hexCode)
  } catch (ex) {
    let code = ''
    hexCode = hexCode.substring(2)
    for (let i = 0; i < 32; i++) {
      code += String.fromCharCode(parseInt(hexCode.substring(i * 2, i * 2 + 2), 16))
    }
    return code.trim()
  }
}

export function encodeReferralCode(code: string) {
  const final = code.replace(/[^\w_]/g, '') // replace everything other than numbers, string  and underscor to ''
  if (final.length > MAX_REFERRAL_CODE_LENGTH) {
    return ethers.constants.HashZero
  }
  return ethers.utils.formatBytes32String(final)
}
