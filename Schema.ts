import SchemaProperty from './SchemaProperty.js'
import TypeDefinition from './Type.js'
import { AJVKeywords as AJV } from './Keywords.js'

class Schema {
    // for outputting in typeof in place of '[Object Object]'
    protected static name: string
    protected definition: TypeDefinition
    private _properties = {}
    private _required: string[]
    private _keywords: string[]

    add(alias:string, type: TypeDefinition) {
        this._properties[alias] = type
        this._required.push(alias)
    }

    remove(alias: string) {
        const result = {}
        for (const [key, value] of Object.entries(this._properties)) {
            if (key !== alias) result[key] = value
        }

        this._properties = result
        this._required = this._required.filter(item => item !== alias )
    }

    toString(pretty: boolean){}

    /**
     * overrides the type so that when doing a type check it outputs as Schema instead of 'Object'
     */
    get typeof(){
        return 'Schema'
    }

    /**
     * @method toJSON
     *  returns the schema as an object literal
     */
    toJSON(){
        return {
            type: this.definition.type,
            properties: this._properties,
            required: this._required,
        }
    }

    get keywords() {return this._keywords}

    static schemify(){
    /**
     * @method 
     * 
     */
    }

    static parse(str:string){}

}

class ObjectSchema extends Schema {
    static name = 'Object Schema' // for outputting in typeof in place of '[Object Object]'
    definition = TypeDefinition.Object
}

class ArraySchema extends Schema {
    static name = 'Array Schema' // for outputting in typeof in place of '[Object Object]'
    definition = TypeDefinition.Array
}
