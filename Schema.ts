import SchemaProperty from './SchemaProperty.js'
import TYPE from './Type.js'

class Schema {
    type = ''
    properties = {}
    required: string[]

    add(alias:string, type: TYPE) {
        this.properties[alias] = type
        this.required.push(alias)
    }

    remove(alias: string) {
        const result = {}
        for (const [key, value] of Object.entries(this.properties)) {
            if (key !== alias) result[key] = value
        }

        this.properties = result
        this.required = this.required.filter(item => item !== alias )
    }
}

class ObjectSchema extends Schema {
    type = 'object'
}

class ArraySchema extends Schema {
    type = 'array'
}
