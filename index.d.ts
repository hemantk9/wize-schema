export interface WizeColumn {
    name?: string,
    displayName?: string,
    isAvailable?: boolean,
    letterCase: string,
    type: string,
    trim: boolean,
    enum: string[],
    required: boolean,
    unique: boolean,
    index: boolean,
    fieldName?: string,
    length?: number,
    default: Object,
    ref?: string,
    readRoles?: string[],
    createRoles?: string[],
    updateRoles?: string[],
    deleteRoles?: string[],
    definedBy?: string[]
}
interface WizeRelation {
    type: string,
    schemaName: string
}
export interface WizeSchema { 
    name: string,
    tableName: string,
    columns: WizeColumn[],
    projectName: string,
    userName: string,
    createdAt: number,
    lastUpdateAt: number,
    groups: Object[],
    dataSource: string,
    relationships: WizeRelation[],
    isSystemDefined: boolean,
    versioning: boolean,
    certification: boolean,
    primaryKeys: string[],
    readRoles: string[],
    createRoles: string[],
    updateRoles: string[],
    deleteRoles: string[]
}