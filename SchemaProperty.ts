import TypeDefinition from "./Type"

export default class SchemaProperty {
    private _alias = ''
    private _definition: TypeDefinition
    private _description = ''

    get typeDefinition(): TypeDefinition { return this._definition }
    set typeDefinition(def: TypeDefinition) { this._definition = def }
    get def() { return this._definition }
    get type(): string { return this._definition.type }

    get alias(): string { return this._alias }
    set alias(value: string) { this._alias = value }
    get key(): string { return this._alias}

    get description(): string { return this._description }
    set description(value: string) { this._description = value }
}
