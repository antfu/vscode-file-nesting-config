export type Patterns = Record<string, string>

export function mergePatterns(upstream: Patterns = {}, custom: Patterns = {}): Patterns {
  const merged = { ...upstream }
  for (const [key, value] of Object.entries(custom)) {
    if (key !== '//' && !Object.hasOwn(merged, key))
      merged[key] = value
  }
  return merged
}
