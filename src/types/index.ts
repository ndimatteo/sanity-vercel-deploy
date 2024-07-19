import React from 'react'

export type StatusType =
  | 'LOADING'
  | 'ERROR'
  | 'INITIATED'
  | 'CANCELED'
  | 'READY'
  | 'BUILDING'
  | 'QUEUED'

export interface VercelTeam {
  [key: string]: unknown
  slug?: string
  name?: string
  id?: string
}

export interface DeploySchema {
  name: string
  url: string
  vercelProject: string
  vercelTeam: VercelTeam
  vercelToken: string
  disableDeleteAction: boolean
}

export interface SanityDeploySchema extends DeploySchema {
  _id: string
}

export interface Deployments {
  [key: string]: unknown
  uid: string
  created: string
  state: string
  url: string
  creator: {
    [key: string]: unknown
    username?: string
  }
  meta: {
    [key: string]: unknown
    githubCommitMessage: string
    githubCommitRef: string
  }
}

export interface DefaultDeploy {
  name: string
  projectName: string
  teamName: string
  url: string
  token: string
  disableDelete: boolean
}

export interface VercelDeployConfig {
  name?: string
  icon?: React.ComponentType
  title?: string
  defaultDeploy?: DefaultDeploy | Array<DefaultDeploy>
}
