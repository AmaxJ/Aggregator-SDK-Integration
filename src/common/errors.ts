export const AEVO_ERRORS = ['Aevo credentials missing', 'headers not set'].map((e) => e.toLowerCase())
export const DYDX_ERRORS = ['dydx credentials not set', 'account could not be translated to cosmos'].map((e) =>
  e.toLowerCase()
)

export async function errorCatcher<T>(fn: () => Promise<T>): Promise<T | undefined> {
  try {
    return await fn()
  } catch (e: any) {
    switch (true) {
      case 'message' in e && AEVO_ERRORS.includes(e.message.toLowerCase()):
        console.error(`Aevo credentials missing: Doing Early return`)
        break
      case 'message' in e && DYDX_ERRORS.includes(e.message.toLowerCase()):
        console.error(`Dydx credentials missing: Doing Early return`)
        break
      case 'message' in e && e.message.toLowerCase().includes('cors'):
        console.error(`CORS error: Doing Early return`)
        break
      default:
        console.error(`unhandled error: `, { error: e })
    }
  }
}
