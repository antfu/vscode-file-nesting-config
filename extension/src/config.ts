import type { WorkspaceConfiguration } from 'vscode'
import { ConfigurationTarget, workspace } from 'vscode'

export function getConfig<T = any>(key: string): T | undefined {
  return workspace
    .getConfiguration()
    .get<T>(key)
}

export async function setConfig(key: string, value: any, isGlobal = true) {
  // update value
  return await workspace
    .getConfiguration()
    .update(key, value, isGlobal)
}

type TargetMethod = keyof Exclude<ReturnType<WorkspaceConfiguration['inspect']>, undefined>

class Config {
  #section = 'explorer.fileNesting'
  private configTarget: ConfigurationTarget
  private targetMethod: TargetMethod

  constructor() {
    [this.targetMethod, this.configTarget] = this.#detectConfigTarget()
  }

  get<T = any>(key: string): T | undefined {
    return workspace.getConfiguration(this.#section).inspect(key)?.[this.targetMethod] as T
  }

  set(key: string, value: any) {
    return workspace.getConfiguration(this.#section).update(key, value, this.configTarget)
  }

  #detectConfigTarget(): [TargetMethod, ConfigurationTarget] {
    const _map = new Map<TargetMethod, ConfigurationTarget>([
      ['workspaceFolderValue', ConfigurationTarget.WorkspaceFolder],
      ['workspaceValue', ConfigurationTarget.Workspace],
      ['globalValue', ConfigurationTarget.Global],
    ])

    for (const [key, value] of _map) {
      if (workspace.getConfiguration(this.#section).inspect('enabled')?.[key] === true)
        return [key, value]
    }

    return ['globalValue', ConfigurationTarget.Global]
  }
}

export default Config
