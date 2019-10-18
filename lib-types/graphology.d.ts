interface Graphology {
  addDirectedEdge(source: any, target: any, attributes?: any): any

  addDirectedEdgeWithKey(
    edge: any,
    source: any,
    target: any,
    attributes?: any
  ): any

  addEdge(source: any, target: any, attributes?: any): any

  addEdgeWithKey(edge: any, source: any, target: any, attributes?: any): any

  addNode(node: any, attributes?: any): any

  addUndirectedEdge(source: any, target: any, attributes?: any): any

  addUndirectedEdgeWithKey(
    edge: any,
    source: any,
    target: any,
    attributes?: any
  ): any

  adjacency(): any

  clear(): void

  clearEdges(): void

  clearIndex(): any

  copy(): any

  degree(node: any, ...args: any[]): any

  directed(edge: any): any

  directedDegree(node: any, ...args: any[]): any

  directedEdge(source: any, target: any): any

  directedEdgeEntries(source: any, target: any, ...args: any[]): any

  directedEdges(source: any, target: any, ...args: any[]): any

  directedNeighborEntries(node: any): any

  directedNeighbors(node: any, ...args: any[]): any

  dropEdge(edge: any, ...args: any[]): any

  dropNode(node: any): void

  edge(source: any, target: any): any

  edgeEntries(source: any, target: any, ...args: any[]): any

  edges(source: any, target: any, ...args: any[]): any

  emptyCopy(): any

  export(): any

  exportEdge(edge: any): any

  exportNode(node: any): any

  extremities(edge: any): any

  forEach(callback: any): void

  forEachDirectedEdge(
    source: any,
    target: any,
    callback: any,
    ...args: any[]
  ): any

  forEachDirectedNeighbor(node: any, callback: any): void

  forEachEdge(source: any, target: any, callback: any, ...args: any[]): any

  forEachInEdge(source: any, target: any, callback: any, ...args: any[]): any

  forEachInNeighbor(node: any, callback: any): void

  forEachInboundEdge(
    source: any,
    target: any,
    callback: any,
    ...args: any[]
  ): any

  forEachInboundNeighbor(node: any, callback: any): void

  forEachNeighbor(node: any, callback: any): void

  forEachNode(callback: any): void

  forEachOutEdge(source: any, target: any, callback: any, ...args: any[]): any

  forEachOutNeighbor(node: any, callback: any): void

  forEachOutboundEdge(
    source: any,
    target: any,
    callback: any,
    ...args: any[]
  ): any

  forEachOutboundNeighbor(node: any, callback: any): void

  forEachUndirectedEdge(
    source: any,
    target: any,
    callback: any,
    ...args: any[]
  ): any

  forEachUndirectedNeighbor(node: any, callback: any): void

  getAttribute(name: any): any

  getAttributes(): any

  getDirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  getDirectedEdgeAttributes(element: any, ...args: any[]): any

  getEdgeAttribute(element: any, name: any, ...args: any[]): any

  getEdgeAttributes(element: any, ...args: any[]): any

  getNodeAttribute(node: any, name: any): any

  getNodeAttributes(node: any): any

  getUndirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  getUndirectedEdgeAttributes(element: any, ...args: any[]): any

  hasAttribute(name: any): any

  hasDirectedEdge(source: any, target: any, ...args: any[]): any

  hasDirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  hasEdge(source: any, target: any, ...args: any[]): any

  hasEdgeAttribute(element: any, name: any, ...args: any[]): any

  hasNode(node: any): any

  hasNodeAttribute(node: any, name: any): any

  hasUndirectedEdge(source: any, target: any, ...args: any[]): any

  hasUndirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  import(data: any, ...args: any[]): any

  importEdge(data: any, ...args: any[]): any

  importNode(data: any, ...args: any[]): any

  inDegree(node: any, ...args: any[]): any

  inEdgeEntries(source: any, target: any, ...args: any[]): any

  inEdges(source: any, target: any, ...args: any[]): any

  inNeighborEntries(node: any): any

  inNeighbors(node: any, ...args: any[]): any

  inboundEdgeEntries(source: any, target: any, ...args: any[]): any

  inboundEdges(source: any, target: any, ...args: any[]): any

  inboundNeighborEntries(node: any): any

  inboundNeighbors(node: any, ...args: any[]): any

  inspect(): any

  mergeAttributes(attributes: any): any

  mergeDirectedEdge(source: any, target: any, attributes: any): any

  mergeDirectedEdgeAttributes(
    element: any,
    attributes: any,
    ...args: any[]
  ): any

  mergeDirectedEdgeWithKey(
    edge: any,
    source: any,
    target: any,
    attributes: any
  ): any

  mergeEdge(source: any, target: any, attributes: any): any

  mergeEdgeAttributes(element: any, attributes: any, ...args: any[]): any

  mergeEdgeWithKey(edge: any, source: any, target: any, attributes: any): any

  mergeNode(node: any, attributes: any): any

  mergeNodeAttributes(node: any, attributes: any): any

  mergeUndirectedEdge(source: any, target: any, attributes: any): any

  mergeUndirectedEdgeAttributes(
    element: any,
    attributes: any,
    ...args: any[]
  ): any

  mergeUndirectedEdgeWithKey(
    edge: any,
    source: any,
    target: any,
    attributes: any
  ): any

  neighborEntries(node: any): any

  neighbors(node: any, ...args: any[]): any

  nodeEntries(): any

  nodes(): any

  opposite(node: any, edge: any): any

  outDegree(node: any, ...args: any[]): any

  outEdgeEntries(source: any, target: any, ...args: any[]): any

  outEdges(source: any, target: any, ...args: any[]): any

  outNeighborEntries(node: any): any

  outNeighbors(node: any, ...args: any[]): any

  outboundEdgeEntries(source: any, target: any, ...args: any[]): any

  outboundEdges(source: any, target: any, ...args: any[]): any

  outboundNeighborEntries(node: any): any

  outboundNeighbors(node: any, ...args: any[]): any

  removeAttribute(name: any): any

  removeDirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  removeEdgeAttribute(element: any, name: any, ...args: any[]): any

  removeNodeAttribute(node: any, name: any): any

  removeUndirectedEdgeAttribute(element: any, name: any, ...args: any[]): any

  replaceAttributes(attributes: any): any

  replaceDirectedEdgeAttributes(
    element: any,
    attributes: any,
    ...args: any[]
  ): any

  replaceEdgeAttributes(element: any, attributes: any, ...args: any[]): any

  replaceNodeAttributes(node: any, attributes: any): any

  replaceUndirectedEdgeAttributes(
    element: any,
    attributes: any,
    ...args: any[]
  ): any

  selfLoop(edge: any): any

  setAttribute(name: any, value: any): any

  setDirectedEdgeAttribute(
    element: any,
    name: any,
    value: any,
    ...args: any[]
  ): any

  setEdgeAttribute(element: any, name: any, value: any, ...args: any[]): any

  setNodeAttribute(node: any, name: any, value: any, ...args: any[]): any

  setUndirectedEdgeAttribute(
    element: any,
    name: any,
    value: any,
    ...args: any[]
  ): any

  source(edge: any): any

  target(edge: any): any

  toJSON(): any

  toString(): any

  undirected(edge: any): any

  undirectedDegree(node: any, ...args: any[]): any

  undirectedEdge(source: any, target: any): any

  undirectedEdgeEntries(source: any, target: any, ...args: any[]): any

  undirectedEdges(source: any, target: any, ...args: any[]): any

  undirectedNeighborEntries(node: any): any

  undirectedNeighbors(node: any, ...args: any[]): any

  updateAttribute(name: any, updater: any): any

  updateDirectedEdgeAttribute(
    element: any,
    name: any,
    updater: any,
    ...args: any[]
  ): any

  updateEdgeAttribute(
    element: any,
    name: any,
    updater: any,
    ...args: any[]
  ): any

  updateNodeAttribute(node: any, name: any, updater: any, ...args: any[]): any

  updateUndirectedEdgeAttribute(
    element: any,
    name: any,
    updater: any,
    ...args: any[]
  ): any

  upgradeToMixed(): any

  upgradeToMulti(): any
}
