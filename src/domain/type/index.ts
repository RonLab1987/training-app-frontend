export type EntityId = number | string
export type EntityValue = number | string | null

export interface TargetTrainingNodeCharacteristic {
  type: EntityId
  type_name: string
  value: EntityValue
}

// TargetTrainingNode
export interface TargetTrainingNode {
  id: EntityId
  parentId: EntityId | null
  type: EntityId
  type_name: string
  name: string | null
  characteristics: TargetTrainingNodeCharacteristic[]
}

// TrainingNodeGraph
export interface GraphEdge {
  parent: EntityId
  child: EntityId
}

export interface TargetTrainingNodeGraph {
  rootId: EntityId
  nodes: TargetTrainingNode[]
  edges: GraphEdge[]
}
