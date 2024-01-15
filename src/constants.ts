import { Percent } from '@8bit-swap/sdk-core'
import JSBI from 'jsbi'


export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = {
  // June Socotra
  101003: '0x0D5eCAacDfD2BA156d2a70e31A3A9586fF6868c9',
}

export const INIT_CODE_HASH = '0xf8746a173fd4b69bc14e3a935c2ddcbc01e0b33dec3c5bd7233d06e68b1cc75b'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
