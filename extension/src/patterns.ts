export type Patterns = Record<string, string>

export function mergePatterns(upstream: Patterns = {}, custom: Patterns = {}): Patterns {
  return { ...upstream, ...custom }
}
